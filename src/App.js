import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddButton from './components/AddButton';
import CancelButton from './components/CancelButton';
import RemoveBtn from './components/Buttons/RemoveBtn';
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
        <div className=" flex flex-col bg-[#ECFEFF] h-sceen item-center ">
          <div className="">
            <Header />
          </div>
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
          {/* {taskItems.map((taskItem) => (
            <div className=" flex justify-center my-[2vh]">
              <h1>{taskItem.task}</h1>
              <p>{taskItem.day_Time}</p>
              {taskItem.checked ? <p>true</p> : <p>false</p>}
            </div>
          ))} */}
          <div className="my-[50px] flex flex-col md:my-[150px]">
            <div className="flex items-center w-full my-[1px] md:my-[5px]">
              <hr className="w-[5px] h-full bg-success"></hr>
              <div className="w-full">
                <hr className="bg-[#0b141820] h-[2px]"></hr>
                <div className="flex items-center justify-between pr-3 md:pr-10">
                  <div className="p-3 md:p-5">
                    <h1 className="font-bold">Pick up trash</h1>
                    <p className="text-[16px] text-[#0b141868] md:text-[18px]">
                      Wednesday, 8am
                    </p>
                  </div>
                  <div>
                    <RemoveBtn />
                  </div>
                </div>
                <hr className="bg-[#0b141820] text-danger h-[2px]"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
