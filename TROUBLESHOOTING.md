# 🔧 Troubleshooting Guide - AI Career Coach

## 📋 Quick Reference

### 🚨 Emergency Commands
```bash
# Stop all Node processes
taskkill /F /IM node.exe  # Windows
killall node             # macOS/Linux

# Clear all caches
npm cache clean --force
rm -rf .next node_modules/.cache

# Reinstall everything
rm -rf node_modules package-lock.json
npm install

# Reset database
npx prisma db push --force-reset
```

## 🔍 Common Issues & Solutions

### 1. 🚫 "User not found" Error

**Problem:** Application throws "User not found" when accessing dashboard or other authenticated pages.

**Solution:**
```bash
# This was fixed in the latest update. If you still see this:
1. Restart the development server
2. Clear browser cache
3. Sign out and sign in again
```

**Root Cause:** The application wasn't properly creating user records in the database when users signed in with Clerk.

**Prevention:** The `checkUser()` function now automatically creates users if they don't exist.

---

### 2. 🗄️ Database Connection Issues

**Symptoms:**
- "P1001: Can't reach database server"
- "Connection timeout"
- Prisma errors

**Solutions:**
```bash
# Test database connection
npx prisma db push

# Check connection string
echo $DATABASE_URL  # macOS/Linux
echo %DATABASE_URL% # Windows CMD
$env:DATABASE_URL   # Windows PowerShell

# Reset and regenerate database
npx prisma generate
npx prisma db push
```

**Common Fixes:**
1. **Wrong DATABASE_URL format:**
   ```env
   # ❌ Wrong
   DATABASE_URL=postgresql://user:pass@host:5432/db
   
   # ✅ Correct (with SSL)
   DATABASE_URL=postgresql://user:pass@host:5432/db?sslmode=require
   ```

2. **Neon database sleeping:**
   - Neon free tier databases sleep after inactivity
   - Visit Neon console to wake up the database
   - Consider upgrading to Pro for always-on databases

3. **IP restrictions:**
   - Check if your IP is whitelisted in Neon
   - Add 0.0.0.0/0 for development (not recommended for production)

---

### 3. 🔐 Clerk Authentication Issues

**Symptoms:**
- "Invalid API key"
- Infinite redirect loops
- Sign-in not working

**Solutions:**
```bash
# Check Clerk configuration
1. Verify API keys in .env
2. Check Clerk dashboard settings
3. Ensure redirect URLs match
```

**Common Fixes:**
1. **Wrong API keys:**
   ```env
   # Make sure you're using the correct keys
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_... # For development
   CLERK_SECRET_KEY=sk_test_...                  # For development
   ```

2. **Incorrect redirect URLs:**
   - In Clerk Dashboard → Configure → Paths
   - Ensure these match your `.env` file:
   ```env
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
   ```

3. **Domain mismatch:**
   - Add `localhost:3000` to allowed origins in Clerk
   - For production, add your production domain

---

### 4. 🤖 Gemini AI Issues

**Symptoms:**
- "Invalid API key"
- "API quota exceeded"
- AI features not working

**Solutions:**
```bash
# Test Gemini API
curl -H "Content-Type: application/json" \
     -H "X-goog-api-key: YOUR_API_KEY" \
     -X POST \
     -d '{"contents":[{"parts":[{"text":"Hello"}]}]}' \
     https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
```

**Common Fixes:**
1. **Invalid API key:**
   - Get a new key from [Google AI Studio](https://makersuite.google.com/)
   - Ensure the key starts with `AIzaSyB`

2. **Quota exceeded:**
   - Check your usage in Google AI Studio
   - Wait for quota reset or upgrade your plan

3. **Region restrictions:**
   - Gemini API might not be available in your region
   - Use a VPN or try a different API key

---

### 5. 🚀 Development Server Issues

**Symptoms:**
- Server won't start
- "Port already in use"
- "Module not found"

**Solutions:**
```bash
# Kill processes on port 3000
taskkill /F /IM node.exe  # Windows
lsof -ti:3000 | xargs kill -9  # macOS/Linux

# Use different port
npm run dev -- -p 3001

# Fix module issues
rm -rf node_modules
npm install
```

**Common Fixes:**
1. **Port conflicts:**
   ```bash
   # Find what's using port 3000
   netstat -ano | findstr :3000  # Windows
   lsof -i :3000                 # macOS/Linux
   ```

2. **Node version issues:**
   ```bash
   # Check Node version (requires 18+)
   node --version
   
   # Use nvm to switch versions
   nvm use 18
   ```

3. **Permission issues:**
   ```bash
   # Fix npm permissions (macOS/Linux)
   sudo chown -R $(whoami) ~/.npm
   
   # Or use npx instead of global installs
   npx next dev
   ```

---

### 6. 📱 Browser Issues

**Symptoms:**
- White screen
- JavaScript errors
- Features not working

**Solutions:**
1. **Clear browser cache:**
   - Chrome: Ctrl+Shift+Del
   - Firefox: Ctrl+Shift+Del
   - Safari: Cmd+Option+E

2. **Check browser console:**
   - Press F12 to open DevTools
   - Look for errors in Console tab
   - Check Network tab for failed requests

3. **Disable browser extensions:**
   - Try in incognito/private mode
   - Disable ad blockers and security extensions

---

### 7. 🎨 Styling Issues

**Symptoms:**
- Layout broken
- Missing styles
- Components look wrong

**Solutions:**
```bash
# Rebuild Tailwind CSS
npm run dev

# Clear Next.js cache
rm -rf .next

# Check for CSS conflicts
# Look in browser DevTools → Elements → Styles
```

---

### 8. 📦 Package Issues

**Symptoms:**
- Import errors
- Module not found
- Version conflicts

**Solutions:**
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Fix peer dependency warnings
npm install --legacy-peer-deps

# Verify package integrity
npm audit
npm audit fix
```

---

## 🔬 Advanced Debugging

### Environment Variables Debug
```bash
# Create debug script
echo "console.log('DATABASE_URL:', process.env.DATABASE_URL?.substring(0, 20) + '...');" > debug.js
echo "console.log('CLERK_SECRET_KEY:', process.env.CLERK_SECRET_KEY?.substring(0, 20) + '...');" >> debug.js
echo "console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY?.substring(0, 20) + '...');" >> debug.js
node -r dotenv/config debug.js
rm debug.js
```

### Database Debug
```bash
# Check database schema
npx prisma db pull
npx prisma studio

# Check database content
npx prisma studio
# Open http://localhost:5555
```

### Network Debug
```bash
# Check if services are reachable
ping neon.tech
nslookup api.clerk.dev
curl -I https://generativelanguage.googleapis.com/
```

## 📊 Performance Issues

### Slow Loading
1. **Check bundle size:**
   ```bash
   npm install -g @next/bundle-analyzer
   ANALYZE=true npm run build
   ```

2. **Optimize images:**
   - Use Next.js Image component
   - Compress images before upload
   - Use modern formats (WebP, AVIF)

3. **Database optimization:**
   - Add database indexes
   - Optimize queries
   - Use database connection pooling

### Memory Issues
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run dev

# Monitor memory usage
node --inspect npm run dev
# Open chrome://inspect in Chrome
```

## 🎯 Platform-Specific Issues

### Windows Issues
```powershell
# Fix path issues
$env:PATH += ";C:\Program Files\nodejs"

# Fix line ending issues
git config --global core.autocrlf input

# PowerShell execution policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### macOS Issues
```bash
# Fix permission issues
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Fix Xcode tools
xcode-select --install
```

### Linux Issues
```bash
# Fix Node.js installation
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Fix permissions
sudo chown -R $USER:$GROUP ~/.npm
```

## 🆘 Getting Help

### Before Asking for Help
1. **Check this troubleshooting guide**
2. **Search existing issues** on GitHub
3. **Check browser console** for errors
4. **Check terminal output** for server errors
5. **Try the solution** in a fresh environment

### Information to Include
When reporting issues, include:
- **Operating System:** Windows 11, macOS 12, Ubuntu 20.04, etc.
- **Node.js version:** `node --version`
- **npm version:** `npm --version`
- **Browser:** Chrome 91, Firefox 89, etc.
- **Error message:** Full error text
- **Steps to reproduce:** What you did before the error
- **Environment variables:** (without sensitive values)

### Support Channels
1. **GitHub Issues:** For bugs and feature requests
2. **Discord/Slack:** For quick questions
3. **Stack Overflow:** For technical questions
4. **Documentation:** Check README and guides

## 🔄 Maintenance

### Regular Maintenance
```bash
# Weekly maintenance
npm audit
npm outdated
npm update

# Monthly maintenance
rm -rf node_modules package-lock.json
npm install

# Clear caches
npm cache clean --force
rm -rf .next
```

### Security Updates
```bash
# Check for security issues
npm audit

# Fix security issues
npm audit fix

# Force fix (be careful)
npm audit fix --force
```

---

**Remember:** When in doubt, restart the development server and clear your browser cache. This fixes 80% of issues! 🔄
