import { destroyCookie, parseCookies, setCookie } from "nookies";

import { useCallback, useMemo } from "react";

interface ICookieOptions {
  maxAge: number;
  secure: boolean;
  sameSite: string;
  path: string;
}

export interface ICookiePolicy {
  essential?: boolean | undefined;
  performance?: boolean;
  analytics?: boolean;
  [x: string]: boolean;
}

export const useCookie = () => {
  const policyKey = "Cyber Cookies"
  const defaultCookieOptions = useMemo(() => {
    return {
      maxAge: 30 * 24 * 60 * 60,
      secure: true,
      sameSite: "Strict",
      path: "/",
    };
  }, []);

  // Check storage if cookie is active
  const isActive = useCallback(
    (name: string, type?: string) => {
      if (type === policyKey) {
        const policyCookies = parseCookies()[type];

        if (policyCookies === "all") {
          return true;
        } else if (policyCookies === name) {
          return true;
        }
        return false;
      } else {
        const sessionCookies = parseCookies()[name];
        if (sessionCookies) {
          return true;
        } else {
          return false;
        }
      }
    },

    [policyKey],
  );

  // Set cookie policy | all | performance | analytics | essential
  const setPolicy = useCallback(
    (
      cookiesObj: ICookiePolicy,
      options: ICookieOptions = defaultCookieOptions,
    ) => {
      let cookies = "";
      if (cookiesObj.essential) {
        cookies = "essential";
      } else if (Object.values(cookiesObj).every((cookie) => cookie === true)) {
        cookies = "all";
      } else {
        for (const [key, value] of Object.entries(cookiesObj)) {
          if (value) {
            cookies += key;
          }
        }
      }

      return setCookie(null, policyKey, cookies, { ...options });
    },
    [defaultCookieOptions, policyKey],
  );

  // Add new cookie
  const addCookie = useCallback(
    (
      name: string,
      value: string,
      options: ICookieOptions = defaultCookieOptions,
    ) => {
      return setCookie(null, name, value, { ...options });
    },
    [defaultCookieOptions],
  );

  // Delete cookie from storage
  const deleteCookie = useCallback(
    (name) => {
      return destroyCookie(null, name, defaultCookieOptions);
    },
    [defaultCookieOptions],
  );

  return { addCookie, deleteCookie, isActive, setPolicy };
};
