import React from 'react';
import RemoveBtn from './Buttons/RemoveBtn';

function TasksList({ task, day_Time, checked }) {
  return (
    <>
      <div className="flex items-center w-full my-[1px] md:my-[5px]">
        {checked ? (
          <hr className="w-[5px] h-full bg-success"></hr>
        ) : (
          <hr className="w-[5px] h-full bg-success/1"></hr>
        )}

        <div className="w-full">
          <hr className="bg-[#0b141820] h-[2px]"></hr>
          <div className="flex items-center justify-between pr-3 md:pr-10">
            <div className="p-3 md:p-5">
              <h1 className="font-bold">{task}</h1>
              <p className="text-[16px] text-[#0b141868] md:text-[18px]">
                {day_Time}
              </p>
            </div>
            <div>
              <RemoveBtn />
            </div>
          </div>
          <hr className="bg-[#0b141820] text-danger h-[2px]"></hr>
        </div>
      </div>
    </>
  );
}

export default TasksList;
