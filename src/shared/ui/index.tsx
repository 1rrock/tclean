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
    className={cn("rounded-2xl border border-muted bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300", className)}
    onClick={onClick}
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
  >
    {children}
  </div>
);

export const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("inline-flex items-center rounded-full border border-primary bg-primary/10 px-3 py-1 text-xs font-medium text-primary", className)}>
    {children}
  </span>
);

export const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a href={href} onClick={onClick} className="text-sm font-medium text-accent hover:text-primary transition-colors duration-300">
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
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105";

  const variants = {
    primary: "bg-primary text-white shadow hover:bg-primary-dark",
    secondary: "bg-muted text-accent hover:bg-primary/10",
    outline: "border border-primary bg-white text-primary hover:bg-primary hover:text-white"
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
