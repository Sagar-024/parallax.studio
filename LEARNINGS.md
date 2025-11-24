# 🎓 Agency Project - Learning Notes

> **Created:** 2025-11-24  
> **Purpose:** Document key learnings, patterns, and best practices from building the agency website

---

## 📚 Table of Contents

1. [Next.js Basics](#nextjs-basics)
2. [Styling & Dark Mode](#styling--dark-mode)
3. [Component Architecture](#component-architecture)
4. [CSS Variables & Theming](#css-variables--theming)
5. [Common Errors & Fixes](#common-errors--fixes)
6. [Best Practices](#best-practices)

---

## 🚀 Next.js Basics

### Importing the Link Component

**❌ Common Error:**

```
Cannot find name 'Link'. Did you mean 'link'?
```

**✅ Solution:**

```tsx
import Link from "next/link";

// Usage
<Link href="/path">Text</Link>;
```

**📝 Key Points:**

- `Link` is a special Next.js component for client-side navigation
- Must be imported from `"next/link"`
- Provides better performance than regular `<a>` tags
- Enables prefetching and smooth page transitions

---

## 🎨 Styling & Dark Mode

### Two Approaches to Dark Mode

#### ❌ Approach 1: Manual `dark:` Classes (More Verbose)

```tsx
<div className="border-neutral-200 dark:border-neutral-800">
  <p className="text-neutral-600 dark:text-neutral-300">Text</p>
</div>
```

- You write `dark:` variants everywhere
- More code to maintain
- Easy to miss classes

#### ✅ Approach 2: CSS Variables (Recommended)

```tsx
<div className="border-border">
  <p className="text-foreground">Text</p>
</div>
```

- Automatically adapts to theme
- Cleaner, more maintainable
- Single source of truth

**💡 When to Use Each:**

- Use **CSS Variables** for semantic colors (background, foreground, border, etc.)
- Use **`dark:` classes** only when you need specific non-semantic colors (e.g., `text-neutral-700`)

### CSS Variables Structure

Located in: `app/globals.css`

```css
:root {
  /* Light mode colors */
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --border: oklch(0.922 0 0);
  /* ... more variables */
}

.dark {
  /* Dark mode overrides */
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --border: oklch(1 0 0 / 10%);
  /* ... more variables */
}

@theme inline {
  /* Make them available in Tailwind */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-border: var(--border);
}
```

**How It Works:**

1. Define variables in `:root` (light mode)
2. Override in `.dark` class (dark mode)
3. ThemeProvider adds/removes `.dark` class on `<html>`
4. Colors automatically switch!

---

## 🧩 Component Architecture

### Container Component Pattern

**Purpose:** Consistent max-width and padding across the site

```tsx
// components/Shared/Container.tsx
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};
```

**Key Features:**

- `max-w-7xl` - Maximum width of 1280px
- `mx-auto` - Centers the container
- `px-4 sm:px-6 lg:px-8` - Responsive horizontal padding
- `className` prop - Allows additional custom classes

**Usage:**

```tsx
<Container>
  <YourContent />
</Container>

// With custom classes
<Container className="py-8">
  <YourContent />
</Container>
```

### Dynamic Heading Component

```tsx
// Heading.tsx
export const Heading = ({
  className,
  as = "h2",
  children,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "text-2xl md:text-4xl lg:text-6xl tracking-tight font-display",
        className
      )}
    >
      {children}
    </Tag>
  );
};
```

**Features:**

- Dynamic tag (`h1` or `h2`)
- Responsive text sizes
- Uses display font (Manrope)
- Extensible via className

**Usage:**

```tsx
<Heading as="h1">Page Title</Heading>
<Heading as="h2" className="text-primary">Section Title</Heading>
```

---

## 🎯 CSS Variables & Theming

### Adding Custom CSS Variables

**Example: Adding `shadow-brand`**

**Step 1:** Add to `:root` (light mode)

```css
:root {
  --shadow-brand: -82px 54px 27px 0px rgba(0, 0, 0, 0.01), -52px 35px 25px 0px
      rgba(0, 0, 0, 0.04), -29px 19px 21px 0px rgba(0, 0, 0, 0.15), -13px 9px
      16px 0px rgba(0, 0, 0, 0.25), -3px 2px 9px 0px rgba(0, 0, 0, 0.29);
}
```

**Step 2:** Override in `.dark`

```css
.dark {
  --shadow-brand: -82px 54px 27px 0px rgba(255, 255, 255, 0.01);
  /* ... use white/light colors for dark mode */
}
```

**Step 3:** Add to `@theme inline` (for Tailwind)

```css
@theme inline {
  --shadow-brand: var(--shadow-brand);
}
```

**Usage:**

```tsx
// Direct CSS
<div style={{ boxShadow: 'var(--shadow-brand)' }}>

// Or via className (if configured in Tailwind)
<Button className="shadow-brand">
```

---

## 🐛 Common Errors & Fixes

### 1. SVG Not Changing Color in Dark Mode

**❌ Problem:**

```tsx
<svg>
  <path fill="#313131" /> {/* Hardcoded color! */}
</svg>
```

**✅ Solution:**

```tsx
<svg className="text-foreground">
  <path fill="currentColor" /> {/* Inherits from text color */}
</svg>
```

**How it works:**

- `currentColor` is a CSS keyword that uses the current text color
- Combined with `text-foreground` className, it adapts to theme

### 2. Focus Rings/Borders on Buttons

**❌ Problem:**
Button shows blue outline/ring when clicked

**✅ Solution:**
Remove focus-visible styles from button base:

```tsx
// In button.tsx
const buttonVariants = cva(
  "... outline-none focus:outline-none focus-visible:outline-none"
  // Remove: focus-visible:ring-ring focus-visible:border-ring
);
```

**For Dropdown Items:**

```tsx
className = "... outline-none focus:outline-none cursor-pointer";
```

### 3. `cn` Utility Function

**What is it?**

```tsx
import { cn } from "@/lib/utils";

// Combines multiple class names and handles conflicts
<div className={cn("base-classes", conditionalClass, className)} />;
```

**Why use it?**

- Merges multiple className strings
- Handles conditional classes
- Resolves Tailwind conflicts (e.g., if both `text-sm` and `text-lg` are present, keeps the last one)

**Installation** (if not present):

```bash
npm install clsx tailwind-merge
```

```tsx
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## ✅ Best Practices

### 1. Component Organization

```
app/
├── components/
│   ├── Shared/          # Reusable components
│   │   ├── Container.tsx
│   │   ├── Navbar/
│   │   │   ├── page.tsx
│   │   │   └── logo.tsx
│   │   └── Theme/
│   │       └── ModeToggle.tsx
│   └── ui/              # shadcn/ui components
│       ├── button.tsx
│       └── dropdown-menu.tsx
```

### 2. Named Exports vs Default Exports

**Named Exports** (Recommended for components):

```tsx
export const Navbar = () => { ... }
export const Logo = () => { ... }

// Import
import { Navbar, Logo } from "./components";
```

**Default Exports:**

```tsx
export default Navbar;

// Import
import Navbar from "./Navbar";
```

**💡 Tip:** Use named exports for better IDE autocomplete and refactoring

### 3. Component Props Pattern

```tsx
interface ComponentProps {
  children: React.ReactNode; // Required
  className?: string; // Optional
  variant?: "default" | "primary"; // Optional with type
}

export const Component = ({
  children,
  className,
  variant = "default", // Default value
}: ComponentProps) => {
  // ...
};
```

### 4. Styling Patterns

**Responsive Design:**

```tsx
// Mobile first approach
className = "text-sm md:text-base lg:text-lg";
//         mobile   tablet       desktop
```

**Hover States:**

```tsx
className = "hover:bg-accent hover:text-accent-foreground transition-colors";
//         hover effect       smooth transition
```

**Dark Mode (when needed):**

```tsx
className = "bg-white dark:bg-black text-black dark:text-white";
```

### 5. Accessibility

**Always include:**

- Semantic HTML (`<nav>`, `<header>`, `<main>`)
- Alt text for images
- ARIA labels for icon-only buttons
  ```tsx
  <Button>
    <Icon />
    <span className="sr-only">Toggle theme</span>
  </Button>
  ```

---

## 🎨 Complete Navbar Example

```tsx
import React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "../Container";
import { ModeToggle } from "../Theme/ModeToggle";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Products", href: "/products" },
    { name: "Socials", href: "/socials" },
  ];

  return (
    <div className="border-b border-border">
      <Container className="py-4 flex justify-between items-center">
        <Logo />

        <nav>
          <ul className="flex gap-x-6">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="default">Sign up</Button>
          </Link>
          <ModeToggle />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
```

---

## 📂 Import Paths & File Structure

### Understanding Import Paths in Next.js

**Example:**

```tsx
import Hero from "./components/Shared/Hero/page";
```

**Path Breakdown:**

- `./` - Start from current directory
- `components/Shared/Hero/` - Navigate through folders
- `page` - Import from `page.tsx` (extension optional)

**Key Points:**

- `.tsx` extension can be omitted in imports
- `page.tsx` is a special Next.js filename (represents routes/pages)
- Relative imports use `./` (same level) or `../` (parent level)
- Absolute imports use `@/` (from root, e.g., `@/components/ui/button`)

**When to Use Each:**

| Import Type | Example                  | Use Case                           |
| ----------- | ------------------------ | ---------------------------------- |
| Relative    | `./Hero/page`            | Importing nearby files             |
| Absolute    | `@/components/ui/button` | Importing from anywhere in project |

**Recommended Folder Structure:**

```
components/
├── Shared/
│   ├── Hero/
│   │   ├── page.tsx        (main component)
│   │   ├── Heading.tsx     (sub-component)
│   │   └── Subheading.tsx  (sub-component)
│   └── Navbar/
│       ├── page.tsx
│       └── logo.tsx
```

**💡 Why group related components in folders?**

- Keep related components together
- Easy to find and maintain
- Clear component hierarchy

---

## 📱 Responsive Typography

### Tailwind Responsive Classes Explained

**Example from Subheading component:**

```tsx
"text-base md:text-lg font-normal leading-relaxed";
```

**Breaking it Down:**

| Class             | Meaning                   | When Active                         |
| ----------------- | ------------------------- | ----------------------------------- |
| `text-base`       | Font size 16px (1rem)     | Always (mobile-first default)       |
| `md:text-lg`      | Font size 18px (1.125rem) | **Only** on screens ≥768px          |
| `font-normal`     | Font weight 400           | Always                              |
| `leading-relaxed` | Line height 1.625         | Always (more spacing between lines) |

**How Responsive Breakpoints Work:**

```tsx
// Mobile-first approach (Tailwind default)
"text-sm    md:text-base    lg:text-lg    xl:text-xl"
   ↓             ↓               ↓             ↓
Mobile       Tablet         Desktop      Large Desktop
(default)    (≥768px)       (≥1024px)    (≥1280px)
```

**Common Breakpoints:**

- `sm:` - ≥640px (small tablets)
- `md:` - ≥768px (tablets)
- `lg:` - ≥1024px (laptops)
- `xl:` - ≥1280px (desktops)
- `2xl:` - ≥1536px (large screens)

**Typography Scale Reference:**

| Class       | Size | Usage               |
| ----------- | ---- | ------------------- |
| `text-xs`   | 12px | Very small labels   |
| `text-sm`   | 14px | Secondary text      |
| `text-base` | 16px | Body text (default) |
| `text-lg`   | 18px | Larger body text    |
| `text-xl`   | 20px | Small headings      |
| `text-2xl`  | 24px | Headings            |
| `text-4xl`  | 36px | Large headings      |
| `text-6xl`  | 60px | Hero headings       |

**Line Height (Leading) Options:**

```tsx
leading - none; // 1
leading - tight; // 1.25
leading - snug; // 1.375
leading - normal; // 1.5
leading - relaxed; // 1.625 ← More spacious, better for readability
leading - loose; // 2
```

**Font Weight Options:**

```tsx
font - thin; // 100
font - light; // 300
font - normal; // 400 ← Default
font - medium; // 500
font - semibold; // 600
font - bold; // 700 ← Headings
font - black; // 900
```

**Practical Examples:**

```tsx
// Heading component
"text-2xl md:text-4xl lg:text-6xl tracking-tight font-bold"
   ↓         ↓           ↓           ↓            ↓
 24px      36px        60px     Tight spacing   Bold
(mobile)  (tablet)   (desktop)

// Subheading component
"text-base md:text-lg font-normal leading-relaxed"
   ↓          ↓           ↓              ↓
 16px       18px      Normal       Spacious lines
(mobile)  (tablet+)   weight
```

**💡 Best Practices:**

1. **Mobile-first**: Start with base size, add larger sizes with breakpoints
2. **Don't overdo it**: Use 2-3 responsive sizes max (e.g., mobile, tablet, desktop)
3. **Consistency**: Use a consistent scale (base, lg, xl, 2xl, etc.)
4. **Line height**: Use `leading-relaxed` or `leading-loose` for body text readability
5. **Headings**: Use tighter tracking (`tracking-tight`) and bold weights

---

## 📌 Quick Reference

### Common Semantic Colors

| Class                   | Purpose            | Auto-adapts? |
| ----------------------- | ------------------ | ------------ |
| `bg-background`         | Page background    | ✅           |
| `text-foreground`       | Primary text       | ✅           |
| `border-border`         | Borders            | ✅           |
| `text-muted-foreground` | Secondary text     | ✅           |
| `bg-accent`             | Subtle backgrounds | ✅           |
| `bg-primary`            | Primary actions    | ✅           |

### Common Utilities

```tsx
cn()              // Merge classNames
flex              // Flexbox
items-center      // Align items center
justify-between   // Space between
gap-x-4          // Horizontal gap
py-4             // Padding Y axis
hover:           // Hover state
dark:            // Dark mode
```

---

## 🔗 Helpful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)

---

## 💭 Key Takeaways

1. **Use semantic CSS variables** instead of manual `dark:` classes when possible
2. **`currentColor` in SVGs** makes them theme-aware
3. **Container component** ensures consistent layout
4. **Named exports** are better for components
5. **`cn()` utility** is essential for dynamic className merging
6. **Remove focus styles** by explicitly setting `outline-none focus:outline-none`
7. **Responsive design** uses mobile-first approach (`sm:`, `md:`, `lg:`)

---

**Last Updated:** 2025-11-24  
**Next Steps:** Build Hero section with Heading component
