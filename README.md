# fellowes-brands

## 🛠 Usage
- Available commands:
  - `npm run build`: Build files to the `dist` folder. Transpiles down to ES5 and bundles all JS into `app.bundle.js`. Transpiles SCSS to CSS and adds prefixing into `style.bundle.css`. Copies static assets and HTML over, and bundled CSS and JS gets added to HTML file.
  - `npm run start:dev`: Run `webpack-dev-server` at `localhost:9000`. Includes live reloading on any Javascript/SCSS/HTML changes.
  - `npm run start`: Builds files and runs a local production server on `localhost:8080` with `http-server`.
  - `npm run run lint:js`: Lints JS with ESLint.
  - `npm run lint:styles`: Lints SCSS stylesheets with stylelint.
  - `npm run lint:html`: Lints HTML for a11y issues using pa11y.

🔄 Continuous Integration
This boilerplate contains integration with [Travis CI](https://travis-ci.org/).


## For start project for some changes next instructions:

# 1) clone the project into your PC (git should be installed https://git-scm.com/downloads)
  - git clone git@github.com:OlehPshyk/fellowes-brands.git

# 2) goto to the folder with project

  - install node.js to you PC(generally, any version 10-21 https://nodejs.org/uk/ )

# 3) install dependencies for project

  - `npm i` (or `yarn`)

# 4) for start develop new feature use command - npm run start:dev project will be opened in browser on http://localhost:9000/ and automatically autoupdated any changes in HTML/SCSS/JS code
# 5) for create folder with result code and serve him in http://127.0.0.1:8080 server use command - npm run start (code for check and server are in folder ./dist) not for developing? only for create dist folder with resulting code and to check result on localhost http://127.0.0.1:8080 server
# 6) for create folder with result code for hosting use command - npm run build (code for hosting are in folder ./dist) The code from this folder can be hosted into any server(html/css/js - static pages).

# Ctrl+C stops any of these command.





