# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automated deployment.

## Available Workflows

### Deploy to GitHub Pages (`ci-cd.yml`)
**Triggers:** Push to main/master

**Features:**
- Automatic build and deployment to GitHub Pages
- Node.js 18.x environment
- Optimized for React applications

**Usage:**
- Automatically deploys when you push to main/master branch
- Builds the project and deploys to GitHub Pages

## Setup Instructions

### 1. Enable GitHub Pages (for deployment)
1. Go to your repository Settings
2. Navigate to Pages section
3. Set source to "GitHub Actions"

### 2. Configure Secrets (if needed)
If you have a custom domain for GitHub Pages:
1. Go to repository Settings → Secrets and variables → Actions
2. Add `CNAME` secret with your domain

### 3. Customize Workflows
- Edit the workflow files to match your project's needs
- Update Node.js versions if needed
- Modify test commands based on your testing setup

## Workflow Features

### Deployment
- Automatic deployment to GitHub Pages
- Build verification
- Optimized for React applications

## Troubleshooting

### Common Issues
1. **Build fails**: Check if all dependencies are properly installed
2. **Deployment fails**: Verify GitHub Pages is enabled and configured

### Manual Triggers
- Go to Actions tab in your repository
- Select the workflow you want to run
- Click "Run workflow" button

## Customization

You can customize this workflow by:
- Adding custom build steps
- Modifying deployment settings
- Adding custom domain configuration
- Integrating with external services
