import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export const AddToDo = () => {
  const [task, setTask] = useState({
    name: "",
    desc: "",
    category: "",
    date: "",
    time: "",
    priority: "",
    fulfillment: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="w-9/12 h-4/5 bg-white rounded-3xl py-10 px-8 flex flex-col">
      <p className="text-3xl font-bold text-center">React To-Do List</p>

      <div className="mt-8 flex flex-col gap-4">
        <p className="text-2xl font-serif">Add a new to-do</p>

        <form className="flex w-full">
          <div className="flex flex-col gap-10 w-1/2">
            <label className="flex w-10/12 gap-5">
              <p>Name:</p>
              <input
                placeholder="name for the task you’re going to do"
                className="w-full text-black border border-black px-2 ml-9"
                type="text"
                name="name"
                value={task.name}
                onChange={changeHandler}
              />
            </label>

            <label className="flex w-10/12 gap-5">
              <p>Description:</p>
              <input
                placeholder="a short description of the task - can be omitted"
                className="w-full text-black border border-black px-2"
                type="text"
                name="desc"
                value={task.desc}
                onChange={changeHandler}
              />
            </label>

            <label className="flex w-10/12 gap-5">
              <p>Category:</p>
              <input
                placeholder="name for the task you’re going to do"
                className="w-full text-black border border-black px-2 ml-4"
                type="text"
                name="category"
                value={task.category}
                onChange={changeHandler}
              />
            </label>

            <label className="flex w-10/12 gap-5">
              <p>Date:</p>
              <input
                placeholder="dd/mm/yyyy  - can be omitted"
                className="w-full text-black border border-black px-2 ml-12"
                type="text"
                name="date"
                value={task.date}
                onChange={changeHandler}
              />
            </label>

            <label className="flex w-10/12 gap-5">
              <p>Category:</p>
              <input
                placeholder="hh:mm - can be omitted"
                className="w-full text-black border border-black px-2 ml-5"
                type="text"
                name="time"
                value={task.time}
                onChange={changeHandler}
              />
            </label>
          </div>

          <div className="flex flex-col justify-between w-1/2">
            <div className="flex flex-col gap-4 w-full">
              <label className="flex w-full gap-5">
                <p>Priority:</p>
                <div className="ml-6 w-full border border-black mr-10 px-2 flex justify-between items-center">
                    <p className="text-gray-500 text-sm py-1">Select from dropdown</p>
                    <div className="flex items-center">
                        <div className="h-7 mr-2 w-[2px] bg-black/60"></div>
                        <button>
                            <IoMdArrowDropdown size={20}/>
                        </button>
                    </div>
                </div>
              </label>
              <label className="flex w-full gap-5">
              <p>Fulfillment:</p>
              <input
                className="w-full mr-10"
                type="range"
                name="fulfillment"
                value={task.fulfillment}
                onChange={changeHandler}
                min="0"
                max="100"
              />
            </label>
            </div>

            <div className="flex gap-4 w-10/12 mx-auto">
                <button className="px-4 py-2 text-lg rounded-xl shadow-md bg-blue-500 w-10/12">Save</button>
                <button className="px-4 py-2 text-lg rounded-xl shadow-md bg-blue-500 w-10/12">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
