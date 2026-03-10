# Sri Hospital - Deployment Guide

## Overview

This guide explains the folder structure and deployment configuration for the Sri Hospital website on Netlify.

## Project Structure

```
srihospital/
├── client/                 # React frontend application
│   ├── src/               # Source code (React components, pages, styles)
│   ├── public/            # Static assets (images, logos)
│   └── index.html         # Main HTML entry point
├── server/                # Backend server (Express.js)
├── shared/                # Shared utilities and constants
├── public/                # Root public folder (for Netlify)
│   └── _redirects         # Netlify routing configuration
├── netlify.toml           # Netlify build and deployment configuration
├── package.json           # Project dependencies
├── vite.config.ts         # Vite build configuration
└── tsconfig.json          # TypeScript configuration
```

## Key Files for Netlify Deployment

### 1. `netlify.toml`
This is the main configuration file for Netlify deployment. It specifies:
- **Build command**: `npm run build` - Builds the React app and backend
- **Publish directory**: `dist/public` - The output folder that gets deployed
- **Redirects**: All requests to `/*` are redirected to `/index.html` (SPA routing)
- **Cache headers**: Optimizes caching for assets and HTML files

### 2. `public/_redirects`
This file provides an alternative routing configuration for Netlify:
- Redirects all non-file requests to `index.html` with a 200 status code
- Ensures that React Router handles all page navigation
- Prevents 404 errors when accessing routes directly

## Build Output

When you run `npm run build`, the project generates:
- **React build**: `dist/public/` - Contains the compiled React application
- **Server build**: `dist/index.js` - Contains the backend server code

The `dist/public/` folder is what gets deployed to Netlify.

## Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Add Netlify configuration for deployment"
git push origin main
```

### 2. Connect to Netlify
1. Go to [Netlify](https://app.netlify.com/)
2. Click "New site from Git"
3. Select your GitHub repository
4. Netlify will automatically detect `netlify.toml` and use those settings
5. Click "Deploy site"

### 3. Automatic Deployments
- Every push to your main branch will trigger a new deployment
- Netlify will run `npm run build` and deploy the `dist/public/` folder

## Common Issues and Solutions

### Issue: 404 Error on Page Refresh
**Cause**: Netlify is not redirecting routes to `index.html`
**Solution**: Ensure `netlify.toml` and `public/_redirects` are present in your repository

### Issue: Build Fails
**Cause**: Missing dependencies or TypeScript errors
**Solution**: 
- Run `npm install` locally to ensure all dependencies are installed
- Run `npm run build` to check for build errors
- Fix any errors before pushing to GitHub

### Issue: Assets Not Loading
**Cause**: Incorrect asset paths in the build
**Solution**: 
- Check that `vite.config.ts` has correct `outDir` setting
- Verify that static assets are in `client/public/` folder

### Issue: Environment Variables Not Working
**Cause**: Environment variables not set in Netlify
**Solution**:
- Go to Netlify Site Settings → Build & Deploy → Environment
- Add your environment variables there
- Redeploy the site

## Environment Variables

If your application uses environment variables:
1. Create a `.env.example` file with all required variables
2. In Netlify dashboard, go to Site Settings → Build & Deploy → Environment
3. Add all environment variables
4. Redeploy the site

## Folder Structure Best Practices

### ✅ Correct Structure
```
project/
├── netlify.toml          # Netlify configuration
├── public/
│   └── _redirects        # Routing configuration
├── client/
│   ├── src/
│   ├── public/
│   └── index.html
└── dist/                 # Generated after build
    └── public/           # Deployed to Netlify
```

### ❌ Common Mistakes
- Placing `_redirects` in `client/public/` instead of root `public/`
- Missing `netlify.toml` file
- Incorrect `publish` directory in `netlify.toml`
- Not committing configuration files to Git

## Testing Locally

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Support

For more information:
- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
