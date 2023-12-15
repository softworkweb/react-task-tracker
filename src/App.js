import React from 'react';
import Header from './components/Header';
import AddButton from './components/AddButton';
function App() {
  return (
    <>
      <div className="mx-auto flex justify-center  h-screen text-[18px] text-[#021117] relative">
        <div className=" flex flex-col bg-[#ECFEFF] h-sceen item-center ">
          <div className="">
            <Header />
          </div>
          <div className=" flex justify-center my-[2vh]">
            <AddButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
