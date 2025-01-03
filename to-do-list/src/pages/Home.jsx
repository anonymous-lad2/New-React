import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";

const Home = () => {
  const [activeButton, setActiveButton] = useState("All"); 

  const tasks = [
    { task: "Buy groceries", description: "Milk, Bread, Eggs", category: "Personal", when: "Today", priority: "Medium", fulfillment: 0 },
    { task: "Submit project", description: "AI project submission", category: "Work", when: "Tomorrow", priority: "High", fulfillment: 30 },
    { task: "Morning run", description: "5 km run", category: "Fitness", when: "Everyday", priority: "Low", fulfillment: 50 },
    { task: "Read book", description: "Finish novel", category: "Hobby", when: "This week", priority: "Low", fulfillment: 20 },
    { task: "Complete assignment", description: "Math problems", category: "Study", when: "Today", priority: "High", fulfillment: 100 },
    { task: "Buy groceries again", description: "Snacks, Drinks", category: "Personal", when: "Tomorrow", priority: "Low", fulfillment: 80 },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (activeButton === "All") return true;
    if (activeButton === "To-do") return task.fulfillment < 100;
    if (activeButton === "Completed") return task.fulfillment === 100;
    return true;
  });

  return (
    <div className="w-9/12 h-4/5 bg-white/50 rounded-3xl py-10 px-8 flex flex-col">
      {/* Title */}
      <p className="text-3xl font-bold text-white text-center">React To-Do List</p>

      {/* Buttons Section */}
      <div className="mt-8 flex flex-wrap justify-between items-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-lg rounded-xl shadow-md">
          Add a new to-do
        </button>

        <div className="flex flex-wrap gap-4">
          {["All", "To-do", "Completed"].map((button) => (
            <button
              key={button}
              className={`w-28 px-4 py-2 text-lg rounded-xl shadow-md ${
                activeButton === button
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveButton(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>

      {/* To-Do List Table */}
      <div className="h-full bg-white mt-8 rounded-3xl p-6 shadow-md overflow-hidden">
        <div className="h-72 overflow-y-auto rounded-xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-200 text-gray-700 sticky top-0">
                <th className="p-4">Task</th>
                <th className="p-4">Description</th>
                <th className="p-4">Category</th>
                <th className="p-4">When</th>
                <th className="p-4">Priority</th>
                <th className="p-4">Fulfillment</th>
                <th className="p-4 text-center"></th>
                <th className="p-4 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{task.task}</td>
                  <td className="p-4">{task.description}</td>
                  <td className="p-4">{task.category}</td>
                  <td className="p-4">{task.when}</td>
                  <td className="p-4">{task.priority}</td>
                  <td className="p-4">{task.fulfillment}</td>
                  <td className="p-4 text-center text-blue-500">
                    <MdEditNote size={20} />
                  </td>
                  <td className="p-4 text-center text-red-500">
                    <FaRegTrashAlt size={20} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
