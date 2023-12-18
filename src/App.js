import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import AddButton from './components/Buttons/AddButton';
import CancelButton from './components/Buttons/CancelButton';
import TasksList from './components/TasksList';
import NewTask from './components/NewTask';
function App() {
  const [task, setTask] = useState('');
  const [dayTime, setDayTime] = useState('');
  const [check, setCheck] = useState(false);
  const [newTasks, setNewTasks] = useState([]);
  const [addBtn, setAddBtn] = useState(true);

  const updatedTaskList = (newTask, newDayTime, newCheck) => {
    setNewTasks((Task) => {
      return [
        ...Task,
        { task: newTask, day_Time: newDayTime, checked: newCheck },
      ];
    });
  };
  const taskItems = [...newTasks];

  return (
    <>
      <div className="mx-auto flex justify-center  h-screen text-[18px] text-[#0e181d] relative md:text-[22px]">
        <div className=" flex flex-col item-center ">
          <div className="">
            <Header />
          </div>
          <div className=" bg-[#ECFEFF] h-screen ">
            <div className=" flex justify-center my-[2vh]">
              {addBtn ? (
                <AddButton addBtn={addBtn} setAddBtn={setAddBtn} />
              ) : (
                <>
                  <div>
                    <CancelButton addBtn={addBtn} setAddBtn={setAddBtn} />
                    <div className="my-[2vh]">
                      <NewTask
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
            <div className="my-[50px] bg-[#ECFEFF] h-full flex flex-col md:my-[150px]">
              {taskItems.length > 0 ? (
                taskItems.map((taskItem) => (
                  <TasksList
                    task={taskItem.task}
                    day_Time={taskItem.day_Time}
                    checked={taskItem.checked}
                  />
                ))
              ) : (
                <div className=" w-full">
                  <hr className="bg-[#0b141820] h-[2px] w-full"></hr>
                  <div className="flex justify-center pr-3 md:pr-10">
                    <div className="p-3 md:p-5">
                      <p className="text-[16px] text-[#0b141868] md:text-[18px]">
                        Your tasklist empty
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
