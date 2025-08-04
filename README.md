# 🚀 AI Career Coach - Full Stack Application

[![Next.js](https://img.shields.io/badge/Next.js-15.1.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io/)
[![Neon](https://img.shields.io/badge/Neon-Database-00E599?style=for-the-badge&logo=postgresql)](https://neon.tech/)
[![Gemini](https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/)

![AI Career Coach Banner](https://github.com/user-attachments/assets/eee79242-4056-4d19-b655-2873788979e1)

## 📺 Tutorial
**Watch the complete tutorial:** https://youtu.be/UbXpRv5ApKA

## 🎯 Overview

AI Career Coach is a comprehensive career development platform that leverages AI to help users advance their careers. Built with modern web technologies and powered by Google Gemini AI.

### ✨ Key Features
- 🤖 **AI-Powered Resume Builder** - Generate professional resumes with AI assistance
- 📝 **Smart Cover Letter Generator** - Create tailored cover letters for any job
- 🎤 **Interview Preparation** - Practice with AI-generated interview questions
- 📊 **Career Dashboard** - Track your progress and get insights
- 🔐 **Secure Authentication** - Powered by Clerk
- 📱 **Responsive Design** - Works perfectly on all devices

### 🛠 Tech Stack
- **Frontend:** Next.js 15.1.4, React, Tailwind CSS, Shadcn UI
- **Backend:** Next.js API Routes, Server Actions
- **Database:** PostgreSQL (Neon) with Prisma ORM
- **Authentication:** Clerk
- **AI:** Google Gemini API
- **Styling:** Tailwind CSS + Shadcn UI Components

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone <repository-url>
cd ai-career-coach-master
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:

```env
# Database (Get from https://neon.tech/)
DATABASE_URL=postgresql://username:password@your-neon-url.neon.tech/neondb?sslmode=require

# Clerk Authentication (Get from https://clerk.com/)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Clerk Redirect URLs (Keep these as-is)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google Gemini AI (Get from https://makersuite.google.com/)
GEMINI_API_KEY=AIzaSyB_your_gemini_api_key_here
```

### 3. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 4. Run the Application
```bash
npm run dev
```

Visit http://localhost:3000 to see your application!

## 📖 Setup Guides

### 🔰 **For Complete Beginners (Zero Knowledge)**
👉 **[COMPLETE_BEGINNER_GUIDE.md](./COMPLETE_BEGINNER_GUIDE.md)** - Step-by-step guide with every single detail

### 🚀 **For Developers (Quick Setup)**  
👉 **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Fast track setup for experienced developers

### 🤖 **For AI Assistants/Copilots**
👉 **[COPILOT_INSTRUCTION_GUIDE.md](./COPILOT_INSTRUCTION_GUIDE.md)** - Instructions for AI assistants to help users with this project

## 🔑 Getting Your API Keys

### 🗄️ Neon Database
1. Visit [Neon Console](https://console.neon.tech/)
2. Create a new project
3. Copy the connection string

### 🔐 Clerk Authentication
1. Visit [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Copy your publishable and secret keys

### 🤖 Google Gemini AI
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key

## 📁 Project Structure

```
├── app/                 # Next.js App Router
│   ├── (auth)/         # Authentication pages
│   ├── (main)/         # Main application
│   └── api/            # API routes
├── components/         # Reusable components
├── actions/           # Server actions
├── lib/               # Utilities
├── prisma/            # Database schema
└── public/            # Static assets
```

## 🎯 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npx prisma studio   # Open database GUI
```

## 🔧 Troubleshooting

### Common Issues

**"User not found" Error:**
- Restart the development server
- Clear browser cache and sign in again

**Database Connection Issues:**
- Verify your `DATABASE_URL` in `.env`
- Run `npx prisma db push`

**Authentication Issues:**
- Check Clerk keys in `.env`
- Verify redirect URLs in Clerk dashboard

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by the community**

For questions or support, check the [detailed setup guide](./SETUP_GUIDE.md) or open an issue!
