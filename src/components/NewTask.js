import React from 'react';
import { useState } from 'react';

function NewTask(props) {
  const [addedTask, setAddedTask] = useState('hsjfffmfms');

  return (
    <div className="space-y-[20px] px-10 py-5 border-[2px] border-[#08334497]">
      <div className="space-y-[5px]">
        <p>Task</p>
        <input
          className="border-[1px] border-[#083344] py-2 px-3 rounded-[4px]"
          type="text"
          placeholder="Add Task"
        />
      </div>
      <div className="space-y-[5px]">
        <p>Day & Time</p>
        <input
          className="border-[1px] border-[#083344] py-2 px-3  rounded-[4px]"
          type="text"
          placeholder="Add Day & Time"
        />
      </div>
      <div className="flex gap-[50px] text-[18px]">
        <p>Set Reminder</p>
        <input className="" type="radio" />
      </div>
      <div className="bg-[#083344] text-cyan-50 text-center rounded-[4px]">
        <button
          onClick={() => {
            setAddedTask('hello from here');
          }}
        >
          Save Task
        </button>
      </div>
      <div>{addedTask}</div>
    </div>
  );
}

export default NewTask;
