# Restaurant Homepage (JavaScript DOM Project)

A dynamic restaurant homepage built entirely with **JavaScript DOM manipulation**. This project focuses on generating all page content using JavaScript while keeping HTML minimal and leveraging modular code with Webpack.

---

## Overview

The goal of this project is to practice structuring a front-end application using modules and dynamically rendering content. Instead of hardcoding HTML, all elements inside the main content area are created and managed through JavaScript.

---

## Features

- Fully dynamic content rendering using JavaScript
- Tab-based navigation (Home, Menu, About)
- Modular architecture with separate files for each page
- Clean separation between structure (JS) and styling (CSS)
- Webpack configuration for bundling and development

---

## Project Structure

```
/project-root
│── /dist
│── /src
│   │── index.js
│   │── template.html
│   │── /modules
│       │── home.js
│       │── menu.js
│       │── about.js
│── package.json
│── webpack.config.js
│── .gitignore
│── README.md
```

---

## How It Works

- The HTML file contains a basic structure with a header, navigation buttons, and an empty `#content` div.
- JavaScript dynamically generates and injects all content into the `#content` container.
- Each tab (Home, Menu, About) is implemented as a separate module.
- Event listeners handle tab switching by clearing and re-rendering the content.

---

## Development Setup

1. Install dependencies:

```
npm install
```

2. Run development server:

```
npx webpack serve
```

3. Open in browser:

```
http://localhost:8080
```

---

## Build

To generate the production build:

```
npx webpack
```

---

## Deployment (GitHub Pages)

This project is deployed from the `dist` folder using a dedicated branch.

Steps:

1. Create deployment branch (first time only):

```
git branch gh-pages
```

2. Commit your changes:

```
git status
git add .
git commit -m "Update project"
```

3. Switch and merge:

```
git checkout gh-pages && git merge main --no-edit
```

4. Build the project:

```
npx webpack
```

5. Deploy:

```
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

6. Set `gh-pages` as the source branch in GitHub Pages settings.

---

## Key Concepts

- DOM Manipulation
- JavaScript Modules (ES6 Imports/Exports)
- Webpack Bundling
- Event Handling
- Separation of Concerns

---

## Notes

- The `.gitignore` file excludes:

```
node_modules
dist
```

- All visible content is generated via JavaScript.
- HTML is used only as a base template.

---

## License

This project is open-source and available under the MIT License.
