import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddButton from './components/AddButton';
import CancelButton from './components/CancelButton';
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
      <div className="mx-auto flex justify-center  h-screen text-[18px] text-[#021117] relative">
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
          {taskItems.map((taskItem) => (
            <div className=" flex justify-center my-[2vh]">
              <h1>{taskItem.task}</h1>
              <p>{taskItem.day_Time}</p>
              <p>{taskItem.checked}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
