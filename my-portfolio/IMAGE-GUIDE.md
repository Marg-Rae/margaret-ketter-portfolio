# Image Replacement Guide

## Where to Add Your Own Images

Your portfolio website has several placeholder images that you can replace with your own photos:

### 1. Profile Picture (About Section)
- **Location:** `/public/images/margaret-profile.jpg`
- **Current placeholder:** `/api/placeholder/400/500`
- **Recommended size:** 400x500 pixels
- **File to edit:** `src/components/About.tsx` (line ~13)
- **Replace:** `src="/api/placeholder/400/500"` with `src="/images/margaret-profile.jpg"`

### 2. Project Images
Replace the following placeholder images with your project screenshots:

#### Featured Projects
- **EcoTech Solutions:** `/public/images/projects/ecotech-project.jpg` (600x400px)
- **Coastal Resort:** `/public/images/projects/coastal-resort.jpg` (600x400px)  
- **FinTech App:** `/public/images/projects/fintech-app.jpg` (600x400px)

#### Personal Projects
- **Mombasa Creative Hub:** `/public/images/projects/mombasa-hub.jpg` (400x300px)
- **Swahili Design System:** `/public/images/projects/swahili-design.jpg` (400x300px)
- **Ocean Conservation Blog:** `/public/images/projects/ocean-blog.jpg` (400x300px)

#### Blog Post Images
- **Blog Post 1:** `/public/images/blog/digital-strategy-africa.jpg` (400x250px)
- **Blog Post 2:** `/public/images/blog/cultural-design-mombasa.jpg` (400x250px)
- **Blog Post 3:** `/public/images/blog/creative-communities.jpg` (400x250px)

### 3. How to Replace Images

1. **Create the images folder:**
   ```
   public/
     images/
       margaret-profile.jpg
       projects/
         ecotech-project.jpg
         coastal-resort.jpg
         fintech-app.jpg
         mombasa-hub.jpg
         swahili-design.jpg
         ocean-blog.jpg
       blog/
         digital-strategy-africa.jpg
         cultural-design-mombasa.jpg
         creative-communities.jpg
   ```

2. **Update the component files:**
   - `src/components/About.tsx` - Profile image
   - `src/components/Projects.tsx` - Project images
   - `src/components/Blog.tsx` - Blog images

3. **Image Requirements:**
   - Use `.jpg` or `.png` formats
   - Optimize images for web (use tools like TinyPNG)
   - Maintain aspect ratios mentioned above
   - Keep file sizes under 500KB for fast loading

### 4. Example Replacement
In `src/components/About.tsx`, change:
```tsx
src="/api/placeholder/400/500"
```
to:
```tsx
src="/images/margaret-profile.jpg"
```

### 5. Adding New Images
To add new images anywhere in the site:
1. Place the image in `/public/images/`
2. Reference it as `/images/your-image.jpg` in your components
3. Always include proper `alt` text for accessibility

### 6. Social Media Images
Don't forget to add:
- **Favicon:** `/public/favicon.ico` (32x32px)
- **Open Graph image:** `/public/images/og-image.jpg` (1200x630px) for social sharing

Once you replace these placeholder images with your actual photos and project screenshots, your portfolio will be fully personalized!