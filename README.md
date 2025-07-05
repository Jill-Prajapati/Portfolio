# Portfolio Website

A personal portfolio website built with React showcasing my projects, skills, and experience.

## Features

- Responsive design
- Project showcase
- Skills section
- Contact information
- Professional resume

## Technologies Used

- React.js
- CSS3
- HTML5
- JavaScript

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jill2/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages. Follow these steps:

### 1. Push your code to GitHub

Make sure your code is pushed to a GitHub repository named `portfolio`.

### 2. Deploy to GitHub Pages

Run the deployment command:
```bash
npm run deploy
```

This will:
- Build your React application
- Deploy it to the `gh-pages` branch
- Make it available at `https://jill2.github.io/portfolio`

### 3. Configure GitHub Pages (if needed)

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

Your website will be live at `https://jill2.github.io/portfolio`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run deploy` - Deploys the app to GitHub Pages

## Project Structure

```
src/
├── components/          # React components
│   ├── About.js        # About section
│   ├── Contact.js      # Contact section
│   ├── Header.js       # Header component
│   ├── Navbar.js       # Navigation
│   ├── Projects.js     # Projects showcase
│   ├── Resume.js       # Resume section
│   └── Skills.js       # Skills section
├── App.js              # Main App component
└── index.js            # Entry point
```

## Customization

To customize the portfolio:

1. Update project information in `src/components/Projects.js`
2. Modify personal details in other component files
3. Update styling in the respective CSS files
4. Replace the resume PDF in the `public` folder

## License

This project is open source and available under the [MIT License](LICENSE).
