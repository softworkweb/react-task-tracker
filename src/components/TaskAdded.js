// Importing React
import React from 'react';

// Functional component for the TaskAdded message
function TaskAdded() {
  return (
    // Container for the TaskAdded message with styling
    <div className="h-[100px] text-[30px] font-bold text-cyan-50 w-full bg-[#083344] absolute right-0 top-[100px] flex items-center justify-center animate-myfade md:text-[50px]">
      {/* Displaying the "ADDED" message */}
      ADDED
    </div>
  );
}

// Export the TaskAdded component
export default TaskAdded;
