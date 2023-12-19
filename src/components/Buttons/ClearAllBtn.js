// Importing React
import React from 'react';

// Functional component for the ClearAllBtn
function ClearAllBtn({ clearAllItem }) {
  return (
    // Container for the Clear All button, centered horizontally
    <div className="flex justify-center">
      {/* Button with a red background, white text, rounded corners, and padding */}
      <button
        className="bg-[#dc4c64] text-cyan-50 text-center rounded-[4px] p-3 px-5"
        // When the button is clicked, invoke the clearAllItem function passed as a prop
        onClick={clearAllItem}
      >
        Clear All
      </button>
    </div>
  );
}

// Export the ClearAllBtn component
export default ClearAllBtn;
