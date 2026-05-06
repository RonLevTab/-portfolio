# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Pushing Changes to GitHub

This project is connected to GitHub at: [https://github.com/RonLevTab/-portfolio](https://github.com/RonLevTab/-portfolio)

### Making Updates

When you make changes to your code and want to push them to GitHub:

1. **Stage your changes:**
   ```bash
   git add .
   ```

2. **Commit your changes:**
   ```bash
   git commit -m "Your descriptive commit message"
   ```

3. **Push to GitHub:**
   ```bash
   git push
   ```

### First Time Setup (Already Completed)

If you need to set up a new repository:

1. **Initialize Git:**
   ```bash
   git init
   ```

2. **Configure user (for this repository):**
   ```bash
   git config user.name "RonLevTab"
   git config user.email "Ronlevtab@gmail.com"
   git config commit.gpgsign false
   ```

3. **Add all files:**
   ```bash
   git add .
   ```

4. **Create initial commit:**
   ```bash
   git commit -m "Initial commit"
   ```

5. **Connect to GitHub:**
   ```bash
   git remote add origin git@github.com:RonLevTab/-portfolio.git
   ```

6. **Push to GitHub:**
   ```bash
   git push -u origin master
   ```

### SSH Key Setup (Already Completed)

If you need to set up SSH keys for a new machine:

1. **Generate SSH key:**
   ```bash
   ssh-keygen -t ed25519 -C "Ronlevtab@gmail.com" -f ~/.ssh/id_ed25519_personal
   ```

2. **Display your public key:**
   ```bash
   cat ~/.ssh/id_ed25519_personal.pub
   ```

3. **Add the key to GitHub:**
   - Go to [GitHub SSH Settings](https://github.com/settings/keys)
   - Click "New SSH key"
   - Paste your public key
   - Save

4. **Create SSH config file** (`~/.ssh/config`):
   ```
   Host github.com
     HostName github.com
     User git
     IdentityFile ~/.ssh/id_ed25519_personal
     IdentitiesOnly yes
   ```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Deploying to Hostinger

This guide will help you deploy your React portfolio to Hostinger hosting.

### Prerequisites

- Hostinger hosting account with domain
- FTP/SFTP access credentials (available in hPanel)
- Latest production build of your app

### Step 1: Build Your Application

Before deploying, create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with all static files ready for deployment.

### Step 2: Access Hostinger hPanel

1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com/)
2. Navigate to your hosting account
3. Go to "Files" > "File Manager" or use FTP/SFTP

### Step 3: Deploy Using File Manager (Recommended for Beginners)

1. **Open File Manager:**
   - In hPanel, click "Files" > "File Manager"
   - Navigate to `public_html` folder (this is your website root)

2. **Clear existing files (if any):**
   - Delete any default files in `public_html` (like index.html, default pages)
   - Keep `.htaccess` if it exists

3. **Upload your build files:**
   - Open your local `build` folder
   - Select ALL files and folders inside the `build` folder
   - Upload them directly to `public_html` (NOT inside a build subfolder)
   - Files should include: `index.html`, `asset-manifest.json`, `favicon.ico`, `static` folder, etc.

4. **Create/Update .htaccess file:**
   - In `public_html`, create or edit `.htaccess` file
   - Add the following content to handle React Router:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Step 4: Deploy Using FTP/SFTP (Alternative Method)

1. **Get FTP credentials:**
   - In hPanel, go to "Files" > "FTP Accounts"
   - Note your FTP hostname, username, and password
   - Or create a new FTP account if needed

2. **Connect using FTP client (FileZilla recommended):**
   - Download [FileZilla](https://filezilla-project.org/)
   - Open FileZilla
   - Enter your FTP credentials:
     - Host: your-hostname (e.g., ftp.yourdomain.com)
     - Username: your FTP username
     - Password: your FTP password
     - Port: 21 (FTP) or 22 (SFTP)
   - Click "Quickconnect"

3. **Upload files:**
   - Navigate to `public_html` on the remote site (right panel)
   - Navigate to your local `build` folder (left panel)
   - Select all contents inside the `build` folder
   - Drag and drop to `public_html`
   - Wait for upload to complete

4. **Create .htaccess file:**
   - Right-click in remote directory > "Create file"
   - Name it `.htaccess`
   - Add the Apache rewrite rules (see above)

### Step 5: Verify Deployment

1. Visit your domain in a web browser
2. Check that all pages load correctly
3. Test navigation and all links
4. Check browser console for any errors

### Step 6: Update Deployment Script (Optional)

For easier future deployments, you can add a deployment reminder to your workflow:

After making changes:
```bash
# 1. Build the latest version
npm run build

# 2. Upload contents of the build folder to Hostinger
#    (Use File Manager or FTP to upload build/* to public_html/)
```

### Troubleshooting

**Issue: Blank page after deployment**
- Check browser console for errors
- Verify all files from `build` folder were uploaded
- Check that files are in `public_html`, not `public_html/build`

**Issue: Routes don't work (404 errors)**
- Ensure `.htaccess` file is created with correct rewrite rules
- Check that mod_rewrite is enabled (contact Hostinger support if needed)

**Issue: CSS/JS files not loading**
- Check browser console for 404 errors
- Verify the `static` folder was uploaded correctly
- Clear browser cache

**Issue: Old version showing**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Clear Hostinger cache if available in hPanel

### Important Notes

- Always build before deploying: `npm run build`
- Upload only the contents of the `build` folder, not the folder itself
- Keep your `node_modules` folder on your local machine only (never upload it)
- The `build` folder contents should go directly into `public_html`
- After each code change, rebuild and re-upload

### Updating Your Site

Whenever you make changes to your portfolio:

1. Make your code changes locally
2. Test locally: `npm start`
3. Build production version: `npm run build`
4. Upload new build files to `public_html` (overwrite existing)
5. Clear cache and verify changes
