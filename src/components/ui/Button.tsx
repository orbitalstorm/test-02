import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-3",
  }[size];

  const variantStyles = {
    primary:
      "bg-amber-500 hover:bg-amber-400 text-stone-950 border-b-4 border-amber-700 active:border-b-0",
    secondary:
      "bg-stone-700 hover:bg-stone-600 text-stone-100 border-b-4 border-stone-900 active:border-b-0",
    danger:
      "bg-rose-600 hover:bg-rose-500 text-white border-b-4 border-rose-800 active:border-b-0",
    outline:
      "bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-600 active:border-stone-500",
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
