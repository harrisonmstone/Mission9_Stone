// Import the React library for creating the component
import React from 'react';
// Import the main stylesheet for the application
import './App.css';
// Import the Heading component to display the page title or section heading
import Heading from './Heading';
// Import the List component to display a list of team cards
import List from './List';

// Define the App component as a functional component
function App() {
  // Return JSX to render the application UI
  return (
    // The main container for the application, styled with 'App' class
    <div className="App">
      {/* Render the Heading component - can be customized to display any heading text */}
      <Heading />
      {/* Render the List component which includes a list of team cards */}
      <List />
    </div>
  );
}

// Export the App component to be used in the root of the application
export default App;
