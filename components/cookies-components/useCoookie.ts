import { parseCookies, setCookie } from "nookies";
import { useCallback, useEffect } from "react";

// Hook for CRUD cookies settings
export const useCookie = () => {
  // Set default cookies on load
  const cookiesName = "Cyber Cookies";

  useEffect(() => {
    addCookie("default");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check storage if cookie is active
  const isActive = useCallback((type: string): boolean => {
    const sessionCookies: string = parseCookies()[cookiesName];

    if (sessionCookies.includes(type)) {
      return true;
    } else {
      return false;
    }
  }, []);

  // Generate a new string to write to storage
  const generateNew = useCallback(
    (type: string, status?: boolean): string => {
      let cookies = "default || ";

      switch (type) {
        case "all":
          cookies += "performance || analytics";
          return cookies;
        case "default":
          return cookies;
        case "performance":
          if (isActive("analytics")) {
            cookies += "performance || analytics";
          } else {
            cookies += type;
          }
          return cookies;
        case "analytics":
          if (isActive("performance")) {
            cookies += "performance || analytics";
          } else {
            cookies += type;
          }
          return cookies;
        default:
          return cookies;
      }
    },
    [isActive],
  );

  const addCookie = useCallback(
    (type: string) => {
      setCookie(null, cookiesName, generateNew(type), {
        maxAge: 30 * 24 * 60 * 60,
        secure: true,
        sameSite: "Strict",
        path: "/",
      });
    },
    [generateNew],
  );

  // Delete cookie from storage
  const deleteCookie = useCallback(
    (type: string) => {
      let updatedCookies = "default || ";

      if (type === "performance") {
        if (isActive("analytics")) {
          updatedCookies += "analytics";
        }
      } else if (type === "analytics") {
        if (isActive("performance")) {
          updatedCookies += "performance";
        }
      }
      return setCookie(null, cookiesName, updatedCookies, {
        maxAge: 30 * 24 * 60 * 60,
        secure: true,
        sameSite: "Strict",
        path: "/",
      });
    },
    [isActive],
  );

  return [addCookie, deleteCookie, isActive];
};
