// Importing React
import React from 'react';

// Functional component for the Header
function Header() {
  return (
    // Container for the header with background color, text color, and minimum height
    <div className="bg-cyan-950 text-cyan-50 min-h-[50px] w-screen flex justify-center md:max-w-[700px] md:min-h-[100px]">
      {/* Heading with specified font size and bold styling for the title */}
      <h1 className="text-[30px] font-bold md:text-[50px]">Task Tracker</h1>
    </div>
  );
}

// Export the Header component
export default Header;
