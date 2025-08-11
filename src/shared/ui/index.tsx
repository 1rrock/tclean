import React from "react";
import { cn } from "../utils";

export const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
);

export const Card = ({
  children,
  className = "",
  onClick
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <div
    className={cn("rounded-2xl border bg-white/70 backdrop-blur shadow-sm", className)}
    onClick={onClick}
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
  >
    {children}
  </div>
);

export const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-gray-700", className)}>
    {children}
  </span>
);

export const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a href={href} onClick={onClick} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
    {children}
  </a>
);

export const Section = ({
  id,
  children,
  className = ""
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={cn("scroll-mt-24", className)}>{children}</section>
);

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-colors";

  const variants = {
    primary: "bg-emerald-600 text-white shadow hover:bg-emerald-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
