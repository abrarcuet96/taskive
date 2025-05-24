import { FaStar } from "react-icons/fa";
const TaskItem = ({ task, onEdit, onDelete, onFav }) => {
  const { title, description, tags, priority, isFavorite } = task;

  const priorityClasses = {
    High: "bg-red-500",
    Medium: "bg-orange-500",
    Low: "bg-green-500",
  };
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200 [&>td]:align-middle [&>td]:px-4 [&>td]:py-3">
      <td>
        <button onClick={() => onFav(task.id)}>
          {isFavorite ? <FaStar color="yellow" /> : <FaStar color="gray" />}
        </button>
      </td>
      <td className="font-semibold text-sm">{title}</td>
      <td className="text-gray-400">{description}</td>
      <td>
        <ul className="flex justify-center gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <li key={index}>
              <span
                className={`inline-block h-6 px-3 text-sm font-medium rounded-full ${
                  priorityClasses[priority] || "bg-gray-600"
                } text-white`}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">
        <span
          className={`px-3 py-1 text-sm font-semibold rounded-full ${
            priorityClasses[priority] || "bg-gray-600"
          }`}
        >
          {priority}
        </span>
      </td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-400 hover:text-red-500 transition-colors duration-200"
          >
            Delete
          </button>
          <button
            onClick={() => onEdit(task)}
            className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;
