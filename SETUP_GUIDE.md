# 🚀 AI Career Coach - Complete Setup Guide

## 📋 Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Environment Configuration](#environment-configuration)
5. [Database Setup](#database-setup)
6. [Running the Application](#running-the-application)
7. [Features](#features)
8. [Troubleshooting](#troubleshooting)
9. [Development](#development)

## 🎯 Overview

AI Career Coach is a comprehensive career development platform powered by AI that helps users:
- Build professional resumes with AI assistance
- Generate tailored cover letters
- Practice interviews with AI-generated questions
- Get industry insights and career guidance
- Track career progress and goals

**Tech Stack:**
- **Frontend:** Next.js 15.1.4 with Turbopack, React, Tailwind CSS
- **Backend:** Next.js API Routes, Server Actions
- **Database:** PostgreSQL (Neon) with Prisma ORM
- **Authentication:** Clerk
- **AI:** Google Gemini API
- **Deployment:** Vercel-ready

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

### Required Accounts
You'll need to create accounts for the following services:
1. **Neon Database** - [Sign up here](https://neon.tech/)
2. **Clerk Authentication** - [Sign up here](https://clerk.com/)
3. **Google AI Studio** - [Sign up here](https://makersuite.google.com/)

## 📦 Installation

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd ai-career-coach-master
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

## ⚙️ Environment Configuration

### Step 1: Create Environment File
Create a `.env` file in the root directory:
```bash
touch .env
```

### Step 2: Configure Environment Variables
Add the following to your `.env` file:

```env
# Database Configuration
DATABASE_URL=your_neon_database_url_here

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Clerk Redirect URLs (keep these as-is)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key_here
```

### Step 3: Get Your API Keys

#### 🗄️ Database Setup (Neon)
1. Go to [Neon Console](https://console.neon.tech/)
2. Create a new project
3. Copy the connection string from your dashboard
4. Replace `your_neon_database_url_here` in `.env`

**Example Neon URL format:**
```
postgresql://username:password@ep-cool-name-123456.us-east-1.aws.neon.tech/neondb?sslmode=require
```

#### 🔐 Authentication Setup (Clerk)
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Choose "Next.js" as your framework
4. Copy the API keys from the dashboard:
   - Replace `your_clerk_publishable_key_here` with your publishable key
   - Replace `your_clerk_secret_key_here` with your secret key

#### 🤖 AI Setup (Google Gemini)
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Replace `your_gemini_api_key_here` with your API key

## 🗃️ Database Setup

### Step 1: Generate Prisma Client
```bash
npx prisma generate
```

### Step 2: Run Database Migrations
```bash
npx prisma db push
```

### Step 3: (Optional) View Database
```bash
npx prisma studio
```
This opens a web interface to view and edit your database at `http://localhost:5555`

## 🚀 Running the Application

### Method 1: Using npm (Recommended)
```bash
npm run dev
```

### Method 2: Using the provided batch file (Windows)
```bash
# Windows only
cmd /c "start-server.bat"
```

### Method 3: Using npx (Alternative)
```bash
npx next dev --turbopack
```

The application will be available at:
- **Local:** http://localhost:3000
- **Network:** http://your-local-ip:3000

## 🎯 Features

### 🏠 Home Page
- Hero section with call-to-action
- Feature highlights
- Testimonials and social proof

### 🔐 Authentication
- **Sign Up/Sign In** - Secure authentication via Clerk
- **Social Login** - Google, GitHub, etc.
- **Profile Management** - User profile and settings

### 📝 Onboarding
- **Industry Selection** - Choose your career field
- **Experience Level** - Set your experience level
- **Skills & Bio** - Add your skills and bio
- **AI Insights** - Get industry-specific insights

### 📄 Resume Builder
- **AI-Powered Creation** - Generate resumes using Gemini AI
- **Multiple Templates** - Choose from various designs
- **Export Options** - Download as PDF
- **Version Control** - Save and manage multiple versions

### 💼 Cover Letter Generator
- **Job-Specific Letters** - Tailored to job descriptions
- **AI Enhancement** - Improve with AI suggestions
- **Template Library** - Professional templates
- **Quick Generation** - Fast turnaround time

### 🎤 Interview Preparation
- **Mock Interviews** - Practice with AI-generated questions
- **Industry-Specific Questions** - Relevant to your field
- **Performance Tracking** - Track improvement over time
- **Answer Analysis** - Get feedback on responses

### 📊 Dashboard
- **Progress Tracking** - Monitor your career journey
- **Analytics** - Insights into your applications
- **Quick Actions** - Access all features quickly
- **Recent Activity** - See your latest actions

## 🔧 Troubleshooting

### Common Issues

#### 🔴 "User not found" Error
This was fixed in the latest update. If you still see this:
1. Restart the development server
2. Clear your browser cache
3. Sign out and sign in again

#### 🔴 Database Connection Issues
```bash
# Test your database connection
npx prisma db push
```
If this fails, check your `DATABASE_URL` in `.env`

#### 🔴 Clerk Authentication Issues
1. Verify your Clerk keys in `.env`
2. Check that redirect URLs match in Clerk dashboard
3. Ensure you're using the correct domain

#### 🔴 Gemini API Issues
Test your API key:
```bash
# PowerShell (Windows)
$headers = @{
    "Content-Type" = "application/json"
    "X-goog-api-key" = "your_api_key_here"
}
$body = @{
    contents = @(
        @{
            parts = @(
                @{
                    text = "Hello, test message"
                }
            )
        }
    )
} | ConvertTo-Json -Depth 10
Invoke-RestMethod -Uri "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" -Method POST -Headers $headers -Body $body
```

#### 🔴 npm/Node Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### 🔴 Port Already in Use
```bash
# Kill processes on port 3000 (Windows)
taskkill /F /IM node.exe

# Or use a different port
npm run dev -- -p 3001
```

### 📋 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Database commands
npx prisma generate      # Generate Prisma client
npx prisma db push       # Push schema to database
npx prisma db pull       # Pull schema from database
npx prisma studio        # Open database GUI
npx prisma migrate dev   # Create and apply migration

# Clear Next.js cache
rm -rf .next
```

### 🌐 Environment Specific Notes

#### Windows Users
- Use PowerShell or Command Prompt
- The provided `start-server.bat` file handles directory navigation
- Use `taskkill /F /IM node.exe` to stop Node processes

#### macOS/Linux Users
- Use Terminal
- Use `killall node` to stop Node processes
- Ensure proper file permissions

## 📁 Project Structure

```
ai-career-coach/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/                  # Main application pages
│   │   ├── dashboard/
│   │   ├── resume/
│   │   ├── ai-cover-letter/
│   │   ├── interview/
│   │   └── onboarding/
│   ├── api/                     # API routes
│   └── globals.css             # Global styles
├── actions/                     # Server actions
├── components/                  # Reusable components
│   └── ui/                     # UI components
├── data/                       # Static data
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── prisma/                     # Database schema
├── public/                     # Static assets
├── .env                        # Environment variables
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
Make sure to add all environment variables in your deployment platform:
- `DATABASE_URL`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `GEMINI_API_KEY`
- All Clerk redirect URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin feature-name`
6. Create a Pull Request

## 📞 Support

If you encounter any issues:
1. Check this README first
2. Look at the [Troubleshooting](#troubleshooting) section
3. Check the browser console for errors
4. Check the terminal output for server errors

## 📄 License

This project is licensed under the MIT License.

---

**Happy Coding! 🎉**

Built with ❤️ using Next.js, Clerk, Prisma, and Google Gemini AI.
