# 🌐 Personal Portfolio

A Modern, Responsive Personal Portfolio Showcasing My Software Development Journey, Projects, Skills and Achievements. Built with a Focus on Clean UI, Smooth Animations and Performant Code.

## ✨ Features

- **Responsive Design** — Fully Responsive Across All Devices with a Sleek Dark Theme
- **Smooth Animations** — Scroll-Triggered Fade-in Animations powered by Framer Motion
- **Project Showcase** — Dynamic Project Cards with Tech Stacks, Live Demos, and GitHub Links
- **Contact Form** — Functional Contact Form with Backend Email Integration via Nodemailer
- **Resume Download** — One Click Resume Download
- **Social Links** — Quick Access to GitHub, LinkedIn, LeetCode, Instagram and X

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React | UI Library |
| TypeScript | Type Safety |
| Vite | Build Tool & Dev Server |
| Framer Motion | Animations |
| React Router | Navigation |
| CSS | Styling |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express | Server Framework |
| Nodemailer | Email Service |
| TypeScript | Type Safety |

## 📁 Project Structure

```
Portfolio/
├── Frontend/
│   ├── public/
│   │   ├── Media/            # Photos, Resume
│   │   └── favicon.svg
│   └── src/
│       ├── components/       # React Components
│       ├── data/             # Portfolio Data
│       ├── types/            # TypeScript Types
│       ├── App.tsx
│       ├── index.css
│       └── main.tsx
├── Backend/
│   └── src/
│       ├── routes/           # API Routes
│       └── index.ts          # Server Entry
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

The App will be Available at `http://localhost:5173`.

### Backend

```bash
cd Backend
npm install
npm run dev
```

The Server will Start on `http://localhost:5000`.

### Environment Variables (Backend)

Create a `.env` File in the `Backend/` Directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

