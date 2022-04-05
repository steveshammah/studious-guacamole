import { Stack } from "@chakra-ui/react";
import "./card.css";

interface CardProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg" | "xl";
  content?: string;
  color?: string;
}

export const Card = ({
  primary = false,
  size = "sm",
  backgroundColor,
  color,
  content,

  ...props
}: CardProps) => {
  //   const mode = primary ? "card-sm" : "card-lg";
  return (
    <div style={{ backgroundColor, color }} className={`card card-${size}`}>
      {content}
    </div>
  );
};
