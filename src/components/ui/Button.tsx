import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
} & (
  | { href: string; type?: never; disabled?: never; onClick?: never }
  | Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & { href?: never }
);

const baseStyles =
  "inline-flex items-center justify-center gap-[var(--btn-gap)] font-[var(--font-body)] text-[length:var(--btn-font-size)] font-[number:var(--btn-font-weight)] tracking-[var(--btn-letter-spacing)] uppercase rounded-[var(--btn-radius)] min-h-[var(--btn-min-height)] px-[var(--btn-padding-x)] py-[var(--btn-padding-y)] transition-[var(--btn-transition)] cursor-pointer select-none";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] hover:bg-[var(--btn-primary-hover-bg)] hover:text-[var(--btn-primary-hover-text)] hover:border-[var(--btn-primary-hover-border)] hover:-translate-y-px active:translate-y-0 active:bg-[var(--btn-primary-active-bg)] active:text-[var(--btn-primary-active-text)] disabled:bg-[var(--btn-primary-disabled-bg)] disabled:text-[var(--btn-primary-disabled-text)] disabled:border-[var(--btn-primary-disabled-border)] disabled:cursor-not-allowed disabled:transform-none",
  secondary:
    "bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] border border-[var(--btn-secondary-border)] hover:bg-[var(--btn-secondary-hover-bg)] hover:text-[var(--btn-secondary-hover-text)] hover:border-[var(--btn-secondary-hover-border)] hover:-translate-y-px active:translate-y-0 active:bg-[var(--btn-secondary-active-bg)] active:text-[var(--btn-secondary-active-text)] disabled:bg-[var(--btn-secondary-disabled-bg)] disabled:text-[var(--btn-secondary-disabled-text)] disabled:border-[var(--btn-secondary-disabled-border)] disabled:cursor-not-allowed disabled:transform-none",
  tertiary:
    "bg-[var(--btn-tertiary-bg)] text-[var(--btn-tertiary-text)] border border-transparent hover:bg-[var(--btn-tertiary-hover-bg)] hover:text-[var(--btn-tertiary-hover-text)] active:bg-[var(--btn-tertiary-active-bg)] active:text-[var(--btn-tertiary-active-text)] disabled:text-[var(--btn-tertiary-disabled-text)] disabled:cursor-not-allowed min-h-0 px-[var(--space-2)] py-[var(--space-1)]",
};

export function Button({ variant = "primary", children, className = "", fullWidth, ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & { href?: never };
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
