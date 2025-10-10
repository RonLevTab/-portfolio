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
