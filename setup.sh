#!/bin/bash

# AI Career Coach - Quick Setup Script
# This script helps you set up the AI Career Coach application quickly

echo "🚀 AI Career Coach - Quick Setup"
echo "================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm is installed: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo ""
    echo "⚙️ Creating .env file..."
    cat > .env << EOL
# Database Configuration
DATABASE_URL=your_neon_database_url_here

# Clerk Authentication - Replace with your actual keys from https://dashboard.clerk.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Clerk Redirect URLs (already configured correctly)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key_here
EOL
    echo "✅ Created .env file with template"
else
    echo "✅ .env file already exists"
fi

# Generate Prisma client
echo ""
echo "🗃️ Setting up database..."
npx prisma generate

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Edit the .env file with your actual API keys:"
echo "   - Get Neon database URL from: https://neon.tech/"
echo "   - Get Clerk keys from: https://dashboard.clerk.com/"
echo "   - Get Gemini API key from: https://makersuite.google.com/"
echo ""
echo "2. Push database schema:"
echo "   npx prisma db push"
echo ""
echo "3. Start the development server:"
echo "   npm run dev"
echo ""
echo "4. Open http://localhost:3000 in your browser"
echo ""
echo "📖 For detailed instructions, see SETUP_GUIDE.md"
