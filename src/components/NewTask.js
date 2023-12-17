import React from 'react';
import { useState, useEffect } from 'react';
import TaskAdded from './TaskAdded';
function NewTask({
  task,
  setTask,
  dayTime,
  setDayTime,
  check,
  setCheck,
  updatedTask,
  updatedDay_Time,
  updatedCheck,
  updatedTaskList,
}) {
  const [addedTask, setAddedTask] = useState('');

  return (
    <div className="space-y-[20px] px-10 py-5 border-[2px] border-[#08334497] relative">
      <div className="space-y-[5px]">
        <p>Task</p>
        <label htmlFor="task-input">
          <input
            className="border-[1px] border-[#083344] py-2 px-3 rounded-[4px]"
            type="text"
            value={task}
            placeholder="Add Task"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="space-y-[5px]">
        <p>Day & Time</p>
        <label htmlFor="day&time-input">
          <input
            className="border-[1px] border-[#083344] py-2 px-3  rounded-[4px]"
            type="text"
            value={dayTime}
            placeholder="Add Day & Time"
            onChange={(e) => {
              setDayTime(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="flex gap-[50px] text-[18px] items-center">
        <p>Set Reminder</p>
        <label htmlFor="reminder-checkbox">
          <input
            type="checkbox"
            value={check}
            onChange={(e) => {
              setCheck(e.target.checked);
            }}
            className="w-4 h-4 checked:bg-black bg-gray-900 border-[#083344] rounded focus:ring-[#083344] focus:ring-2"
          />
        </label>
      </div>
      <button
        className="bg-[#083344] text-cyan-50 text-center rounded-[4px] w-full p-3"
        onClick={() => {
          setTask('');
          setDayTime('');
          setCheck(false);
          setAddedTask(<TaskAdded />);
          
          setTimeout(() => {
            updatedTaskList(task, dayTime, check);
            setAddedTask('');
          }, 2500);
        }}
      >
        Save Task
      </button>
      <div>{addedTask}</div>
    </div>
  );
}

export default NewTask;
