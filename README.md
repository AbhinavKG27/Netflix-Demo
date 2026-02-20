# 🎬 Netflix Demo

A Netflix-inspired streaming platform UI built with modern web technologies. This project replicates the look and feel of Netflix, featuring content browsing, authentication, and a clean responsive interface.

---

## 🚀 Tech Stack

- **React** – Component-based UI
- **TypeScript** – Type-safe JavaScript
- **Vite** – Fast build tooling and dev server
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Accessible, pre-built UI components
- **Supabase** – Backend-as-a-service (Auth + PostgreSQL database)

---

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)
- A [Supabase](https://supabase.com/) account

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the project and add the following:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project under **Settings → API**.

---

## 🛠️ Installation & Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/AbhinavKG27/Netflix-Demo.git

# 2. Navigate into the project directory
cd Netflix-Demo

# 3. Install dependencies
npm install
# or with bun
bun install

# 4. Start the development server
npm run dev
# or
bun run dev
```

The app will be available at `http://localhost:5173`.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests with Vitest |

---

## 🗄️ Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com/)
2. Navigate to **SQL Editor** in your Supabase dashboard
3. Run the migration files located in the `/supabase` folder to set up your database schema
4. Copy your **Project URL** and **Anon Key** from **Settings → API** into your `.env` file

---

## 🌐 Deployment

> ⚠️ **Deployment link coming soon.**


**Live Demo:** [https://demo-project-net-flix.netlify.app/](https://demo-project-net-flix.netlify.app/) 

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AbhinavKG27/Netflix-Demo)

1. Click the button above or go to [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Add the environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) in the Vercel project settings
4. Click **Deploy**

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com/) and connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add the environment variables in **Site Settings → Environment Variables**
5. Click **Deploy**

---

## 📁 Project Structure

```
Netflix-Demo/
├── public/             # Static assets
├── src/                # Source code
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility functions and configs
├── supabase/           # Supabase migrations and config
├── .env                # Environment variables (not committed)
├── index.html          # HTML entry point
├── tailwind.config.ts  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Project dependencies
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**AbhinavKG27** – [GitHub](https://github.com/AbhinavKG27)
