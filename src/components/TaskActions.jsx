const TaskActions = ({ handleShowModal }) => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <h2 className="text-3xl font-bold text-gray-200">Your Tasks</h2>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleShowModal}
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-base font-semibold hover:bg-indigo-700 transition-colors duration-200"
        >
          Add Task
        </button>
        <button className="rounded-lg bg-red-600 px-5 py-2.5 text-base font-semibold hover:bg-red-700 transition-colors duration-200">
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TaskActions;
