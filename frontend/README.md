# 🌸 KSHITIJ-KIIT Frontend

The official frontend for the **KSHITIJ-KIIT Spiritual Society** website — built with React, Vite, and TailwindCSS.

> _"The Journey Inside"_ — Discover peace, purpose, and timeless wisdom with a community that grows together.

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [How to Contribute](#-how-to-contribute)
- [Coding Guidelines](#-coding-guidelines)
- [Common Issues & Fixes](#-common-issues--fixes)
- [Need Help?](#-need-help)

---

## 🛠 Tech Stack

| Tool | What it does |
|------|-------------|
| [React 19](https://react.dev) | JavaScript library for building user interfaces |
| [Vite](https://vite.dev) | Lightning-fast development server & build tool |
| [TailwindCSS 4](https://tailwindcss.com) | Utility-first CSS framework for rapid styling |
| [Lucide React](https://lucide.dev) | Beautiful open-source icon library |
| [ESLint](https://eslint.org) | Catches code errors and enforces consistent style |

---

## ✅ Prerequisites

Make sure you have these installed **before** starting:

1. **Node.js** (v18 or higher) — [Download here](https://nodejs.org)
2. **Git** — [Download here](https://git-scm.com/downloads)
3. **VS Code** (recommended editor) — [Download here](https://code.visualstudio.com)

### Verify installation

Open a terminal and run:

```bash
node --version   # Should show v18.x.x or higher
npm --version    # Should show 9.x.x or higher
git --version    # Should show git version 2.x.x
```

---

## 🚀 Getting Started

### 1. Fork the repository

Click the **Fork** button on the top-right of the GitHub repo page. This creates your own copy.

### 2. Clone your fork

```bash
git clone https://github.com/<your-username>/kshitij-kiit.git
cd kshitij-kiit/frontend
```

> Replace `<your-username>` with your actual GitHub username.

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The site will be live at **http://localhost:5173** — open it in your browser!

### 5. Other useful commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Checks your code for errors and style issues |

---

## 📁 Project Structure

```
frontend/
├── public/                # Static assets (images, icons)
│   ├── backgroun.png      # Hero section background
│   ├── bubble.png         # Interactive bubble icon
│   ├── image.png          # About Us section background
│   └── Logo.png           # Society logo
├── src/
│   ├── components/        # 🧩 Reusable React components
│   │   └── AboutUs.jsx    # About Us section with interactive bubbles
│   ├── App.jsx            # Main app — Navbar, Hero, and page layout
│   ├── index.css          # Global styles and custom animations
│   └── main.jsx           # App entry point (mounts React to DOM)
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint rules
├── tailwind.config.js     # TailwindCSS configuration (if present)
└── package.json           # Dependencies and scripts
```

### Key files to know

| File | Purpose |
|------|---------|
| `src/App.jsx` | The main component — contains Navbar, Hero section, and renders all page sections |
| `src/components/AboutUs.jsx` | Interactive "About Us" section with hover-triggered bubbles |
| `src/index.css` | Custom CSS animations (e.g., floating bubble keyframes) |
| `public/` | Put images and static files here — accessible via `/filename.png` in code |

---

## 🤝 How to Contribute

### Step-by-step workflow

#### 1. Create a new branch

Always work on a new branch, **never directly on `main`**:

```bash
git checkout -b feature/your-feature-name
```

**Branch naming examples:**
- `feature/contact-section` — for new features
- `fix/navbar-mobile-menu` — for bug fixes
- `style/hero-responsive` — for styling changes

#### 2. Make your changes

Edit files in the `src/` folder. Your browser will **auto-refresh** as you save!

#### 3. Check for errors

```bash
npm run lint
```

Fix any issues before committing.

#### 4. Stage and commit your changes

```bash
git add .
git commit -m "feat: add contact section with form"
```

**Commit message format:**
- `feat: ...` — new feature
- `fix: ...` — bug fix
- `style: ...` — styling/UI changes
- `docs: ...` — documentation changes
- `refactor: ...` — code restructuring

#### 5. Push to your fork

```bash
git push origin feature/your-feature-name
```

#### 6. Open a Pull Request

Go to the original repo on GitHub → click **"New Pull Request"** → select your branch → describe your changes → submit!

---

## 📝 Coding Guidelines

### React Components

- **One component per file** — name the file the same as the component (e.g., `ContactForm.jsx`)
- Place new components inside `src/components/`
- Use **functional components** with hooks (`useState`, `useEffect`)

```jsx
// ✅ Good
const ContactForm = () => {
  const [name, setName] = useState('');
  return <form>...</form>;
};
export default ContactForm;
```

### Styling with TailwindCSS

We use **TailwindCSS utility classes** — no need to write custom CSS files for most things:

```jsx
// ✅ Use Tailwind classes directly in JSX
<div className="bg-white p-6 rounded-xl shadow-lg">
  <h2 className="text-2xl font-bold text-gray-900">Hello</h2>
</div>
```

Helpful Tailwind resources:
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### General Rules

- Use `const` and `let` — never `var`
- Use **arrow functions** for components
- Keep components small — if it's over 100 lines, consider splitting it
- Add meaningful comments for complex logic
- Use **relative imports**: `import MyComponent from './components/MyComponent'`

---

## 🔧 Common Issues & Fixes

### ❌ `npm install` fails

```bash
# Delete node_modules and lock file, then retry
rm -rf node_modules package-lock.json
npm install
```

### ❌ Port 5173 is already in use

```bash
# Kill the process using the port (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Or just use a different port
npm run dev -- --port 3000
```

### ❌ Changes not showing in the browser

- Make sure the dev server is running (`npm run dev`)
- Hard refresh: `Ctrl + Shift + R`
- Check the terminal for any error messages

### ❌ ESLint errors blocking your work

```bash
# See all errors with details
npm run lint

# Most errors are unused imports — remove them!
```

---

## 💡 Ideas for First Contributions

Not sure where to start? Try one of these beginner-friendly tasks:

- [ ] 🎨 Make the Hero section responsive for mobile screens
- [ ] 📱 Build a mobile navigation menu (hamburger menu)
- [ ] 📸 Create a Gallery section component
- [ ] 📞 Add a Contact Us section with a form
- [ ] 🎭 Add smooth scroll animations between sections
- [ ] ♿ Improve accessibility (alt text, ARIA labels, keyboard navigation)

---

## ❓ Need Help?

- 🐛 **Found a bug?** Open an [Issue](../../issues) on GitHub
- 💬 **Have a question?** Reach out to the maintainers or ask in the society group
- 📖 **New to React?** Start with the [official React tutorial](https://react.dev/learn)
- 🎨 **New to Tailwind?** Try the [Tailwind playground](https://play.tailwindcss.com)

---

<p align="center">
  Made with 💛 by the KSHITIJ-KIIT community
</p>