/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdCancel } from "react-icons/md";
const AddTaskModal = ({ handleCloseModal, onSave, taskToUpdate }) => {
  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }

    setTask({
      ...task,
      [name]: value,
    });
  };
  return (
    <>
      <div className="fixed inset-0 z-10 bg-black/10 backdrop-blur-sm"></div>

      <form className="fixed z-20 top-1/2 left-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/20 bg-[#191D26] p-8 sm:p-10 md:p-12 shadow-xl">
        <div className="w-full flex justify-end">
          <button onClick={handleCloseModal}>
            <div className="cursor-pointer transition-all duration-200 hover:scale-110 hover:opacity-80">
              <MdCancel color="red" className="text-2xl" />
            </div>
          </button>
        </div>
        <h2 className="mb-8 text-center text-2xl font-semibold text-white sm:mb-10 sm:text-3xl">
          {isAdd ? "Add New Task" : "Edit Task"}
        </h2>

        {/* Inputs */}
        <div className="space-y-6 text-white sm:space-y-8">
          {/* Title */}
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300"
            >
              Title
            </label>
            <input
              className="block w-full rounded-lg bg-[#2D323F] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              id="title"
              placeholder="Enter task title"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300"
            >
              Description
            </label>
            <textarea
              className="block w-full min-h-[120px] rounded-lg bg-[#2D323F] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="description"
              value={task.description}
              onChange={handleChange}
              id="description"
              placeholder="Enter task description"
              required
            ></textarea>
          </div>

          {/* Tags & Priority */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Tags */}
            <div className="space-y-2">
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-300"
              >
                Tags
              </label>
              <input
                className="block w-full rounded-lg bg-[#2D323F] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="tags"
                value={task.tags}
                onChange={handleChange}
                id="tags"
                placeholder="e.g., Design, Backend"
                required
              />
            </div>

            {/* Priority */}
            <div className="space-y-2">
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-300"
              >
                Priority
              </label>
              <select
                className="block w-full cursor-pointer rounded-lg bg-[#2D323F] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="priority"
                value={task.priority}
                onChange={handleChange}
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => onSave(task, isAdd)}
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-white transition-all hover:bg-blue-700 hover:shadow-md"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTaskModal;
