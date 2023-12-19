// Importing React and the RemoveBtn component
import React from 'react';
import RemoveBtn from './Buttons/RemoveBtn';

// Functional component for rendering individual task items
function TasksList({ id, task, day_Time, checked, removeItem }) {
  return (
    // Fragment to group multiple elements without adding an extra node to the DOM
    <>
      {/* Container for the task item, flex layout with vertical alignment */}
      <div className="flex items-center h-full w-full my-[1px] md:my-[5px]">
        {/* Conditional rendering of horizontal line based on task completion */}
        {checked ? (
          <hr className="w-[8px] bg-success"></hr>
        ) : (
          <hr className="w-[8px] h-full bg-success/1"></hr>
        )}

        {/* Container for the task details and remove button */}
        <div className="w-full h-full">
          {/* Horizontal line above the task details */}
          <hr className="bg-[#0b141820] h-[2px]"></hr>

          {/* Flex container for the task details and remove button */}
          <div className="flex items-center h-full justify-between pr-3 md:pr-10">
            {/* Container for the task details with padding */}
            <div className="h-full p-3 md:p-5">
              {/* Task title with bold font */}
              <h1 className="font-bold">{task}</h1>
              {/* Task details with a smaller font size */}
              <p className="text-[16px] text-[#0b141868] md:text-[18px]">
                {day_Time}
              </p>
            </div>

            {/* Container for the RemoveBtn component */}
            <div>
              {/* Render the RemoveBtn component with the task ID and removeItem function */}
              <RemoveBtn id={id} removeItem={removeItem} />
            </div>
          </div>

          {/* Horizontal line below the task details */}
          <hr className="bg-[#0b141820] h-[2px]"></hr>
        </div>
      </div>
    </>
  );
}

// Export the TasksList component
export default TasksList;
