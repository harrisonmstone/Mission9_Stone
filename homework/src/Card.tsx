// Import React library and component-specific styles
import React from "react";
import './Card.css';

// Team interface declaration for type-checking the component props
export interface Team {
    tid: number;
    cid: number;
    did: number;
    school: string;
    name: string;
    abbrev: string;
    pop: number;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
}

// Card component that takes a 'team' object as a prop
function Card({ team }: { team: Team }) {
  // JSX structure for rendering team information within a styled card
  return (
    <div className="team-card">
      <h2>{team.school}</h2>
      <p>Mascot: {team.name}</p>
      <p>Location: {team.city}, {team.state}</p>
    </div>
  );
}

// Export Card component for use in other parts of the application
export default Card;
