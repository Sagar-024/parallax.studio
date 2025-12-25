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
8. **Desktop-first design**: Build and perfect for desktop, then adapt for smaller screens

---

## 🎬 Framer Motion & Animations

### TypeScript Type Errors with Framer Motion

**❌ Common Error:**

```
Type 'string' is not assignable to type 'Transition<any> | undefined'
```

**Problem Breakdown:**

1. **Passing a string instead of an object:**

```tsx
// ❌ Wrong - passing a string
<motion.div transition="transition" />
```

2. **Type inference issue with ease property:**

```tsx
// ❌ TypeScript infers "easeOut" as generic string
const container = {
  transition: { duration: 0.8, ease: "easeOut" },
};
```

**✅ Solutions:**

**Fix 1: Pass the actual transition object**

```tsx
<motion.div transition={container.transition} /> // ✅ Correct
```

**Fix 2: Use `as const` for type narrowing**

```tsx
const container = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const }, // ✅ Type-safe
};
```

**How `as const` works:**

- Tells TypeScript this is a literal value, not a generic string
- Converts `"easeOut"` from type `string` to type `"easeOut"`
- Framer Motion's `Easing` type accepts specific literal strings like `"easeOut"`, `"easeIn"`, `"linear"`, etc.

### Complete Animation Variants Pattern

```tsx
const container = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: -200,
    filter: "blur(1px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.2 },
};

// Usage
<motion.div
  initial="hidden"
  animate="visible"
  transition={container.transition}
  variants={container}
>
  {/* content */}
</motion.div>;
```

**Animation Properties Explained:**

| Property  | Purpose                | Example Values           |
| --------- | ---------------------- | ------------------------ |
| `opacity` | Fade in/out            | `0` to `1`               |
| `scale`   | Zoom effect            | `0.98` to `1`            |
| `y`       | Vertical movement (px) | `-200` to `0`            |
| `filter`  | Apply CSS filters      | `blur(1px)` to `blur(0)` |

---

## 🎨 3D Transforms & CSS Perspective

### Understanding 3D Image Positioning

**❌ Common Problem: Image Not Visible**

```tsx
// This causes image to collapse to 0 size!
<Image
  className="absolute inset-0" // ❌ Bad with no parent height
  style={{ transform: "rotateX(20deg)" }}
/>
```

**Why it fails:**

- `absolute inset-0` makes element fill parent's dimensions
- If parent has no defined height, element becomes 0x0
- Image disappears!

**✅ Solution 1: Remove absolute positioning**

```tsx
<Image
  width={1400}
  height={900}
  className="rounded-[20px] shadow-2xl" // ✅ Takes natural size
  style={{ transform: "rotateX(20deg)" }}
/>
```

**✅ Solution 2: Use absolute with proper parent**

```tsx
<div className="relative min-h-[600px]">
  {" "}
  {/* Parent has height */}
  <Image
    className="absolute inset-0" // ✅ Now works
    style={{ transform: "rotateX(20deg)" }}
  />
</div>
```

### 3D Transform Properties

**Basic Syntax:**

```tsx
style={{
  transform: "rotateX(40deg) rotateY(20deg) rotateZ(-20deg)"
}}
```

**Transform Functions:**

| Function       | Effect                            | Example                                     |
| -------------- | --------------------------------- | ------------------------------------------- |
| `rotateX()`    | Rotate around X-axis (horizontal) | `rotateX(20deg)` - tilts forward/back       |
| `rotateY()`    | Rotate around Y-axis (vertical)   | `rotateY(30deg)` - tilts left/right         |
| `rotateZ()`    | Rotate around Z-axis (depth)      | `rotateZ(-20deg)` - spins clockwise/counter |
| `translateX()` | Move horizontally                 | `translateX(80px)`                          |
| `translateY()` | Move vertically                   | `translateY(60px)`                          |
| `translateZ()` | Move in 3D space                  | `translateZ(-100px)` - pushes back          |

**Perspective Setup:**

```tsx
// Method 1: CSS perspective property
<motion.div
  className="perspective-[4000px]"  // Tailwind arbitrary value
  style={{
    transformStyle: "preserve-3d",
    perspective: "2000px"  // Or inline
  }}
>
```

**What is perspective?**

- Controls the "camera distance" from 3D elements
- Lower values = more dramatic 3D effect (e.g., 1000px)
- Higher values = subtle 3D effect (e.g., 4000px)
- `preserve-3d` ensures child elements maintain 3D transformations

### Creating Stacked Card Effect

**Pattern for layered 3D cards:**

```tsx
<div className="relative min-h-[600px] flex items-center justify-center">
  {/* Back layer - offset and dimmed */}
  <motion.div className="absolute" style={{ transformStyle: "preserve-3d" }}>
    <Image
      width={1400}
      height={900}
      className="opacity-60 translate-x-20 -translate-y-20"
      style={{
        transform: "rotateX(40deg) rotateY(20deg) rotateZ(-20deg)",
      }}
    />
  </motion.div>

  {/* Front layer - main focus */}
  <motion.div
    className="relative z-10"
    style={{ transformStyle: "preserve-3d" }}
  >
    <Image
      width={1400}
      height={900}
      style={{
        transform: "rotateX(40deg) rotateY(20deg) rotateZ(-20deg)",
      }}
    />
  </motion.div>
</div>
```

**Key techniques:**

- Back layer: `absolute` positioning with `opacity-60`
- Front layer: `relative z-10` for stacking
- Same rotation angles for consistency
- Offset with `translate-x-20 -translate-y-20` for depth

### CSS Mask for Fade Effects

**Creating bottom fade-out:**

```tsx
style={{
  maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
  WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
}}
```

**How it works:**

- `maskImage` controls visibility like opacity, but with gradients
- `black` = fully visible
- `transparent` = fully hidden
- `40%` to `95%` = smooth fade zone
- Need both `maskImage` and `WebkitMaskImage` for browser compatibility

**Common gradient patterns:**

```tsx
// Fade from bottom
"linear-gradient(to bottom, black 50%, transparent 100%)"

// Fade from right
"linear-gradient(to right, black 60%, transparent 90%)"

// Fade from both bottom and right
"linear-gradient(to bottom, black 40%, transparent 95%),
 linear-gradient(to right, black 60%, transparent 90%)"
```

---

## 🖥️ Design Workflow Best Practices

### Desktop-First Approach

**✅ Recommended Process:**

1. **Design for Desktop First**

   - Build complete layout for large screens (1280px+)
   - Perfect the spacing, typography, and interactions
   - Get all animations and effects working

2. **Then Adapt for Smaller Screens**
   - Add responsive breakpoints (`md:`, `sm:`)
   - Adjust layouts for tablets
   - Simplify for mobile
   - Stack elements vertically on small screens

**Why Desktop-First?**

- Easier to remove/simplify features than add them
- Desktop has more space for complex layouts
- Mobile naturally inherits simpler base styles
- Faster iteration on the primary viewing experience

**Example implementation:**

```tsx
// First: Build for desktop
<div className="flex gap-8">
  <div className="w-1/2">Left column</div>
  <div className="w-1/2">Right column</div>
</div>

// Then: Add mobile responsiveness
<div className="flex flex-col md:flex-row gap-4 md:gap-8">
  <div className="w-full md:w-1/2">Left column</div>
  <div className="w-full md:w-1/2">Right column</div>
</div>
```

### Common Image Issues & Fixes

**Problem: Image has typos in transform**

```tsx
// ❌ Typo breaks the transform
transform: "rotateX(20deg) roatateY(30deg)"; // 'roatate' typo!
```

**Always double-check:**

- Correct spelling: `rotate`, `translate`, `scale`
- Proper unit: `deg` for rotation, `px` for translation
- Valid axis: `X`, `Y`, `Z` (case-sensitive)

**Problem: Invalid utility classes**

```tsx
// ❌ These classes don't exist in Tailwind
className = "mask-r-from-50% mask-b-from-50%";
```

**✅ Use inline styles instead:**

```tsx
style={{
  maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
}}
```

---

## 🔄 Git Workflow

### Commit & Push Pattern

```bash
# Check status
git status

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Add hero section with 3D stacked image animation"

# Push to remote
git push
```

**If push fails with "rejected" error:**

```bash
# Pull latest changes with rebase
git pull --rebase

# If already up to date but still failing, force push
git push --force
```

**⚠️ Force push warning:**

- Only use `--force` when you're sure
- Never force push to main/master in team projects
- Make sure you're pushing to your own branch

**Good commit message patterns:**

```bash
# Format: <Action> <what> <why/context>
"Add hero section with 3D stacked image animation"
"Fix TypeScript error in Landinimage component"
"Update animation timing for better UX"
"Remove absolute positioning from hero image"
```

---

## 📌 Updated Quick Reference

### Framer Motion Essentials

```tsx
// Basic animation
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" as const }}
/>;

// With variants (cleaner for complex animations)
const variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

<motion.div
  initial="hidden"
  animate="visible"
  transition={variants.transition}
  variants={variants}
/>;
```

### 3D Transform Checklist

- [ ] Add `perspective-[value]` to parent
- [ ] Use `transformStyle: "preserve-3d"` for 3D children
- [ ] Combine rotations: `rotateX()` `rotateY()` `rotateZ()`
- [ ] For stacking, use `translateZ()` for depth
- [ ] Test with different perspective values (1000px - 4000px)

### Image Positioning Rules

1. **Natural size**: Use `width` and `height` props, no `absolute`
2. **Absolute positioning**: Parent must have defined height
3. **Stacking**: Use `z-index` (Tailwind: `z-10`, `z-20`)
4. **Offset layers**: Use `translate-x-*` and `translate-y-*` utilities

---

**Last Updated:** 2025-11-24  
**Latest Work:** Hero section with 3D stacked image animation using Framer Motion  
**Next Steps:** Optimize for mobile and tablet screens
