Italian Performance Studio🇮🇹 Project OverviewThis is a front-end UI concept for a website dedicated to two iconic Italian high-performance automotive manufacturers: Pagani and Ferrari. The application focuses on clean design, dark-mode aesthetics, responsive navigation, and interactive component features like a carousel, car card filtering, and a specifications modal.The project is built using React for the application logic and state, and Tailwind CSS for utility-first styling.✨ Key FeaturesResponsive Layout: Full responsiveness across all breakpoints, including a Hamburger Menu for mobile screens.Dark Mode: A unified, professional dark theme (bg-slate-950) implemented consistently across all components (Cards, Accordions, Modal).Routing: Uses react-router-dom to manage clean page navigation between Home, Models, and Heritage.Interactive Components:Carousel: Displays featured cars with working navigation logic.Models Filter: Allows filtering car cards by brand (Pagani/Ferrari) using useMemo for efficient rendering.Car Cards: Feature images, key specifications, and buttons to open a detailed modal.🛠 Tech StackFramework: React (Functional Components, Hooks)Styling: Tailwind CSS (Utility-First Framework)Routing: React Router DOM v6+🚀 Getting StartedFollow these steps to get a copy of the project up and running on your local machine.PrerequisitesYou need to have Node.js and npm (or yarn/pnpm) installed on your system.1. InstallationAssuming you have a standard React project structure (e.g., created with Vite or Create React App), navigate to your project directory and install the necessary dependencies:Bashnpm install react-router-dom
# or
yarn add react-router-dom
2. File StructureEnsure your components and data files are organized as follows:/src
  /components
    Accordion.js
    CarCard.js
    Carousel.js
    Footer.js
    Header.js
    Layout.js
    Modal.js
  /data
    italianCarsData.js
  /pages
    App.js          # The main router
    Home.js
    Models.js
    Heritage.js
    layout.css      # Contains Tailwind imports & custom CSS (e.g., for navbar)
3. Image Setup (Crucial!)All image paths (e.g., /images/pagani-huayra.jpg, /images/italy-flag.svg) are relative to your public directory.Create a folder named images inside your public directory.Place all necessary image files (italy-flag.svg, car images, etc.) into public/images/.4. Running the ProjectStart the development server:Bashnpm run dev
# or
npm start
The application should now be accessible in your browser, typically at http://localhost:3000.📂 File Summary & CustomizationFilePurposeCustomization NotesLayout.js / layout.cssGlobal navigation, responsive menu, and Italian flag icon.To change the flag icon, update the background-image path in layout.css.Home.jsLanding page structure and layout of the carousel and FAQ accordion.Change the backgroundPic path in the <Header /> if needed.Models.jsThe main car display page with filtering logic.To add more brands, update the <option> list in the select element.italianCarsData.jsCentral data source for all car specs, highlights, and carousel items.Primary file for content updates (new cars, new images, new specs).CarCard.jsDisplays a single car's image, headline, and highlights.To change card aesthetic, edit Tailwind classes in this file.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
