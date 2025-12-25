# 🎬 Framer Motion Animation Guide

### From Zero to Hero - Complete Animation Masterclass

---

## 📚 Table of Contents

1. [The Basics - What is Animation?](#1-the-basics)
2. [Simple Animations](#2-simple-animations)
3. [Keyframe Animations](#3-keyframe-animations)
4. [Transition Properties](#4-transition-properties)
5. [Variants System](#5-variants-system)
6. [Triggers - When to Animate](#6-triggers)
7. [Advanced Patterns](#7-advanced-patterns)
8. [Real World Examples](#8-real-world-examples)

---

## 1. The Basics

### What is Animation?

Animation = **changing a property over time**

```
Time →→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→
     │                                    │
     ▼                                    ▼
┌─────────┐                        ┌─────────┐
│ opacity │   →→→→→→→→→→→→→→→→→   │ opacity │
│   = 0   │      (animating)       │   = 1   │
└─────────┘                        └─────────┘
  START                              END
 (hidden)                          (visible)
```

### Framer Motion Basics

Convert any HTML element to animated version by adding `motion.`:

```tsx
// Regular HTML
<div>Hello</div>

// Animated with Framer Motion
<motion.div>Hello</motion.div>
```

---

## 2. Simple Animations

### 2.1 The `animate` Prop

The most basic animation. Just tell it WHERE to go:

```tsx
<motion.div animate={{ x: 100 }} />
```

```
START                    END
┌───┐                   ┌───┐
│ □ │ ──────────────▶  │   │ □
└───┘                   └───┘
x: 0                    x: 100
```

### 2.2 The `initial` Prop

Define WHERE animation STARTS from:

```tsx
<motion.div
  initial={{ opacity: 0, y: -50 }} // Start here
  animate={{ opacity: 1, y: 0 }} // End here
/>
```

```
INITIAL STATE              ANIMATED STATE
     ↓                          ↓
   ┌───┐
   │ □ │  opacity: 0
   └───┘  y: -50              ┌───┐
     │                        │ █ │  opacity: 1
     │                        └───┘  y: 0
     ▼ (animates down)
```

### 2.3 Animatable Properties

| Property                        | What it does                 | Example                      |
| ------------------------------- | ---------------------------- | ---------------------------- |
| `x`, `y`                        | Move horizontally/vertically | `x: 100`                     |
| `scale`                         | Size (1 = normal)            | `scale: 1.5`                 |
| `rotate`                        | Rotation in degrees          | `rotate: 45`                 |
| `rotateX`, `rotateY`, `rotateZ` | 3D rotation                  | `rotateX: 90`                |
| `opacity`                       | Transparency (0-1)           | `opacity: 0.5`               |
| `width`, `height`               | Dimensions                   | `width: "100px"`             |
| `backgroundColor`               | Color                        | `backgroundColor: "#ff0000"` |

---

## 3. Keyframe Animations

### 3.1 What are Keyframes?

Regular animation: **A → B** (two points)
Keyframe animation: **A → B → C → D → E** (multiple points)

```tsx
// Simple: just goes from current to 100
animate={{ x: 100 }}

// Keyframes: goes through multiple values
animate={{ x: [0, 100, 50, 100] }}
```

### 3.2 How Keyframe Arrays Work

```tsx
animate={{
  x: [0, 100, 50, 100]
}}
//   ↑    ↑   ↑    ↑
//   │    │   │    └── Step 4: end at 100
//   │    │   └─────── Step 3: go to 50
//   │    └─────────── Step 2: go to 100
//   └──────────────── Step 1: start at 0
```

```
Position over time:

100 ─ ─ ─ ─●─ ─ ─ ─ ─ ─ ─ ─ ─ ─●
           │                   │
           │         ●─────────┘
           │        /
 50 ─ ─ ─ ─│─ ─ ─ ─●
           │      /
           │     /
  0 ●──────┘    /
    │    │    │    │
  Step1  2    3    4
```

### 3.3 Multiple Properties with Keyframes

You can animate multiple properties, each with their own keyframes:

```tsx
animate={{
  opacity: [0, 1, 1, 1, 0],      // 5 keyframes
  y:       [50, 0, 0, 0, 50],    // 5 keyframes (must match!)
  scale:   [0.8, 1, 1, 1, 0.8],  // 5 keyframes
}}
```

⚠️ **IMPORTANT**: All arrays must have the SAME number of values!

```
✅ CORRECT:
opacity: [0, 1, 0]      // 3 values
y:       [10, 0, 10]    // 3 values ✓

❌ WRONG:
opacity: [0, 1, 0]      // 3 values
y:       [10, 0]        // 2 values ✗ MISMATCH!
```

---

## 4. Transition Properties

The `transition` prop controls HOW the animation happens.

### 4.1 Basic Transition

```tsx
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 2 }} // Takes 2 seconds
/>
```

### 4.2 All Transition Properties

| Property      | What it does               | Example                   |
| ------------- | -------------------------- | ------------------------- |
| `duration`    | How long (in seconds)      | `duration: 2`             |
| `delay`       | Wait before starting       | `delay: 0.5`              |
| `ease`        | Animation curve/feel       | `ease: "easeOut"`         |
| `repeat`      | How many times to repeat   | `repeat: 3` or `Infinity` |
| `repeatDelay` | Pause between repeats      | `repeatDelay: 1`          |
| `times`       | When each keyframe happens | `times: [0, 0.5, 1]`      |

### 4.3 The `ease` Property

Controls the "feel" of animation:

```
"linear" - Constant speed (robotic)
─────────────────────────────────▶

"easeIn" - Slow start, fast end (accelerating)
──────────────────────▶▶▶▶▶▶▶▶▶▶

"easeOut" - Fast start, slow end (decelerating) ⭐ MOST NATURAL
▶▶▶▶▶▶▶▶▶▶──────────────────────

"easeInOut" - Slow start AND end (smooth)
────────────▶▶▶▶▶▶▶▶────────────
```

Visual comparison:

```
             Start                              End
               │                                 │
               ▼                                 ▼
linear:    ────●────────────────────────────────●────
               │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
               │  constant speed throughout     │

easeIn:    ────●─────────────────────────▶▶▶▶▶▶●────
               │░░░░░░░░░░░░░░░░░░░▒▒▒▓▓▓███████│
               │  slow → → → fast               │

easeOut:   ────●▶▶▶▶▶▶─────────────────────────●────
               │███████▓▓▓▒▒▒░░░░░░░░░░░░░░░░░░│
               │  fast → → → slow (natural!)   │

easeInOut: ────●───────▶▶▶▶▶▶▶▶────────────────●────
               │░░░░▒▒▓▓████████████▓▓▒▒░░░░░░│
               │  slow → fast → slow           │
```

### 4.4 The `times` Array

Controls WHEN each keyframe is reached (as percentage of duration):

```tsx
animate={{
  opacity: [0, 1, 1, 1, 0],
}}
transition={{
  duration: 2,
  times: [0, 0.15, 0.25, 0.85, 1],
  //      ↑    ↑     ↑     ↑    ↑
  //     0%  15%   25%   85%  100%
}}
```

```
Timeline (2 second duration):
│
├── 0% (0s) ──────── opacity: 0 (invisible)
│
├── 15% (0.3s) ───── opacity: 1 (visible) ← fade in complete
│
├── 25% (0.5s) ───── opacity: 1 (still visible)
│   │
│   │ (holding visible from 25% to 85%)
│   │
├── 85% (1.7s) ───── opacity: 1 (still visible)
│
├── 100% (2s) ────── opacity: 0 (invisible) ← faded out
│
▼
```

**Visual Timeline:**

```
opacity
   1 │        ●━━━━━━━━━━━━━━━━━●
     │       ╱                   ╲
     │      ╱                     ╲
   0 │─●───╱───────────────────────╲───●───
     └─┴───┴───────────────────────┴───┴───▶ time
       0%  15%                    85% 100%
          │                        │
       fade in                  fade out
          │←───── hold visible ────→│
```

### 4.5 The `repeat` Property

```tsx
// Repeat 3 times
transition={{ repeat: 3 }}

// Repeat forever
transition={{ repeat: Infinity }}
```

```
Without repeat:
├──── cycle 1 ────┤ STOP

With repeat: 3:
├──── cycle 1 ────┼──── cycle 2 ────┼──── cycle 3 ────┤ STOP

With repeat: Infinity:
├──── cycle 1 ────┼──── cycle 2 ────┼──── cycle 3 ────┼──── ... ───▶
                                                            FOREVER
```

### 4.6 The `repeatDelay` Property

Adds a pause between each repeat:

```tsx
transition={{
  duration: 2,
  repeat: Infinity,
  repeatDelay: 1,  // 1 second pause
}}
```

```
Timeline:
│
├─── 2s animation ───┼─ 1s pause ─┼─── 2s animation ───┼─ 1s pause ─┼...
│   (cycle 1)        │   (wait)   │   (cycle 2)        │   (wait)   │
│                    │            │                    │            │
└────────────────────┴────────────┴────────────────────┴────────────┴──▶
```

---

## 5. Variants System

### 5.1 What are Variants?

Variants = **named animation states** that you can switch between.

Instead of writing animations inline, define them as an object:

```tsx
// Without variants (messy for complex animations)
<motion.div animate={{ opacity: 1, y: 0, scale: 1 }} />;

// With variants (clean and reusable!)
const myVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

<motion.div variants={myVariants} initial="hidden" animate="visible" />;
```

### 5.2 Variant Structure

```tsx
const variants = {
  stateName1: {
    /* animation properties */
  },
  stateName2: {
    /* animation properties */
  },
  stateName3: {
    /* animation properties */
  },
};
```

Common naming patterns:

```tsx
// For visibility
{ hidden: {...}, visible: {...} }

// For hover states
{ rest: {...}, hover: {...} }

// For loading states
{ loading: {...}, loaded: {...}, error: {...} }

// For open/close
{ closed: {...}, open: {...} }
```

### 5.3 Transitions in Variants

You can include transitions inside variants:

```tsx
const cardVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
```

### 5.4 Parent-Child Variant Propagation ⭐

**This is powerful!** When a parent changes variant, children automatically follow:

```tsx
const parentVariants = {
  rest: {},
  hover: {},
};

const childVariants = {
  rest: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0 },
};

<motion.div
  variants={parentVariants}
  initial="rest"
  whileHover="hover" // Parent switches to "hover"
>
  {/* Children automatically use their "hover" variant! */}
  <motion.div variants={childVariants}>Child 1</motion.div>
  <motion.div variants={childVariants}>Child 2</motion.div>
  <motion.div variants={childVariants}>Child 3</motion.div>
</motion.div>;
```

```
Parent state: "rest"          Parent state: "hover"
┌──────────────────┐          ┌──────────────────┐
│   ┌──────────┐   │          │   ┌──────────┐   │
│   │ hidden   │   │    ▶▶    │   │ VISIBLE! │   │
│   └──────────┘   │          │   └──────────┘   │
│   ┌──────────┐   │          │   ┌──────────┐   │
│   │ hidden   │   │    ▶▶    │   │ VISIBLE! │   │
│   └──────────┘   │          │   └──────────┘   │
└──────────────────┘          └──────────────────┘
     All children               All children
     use "rest"                 use "hover"
```

### 5.5 Staggering Children ⭐

Make children animate one after another:

```tsx
const parentVariants = {
  rest: {},
  hover: {
    transition: {
      staggerChildren: 0.1, // 0.1s delay between each child
    },
  },
};

const childVariants = {
  rest: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0 },
};
```

```
With staggerChildren: 0.1

Time:  0.0s    0.1s    0.2s    0.3s
       │       │       │       │
       ▼       ▼       ▼       ▼
      ┌───┐
      │ 1 │━━━▶ visible
      └───┘
             ┌───┐
             │ 2 │━━━▶ visible
             └───┘
                    ┌───┐
                    │ 3 │━━━▶ visible
                    └───┘
                           ┌───┐
                           │ 4 │━━━▶ visible
                           └───┘

Creates a beautiful "waterfall" or "cascade" effect!
```

---

## 6. Triggers - When to Animate

### 6.1 Available Triggers

| Trigger       | When it activates               |
| ------------- | ------------------------------- |
| `animate`     | On mount (immediately)          |
| `whileHover`  | When mouse hovers over element  |
| `whileTap`    | When element is clicked/pressed |
| `whileFocus`  | When element is focused         |
| `whileInView` | When element enters viewport    |
| `whileDrag`   | When element is being dragged   |

### 6.2 `whileHover` - Hover Animations

```tsx
<motion.div whileHover={{ scale: 1.1, backgroundColor: "#ff0000" }} />
```

```
REST STATE              HOVER STATE
┌──────────┐           ┌────────────┐
│          │    ▶▶▶    │            │
│    □     │  (mouse)  │     ■      │  (bigger + red)
│          │           │            │
└──────────┘           └────────────┘
```

### 6.3 `whileInView` - Scroll Animations

Animates when element scrolls into view:

```tsx
<motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
/>
```

**Viewport options:**

```tsx
viewport={{
  once: true,    // Only animate once (doesn't replay on scroll back)
  once: false,   // Animate every time it enters view
  amount: 0.5,   // 50% of element must be visible to trigger
  amount: "all", // 100% must be visible
  amount: "some" // Any part visible triggers
}}
```

```
Scrolling down:
                    ┌─────────────────┐
                    │                 │
                    │    VIEWPORT     │
                    │                 │
                    │    ┌───────┐    │ ← Element enters (triggers!)
                    │    │ Hello │    │
                    └────┴───────┴────┘
                         │
                         ▼ amount: 0.5 means
                           50% must be visible
```

### 6.4 Using Triggers with Variants

```tsx
<motion.div
  variants={myVariants}
  initial="rest"
  whileHover="hover"
  whileTap="pressed"
>
```

---

## 7. Advanced Patterns

### 7.1 Repeating Keyframe Animations

For looping "story" animations:

```tsx
<motion.div
  animate={{
    opacity: [0, 1, 1, 1, 0], // Fade in → hold → fade out
    y: [50, 0, 0, 0, 50], // Rise up → hold → sink down
  }}
  transition={{
    duration: 3,
    times: [0, 0.2, 0.3, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1,
  }}
/>
```

```
One complete cycle (3 seconds):

     ┌──── Fade In ────┬──── Hold ────┬── Fade Out ──┐
     │                 │              │              │
     0%               20%            80%           100%
     │                 │              │              │
     ▼                 ▼              ▼              ▼
   invisible → → → visible ━━━━━━━━━━━ → → → invisible
   y: 50     → → →   y: 0  ━━━━━━━━━━━ → → →    y: 50

Then: 1 second pause, then repeat!
```

### 7.2 Staggered Children with Custom Delays

```tsx
const Row = ({ delay }) => {
  const variants = {
    rest: { opacity: 0, rotateX: -90 },
    hover: {
      opacity: 1,
      rotateX: 0,
      transition: { delay: delay },  // Custom delay per row
    },
  };

  return <motion.div variants={variants} />;
};

// Usage
<Row delay={0} />    // Immediately
<Row delay={0.1} />  // 0.1s later
<Row delay={0.2} />  // 0.2s later
<Row delay={0.3} />  // 0.3s later
```

### 7.3 3D Flip Effect

Use `rotateX` or `rotateY` for card flip effects:

```tsx
<motion.div
  initial={{ rotateX: -90 }}
  animate={{ rotateX: 0 }}
  style={{ transformOrigin: "top center" }} // Pivot point!
/>
```

```
rotateX: -90 (looking at edge)     rotateX: 0 (facing you)

         ═════                         ┌─────────┐
           │                           │         │
           │  (card is rotated         │  CARD   │
           │   away from you)          │         │
         ═════                         └─────────┘

transformOrigin: "top center" makes it flip from top edge!
```

### 7.4 Transform Origin Positions

```tsx
style={{ transformOrigin: "..." }}
```

```
"top left"      "top center"      "top right"
    ●──────────      ──●──────       ──────────●
    │                  │                       │
    │                  │                       │

"center left"   "center"         "center right"
    │                  │                       │
    ●                  ●                       ●
    │                  │                       │

"bottom left"  "bottom center"   "bottom right"
    │                  │                       │
    │                  │                       │
    ●──────────      ──●──────       ──────────●
```

---

## 8. Real World Examples

### 8.1 Fade In on Scroll

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  Content fades in when you scroll to it
</motion.div>
```

### 8.2 Button Hover Effect

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Click Me
</motion.button>
```

### 8.3 Card with Hover Reveal

```tsx
const cardVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { staggerChildren: 0.1 },
  },
};

const contentVariants = {
  rest: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0 },
};

<motion.div variants={cardVariants} initial="rest" whileHover="hover">
  <h2>Card Title</h2>
  <motion.p variants={contentVariants}>Hidden content 1</motion.p>
  <motion.p variants={contentVariants}>Hidden content 2</motion.p>
  <motion.p variants={contentVariants}>Hidden content 3</motion.p>
</motion.div>;
```

### 8.4 Infinite Loop Animation

```tsx
<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "linear",
  }}
>
  🔄 Spinning forever!
</motion.div>
```

### 8.5 Progress Bar Animation

```tsx
<motion.div
  initial={{ width: 0 }}
  animate={{ width: "100%" }}
  transition={{ duration: 2, ease: "easeOut" }}
  style={{ height: 4, backgroundColor: "blue" }}
/>
```

---

## 🎯 Quick Reference Cheat Sheet

```
┌─────────────────────────────────────────────────────────────────────┐
│                    FRAMER MOTION CHEAT SHEET                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  BASIC STRUCTURE:                                                   │
│  ─────────────────                                                  │
│  <motion.div                                                        │
│    initial={{ ... }}      // Starting state                        │
│    animate={{ ... }}      // End state                              │
│    transition={{ ... }}   // How to animate                         │
│  />                                                                 │
│                                                                     │
│  TRIGGERS:                                                          │
│  ─────────                                                          │
│  animate      → On mount                                            │
│  whileHover   → On mouse hover                                      │
│  whileTap     → On click/press                                      │
│  whileInView  → When scrolled into view                             │
│                                                                     │
│  TRANSITION OPTIONS:                                                │
│  ───────────────────                                                │
│  duration: 2           → 2 seconds                                  │
│  delay: 0.5            → Wait 0.5s before starting                  │
│  ease: "easeOut"       → Deceleration curve                         │
│  repeat: Infinity      → Loop forever                               │
│  repeatDelay: 1        → 1s pause between loops                     │
│  times: [0, 0.5, 1]    → When keyframes hit                         │
│                                                                     │
│  KEYFRAMES:                                                         │
│  ──────────                                                         │
│  Single value:  x: 100             → Animate TO 100                 │
│  Array:         x: [0, 100, 50]    → Animate THROUGH 0→100→50       │
│                                                                     │
│  VARIANTS:                                                          │
│  ─────────                                                          │
│  const variants = {                                                 │
│    rest: { opacity: 0 },                                            │
│    hover: { opacity: 1, transition: { duration: 0.3 } }             │
│  };                                                                 │
│  <motion.div variants={variants} initial="rest" whileHover="hover"> │
│                                                                     │
│  PARENT → CHILD:                                                    │
│  ───────────────                                                    │
│  Parent whileHover="hover" → Children auto-switch to "hover"        │
│  staggerChildren: 0.1      → Delay each child by 0.1s               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Pro Tips

1. **Start simple** - Use `initial` and `animate` first
2. **Add `whileHover`** - For interactivity
3. **Use variants** - For cleaner code and parent-child animations
4. **Add keyframes** - For complex multi-step animations
5. **Use `repeat: Infinity`** - For looping animations
6. **Adjust `times`** - For precise timing control

---

_Happy animating! 🎬✨_
