# ⚡ Quick Start Guide

Get your 3D portfolio up and running in 15 minutes!

## 🎯 Overview

This guide will help you:
1. Set up the development environment
2. Customize your content
3. Test locally
4. Deploy to production

---

## 📦 Step 1: Installation (2 minutes)

```bash
# Navigate to project directory
cd portfolio-3d

# Install dependencies
npm install

# This will install all required packages including:
# - Next.js, React, TypeScript
# - Three.js, React Three Fiber
# - Framer Motion, Tailwind CSS
# - EmailJS, and more
```

---

## ✏️ Step 2: Customize Content (5 minutes)

### Update Personal Information

Open `src/data/portfolio-data.ts` and update:

```typescript
export const personalInfo = {
  name: "Your Name",                    // ← Change this
  title: "Your Professional Title",     // ← Change this
  email: "your.email@domain.com",       // ← Change this
  // ... update all fields
};
```

### Add Your Projects

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief description",
    image: "/images/projects/project-1.jpg",  // ← Add your image
    technologies: ["React", "Node.js"],
    demoUrl: "https://your-demo.com",
    githubUrl: "https://github.com/you/project",
    // ... more fields
  },
  // Add more projects
];
```

### Update Skills

```typescript
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90, icon: "⚛️" },  // ← Update levels
      // ... add your skills
    ]
  },
];
```

**📖 For detailed instructions, see [CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**

---

## 🖼️ Step 3: Add Your Images (3 minutes)

### Create Image Directories

```bash
# Create directories
mkdir -p public/images/projects
mkdir -p public/images/companies
mkdir -p public/resume
```

### Add Your Images

1. **Profile Photo**: `public/images/avatar.jpg` (400x400px)
2. **Project Screenshots**: `public/images/projects/` (1200x800px each)
3. **Company Logos**: `public/images/companies/` (200x200px each)
4. **Resume PDF**: `public/resume/your-resume.pdf`

### Update Image Paths

In `src/data/portfolio-data.ts`:

```typescript
export const personalInfo = {
  avatar: "/images/avatar.jpg",  // ← Your photo
  resume: "/resume/your-resume.pdf",  // ← Your resume
};

export const projects = [
  {
    image: "/images/projects/project-1.jpg",  // ← Your screenshots
  },
];
```

---

## 📧 Step 4: Set Up Email (2 minutes)

### Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up (free)
3. Add email service (Gmail, Outlook, etc.)
4. Create email template
5. Get your credentials

### Add Environment Variables

```bash
# Copy example file
cp .env.example .env.local

# Edit .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

**⚠️ Important:** Never commit `.env.local` to Git!

---

## 🎨 Step 5: Customize Theme (Optional, 2 minutes)

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary: #0D1117;      /* Dark background */
  --accent: #00FFFF;       /* Cyan accent - change this! */
  --secondary: #FFFFFF;    /* White */
}
```

### Popular Color Schemes

**Purple Theme:**
```css
--accent: #9333EA;  /* Purple */
```

**Green Theme:**
```css
--accent: #10B981;  /* Green */
```

**Orange Theme:**
```css
--accent: #F97316;  /* Orange */
```

**Blue Theme:**
```css
--accent: #3B82F6;  /* Blue */
```

---

## 🚀 Step 6: Test Locally (1 minute)

```bash
# Start development server
npm run dev

# Open browser
# Visit: http://localhost:3000
```

### What to Check:

- [ ] All sections load correctly
- [ ] 3D scene renders (may take a few seconds)
- [ ] Your name and info appear
- [ ] Projects display with your images
- [ ] Skills show correct levels
- [ ] Contact form is visible
- [ ] Theme toggle works
- [ ] Mobile responsive (resize browser)

---

## 🌐 Step 7: Deploy (5 minutes)

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

Or use the Vercel Dashboard:

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables
6. Click "Deploy"

**🎉 Your site is live!**

---

## ✅ Post-Launch Checklist

After deployment:

- [ ] Test all pages on live site
- [ ] Test contact form (send yourself a test email)
- [ ] Check on mobile device
- [ ] Share with friends for feedback
- [ ] Submit to Google Search Console
- [ ] Add to your LinkedIn profile
- [ ] Share on social media

---

## 🎯 Next Steps

### Enhance Your Portfolio

1. **Add More Projects**
   - Showcase your best work
   - Include live demos and GitHub links

2. **Write Better Descriptions**
   - Focus on impact and results
   - Use action verbs
   - Quantify achievements

3. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use appropriate sizes

4. **Add Blog Section** (Optional)
   - Share your knowledge
   - Improve SEO
   - Showcase expertise

5. **Set Up Analytics**
   - Track visitors
   - Understand user behavior
   - Optimize based on data

### Get Feedback

- Share with developer communities
- Ask for code reviews
- Get design feedback
- Test with real users

### Keep It Updated

- Add new projects regularly
- Update skills as you learn
- Refresh content quarterly
- Keep dependencies updated

---

## 🆘 Common Issues

### Issue: 3D Scene Not Rendering

**Solution:**
- Check browser console for errors
- Ensure WebGL is enabled
- Try Chrome or Firefox
- Clear browser cache

### Issue: Images Not Loading

**Solution:**
- Check file paths are correct
- Ensure images are in `public/` folder
- Check file extensions match
- Try absolute paths: `/images/photo.jpg`

### Issue: Contact Form Not Working

**Solution:**
- Verify EmailJS credentials
- Check `.env.local` file exists
- Ensure variables start with `NEXT_PUBLIC_`
- Check EmailJS dashboard for errors

### Issue: Build Fails

**Solution:**
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

---

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Learning
- [Three.js Journey](https://threejs-journey.com/)
- [Next.js Tutorial](https://nextjs.org/learn)
- [React Documentation](https://react.dev/)

### Tools
- [Image Optimizer](https://squoosh.app/)
- [Color Picker](https://coolors.co/)
- [Icon Library](https://react-icons.github.io/react-icons/)
- [Font Pairing](https://fontpair.co/)

---

## 💡 Pro Tips

1. **Start Simple**
   - Get basic content working first
   - Add advanced features later

2. **Test Often**
   - Test after each major change
   - Use multiple browsers
   - Check mobile regularly

3. **Get Feedback Early**
   - Share with friends/colleagues
   - Iterate based on feedback
   - Don't wait for perfection

4. **Keep Learning**
   - Explore Three.js examples
   - Try new animations
   - Experiment with designs

5. **Make It Yours**
   - Don't just copy examples
   - Add personal touches
   - Show your personality

---

## 🎉 You're All Set!

Your 3D portfolio is ready to impress!

**Need help?** Check:
- [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) - Detailed content instructions
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guides
- [README.md](./README.md) - Full documentation

**Questions?** Open an issue on GitHub or reach out!

---

**Happy Building! 🚀**

