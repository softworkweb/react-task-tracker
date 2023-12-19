// Importing necessary dependencies and components
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import AddButton from './components/Buttons/AddButton';
import CancelButton from './components/Buttons/CancelButton';
import ClearAllBtn from './components/Buttons/ClearAllBtn';
import TasksList from './components/TasksList';
import NewTask from './components/NewTask';
import { v4 as uuidv4 } from 'uuid';

// Main App component
function App() {
  // State variables for managing tasks and UI state
  const [task, setTask] = useState('');
  const [dayTime, setDayTime] = useState('');
  const [check, setCheck] = useState(false);
  const [newTasks, setNewTasks] = useState([]);
  const [addBtn, setAddBtn] = useState(true);

  // Function to remove a task based on its ID
  const removeItem = (id) => {
    setNewTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Function to clear all tasks
  const clearAllItem = () => {
    setNewTasks([]);
  };

  // Function to update the task list with a new task
  const updatedTaskList = (id, newTask, newDayTime, newCheck) => {
    setNewTasks((prevTasks) => [
      ...prevTasks,
      { id: id, task: newTask, day_Time: newDayTime, checked: newCheck },
    ]);
  };

  // Create a copy of the tasks array to avoid mutating the state directly
  const taskItems = [...newTasks];

  // JSX rendering
  return (
    <>
      <div className="mx-auto flex justify-center h-screen text-[18px] text-[#0e181d] relative md:text-[22px]">
        <div className="flex flex-col item-center">
          {/* Header component */}
          <div>
            <Header />
          </div>

          {/* Main content of the application */}
          <div className="bg-[#ECFEFF] h-screen">
            <div className="flex justify-center my-[2vh]">
              {/* Conditionally render either AddButton or CancelButton and NewTask components */}
              {addBtn ? (
                <AddButton addBtn={addBtn} setAddBtn={setAddBtn} />
              ) : (
                <>
                  <div>
                    <CancelButton addBtn={addBtn} setAddBtn={setAddBtn} />
                    <div className="my-[2vh]">
                      {/* NewTask component for adding a new task */}
                      <NewTask
                        id={uuidv4()}
                        task={task}
                        setTask={setTask}
                        dayTime={dayTime}
                        setDayTime={setDayTime}
                        check={check}
                        setCheck={setCheck}
                        updatedTaskList={updatedTaskList}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Display the list of tasks */}
            <div className="w-">
              <div className="my-[50px] bg-[#ECFEFF] h-full flex flex-col md:my-[150px]">
                {/* Check if there are tasks to display */}
                {taskItems.length > 0 ? (
                  // Map through the tasks and render TasksList component for each task
                  taskItems.map((taskItem) => (
                    <div className="space-y-[20px] h-full" key={taskItem.id}>
                      <TasksList
                        id={taskItem.id}
                        key={taskItem.id}
                        removeItem={removeItem}
                        task={taskItem.task}
                        day_Time={taskItem.day_Time}
                        checked={taskItem.checked}
                      />
                    </div>
                  ))
                ) : (
                  // Render message if the task list is empty
                  <div className=" w-full">
                    <hr className="bg-[#0b141820] h-[2px] w-full"></hr>
                    <div className="flex justify-center pr-3 md:pr-10">
                      <div className="p-3 md:p-5">
                        <p className="text-[16px] text-[#0b141868] md:text-[18px]">
                          Your tasklist is empty
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Render ClearAllBtn component if there are tasks */}
              {taskItems.length > 0 ? (
                <ClearAllBtn clearAllItem={clearAllItem} />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the App component
export default App;
