import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';

function AddButton({ addBtn, setAddBtn }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <button
          className="md:hidden"
          onClick={() => {
            setAddBtn(false);
          }}
        >
          <IoMdAddCircle color="#14a44d" size={100} />
        </button>
        <button
          className="hidden md:flex"
          onClick={() => {
            setAddBtn(false);
          }}
        >
          <IoMdAddCircle color="#14a44d" size={150} />
        </button>
      </div>
    </>
  );
}

export default AddButton;
