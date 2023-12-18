import React from 'react';

import { IoMdCloseCircle } from 'react-icons/io';

function CancelButton({ addBtn, setAddBtn }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <button
          className="md:hidden"
          onClick={() => {
            setAddBtn(true);
          }}
        >
          <IoMdCloseCircle color="#dc4c64" size={100} />
        </button>
        <button
          className="hidden md:flex"
          onClick={() => {
            setAddBtn(true);
          }}
        >
          <IoMdCloseCircle color="#dc4c64" size={150} />
        </button>
      </div>
    </>
  );
}

export default CancelButton;
