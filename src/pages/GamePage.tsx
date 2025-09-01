import React from 'react';

const GamePage: React.FC = () => {
  return (
    <div>
      <div>Game Page - To be migrated from game.ejs</div>
      <p>This will contain the main game interface including:</p>
      <ul>
        <li>Game menu with active/inactive/finished games</li>
        <li>Friends menu</li>
        <li>Settings menu</li>
        <li>Game board with D3.js visualization</li>
        <li>WebSocket integration for real-time gameplay</li>
      </ul>
    </div>
  );
};

export default GamePage;