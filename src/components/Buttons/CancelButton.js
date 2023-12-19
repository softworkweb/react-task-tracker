// Importing React and the IoMdCloseCircle icon from the react-icons/io library
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

// Functional component for the CancelButton
function CancelButton({ addBtn, setAddBtn }) {
  return (
    <>
      {/* Container for the CancelButton */}
      <div className="flex flex-col items-center">
        {/* Button for small screens (md:hidden) */}
        <button
          className="md:hidden"
          onClick={() => {
            // Set addBtn state to true when the button is clicked
            setAddBtn(true);
          }}
        >
          {/* Display the IoMdCloseCircle icon with specified color and size */}
          <IoMdCloseCircle color="#dc4c64" size={100} />
        </button>

        {/* Button for larger screens (hidden on small screens - md:flex) */}
        <button
          className="hidden md:flex"
          onClick={() => {
            // Set addBtn state to true when the button is clicked
            setAddBtn(true);
          }}
        >
          {/* Display the IoMdCloseCircle icon with specified color and size */}
          <IoMdCloseCircle color="#dc4c64" size={150} />
        </button>
      </div>
    </>
  );
}

// Export the CancelButton component
export default CancelButton;
