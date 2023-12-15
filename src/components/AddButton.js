import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { IoMdCloseCircle } from 'react-icons/io';
import { useState } from 'react';
import NewTask from './NewTask';
function Button(props) {
  const [add, setAdd] = useState('');
  const [close, setClose] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center">
        <button
          className="md:hidden"
          onClick={() => {
            close !== false ? setAdd('') : setAdd(<NewTask />);
            close ? setClose(false) : setClose(true);
          }}
        >
          {close ? (
            <IoMdCloseCircle color="#dc4c64" size={100} />
          ) : (
            <IoMdAddCircle color="#14a44d" size={100} />
          )}
        </button>
        <button
          className="hidden md:flex"
          onClick={() => {
            close !== false ? setAdd('') : setAdd(<NewTask />);
            close ? setClose(false) : setClose(true);
          }}
        >
          {close ? (
            <IoMdCloseCircle color="#dc4c64" size={100} />
          ) : (
            <IoMdAddCircle color="#14a44d" size={100} />
          )}
        </button>
        <div>{add}</div>
      </div>
    </>
  );
}

export default Button;
