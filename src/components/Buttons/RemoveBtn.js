import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
function RemoveBtn() {
  return (
    <div>
      <button className="md:hidden" onClick={() => {}}>
        <RiDeleteBin6Line color="#dc4c64" size={25} />
      </button>
      <button className="hidden md:flex" onClick={() => {}}>
        <RiDeleteBin6Line color="#dc4c64" size={50} />
      </button>
    </div>
  );
}

export default RemoveBtn;
