// Import the React library to enable JSX syntax and component creation
import React from "react";

// Define the Heading functional component
function Heading() {
    // Component returns JSX to be rendered to the DOM
    return (
        // Container div for the heading section
        <div>
            {/* Main heading/title for the page or section */}
            <h1>College Basketball</h1>
            {/* Subtitle or description providing more details about the page or section */}
            <p>View a list of all teams in College Basketball and information related to each.</p>
        </div>
    );
}

// Export the Heading component to make it available for use in other parts of the application
export default Heading;
