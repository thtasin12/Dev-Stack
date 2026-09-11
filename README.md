#  A-5 Dev Stack Builder

> Explore technologies, compare them side by side, and build your ideal development stack — all in one beautiful, responsive web app.

![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3-38bdf8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-a855f7?logo=vite&logoColor=white)
![React-Toastify](https://img.shields.io/badge/React--Toastify-10-f59e0b)

---

##  About The Project

**Dev Stack** is a technology explorer app where you can browse a curated list of
development technologies (frontend, backend, database, styling, DevOps, tools),
see their details at a glance, and **add them to "Your Stack"** — a personal
sidebar panel where you can build, review, and manage the perfect stack for your
next project. Alerts for every action (add, duplicate, remove, remove all) are
shown with the `react-toastify` NPM package.

---

##  Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** | UI library — components, props, state, hooks |
| **TypeScript (ES6+)** | Type-safe code — interfaces, typed props & state |
| **Tailwind CSS 4.3** | Utility-first styling (CSS-first config with `@theme`) |
| **React-Toastify** | Toast alerts for all stack actions |
| **JSON** | Technology data loaded from a local file |
| **Vite** | Fast build tool & dev server |

---

##  3 Key Features

1. **Responsive Technology Cards** — All technologies are displayed in a
   responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile). Each card
   shows the icon, badge, name, description, category chip, difficulty, star
   rating, and an **"Add to Stack"** button that becomes disabled and reads
   **"✓ Added to Stack"** after adding. Duplicate adds trigger a warning toast.

2. **"Your Stack" Sidebar Panel** — A sticky panel beside the grid with a live
   selected count (e.g. *"2 Technology Selected"*), an empty-state message, one
   item per row (icon, name, category, ✕ remove button), and a **Remove All**
   button — all updates reflected instantly with toast feedback.

3. **Shared Gradient Brand Theme** — One gradient (**orange → pink → violet**)
   powers the brand name, hero heading highlight, and all primary buttons. It is
   defined in a single place (`@theme` in `index.css`), so the entire UI can be
   re-themed by changing one value.

---

##  React Q&A

**i. What is JSX, and why is it used in React?**  
**Ans:** JSX is a syntax that lets you write HTML-like code inside JavaScript. React uses it to describe what the UI should look like, and it compiles down to `React.createElement` calls. It keeps markup and logic together, making components easy to read and write.

---

**ii. What is the difference between props and state?**  
**Ans:** Props are data passed **into** a component from its parent — they are read-only. State is data a component **owns** and can change over time; when state updates, the component re-renders.

---

**iii. What does the `useState` hook do, and where did you use it in this project?**  
**Ans:** `useState` creates a state variable and a setter function to update it. I used it in `App.tsx` for `technologies`, `loading`, and `stack`, and in `Navbar.tsx` for the mobile menu's open/close state.

---

**iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**  
**Ans:** `useEffect` runs side effects after rendering. I used it with an empty dependency array so the JSON fetch runs exactly once when the app mounts — data fetching is a side effect and must not happen during rendering.

---

**v. Why does every item in a `.map()` list need a unique `key` prop?**  
**Ans:** React uses `key` to identify which items changed, were added, or were removed. This makes updates efficient and prevents bugs where component state gets mixed up between list items.

---

**vi. What is conditional rendering? Show one place you used it.**  
**Ans:** Conditional rendering means showing different UI based on a condition. I used it in `StackPanel` for the empty stack message (`stack.length === 0` shows *"Your stack is empty..."*), and in `App.tsx` to show the loading spinner while the JSON is being fetched.

---

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**  
**Ans:** Parent → child: through **props**. Child → parent: the parent passes a **callback function** as a prop, and the child calls it with data. For example, `App` passes `onAdd` to `TechnologyCard`, and the card calls `onAdd(tech)` when its button is clicked.


---

##  Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/dev-stack.git
cd dev-stack

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev

# 4. Build for production
npm run build
```

---

## 📁 Project Structure

```
dev-stack/
├── public/
│   └── data/
│       └── technologies.json   # Technology data (loaded via fetch)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── StackPanel.tsx
│   │   └── Footer.tsx
│   ├── types.ts                # Technology interface
│   ├── App.tsx                 # Main state & layout
│   ├── main.tsx
│   └── index.css               # Tailwind 4 + @theme gradient
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🔗 Links

- **Live Site:** [[Dev Stack](https://dev-stack-gray.vercel.app/)]



