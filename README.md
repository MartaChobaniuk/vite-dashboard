#Dashboard
A simple admin dashboard built with React, Vite, TypeScript, and TailwindCSS.
Includes routing, reusable components, dark mode toggle, and mock data.

Setup Instructions
# 1. Clone the repository
git clone https://github.com/MartaChobaniuk/vite-dashboard.git
cd vite-dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

Project Structure
src/
├── components/        # Reusable UI components (Sidebar, MetricCard)
├── data/              # Mock data (users.ts)
├── pages/             # Route pages (Overview, Users, Settings)
├── App.tsx            # Main layout with sidebar and routing
├── main.tsx           # React root + Tailwind CSS import
└── index.css          # Tailwind CSS directives and global styles

Implementation Details
# 1. Routing
Routing is handled using React Router v6 (react-router-dom):
Configured inside App.tsx using <BrowserRouter>, <Routes>, and <Route>.
Three main routes:
/overview – metrics dashboard
/users – table with mock users and sorting
/settings – form with interactive fields

# 2. State Management
This project uses local component state via React’s useState():
No global state manager (like Redux or Zustand) is needed for this small scope.

# 3. Components
The app is built with reusable UI components:
- Sidebar - navigation panel with links to each page; active link highlighting via NavLink.
- MetricCard - reusable card for showing a title, value, and optional icon; used in Overview.
- Pages (pages/) - self-contained components representing routes. Each page handles its own layout and logic.