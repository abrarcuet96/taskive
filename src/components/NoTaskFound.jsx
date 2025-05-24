import { MdOutlineAssignmentLate } from "react-icons/md";

const NoTaskFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 text-white">
      <MdOutlineAssignmentLate className="text-5xl text-gray-400 mb-4" />
      <h2 className="text-xl font-semibold mb-2">No Task Found</h2>
      <p className="text-gray-400 max-w-sm">
        You currently have no tasks assigned. Add a new task to get started!
      </p>
    </div>
  );
};

export default NoTaskFound;
