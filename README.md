# React Playground 🔥

React foundations and some playaround

# Parcel

- Build App
- Local Server
- HMR - Hot Module Replacement
- Has File Watching algo
- Caching for faster rebuilds
- Image Optimization
- Minification
- Bundling
- Consistent Hashing
- Code Splitting
- Differential Bundling - Browser support
- Error Handling
- Tree shaking
- Https support
- Different prod and dev builds ( Prod build take more time )

## Restuarant Website Desgin

- Header Component

  - Logo Component
  - Navbar Component

- Body Component

  - Search Component
  - Cards Container Component
  - Cards Component

- Footer

  - License
  - Copyright
  - Contact
  - Address

## Shimmer UI

- Instead of loader, it is good practice now to use shimmer UI, which is more
  pleasing to the eye.

## Types of testing ( developer )

- Unit Testing
- Integration Testing
- End to End Testing

# Setting up testing library

- Install React Testing Library
- Install Jest
- Install Babel Depedencies
- Configure Babel in app
- Configure parcel config file to disable default babel transpilation
- Writing jest configuration -> npx jest --init.
- install jest-environemnt-jsdom -> for creating env for js code to run and
  browser like env
- install @babel-preset-react and configure it in babel.config.js -> so that jsx
  code can be written inside tests and babel can convert to html.
- install npm i @testing-library/react, this also helps in jsx conversion.
- install @testing-library/jest-dom -> so that we can use the helper function in
  assertions -> eg .toBeInDocument() ( npm i -d @testing-library/jest-dom).
