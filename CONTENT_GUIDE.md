# 📝 Content Replacement Guide

This guide will help you replace all placeholder/dummy data with your actual portfolio information.

## 🎯 Quick Start

All placeholder content is centralized in **`src/data/portfolio-data.ts`**. This is the main file you'll need to edit to personalize your portfolio.

---

## 📂 File Structure

```
portfolio-3d/
├── src/
│   ├── data/
│   │   └── portfolio-data.ts          ← **MAIN DATA FILE - START HERE**
│   ├── components/
│   │   ├── Hero3D.tsx                 ← 3D landing page component
│   │   ├── About.tsx                  ← About section
│   │   ├── Projects.tsx               ← Portfolio showcase
│   │   ├── Skills.tsx                 ← Skills visualization
│   │   ├── Experience.tsx             ← Experience timeline
│   │   ├── Contact.tsx                ← Contact form
│   │   └── ThemeToggle.tsx            ← Theme switcher
│   ├── app/
│   │   ├── layout.tsx                 ← SEO metadata (update here)
│   │   └── page.tsx                   ← Main page
│   └── styles/
│       └── globals.css                ← Global styles & theme colors
├── public/
│   ├── resume/                        ← Place your resume PDF here
│   ├── images/                        ← Place your images here
│   └── models/                        ← Place 3D models here (optional)
└── CONTENT_GUIDE.md                   ← This file
```

---

## 🔧 Step-by-Step Content Replacement

### 1️⃣ Personal Information

**File:** `src/data/portfolio-data.ts`

**Section:** `personalInfo`

Replace the following:

```typescript
export const personalInfo = {
  name: "Your Full Name",              // Your actual name
  title: "Your Professional Title",    // e.g., "Senior React Developer"
  tagline: "Your tagline",             // Short catchy phrase
  email: "your.email@domain.com",      // Your real email
  phone: "+1 (XXX) XXX-XXXX",          // Your phone (optional)
  location: "Your City, State",        // Your location
  avatar: "/images/your-photo.jpg",    // Path to your photo
  
  bio: {
    short: "Your short bio (1-2 sentences)",
    long: "Your detailed bio (2-3 paragraphs)"
  },
  
  resume: "/resume/your-resume.pdf",   // Path to your resume
  
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourwebsite.com",
    dribbble: "https://dribbble.com/yourusername"  // Optional
  }
};
```

**Action Items:**
- [ ] Update name, title, and tagline
- [ ] Add your real email and contact info
- [ ] Write your bio (short and long versions)
- [ ] Add your profile photo to `public/images/` and update the path
- [ ] Upload your resume to `public/resume/` and update the path
- [ ] Update all social media links (remove any you don't use)

---

### 2️⃣ Projects

**File:** `src/data/portfolio-data.ts`

**Section:** `projects` array

Each project has this structure:

```typescript
{
  id: 1,                                    // Unique number
  title: "Project Name",
  description: "Short description (1-2 sentences)",
  longDescription: "Detailed description (2-3 sentences)",
  image: "/images/projects/project-1.jpg", // Project screenshot
  technologies: ["React", "Node.js", ...], // Tech stack
  category: "Category Name",               // e.g., "Web App", "3D", "Mobile"
  featured: true,                          // Show on homepage?
  demoUrl: "https://demo.example.com",     // Live demo link
  githubUrl: "https://github.com/...",     // GitHub repo link
  year: "2024",                            // Year completed
  color: "#00FFFF"                         // Accent color (hex)
}
```

**Action Items:**
- [ ] Replace with 3-5 of your best projects
- [ ] Add project screenshots to `public/images/projects/`
- [ ] Update all URLs to your actual demo/GitHub links
- [ ] Mark 2-3 projects as `featured: true`
- [ ] Choose appropriate accent colors for each project

**Tips:**
- Use high-quality screenshots (1200x800px recommended)
- Include diverse project types to showcase range
- Write compelling descriptions focusing on impact/results

---

### 3️⃣ Skills

**File:** `src/data/portfolio-data.ts`

**Section:** `skills` array

Structure:

```typescript
{
  category: "Category Name",  // e.g., "Frontend", "Backend", "Tools"
  items: [
    { 
      name: "Skill Name",     // e.g., "React"
      level: 90,              // Proficiency 0-100
      icon: "🎯"              // Emoji icon
    }
  ]
}
```

**Action Items:**
- [ ] List your actual technical skills
- [ ] Organize into logical categories (Frontend, Backend, Tools, etc.)
- [ ] Rate your proficiency honestly (0-100)
- [ ] Choose appropriate emoji icons or use text

**Tips:**
- Include 15-20 skills total
- Focus on skills relevant to your target roles
- Be honest about proficiency levels

---

### 4️⃣ Experience

**File:** `src/data/portfolio-data.ts`

**Section:** `experience` array

Structure:

```typescript
{
  id: 1,
  company: "Company Name",
  logo: "/images/companies/company-logo.png",
  position: "Your Job Title",
  location: "City, State/Country",
  type: "Full-time",                    // or "Part-time", "Contract", etc.
  startDate: "2022-01",                 // Format: YYYY-MM
  endDate: "2023-12",                   // null if current position
  current: false,                       // true if still working here
  description: "Brief role description",
  responsibilities: [
    "Key responsibility 1",
    "Key responsibility 2",
    // 3-5 bullet points
  ],
  technologies: ["Tech1", "Tech2"],
  achievements: [
    "Notable achievement 1",
    "Notable achievement 2"
  ]
}
```

**Action Items:**
- [ ] Add your work experience (2-4 positions recommended)
- [ ] Add company logos to `public/images/companies/`
- [ ] List 3-5 key responsibilities per role
- [ ] Highlight 1-2 major achievements per role
- [ ] Use action verbs (Led, Developed, Implemented, etc.)

**Tips:**
- Start with most recent position
- Quantify achievements when possible (e.g., "Increased performance by 40%")
- Keep descriptions concise and impactful

---

### 5️⃣ Education & Certifications

**File:** `src/data/portfolio-data.ts`

**Sections:** `education` and `certifications` arrays

**Education Structure:**
```typescript
{
  id: 1,
  institution: "University Name",
  degree: "Degree Type",               // e.g., "Bachelor of Science"
  field: "Field of Study",             // e.g., "Computer Science"
  startDate: "2015-09",
  endDate: "2019-05",
  gpa: "3.8/4.0",                      // Optional
  description: "Brief description",
  achievements: ["Achievement 1", "Achievement 2"]
}
```

**Certifications Structure:**
```typescript
{
  id: 1,
  name: "Certification Name",
  issuer: "Issuing Organization",
  date: "2023-06",
  credentialId: "CERT-ID-123",         // Optional
  url: "https://verify-link.com"       // Optional
}
```

**Action Items:**
- [ ] Add your education history
- [ ] List relevant certifications
- [ ] Include verification links if available

---

### 6️⃣ Images & Assets

**Recommended Image Sizes:**

| Asset Type | Recommended Size | Location |
|------------|-----------------|----------|
| Profile Photo | 400x400px | `public/images/avatar.jpg` |
| Project Screenshots | 1200x800px | `public/images/projects/` |
| Company Logos | 200x200px | `public/images/companies/` |
| Background Images | 1920x1080px | `public/images/backgrounds/` |

**Action Items:**
- [ ] Create `public/images/` directory structure
- [ ] Add your profile photo
- [ ] Add project screenshots
- [ ] Add company logos (if available)
- [ ] Optimize all images (use WebP format for better performance)

**Image Optimization Tips:**
- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Convert to WebP format for 30-50% smaller file sizes
- Use descriptive filenames (e.g., `project-ecommerce-dashboard.jpg`)

---

### 7️⃣ SEO & Metadata

**File:** `src/app/layout.tsx`

Update the metadata object:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your professional description for search engines',
  keywords: ['your', 'relevant', 'keywords'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name | Portfolio',
    description: 'Your description',
    url: 'https://yourwebsite.com',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | Portfolio',
    description: 'Your description',
    images: ['https://yourwebsite.com/twitter-image.jpg'],
  },
}
```

**Action Items:**
- [ ] Update title and description
- [ ] Add relevant keywords for SEO
- [ ] Create Open Graph image (1200x630px)
- [ ] Create Twitter card image (1200x600px)
- [ ] Update all URLs to your actual domain

---

### 8️⃣ Theme Colors

**File:** `src/app/globals.css` and `tailwind.config.ts`

**Current Color Scheme:**
- Primary Background: `#0D1117` (dark)
- Accent Color: `#00FFFF` (cyan)
- Text: `#FFFFFF` (white)
- Secondary Text: `#CCCCCC` (light gray)

**To Change Colors:**

1. Update CSS variables in `globals.css`:
```css
:root {
  --primary: #YourColor;
  --accent: #YourAccentColor;
  /* ... */
}
```

2. Update Tailwind config in `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#YourColor',
      accent: '#YourAccentColor',
    }
  }
}
```

---

### 9️⃣ Contact Form Setup

**File:** `src/components/Contact.tsx`

The contact form uses EmailJS. To set it up:

1. **Create EmailJS Account:**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for free account
   - Create an email service
   - Create an email template

2. **Get Your Credentials:**
   - Service ID
   - Template ID
   - Public Key

3. **Create Environment Variables:**

Create `.env.local` file in root:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Update Contact Component:**
The component will automatically use these environment variables.

**Action Items:**
- [ ] Set up EmailJS account
- [ ] Create email template
- [ ] Add credentials to `.env.local`
- [ ] Test contact form

---

## 🚀 Deployment Checklist

Before deploying, ensure:

- [ ] All placeholder data replaced with real information
- [ ] All images optimized and uploaded
- [ ] Resume PDF uploaded to `public/resume/`
- [ ] Social media links updated and working
- [ ] EmailJS configured and tested
- [ ] SEO metadata updated
- [ ] Favicon updated (`public/favicon.ico`)
- [ ] Environment variables configured on hosting platform
- [ ] All external links tested
- [ ] Mobile responsiveness tested
- [ ] Performance tested (Lighthouse score > 90)

---

## 📊 Content Checklist

Use this checklist to track your progress:

### Personal Info
- [ ] Name and title
- [ ] Profile photo
- [ ] Bio (short and long)
- [ ] Contact information
- [ ] Social media links
- [ ] Resume PDF

### Projects
- [ ] Project 1 (title, description, images, links)
- [ ] Project 2
- [ ] Project 3
- [ ] Project 4 (optional)
- [ ] Project 5 (optional)

### Professional Info
- [ ] Skills list with proficiency levels
- [ ] Work experience (2-4 positions)
- [ ] Education
- [ ] Certifications (if applicable)

### Technical Setup
- [ ] EmailJS configuration
- [ ] SEO metadata
- [ ] Theme colors (if customizing)
- [ ] Favicon
- [ ] Open Graph images

---

## 🆘 Need Help?

If you encounter issues:

1. Check the console for errors
2. Verify all file paths are correct
3. Ensure images are in the correct format
4. Test on localhost before deploying
5. Review the Next.js documentation: https://nextjs.org/docs

---

## 📝 Notes

- **Backup:** Always keep a backup of your original data
- **Testing:** Test all changes locally before deploying
- **Images:** Use high-quality images but keep file sizes reasonable (<500KB per image)
- **Links:** Double-check all external links work correctly
- **Privacy:** Don't include sensitive information (like real phone numbers if you're concerned about privacy)

---

**Last Updated:** 2024
**Version:** 1.0

