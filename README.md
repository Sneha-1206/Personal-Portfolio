# Interactive Multi-Page Personal Portfolio Web Application


## 1. Project Overview

This project is a fully functional, interactive personal portfolio web application built using **React** and **Vite**. It extends the static personal portfolio website from Assignment 1 into a dynamic Single Page Application (SPA).

Key highlights of the implementation:
- **Modular Component Architecture:** Reusable functional components (`Navbar`, `ProjectCard`, `Skills`, `ContactForm`, `ProjectsGrid`, `Footer`).
- **State Management (`useState`):** Top-level lifted theme state, controlled form inputs with validation state, and component-scoped toggle states.
- **Side Effects (`useEffect`):** Simulated loading sequences, `localStorage` theme synchronization, and window event listeners with proper cleanup functions.
- **Client-Side Routing (`react-router-dom`):** Seamless multi-page experience with shared layout, dynamic project details route (`/projects/:projectId`), and a 404 fallback page.
- **Prop Passing & Drilling:** Data flow across multiple component hierarchy levels (from dataset → page → grid → card).
- **Responsive & Accessible Design:** Semantic HTML, ARIA labels, WCAG AA contrast compliance, and custom breakpoints for mobile/tablet devices.

---

## 2. Technologies Used

### Frontend Core
- **React (v19):** Functional components and modern React Hooks.
- **JSX:** Declarative UI syntax.
- **HTML5 & CSS3:** Semantic markup and custom CSS with CSS variables.

### React Libraries & Hooks
- **`react-router-dom` (v7):** Client-side SPA routing (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `Navigate`, `useParams`).
- **React Hooks:** `useState`, `useEffect`, `useRef`.

### Tooling & Build System
- **Vite:** Next-generation frontend tooling and bundler.
- **npm:** Package management.
- **oxlint:** Code linting and quality assurance.

---

## 3. Features

1. **Home Page (`/Home`):**
   - Hero banner section introducing Sneha Priya.
   - Simulated ~1-second mount loading sequence with an animated spinner.
   - Quick action link to explore projects.

2. **About Page (`/about`):**
   - Comprehensive background summary and academic focus.
   - Profile photograph.
   - Direct link to view full resume.
   - Integrated **Skills** grid displaying core programming languages, web technologies, and developer tools.

3. **Projects Page (`/projects`):**
   - Displays portfolio projects dynamically from `src/data/projects.js`.
   - Prop-drilled layout via `ProjectsGrid` into generic `ProjectCard` components.
   - **Independent State:** "View Details" button expands tech stack badges on a card-by-card basis without affecting sibling cards.

4. **Dynamic Project Detail Page (`/projects/:projectId`):**
   - Detailed project view driven by URL parameter `projectId` using `useParams()`.
   - Displays full project breakdown, complete tech stack badges, screenshot, and external repository/demo link.
   - Includes graceful fallback UI if an invalid project ID is entered.

5. **Contact Page (`/contact`):**
   - Contact detail cards (email, phone, LinkedIn).
   - **Controlled Contact Form:** All inputs (`name`, `email`, `address`, `message`) bound to React state with real-time error handling.
   - **Form Validation:** Disables the submit button until all required fields are correctly filled out.
   - Auto-dismissing success banner upon submission.

6. **Persistent Theme Toggle (Dark/Light):**
   - Header toggle switch allowed to flip between dark and light themes globally.
   - Theme choice persisted in `localStorage` and synchronized with `document.body` classes.

7. **Responsive Navigation & Shared Layout:**
   - Persistent `Navbar` and `Footer` across all page transitions.
   - Mobile slide-out drawer menu with hamburger toggle button.
   - Window resize listener automatically closes mobile menu on desktop screens.

8. **404 Catch-All Page:**
   - Custom fallback page for invalid route paths (`*`) with link returning to `/Home`.

---

## 4. Project Folder Structure

```text
react-sample/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── compiler.png
│   │   ├── contact.png
│   │   ├── cpp.png
│   │   ├── css.png
│   │   ├── email.png
│   │   ├── game-engine.png
│   │   ├── git.png
│   │   ├── hero-banner.jpg
│   │   ├── html.png
│   │   ├── java.png
│   │   ├── javascript.png
│   │   ├── linkedin.png
│   │   ├── mysql.png
│   │   ├── nodejs.png
│   │   ├── phone.png
│   │   ├── pickmyflick.png
│   │   ├── python.png
│   │   ├── react.png
│   │   ├── space_shooter.png
│   │   ├── tile_match.png
│   │   ├── typing.png
│   │   └── your-image.png
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectsGrid.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── projects.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── Projects.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 5. Component Tree

```text
App
├── Navbar
│   └── (Theme Switcher + NavLinks)
├── Routes
│   ├── Route path="/" (Redirects to /Home)
│   ├── Route path="/Home" (Home Page)
│   ├── Route path="/about" (About Page)
│   │   └── Skills
│   ├── Route path="/projects" (Projects Page)
│   │   └── ProjectsGrid
│   │       └── ProjectCard (Repeated via map)
│   ├── Route path="/projects/:projectId" (ProjectDetail Page)
│   ├── Route path="/contact" (Contact Page)
│   │   └── ContactForm
│   └── Route path="*" (NotFound 404 Page)
└── Footer
```

---

## 6. Component Tree Explanation

- **`App` (`src/App.jsx`):** Root top-level component. Initializes lifted theme state, handles theme side effects, and defines the router layout (`Navbar`, `Routes`, `Footer`).
- **`Navbar` (`src/components/Navbar.jsx`):** Shared header layout component. Contains logo, route navigation links (`NavLink`), hamburger menu for small viewports, and theme switch control.
- **`Footer` (`src/components/Footer.jsx`):** Shared footer layout component displaying copyright information across all routes.
- **`Home` (`src/pages/Home.jsx`):** Hero landing section. Features a simulated loading spinner on mount and call-to-action navigation.
- **`About` (`src/pages/About.jsx`):** Profile introduction section rendering personal background text, profile photo, resume download button, and child component `<Skills />`.
- **`Skills` (`src/components/Skills.jsx`):** Reusable grid rendering skill items with technology icons and titles.
- **`Projects` (`src/pages/Projects.jsx`):** Main portfolio showcase page that imports the project dataset from `src/data/projects.js` and renders `<ProjectsGrid />`.
- **`ProjectsGrid` (`src/components/ProjectsGrid.jsx`):** Intermediate container component that receives the list of projects via props and maps each object into a `<ProjectCard />`.
- **`ProjectCard` (`src/components/ProjectCard.jsx`):** Generic, reusable card component. Receives `id`, `title`, `description`, `techStack`, `image`, and `link` via props with zero hardcoded content. Manages instance-scoped expanded details state.
- **`ProjectDetail` (`src/pages/ProjectDetail.jsx`):** Dynamic page rendering detailed views for a specific project identified by `:projectId` in the URL parameter.
- **`Contact` (`src/pages/Contact.jsx`):** Page container holding contact information cards (email, phone, social) and the `<ContactForm />` component.
- **`ContactForm` (`src/components/ContactForm.jsx`):** Controlled form component handling stateful inputs (`name`, `email`, `address`, `message`), validation rules, error feedback, disabled submit button logic, and submission alert.
- **`NotFound` (`src/pages/NotFound.jsx`):** Fallback 404 error page rendered for unrecognized URL paths.

---

## 7. State-Lifting Decisions

State lifting was applied strategically to balance global state requirements with local component encapsulation:

1. **Lifted Theme State (`App.jsx`):**
   - **Why Lifted?** The dark/light theme state (`theme`) must be shared between the `Navbar` component (which renders the toggle switch) and the root application container/`document.body` (which applies CSS theme classes).
   - **Implementation:** State is maintained in `App.jsx` using `useState` and passed down to `Navbar` via props (`theme`, `toggleTheme`).

2. **Prop Drilling (2 Levels Deep):**
   - **Level 0 (Data Layer):** `src/data/projects.js` exports an array of 6 project objects.
   - **Level 1 (`Projects.jsx`):** Passes `projectList={projects}` prop to `ProjectsGrid.jsx`.
   - **Level 2 (`ProjectsGrid.jsx`):** Maps over `projectList` and passes individual object fields (`id`, `title`, `description`, `techStack`, `image`, `link`) as props to `ProjectCard.jsx`.
   - **Level 3 (`ProjectCard.jsx`):** Maps over `techStack` prop to render technology badges.

3. **Component-Scoped Local State:**
   - **`showDetails` in `ProjectCard.jsx`:** Maintained locally inside each `ProjectCard` instance. This guarantees that clicking "View Details" on one project card expands only that specific card and does not trigger expansion on sibling cards.
   - **`formData` & `errors` in `ContactForm.jsx`:** Controlled inputs and validation errors are encapsulated entirely within `ContactForm.jsx` because no other component needs access to unsubmitted contact form data.
   - **`isLoading` in `Home.jsx`:** Governs the simulated 1-second mount loading sequence solely for the Home route.

---

## 8. useEffect Hooks

The application implements 4 meaningful `useEffect` hooks, each with explicit dependency management and cleanup logic to prevent memory leaks:

1. **Theme Persistence & Body Class Sync (`App.jsx`):**
   - **Purpose:** Synchronizes `theme` changes to `localStorage` and toggles CSS class names (`dark-theme` / `light-theme`) on `document.body`.
   - **Dependencies:** `[theme]` (runs on initial mount and whenever theme changes).

2. **Simulated Mount Loading Sequence (`Home.jsx`):**
   - **Purpose:** Simulates a loading delay (~1 second) when navigating to the Home page by displaying a loading spinner until completion.
   - **Dependencies:** `[]` (runs once on component mount).
   - **Cleanup Function:** Executes `clearTimeout(timer)` on unmount to cancel pending timers if the user navigates away before 1 second.

3. **Responsive Mobile Menu Reset (`Navbar.jsx`):**
   - **Purpose:** Listens to window `resize` events and automatically closes the open mobile hamburger menu if the screen width expands beyond `768px`.
   - **Dependencies:** `[]` (runs once on component mount).
   - **Cleanup Function:** Executes `window.removeEventListener('resize', handleResize)` on unmount to prevent lingering event listeners.

4. **Form Real-Time Validation & Alert Timeout (`ContactForm.jsx`):**
   - **Purpose:** Re-evaluates validation rules on `formData` changes to populate error messages; manages auto-dismissing success alert timeouts.
   - **Dependencies:** `[formData]` (validation effect) and `[]` (timeout cleanup on unmount).
   - **Cleanup Function:** Executes `clearTimeout(successTimeoutRef.current)` on unmount.

---

## 9. Setup and Run Instructions

### Prerequisites
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

### Step-by-Step Execution

1. **Clone or Extract the Project:**
   ```bash
   cd "react sample"
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

4. **Build for Production:**
   ```bash
   npm run build
   ```
   Verifies that the application compiles cleanly into the `dist/` directory with zero TypeScript/JSX errors.

5. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 10. Routing

Client-side routing is configured using **React Router DOM v7**:
- **`BrowserRouter`:** Wraps the root layout in `App.jsx` to enable HTML5 history API navigation.
- **Shared Layout:** `<Navbar />` and `<Footer />` surround `<Routes>`, ensuring navigation controls remain visible across all route changes without page reloads.
- **Configured Routes:**
  - `path="/"`: Redirects automatically to `/Home` via `<Navigate to="/Home" replace />`.
  - `path="/Home"`: Renders `<Home />`.
  - `path="/about"`: Renders `<About />`.
  - `path="/projects"`: Renders `<Projects />`.
  - `path="/projects/:projectId"`: Dynamic route rendering `<ProjectDetail />`.
  - `path="/contact"`: Renders `<Contact />`.
  - `path="*"`: Catch-all 404 route rendering `<NotFound />`.

---

## 11. Dynamic Routing

Dynamic project detail pages are implemented using the URL parameter pattern `/projects/:projectId`:
- **Parameter Extraction:** `ProjectDetail.jsx` uses the `useParams()` hook to read `projectId` from the current URL.
- **Data Lookup:** Matches `projectId` against the `projects` dataset array:
  ```javascript
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  ```
- **Dynamic Content:** Renders detailed description, full tech stack list, project image, and direct external links corresponding to that specific project ID.
- **Fallback Handling:** If `projectId` does not match any record in `projects.js`, a "Project Not Found" card with a link back to `/projects` is displayed.

---

## 12. Navigation

- **No Full Page Reloads:** All navigation links utilize `<NavLink>` (in `Navbar.jsx`) and `<Link>` (in page components) instead of standard HTML `<a>` tags to maintain single-page application state.
- **Active Route Highlighting:** `<NavLink>` utilizes function-based `className` styling (`({ isActive }) => isActive ? 'active' : ''`) to highlight the currently active page in the header.
- **Mobile Menu Auto-Close:** Clicking any `<NavLink>` invokes `closeMenu()`, ensuring the mobile drawer automatically collapses after route selection.

---

## 13. Responsive Design

The application utilizes responsive CSS design techniques and breakpoints:
- **Mobile Breakpoint ($\le$ 480px):** Single-column grid layouts, full-width touch targets, adjusted font sizing, and compact padding.
- **Tablet Breakpoint ($\le$ 768px):** Navigation transitions from horizontal list to slide-out drawer menu toggled by a hamburger button.
- **Desktop Breakpoint (> 768px):** Multi-column grids (`repeat(auto-fit, minmax(300px, 1fr))`) and side-by-side flex layouts for About and Contact sections.

---

## 14. Accessibility

- **Semantic Markup:** Built using standard HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Form Association:** Every input field in `ContactForm.jsx` has explicit `<label htmlFor="...">` bindings paired with matching `id` attributes.
- **ARIA Attributes:** Hamburger toggle buttons use `aria-expanded` and `aria-label`; theme switch labels include descriptive `aria-label` tags; alerts use `role="alert"`.
- **WCAG AA Color Contrast:** High-contrast text colors maintained across both dark (`#f5f5f5` on dark backgrounds) and light mode (`#1e1b4b` on light backgrounds).
- **Keyboard & Focus States:** Interactive buttons and links support native keyboard navigation and visual hover/focus indicators.

---

## AI Assistance Disclosure

AI assistance was used for code formatting review, verifying React Hook edge cases (such as effect cleanup patterns), and generating detailed project documentation. All component logic, routing hierarchy, state implementations, and CSS styling were verified for academic compliance.