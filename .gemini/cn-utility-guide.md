# Complete Guide to the `cn` Utility Function

## What is `cn`?

`cn` is a **utility function** that helps you **conditionally combine CSS class names** in React/Next.js projects. It's especially powerful when working with **Tailwind CSS**.

---

## Why Do We Use `cn`?

### Problem it Solves

When building components with Tailwind CSS, you often need to:

1. **Combine multiple class names**
2. **Add conditional classes** (e.g., based on props or state)
3. **Override conflicting Tailwind classes** (e.g., `bg-red-500` vs `bg-blue-500`)

### Example Problem:

```tsx
// ❌ Problem: Which background color wins?
<div className="bg-red-500 bg-blue-500">
  This could be red OR blue - unpredictable!
</div>

// ❌ Problem: Messy conditional classes
<button className={`px-4 py-2 ${isActive ? 'bg-blue-500' : 'bg-gray-500'} ${isDisabled && 'opacity-50'}`}>
  Click me
</button>
```

### Solution with `cn`:

```tsx
// ✅ Solution: Clean, predictable class merging
<div className={cn("bg-red-500", "bg-blue-500")}>
  This will be blue (last class wins intelligently)
</div>

// ✅ Solution: Clean conditional classes
<button className={cn(
  "px-4 py-2",
  isActive ? "bg-blue-500" : "bg-gray-500",
  isDisabled && "opacity-50 cursor-not-allowed"
)}>
  Click me
</button>
```

---

## How `cn` Works

Your `cn` function (located at `lib/utils.ts`) combines two powerful libraries:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### The Two-Step Process:

1. **`clsx`** - Handles conditional class names and combines them into a string
2. **`twMerge`** - Intelligently merges Tailwind classes, removing conflicts

---

## Installation Guide

### Step 1: Install Dependencies

You already have these installed in your project! But for reference, here's how to install them:

```bash
npm install clsx tailwind-merge
```

Your `package.json` already has:

```json
{
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0"
  }
}
```

### Step 2: Create the Utility Function

You already have this at `lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## How to Import `cn`

From any component in your project:

```typescript
import { cn } from "@/lib/utils";
```

The `@` is a TypeScript path alias that points to your project root.

---

## How to Use `cn` - Practical Examples

### 1. Basic Usage - Combining Classes

```tsx
import { cn } from "@/lib/utils";

export const Button = () => {
  return (
    <button className={cn("px-4 py-2 rounded-lg", "bg-blue-500 text-white")}>
      Click me
    </button>
  );
};
```

### 2. Conditional Classes

```tsx
import { cn } from "@/lib/utils";

export const Button = ({ isActive }: { isActive: boolean }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg",
        isActive ? "bg-blue-500" : "bg-gray-500",
        "hover:bg-blue-600"
      )}
    >
      Click me
    </button>
  );
};
```

### 3. With Props (Creating Reusable Components)

```tsx
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        // Base styles
        "rounded-lg font-medium transition-colors",

        // Variant styles
        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-600",
        variant === "secondary" &&
          "bg-gray-200 text-gray-800 hover:bg-gray-300",
        variant === "danger" && "bg-red-500 text-white hover:bg-red-600",

        // Size styles
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",

        // Custom classes from props (will override defaults!)
        className
      )}
    >
      {children}
    </button>
  );
};
```

Usage:

```tsx
<Button variant="primary" size="lg">Click me</Button>
<Button variant="danger" className="rounded-full">Delete</Button>
```

### 4. Array and Object Syntax (from clsx)

```tsx
import { cn } from "@/lib/utils";

export const Card = ({
  isActive,
  isHovered,
}: {
  isActive: boolean;
  isHovered: boolean;
}) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg border",

        // Object syntax - key is class name, value is condition
        {
          "bg-blue-50 border-blue-500": isActive,
          "shadow-lg transform scale-105": isHovered,
          "bg-white border-gray-200": !isActive,
        },

        // Array syntax
        ["transition-all", "duration-300"]
      )}
    >
      Card content
    </div>
  );
};
```

### 5. Real-World Navbar Example

Here's how you might use `cn` in your Navbar component:

```tsx
import React from "react";
import { cn } from "@/lib/utils";
import { LogoIcon } from "./logo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        // Base styles
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",

        // Conditional styles based on scroll
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <LogoIcon />
        {/* Rest of navbar */}
      </div>
    </nav>
  );
};

export default Navbar;
```

---

## Key Benefits

### 1. **Conflict Resolution**

```tsx
// Without cn - unpredictable
<div className="bg-red-500 bg-blue-500">  // Which one wins? 🤷

// With cn - predictable
<div className={cn("bg-red-500", "bg-blue-500")}>  // Always blue! ✅
```

### 2. **Cleaner Code**

```tsx
// Without cn - messy
<button className={`px-4 py-2 ${active ? 'bg-blue-500' : 'bg-gray-500'} ${disabled && 'opacity-50'} ${hover ? 'shadow-lg' : ''}`}>

// With cn - clean
<button className={cn(
  "px-4 py-2",
  active ? "bg-blue-500" : "bg-gray-500",
  disabled && "opacity-50",
  hover && "shadow-lg"
)}>
```

### 3. **Flexibility**

```tsx
// Accept custom classes from parent components
<MyButton className="mt-4 w-full" />

// Inside MyButton component
<button className={cn(
  "px-4 py-2 bg-blue-500",  // Default styles
  className  // Props override defaults
)}>
```

### 4. **Type Safety**

TypeScript knows what `cn` accepts:

- Strings
- Undefined/null (ignored)
- Objects (conditional)
- Arrays
- Nested combinations

---

## Common Patterns

### Pattern 1: Base + Variants + Custom

```tsx
const Component = ({ variant, className }) => (
  <div className={cn(
    "base-styles",                    // Always applied
    variant === "x" && "variant-x",  // Conditionally applied
    className                         // User overrides
  )}>
)
```

### Pattern 2: Multiple Conditions

```tsx
<div className={cn(
  "base",
  condition1 && "class-1",
  condition2 && "class-2",
  condition3 ? "class-true" : "class-false"
)}>
```

### Pattern 3: Complex Object

```tsx
<div className={cn({
  "base-class": true,
  "active-class": isActive,
  "disabled-class": isDisabled,
  "large-class": size === "large"
})}>
```

---

## Summary

| Aspect       | Details                                                     |
| ------------ | ----------------------------------------------------------- |
| **What**     | Utility to combine and merge CSS class names                |
| **Why**      | Clean code, conflict resolution, conditional styling        |
| **Install**  | `npm install clsx tailwind-merge` (✅ already done)         |
| **Location** | `lib/utils.ts` (✅ already created)                         |
| **Import**   | `import { cn } from "@/lib/utils"`                          |
| **Usage**    | `className={cn("class1", "class2", condition && "class3")}` |

---

## Next Steps

Try using `cn` in your Navbar component to:

1. Add conditional styling based on scroll position
2. Handle active/inactive navigation links
3. Apply responsive classes cleanly
4. Allow custom className props

Happy coding! 🚀
