<div align="center">
  <h1>🚀 Textcognito</h1>
  <p>
    <strong>A Modern Anonymous Messaging Platform</strong>
  </p>
  
  <p>
    <a href="https://textcognito.click">Preview</a> 
    <!-- <a href="#-getting-started">Get Started</a> • -->
    <!-- <a href="#-features">Features</a> -->
  </p>

  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

  <br />

  ![Textcognito Preview](/public/og-image.jpg)
</div>

<br />

**Textcognito** is a secure, anonymous messaging platform that enables users to receive honest feedback and secret messages from friends without compromising privacy. Built with the latest web technologies, it ensures a seamless and responsive experience across all devices.

## ✨ Features

- **🔐 100% Anonymous**: Advanced privacy protection. Sender identities are never logged or stored.
- **🔗 Custom Profile Links**: Generate unique URLs (e.g., `textcognito.click/u/yourname`) for easy sharing.
- **🤖 AI-Powered Filtering**: Integrated with Google GenAI to detect and filter improved spam/abuse checking.
- **⚡ Instant Delivery**: Real-time message syncing via Supabase Realtime.
- **📱 Mobile First**: Fully responsive design optimized for social media sharing.
- **📊 Engagement Stats**: Track simple view counts and message metrics.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), PostCSS, `tw-animate-css`
- **Database & Auth**: [Supabase](https://supabase.com/)
- **AI/ML**: [Google GenAI](https://ai.google.dev/) (Gemini Flash)
- **Icons**: Lucide React, Material UI Icons

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js 18+ 
- NPM or PNPM
- A [Supabase](https://supabase.com/) project
- A [Google AI Studio](https://aistudio.google.com/) API Key (optional, for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adebayo-jzs/incognito.git
   cd incognito
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory and add your keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_SITE_URL=baseUrl
   GEMINI_API_KEY=your_google_genai_key
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
incognito/
├── app/              # Next.js App Router pages and layouts
│   ├── u/[username]/ # Dynamic user profile routes
│   └── auth/         # Authentication routes
├── components/       # Reusable UI components
├── lib/              # Utility functions and Supabase clients
# ├── public/           # Static assets
└── public/           # Global styles
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Adedeji Samod**

- Twitter: [@theebayo](https://x.com/theebayo)
- Github: [@Adebayo-jzs](https://github.com/Adebayo-jzs)
- Portfolio: [theebayo-portfolio.vercel.app](https://theebayo-portfolio.vercel.app)

---

<div align="center">
  <sub>Built with ❤️ by Adedeji Samod</sub>
</div>