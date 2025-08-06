# 🎬 WatchItIfYouCan

Movie search app built with **React + React Router**, styled with utility classes (Tailwind-style). It uses **TMDB API** to display popular, top rated and upcoming movies, allows you to search by title and view detailed movie info.

> Feel free to open issues or PRs — constructive feedback is always welcome.

---

## 🚀 Quick Demo
- **Search bar**: Type a title, redirects to `/search?q=...` using `useNavigate`.  
- **Results**: The results page reads the `q` param with `useSearchParams` and fetches results from TMDB.  
- **Home lists**: Shows *Popular*, *Top Rated*, and *Upcoming* movies using the TMDB service.  
- **Details page**: Clicking a movie takes you to `/movie/:id` with full info (poster, overview, date, rating, genres).  
- **Routing**: Handled with React Router (`/`, `/search`, `/movie/:id`).

---

## 🧩 Features
- 🔎 Search by title with deep-link support (`/search?q=...`)
- 🏠 Home with 3 auto-updated TMDB movie lists
- 📄 Full detail view for each movie
- 🖼️ Results and items with poster, overview, release date, rating
- 🧭 SPA routing using React Router

---

## 🛠️ Tech Stack
- **React** + **React Router DOM**
- **Tailwind-like** utility classes for layout and styling
- **TMDB API** (popular, top_rated, upcoming, search, details)

---

## 📦 Installation

> Requirements: Node 18+ and npm

```bash
# 1) Install dependencies
npm install

# 2) Start the app
# If you're using Vite:
npm run dev
# Or if you're using CRA:
npm start
