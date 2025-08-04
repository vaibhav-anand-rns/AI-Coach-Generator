# 🚀 Deployment Guide - AI Career Coach

## 📋 Table of Contents
1. [Vercel Deployment (Recommended)](#vercel-deployment)
2. [Netlify Deployment](#netlify-deployment)
3. [Railway Deployment](#railway-deployment)
4. [Self-Hosted Deployment](#self-hosted-deployment)
5. [Environment Variables](#environment-variables)
6. [Domain Configuration](#domain-configuration)

## 🌟 Vercel Deployment (Recommended)

Vercel is the easiest and most optimized platform for Next.js applications.

### Step 1: Prepare Your Repository
```bash
# Make sure your code is pushed to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** Leave empty (Next.js default)

### Step 3: Environment Variables
Add these environment variables in Vercel:

```env
DATABASE_URL=your_neon_production_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
GEMINI_API_KEY=your_gemini_api_key
```

### Step 4: Deploy
1. Click "Deploy"
2. Wait for deployment to complete
3. Your app will be live at `https://your-app-name.vercel.app`

### Step 5: Configure Clerk for Production
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Add your production domain to allowed origins
3. Update redirect URLs if needed

## 🌊 Netlify Deployment

### Step 1: Build Configuration
Create `netlify.toml` in your root directory:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 2: Deploy
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

## 🚄 Railway Deployment

### Step 1: Setup Railway
1. Go to [Railway](https://railway.app/)
2. Connect your GitHub repository
3. Railway will auto-detect Next.js

### Step 2: Environment Variables
Add your environment variables in Railway dashboard

### Step 3: Database
Railway can provide PostgreSQL database:
1. Add PostgreSQL service
2. Use the provided DATABASE_URL

## 🖥️ Self-Hosted Deployment

### Using PM2 (Production Process Manager)

```bash
# Install PM2 globally
npm install -g pm2

# Build your application
npm run build

# Start with PM2
pm2 start npm --name "ai-career-coach" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

### Using Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t ai-career-coach .
docker run -p 3000:3000 ai-career-coach
```

## ⚙️ Environment Variables

### Required Variables
```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...

# Clerk URLs (update domain for production)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# AI
GEMINI_API_KEY=AIzaSyB...
```

### Optional Variables
```env
# Analytics (if added)
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID

# Monitoring (if added)
SENTRY_DSN=your_sentry_dsn

# Email (if added)
RESEND_API_KEY=your_resend_key
```

## 🌐 Domain Configuration

### Custom Domain on Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### SSL Certificate
- Vercel automatically provides SSL certificates
- For self-hosted: Use Let's Encrypt with Certbot

### DNS Configuration
```
# A Record
Type: A
Name: @
Value: [Your server IP]

# CNAME Record (for www)
Type: CNAME
Name: www
Value: your-domain.com
```

## 🔧 Production Optimization

### Next.js Configuration
Update `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images
  images: {
    optimize: true,
    formats: ['image/webp', 'image/avif'],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### Database Optimization
```bash
# Create database indexes for better performance
npx prisma db push
```

### Monitoring
Add monitoring tools:
- **Vercel Analytics:** Built-in for Vercel deployments
- **Google Analytics:** For user tracking
- **Sentry:** For error monitoring

## 🧪 Testing Production Build Locally

```bash
# Build for production
npm run build

# Start production server
npm start

# Test at http://localhost:3000
```

## 🚨 Troubleshooting Deployment

### Common Issues

**Build Failures:**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**Environment Variable Issues:**
- Ensure all required variables are set
- Check for typos in variable names
- Verify API keys are valid

**Database Connection Issues:**
- Verify DATABASE_URL is correct
- Check database is accessible from deployment platform
- Run `npx prisma db push` after deployment

**Clerk Authentication Issues:**
- Add production domain to Clerk dashboard
- Update redirect URLs for production
- Check API keys are production keys

### Performance Issues
```bash
# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

## 📊 Post-Deployment Checklist

- [ ] Application loads correctly
- [ ] All pages are accessible
- [ ] Authentication works
- [ ] Database connections work
- [ ] AI features are functional
- [ ] Environment variables are set
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate is active
- [ ] Analytics/monitoring set up
- [ ] Error tracking configured

## 🔄 Continuous Deployment

### GitHub Actions (for Vercel)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

**Happy Deploying! 🚀**

Your AI Career Coach application is now ready for the world!
