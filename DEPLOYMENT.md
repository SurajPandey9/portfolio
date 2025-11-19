# 🚀 Deployment Guide

This guide will help you deploy your 3D portfolio website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Replaced all placeholder content in `src/data/portfolio-data.ts`
- [ ] Added your images to `public/images/`
- [ ] Added your resume to `public/resume/`
- [ ] Updated SEO metadata in `src/app/layout.tsx`
- [ ] Set up EmailJS and have your credentials ready
- [ ] Tested the site locally (`npm run dev`)
- [ ] Built the project successfully (`npm run build`)
- [ ] Committed all changes to Git
- [ ] Pushed to GitHub/GitLab/Bitbucket

---

## 🔷 Deploy to Vercel (Recommended)

Vercel is the easiest and recommended platform for Next.js applications.

### Method 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Add Environment Variables**
   - In project settings, go to "Environment Variables"
   - Add:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain on Vercel

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for DNS propagation (can take up to 48 hours)

---

## 🔷 Deploy to Netlify

### Method 1: Deploy via Netlify Dashboard

1. **Push to GitHub** (same as Vercel)

2. **Import to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or higher

4. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add your EmailJS credentials

5. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `https://your-site.netlify.app`

### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

## 🔷 Deploy to AWS Amplify

1. **Push to GitHub**

2. **Create Amplify App**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

3. **Configure Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Add Environment Variables**
   - In app settings, add your EmailJS credentials

5. **Deploy**
   - Save and deploy
   - Your site will be live at `https://main.xxxxx.amplifyapp.com`

---

## 🔷 Deploy to Railway

1. **Push to GitHub**

2. **Create Railway Project**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

3. **Configure**
   - Railway auto-detects Next.js
   - Add environment variables in the Variables tab

4. **Deploy**
   - Railway will automatically deploy
   - Your site will be live at `https://your-app.up.railway.app`

---

## 🔷 Deploy to Render

1. **Push to GitHub**

2. **Create Web Service**
   - Go to [render.com](https://render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository

3. **Configure**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Add environment variables

4. **Deploy**
   - Click "Create Web Service"
   - Your site will be live at `https://your-app.onrender.com`

---

## 🔷 Deploy to DigitalOcean App Platform

1. **Push to GitHub**

2. **Create App**
   - Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
   - Click "Create App"
   - Connect your GitHub repository

3. **Configure**
   - Select Node.js
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - Add environment variables

4. **Deploy**
   - Review and create
   - Your site will be live at `https://your-app.ondigitalocean.app`

---

## 🌐 Custom Domain Setup

### General Steps (applies to most platforms):

1. **Purchase a domain** from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare

2. **Add domain to hosting platform**
   - Follow platform-specific instructions above

3. **Update DNS records**
   - Add A record or CNAME as instructed by your hosting platform
   - Example for Vercel:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

4. **Wait for DNS propagation**
   - Can take 1-48 hours
   - Check status: [whatsmydns.net](https://www.whatsmydns.net/)

5. **Enable HTTPS**
   - Most platforms auto-provision SSL certificates
   - If not, use Let's Encrypt (free)

---

## 📊 Post-Deployment

### 1. Test Your Site

- [ ] All pages load correctly
- [ ] 3D scenes render properly
- [ ] Contact form works
- [ ] Theme toggle works
- [ ] All links work
- [ ] Images load
- [ ] Mobile responsive
- [ ] Performance is good

### 2. Set Up Analytics

**Google Analytics:**
1. Create GA4 property
2. Add tracking code to `src/app/layout.tsx`

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

Add to `src/app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. Set Up Monitoring

- **Vercel:** Built-in monitoring
- **Netlify:** Built-in analytics
- **Sentry:** For error tracking
- **LogRocket:** For session replay

### 4. SEO Optimization

- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## 🔧 Troubleshooting

### Build Fails

**Issue:** Build fails with TypeScript errors
**Solution:** Run `npm run build` locally to identify errors

**Issue:** Out of memory during build
**Solution:** Increase Node memory:
```json
// package.json
"scripts": {
  "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
}
```

### 3D Scenes Don't Render

**Issue:** Black screen or WebGL errors
**Solution:** 
- Check browser console for errors
- Ensure WebGL is supported
- Try different browser

### Environment Variables Not Working

**Issue:** EmailJS not working in production
**Solution:**
- Verify env vars are set on hosting platform
- Ensure they start with `NEXT_PUBLIC_`
- Redeploy after adding env vars

### Slow Performance

**Issue:** Site loads slowly
**Solution:**
- Enable image optimization
- Use WebP format for images
- Implement lazy loading
- Check Lighthouse report

---

## 📈 Performance Optimization

### Image Optimization

```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/project.jpg"
  alt="Project"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
/>
```

### Code Splitting

```tsx
// Lazy load heavy components
import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('@/components/Hero3D'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
```

### Caching

Add to `next.config.ts`:
```typescript
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  compress: true,
};
```

---

## 🎯 Continuous Deployment

Most platforms support automatic deployments:

1. **Push to main branch** → Auto-deploy to production
2. **Push to dev branch** → Auto-deploy to preview
3. **Pull request** → Auto-deploy to preview URL

Configure in your platform's settings.

---

## 📞 Support

If you encounter issues:

1. Check platform documentation
2. Search platform community forums
3. Check GitHub issues
4. Contact platform support

---

**Happy Deploying! 🚀**

