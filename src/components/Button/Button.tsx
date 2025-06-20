import React from "react";

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
  shimmer?: boolean;
};

const Button = ({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  backgroundColor,
  onClick,
  shimmer = false,
}: ButtonProps) => {
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50",
  };

  const disabledStyles = "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60";

  const base =
    "relative rounded-md font-medium transition-all focus:outline-none overflow-hidden";

  const shimmerOverlay =
    shimmer && !disabled
      ? 'before:content-[""] before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:z-0'
      : "";

  const finalClass = [
    base,
    sizes[size],
    disabled ? disabledStyles : variants[variant],
    shimmerOverlay,
  ]
    .filter(Boolean)
    .join(" ");

  const bgStyle =
    backgroundColor && !disabled
      ? { backgroundColor }
      : undefined;

  return (
    <button
      className={finalClass}
      disabled={disabled}
      style={bgStyle}
      onClick={onClick}
    >
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default Button;
