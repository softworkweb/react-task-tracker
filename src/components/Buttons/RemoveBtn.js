// Importing React, RiDeleteBin6Line icon, and uuid library
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

// Functional component for the RemoveBtn
function RemoveBtn({ id, removeItem }) {
  return (
    // Container for the RemoveBtn
    <div>
      {/* Button for small screens (md:hidden) */}
      <button className="md:hidden" onClick={() => removeItem(id)}>
        {/* Display the RiDeleteBin6Line icon with specified color and size */}
        <RiDeleteBin6Line color="#dc4c64" size={25} />
      </button>

      {/* Button for larger screens (hidden on small screens - md:flex) */}
      <button className="hidden md:flex" onClick={() => removeItem(id)}>
        {/* Display the RiDeleteBin6Line icon with specified color and size */}
        <RiDeleteBin6Line color="#dc4c64" size={50} />
      </button>
    </div>
  );
}

// Export the RemoveBtn component
export default RemoveBtn;
