# Frontend

## To use

Create a .env file in the root of project(frontend folder) and define VITE_API_URL="URLToBackend"

## Todo (delete when finished)

- Home page needs attention to styling
- Better button for header drawer menu
- Favourite stops page

## Architecture

- All components in src
- Components: has all the react components inside, except imports from MUI (external React-component library)
- Context: Has global state management. Import useBusStops from context to use the hook for bus stops
- Pages: Has all the page components. Modify to change what is rendered on each page of the web app
- Routes: Includes all routes to different pages of the application. I you need a new route add a new <Route /> component and create a page component to correspond
- Services: Handles requests to backend

- App.jsx: Displays components that are common in all pages

- main.jsx: The entry point of the application. It renders the root component (App.jsx) into DOM and sets up provider for state management
