// Import React library and necessary components
import React from 'react';
import Card from './Card'; // Import the Card component to use for each team
import cbt from './CollegeBasketballTeams.json'; // Import the JSON data containing the teams

// Define the List component
function List() {
  return (
    // Render a container for the list of team cards
    <div className="team-list">
      {
        // Map over the teams array from the imported JSON data
        // For each team, render a Card component
        cbt.teams.map(team => (
          // Key is required for list items in React for performance optimization
          // It helps React identify which items have changed, are added, or removed
          // The 'team' prop is passed to each Card component to display team information
          <Card key={team.tid} team={team} />
        ))
      }
    </div>
  );
}

// Export the List component to be used in other parts of the application
export default List;
