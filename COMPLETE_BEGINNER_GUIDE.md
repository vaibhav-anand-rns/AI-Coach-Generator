# 🚀 COMPLETE BEGINNER'S GUIDE TO AI CAREER COACH

## 📋 What You'll Build
This guide will help you build and run an AI-powered career coaching application that includes:
- AI Resume Builder
- Cover Letter Generator  
- Interview Practice with AI
- Career Dashboard
- User Authentication

## 🛠 Prerequisites (What You Need to Install First)

### STEP 1: Install Node.js and npm
1. **Download Node.js:**
   - Go to https://nodejs.org/
   - Click "Download for Windows"
   - Download the "LTS" version (recommended)

2. **Install Node.js:**
   - Run the downloaded file
   - Click "Next" through all steps
   - Accept the license agreement
   - Keep all default settings
   - Click "Install"

3. **Verify Installation:**
   - Press `Windows Key + R`
   - Type `cmd` and press Enter
   - In the black window that opens, type: `node --version`
   - You should see something like `v20.11.0`
   - Type: `npm --version`
   - You should see something like `10.2.4`

### STEP 2: Install Git
1. **Download Git:**
   - Go to https://git-scm.com/download/win
   - Download will start automatically

2. **Install Git:**
   - Run the downloaded file
   - Keep all default settings
   - Click "Next" through all steps
   - Click "Install"

3. **Verify Installation:**
   - Open Command Prompt again (`Windows Key + R`, type `cmd`)
   - Type: `git --version`
   - You should see something like `git version 2.42.0`

### STEP 3: Install Visual Studio Code (Code Editor)
1. **Download VS Code:**
   - Go to https://code.visualstudio.com/
   - Click "Download for Windows"

2. **Install VS Code:**
   - Run the downloaded file
   - Accept the license agreement
   - Keep all default settings
   - **IMPORTANT:** Check "Add to PATH" option
   - Click "Install"

## 📁 STEP 4: Download the Project

### Option A: Download ZIP (Easier)
1. Go to the project repository on GitHub
2. Click the green "Code" button
3. Click "Download ZIP"
4. Extract the ZIP file to `C:\Projects\ai-career-coach\`

### Option B: Clone with Git
1. **Open Command Prompt:**
   - Press `Windows Key + R`
   - Type `cmd` and press Enter

2. **Navigate to desired location:**
   ```cmd
   cd C:\
   mkdir Projects
   cd Projects
   ```

3. **Clone the repository:**
   ```cmd
   git clone https://github.com/YOUR_USERNAME/ai-career-coach-master.git
   cd ai-career-coach-master
   ```

## 🔧 STEP 5: Open Project in VS Code

1. **Open VS Code:**
   - Click the Windows Start button
   - Type "Visual Studio Code"
   - Click on the app

2. **Open the project:**
   - In VS Code, click "File" → "Open Folder"
   - Navigate to `C:\Projects\ai-career-coach-master\`
   - Click "Select Folder"

3. **Open Terminal in VS Code:**
   - Press `Ctrl + Shift + ` (backtick key)
   - OR go to "Terminal" → "New Terminal"

## 📦 STEP 6: Install Project Dependencies

In the VS Code terminal, run these commands **one by one**:

```powershell
# Install all required packages (this will take 2-5 minutes)
npm install
```

**What this does:** Downloads all the libraries and tools the project needs to run.

**If you see any warnings:** That's normal, just wait for it to finish.

## 🌐 STEP 7: Set Up Database (Neon PostgreSQL)

### 7.1 Create Neon Account
1. **Go to Neon:**
   - Visit https://console.neon.tech/
   - Click "Sign Up"
   - Use GitHub, Google, or email to sign up

2. **Create a Project:**
   - After signing up, click "Create Project"
   - Project name: `ai-career-coach`
   - Keep other settings as default
   - Click "Create Project"

3. **Get Database URL:**
   - After project is created, you'll see a "Connection string"
   - It looks like: `postgresql://username:password@ep-xyz.us-east-1.aws.neon.tech/neondb?sslmode=require`
   - **COPY THIS ENTIRE STRING** - you'll need it in Step 8

## 🔐 STEP 8: Set Up Authentication (Clerk)

### 8.1 Create Clerk Account
1. **Go to Clerk:**
   - Visit https://dashboard.clerk.com/
   - Click "Sign Up"
   - Create account with email or GitHub

2. **Create Application:**
   - Click "Create Application"
   - Application name: `AI Career Coach`
   - Select "Email" and "Google" for sign-in methods
   - Click "Create Application"

3. **Get API Keys:**
   - After creation, you'll see:
     - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...`
     - `CLERK_SECRET_KEY=sk_test_...`
   - **COPY BOTH OF THESE** - you'll need them in Step 9

4. **Configure URLs:**
   - In Clerk dashboard, go to "Paths"
   - Set Sign-in URL: `/sign-in`
   - Set Sign-up URL: `/sign-up`
   - Set After sign-in URL: `/onboarding`
   - Set After sign-up URL: `/onboarding`

## 🤖 STEP 9: Set Up AI (Google Gemini)

### 9.1 Get Gemini API Key
1. **Go to Google AI Studio:**
   - Visit https://makersuite.google.com/app/apikey
   - Sign in with your Google account

2. **Create API Key:**
   - Click "Create API Key"
   - Select "Create API key in new project"
   - **COPY THE API KEY** - it starts with `AIzaSy...`

## ⚙️ STEP 10: Configure Environment Variables

1. **Create .env file:**
   - In VS Code, right-click in the file explorer
   - Click "New File"
   - Name it exactly: `.env` (with the dot at the beginning)

2. **Add your configuration:**
   Copy and paste this into the `.env` file, replacing the values with YOUR actual keys:

```env
# Database URL (Replace with your Neon connection string)
DATABASE_URL=postgresql://username:password@ep-xyz.us-east-1.aws.neon.tech/neondb?sslmode=require

# Clerk Authentication (Replace with your Clerk keys)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Clerk Redirect URLs (Keep these exactly as shown)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google Gemini AI (Replace with your Gemini API key)
GEMINI_API_KEY=AIzaSyB_your_gemini_api_key_here
```

3. **Save the file:**
   - Press `Ctrl + S` to save

**⚠️ IMPORTANT:** Never share your `.env` file or commit it to Git!

## 🗄️ STEP 11: Set Up Database Schema

In the VS Code terminal, run these commands **one by one**:

```powershell
# Generate Prisma client
npx prisma generate
```

```powershell
# Push database schema to Neon
npx prisma db push
```

**What this does:** Creates all the necessary tables in your database.

**Expected output:** You should see "✅ Database synchronized successfully"

## 🚀 STEP 12: Run the Application

In the VS Code terminal, run:

```powershell
npm run dev
```

**Expected output:**
```
✓ Ready in 3.2s
▲ Next.js 15.1.4
- Local:        http://localhost:3000
- Network:      http://192.168.1.100:3000
```

## 🌐 STEP 13: Open Your Application

1. **Open your browser:**
   - Open Chrome, Firefox, or Edge
   - Go to: http://localhost:3000

2. **You should see:**
   - The AI Career Coach homepage
   - A clean, modern interface
   - Sign In/Sign Up buttons

## 🎯 STEP 14: Test Your Application

### 14.1 Create an Account
1. Click "Sign Up"
2. Enter your email and password
3. Complete the verification process
4. You should be redirected to onboarding

### 14.2 Test Features
1. **Onboarding:** Complete your profile setup
2. **Dashboard:** View your career dashboard
3. **Resume Builder:** Try creating a resume
4. **Cover Letter:** Generate a cover letter
5. **Interview Practice:** Start an interview session

## 🛠️ STEP 15: Development Tools (Optional but Helpful)

### 15.1 Database Viewer
To see your database tables:
```powershell
npx prisma studio
```
This opens a web interface at http://localhost:5555

### 15.2 Check for Errors
If something isn't working:
```powershell
npm run lint
```

## 🚨 Troubleshooting Common Issues

### Issue 1: "Command not found"
**Problem:** You get "node is not recognized" or similar
**Solution:** 
1. Restart your computer
2. Reinstall Node.js with "Add to PATH" checked

### Issue 2: "Port 3000 is already in use"
**Problem:** You see this error when running `npm run dev`
**Solution:**
1. Press `Ctrl + C` in terminal
2. Type: `netstat -ano | findstr :3000`
3. Kill the process or use a different port:
   ```powershell
   npm run dev -- -p 3001
   ```

### Issue 3: Database Connection Error
**Problem:** "Can't connect to database"
**Solution:**
1. Check your `DATABASE_URL` in `.env`
2. Make sure you copied the entire connection string from Neon
3. Try running `npx prisma db push` again

### Issue 4: Authentication Not Working
**Problem:** Can't sign in/up
**Solution:**
1. Check your Clerk keys in `.env`
2. Verify URLs in Clerk dashboard match exactly
3. Clear browser cache and cookies

### Issue 5: AI Features Not Working
**Problem:** Resume/Cover letter generation fails
**Solution:**
1. Check your `GEMINI_API_KEY` in `.env`
2. Make sure you have billing enabled in Google Cloud (if required)
3. Check API usage limits

## 📱 STEP 16: Using Your Application

### Creating Resumes
1. Go to Dashboard → Resume Builder
2. Fill in your information
3. Click "Generate with AI"
4. Download as PDF

### Generating Cover Letters
1. Go to Dashboard → Cover Letters
2. Enter job description
3. Let AI generate personalized content
4. Edit and download

### Interview Practice
1. Go to Dashboard → Interview Practice
2. Select your industry/role
3. Practice with AI-generated questions
4. Get feedback on your answers

## 🌍 STEP 17: Making Changes (For Developers)

### File Structure Overview
```
├── app/                    # Main application pages
│   ├── (auth)/            # Login/signup pages
│   ├── (main)/            # Main app features
│   └── api/               # Backend API endpoints
├── components/            # Reusable UI components
├── actions/              # Server-side functions
├── lib/                  # Utility functions
├── prisma/               # Database schema
└── public/               # Images and static files
```

### Making UI Changes
- Edit files in `app/` folders
- Modify components in `components/`
- Styles are in `app/globals.css`

### Adding New Features
1. Create new pages in `app/(main)/`
2. Add database models in `prisma/schema.prisma`
3. Run `npx prisma db push` after schema changes

## 🚀 STEP 18: Deployment (Going Live)

### Deploy to Vercel (Free)
1. **Push to GitHub:**
   ```powershell
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy:**
   - Go to https://vercel.com/
   - Sign up with GitHub
   - Click "Import Project"
   - Select your repository
   - Add environment variables from your `.env` file
   - Click "Deploy"

Your app will be live at a URL like: `https://your-app-name.vercel.app`

## 🎉 Congratulations!

You've successfully:
✅ Set up a complete development environment
✅ Built an AI-powered career coaching application
✅ Integrated authentication, database, and AI features
✅ Deployed your application to the web

## 📚 Next Steps

1. **Customize the design** - Edit the UI to match your style
2. **Add new features** - Implement your own ideas
3. **Improve AI prompts** - Fine-tune the AI responses
4. **Add more integrations** - Connect to job boards, LinkedIn, etc.

## 🆘 Need Help?

If you're stuck:
1. Check the error message carefully
2. Search the error on Google
3. Ask on Stack Overflow
4. Check the project's GitHub issues
5. Read the detailed documentation in other files

## 📝 Important Notes

- Keep your `.env` file secret
- Never commit sensitive keys to Git
- Regularly update your dependencies
- Monitor your API usage to avoid charges
- Backup your database regularly

---

**🎯 You now have a fully functional AI Career Coach application!**

This application includes:
- User authentication and profiles
- AI-powered resume generation
- Smart cover letter creation
- Interactive interview practice
- Career progress tracking
- Modern, responsive design

**Built with modern web technologies and ready for real-world use!**
