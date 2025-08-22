# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automated CI/CD processes.

## Available Workflows

### 1. CI/CD Pipeline (`ci-cd.yml`)
**Triggers:** Push to main/master, Pull requests to main/master

**Features:**
- Multi-node version testing (16.x, 18.x, 20.x)
- Linting and testing
- Build verification
- Automatic deployment to GitHub Pages (on main/master branch)

**Usage:**
- Automatically runs on every push and pull request
- Deploys to GitHub Pages when merged to main/master

### 2. Build and Test (`build-test.yml`)
**Triggers:** Push to main/master/develop, Pull requests to main/master

**Features:**
- Security vulnerability checks
- Linting and testing
- Build verification
- Artifact upload

**Usage:**
- Simpler workflow without deployment
- Good for development branches

### 3. Dependency Check (`dependency-check.yml`)
**Triggers:** Weekly schedule (Mondays 9 AM UTC), Manual trigger

**Features:**
- Outdated package detection
- Security vulnerability scanning
- License compliance checking
- Dependency report generation

**Usage:**
- Run manually: Go to Actions tab → Dependency Check → Run workflow
- Automatically runs weekly

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

### Security
- Automated security audits
- Dependency vulnerability scanning
- License compliance checking

### Quality Assurance
- Multi-version Node.js testing
- Linting with ESLint
- Test coverage reporting
- Build verification

### Deployment
- Automatic deployment to GitHub Pages
- Build artifact preservation
- Conditional deployment (main/master only)

## Troubleshooting

### Common Issues
1. **Build fails**: Check if all dependencies are properly installed
2. **Tests fail**: Ensure all tests pass locally before pushing
3. **Deployment fails**: Verify GitHub Pages is enabled and configured

### Manual Triggers
- Go to Actions tab in your repository
- Select the workflow you want to run
- Click "Run workflow" button

## Customization

You can customize these workflows by:
- Adding more Node.js versions for testing
- Including additional build steps
- Modifying deployment targets
- Adding custom notifications
- Integrating with external services
