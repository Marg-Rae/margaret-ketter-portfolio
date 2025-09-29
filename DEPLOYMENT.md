# Deployment Guide

## GitHub Setup

1. Create a new repository on GitHub
2. Copy the repository URL (e.g., `https://github.com/yourusername/margaret-ketter-portfolio.git`)
3. Run these commands in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/yourusername/margaret-ketter-portfolio.git

# Push your code to GitHub
git push -u origin master
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Select your portfolio repository
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"
7. Your site will be live in minutes!

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign in with your GitHub account
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy site"

### Option 3: GitHub Pages
1. In your repository settings on GitHub
2. Go to "Pages" section
3. Select source as "GitHub Actions"
4. Create a `.github/workflows/deploy.yml` file with Next.js deployment action

## Environment Variables
If you add any API keys or sensitive data later, make sure to:
1. Create a `.env.local` file for local development
2. Add environment variables in your deployment platform
3. Never commit sensitive data to GitHub

## Custom Domain
Once deployed, you can add a custom domain:
1. Purchase a domain from a registrar
2. In your deployment platform, add the custom domain
3. Update your DNS settings to point to the deployment platform

## Post-Deployment Checklist
- [ ] Test all navigation links
- [ ] Verify contact form works
- [ ] Check responsive design on mobile
- [ ] Test loading speed
- [ ] Verify SEO meta tags
- [ ] Add Google Analytics (optional)