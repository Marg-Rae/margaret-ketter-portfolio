# Margaret Ketter's Portfolio 🌸

**Professional Full-Stack Developer Portfolio**

A modern, responsive portfolio website showcasing Margaret Ketter's expertise as a Full Stack Developer based in Mombasa, Kenya.

## ✨ Features

- **Modern Design** - Clean, professional interface with dark theme
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Interactive Contact Form** - Direct communication with email integration
- **Project Showcase** - Portfolio of development work
- **Professional Blog** - Technical insights and articles
- **Admin Dashboard** - Content management system

## 🛠️ Built With

- **Next.js** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling
- **Database Integration** - Dynamic content management
- **Email System** - Contact form functionality

## � Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment**
   - Configure database connection
   - Set up email service
   - Add required environment variables

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Application**
   ```
   http://localhost:3000
   ```

## � Sections

- **Hero** - Professional introduction
- **About** - Background and experience
- **Services** - Development offerings
- **Skills** - Technical expertise
- **Projects** - Portfolio showcase
- **Blog** - Technical articles
- **Contact** - Get in touch form

## 🎯 Deployment

Ready for deployment to:
- Vercel (recommended)
- Netlify
- Any modern hosting platform

---

**Margaret Ketter - Full Stack Developer | Mombasa, Kenya**

## 📧 Contact & Admin

When visitors submit the contact form:
- **Email notifications** sent to your configured address
- **Admin dashboard** available at `/admin` to manage all submissions and content

## 🔧 Customization

Update personal information in:
- **Hero section** - Name and professional title
- **About section** - Professional background and experience
- **Contact details** - Email and social media links
- **Projects** - Add your portfolio work through admin panel

---

**Margaret Ketter - Full Stack Developer | Mombasa, Kenya**

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Custom SVG icons
- **Images**: Placeholder system (ready for real images)
- **Responsive**: Mobile-first design

## 🎨 Design Features

- **Professional Color Scheme** - Blue and gray palette
- **Modern Typography** - Clean, readable fonts
- **Interactive Elements** - Hover effects and transitions
- **Accessibility** - Semantic HTML and proper contrast
- **Performance** - Optimized for speed and SEO

## �️ Database Schema

The application uses MongoDB with Prisma ORM for data management:

### Models
- **Contact** - Contact form submissions with timestamps
- **BlogPost** - Blog articles with metadata and content
- **Project** - Portfolio projects with descriptions and links
- **User** - Future authentication system (prepared)

### Database Features
- **Type Safety** - Prisma ensures type-safe database operations
- **Schema Validation** - Structured data models
- **Relationship Management** - Connected data entities
- **Migration Support** - Version-controlled schema changes

## 🔌 API Endpoints

### Contact API (`/api/contact`)
- **POST** - Submit contact form data
- **GET** - Retrieve all contact submissions (admin)
- Features: Email notifications, data validation, error handling

### Blog API (`/api/blog`)
- **GET** - Fetch all blog posts
- **POST** - Create new blog post (admin)
- **PUT** - Update existing blog post (admin)
- **DELETE** - Remove blog post (admin)

### Projects API (`/api/projects`)
- **GET** - Retrieve all portfolio projects
- **POST** - Add new project (admin)
- **PUT** - Update project details (admin)
- **DELETE** - Remove project (admin)

## 🔐 Admin Dashboard

Access the admin panel at `/admin` for:
- **Contact Management** - View and manage contact submissions
- **Blog Administration** - Create, edit, and delete blog posts
- **Project Portfolio** - Manage portfolio projects
- **Analytics** - Basic statistics and metrics
- **Content Overview** - Centralized content management

## �📱 Responsive Design

- **Mobile** - Optimized for phones and small tablets
- **Tablet** - Comfortable reading on medium screens
- **Desktop** - Full-featured experience for large screens

## 🚀 Getting Started

### Prerequisites
- **Node.js** - Version 18 or higher
- **MongoDB** - Local installation or MongoDB Atlas account
- **Package Manager** - npm, yarn, or pnpm

### Environment Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="mongodb://localhost:27017/portfolio-db"
   # or for MongoDB Atlas:
   # DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/portfolio-db"

   # Email Configuration (for contact form)
   EMAIL_FROM="your-email@example.com"
   EMAIL_TO="margaret@example.com"
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="your-email@example.com"
   SMTP_PASSWORD="your-app-password"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Apply database schema
   npx prisma db push
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Open Application**
   ```
   http://localhost:3000
   ```

### Development Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open database GUI

## 📝 Customization Guide

### Personal Information
Update the following files with Margaret's actual information:
- `src/components/Hero.tsx` - Name, title, social links
- `src/components/About.tsx` - Personal story and stats
- `src/components/Contact.tsx` - Contact information

### Database Content
- **Projects**: Add projects via admin panel at `/admin` or directly in database
- **Blog Posts**: Create blog content through admin interface
- **Contact Form**: Test contact submissions and email delivery

### Environment Configuration
- **Email Settings**: Update SMTP configuration in `.env.local`
- **Database**: Configure MongoDB connection string
- **API Keys**: Add any required service API keys

### Images
Replace placeholder images in:
- `src/components/About.tsx` - Professional headshot
- Project images through admin panel or database
- Blog post featured images

### Styling
- Colors can be customized in the Tailwind classes throughout components
- Global styles are in `src/app/globals.css`
- Theme customization in `tailwind.config.js`

## 🎯 Production Deployment

### Vercel (Recommended)
1. **Connect Repository**
   - Push code to GitHub/GitLab
   - Connect repository to Vercel

2. **Environment Variables**
   Add the following in Vercel dashboard:
   ```env
   DATABASE_URL=your_mongodb_atlas_connection_string
   EMAIL_FROM=your-email@example.com
   EMAIL_TO=margaret@example.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASSWORD=your-app-password
   ```

3. **Database Setup**
   - Use MongoDB Atlas for production
   - Run `npx prisma db push` after deployment

### Other Platforms
- **Netlify** - Deploy with build command and environment variables
- **AWS Amplify** - Full-stack deployment with database
- **Digital Ocean App Platform** - Container-based deployment

## 📧 Email Configuration

The contact form integrates with SMTP for email delivery:

### Gmail Setup (Recommended)
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in `SMTP_PASSWORD`

### Alternative Email Services
- **SendGrid** - High deliverability service
- **Mailgun** - Developer-friendly email API
- **Amazon SES** - AWS email service
- **Outlook/Hotmail** - Alternative SMTP provider

## 🔧 Advanced Features

### Adding Authentication
The User model is prepared for future authentication:
- **NextAuth.js** integration ready
- **Role-based access** for admin features
- **Session management** for secure admin panel

### Content Management
- **Rich Text Editor** - Integrate with blog creation
- **Image Upload** - Add file upload for projects/blog
- **SEO Management** - Meta tags and Open Graph data
- **Analytics Integration** - Google Analytics, Vercel Analytics

### Performance Optimization
- **Image Optimization** - Next.js Image component
- **Caching Strategy** - API response caching
- **Database Indexing** - Optimize query performance
- **CDN Integration** - Static asset optimization

## 🧪 Testing & Development

### Database Management
- **Prisma Studio** - Visual database browser (`npx prisma studio`)
- **Database Seeding** - Populate with sample data
- **Migration Management** - Version control schema changes

### API Testing
- **Postman/Insomnia** - Test API endpoints
- **Admin Panel** - Test CRUD operations
- **Contact Form** - Verify email delivery

### Development Tips
- Hot reload enabled with Turbopack
- TypeScript strict mode for better code quality
- ESLint configuration for code consistency
- Prisma type generation for database safety

## 🎯 Next Steps

1. **Production Database** - Set up MongoDB Atlas
2. **Email Service** - Configure production SMTP
3. **Domain Setup** - Custom domain configuration
4. **SSL Certificate** - HTTPS security (auto with Vercel)
5. **Analytics** - Add visitor tracking
6. **SEO Optimization** - Meta tags and sitemap
7. **Performance** - Image optimization and caching
8. **Backup Strategy** - Database backup automation

## 📧 Contact Integration

The contact form is fully integrated with:
- **Database Storage** - All submissions saved to MongoDB
- **Email Notifications** - Automatic email delivery with Nodemailer
- **Form Validation** - Client and server-side validation
- **Error Handling** - User-friendly error messages
- **Success Feedback** - Confirmation messages

## 🚀 Deployment

**Full-Stack Ready for:**
- **Vercel** (recommended for Next.js) - Automatic deployments
- **Netlify** - JAMstack deployment with serverless functions
- **AWS Amplify** - Full-stack cloud deployment
- **Digital Ocean App Platform** - Container-based deployment
- **Railway** - Simple database and app hosting

---

**Built with ❤️ for Margaret Ketter - Full Stack Developer in Mombasa, Kenya**

*This portfolio demonstrates modern full-stack development with React, Next.js, TypeScript, MongoDB, and comprehensive API integration.*
