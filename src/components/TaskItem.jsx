const TaskItem = ({ task }) => {
  const { title, description, tags, priority, isFavorite } = task;

  const priorityClasses = {
    High: "bg-red-500",
    Medium: "bg-orange-500",
    Low: "bg-green-500",
  };
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200 [&>td]:align-middle [&>td]:px-4 [&>td]:py-3">
      <td>
        {isFavorite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-star"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="yellow"
            fill="yellow"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-star"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        )}
      </td>
      <td className="font-semibold text-lg">{title}</td>
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
          <button className="text-red-400 hover:text-red-500 transition-colors duration-200">
            Delete
          </button>
          <button className="text-blue-400 hover:text-blue-500 transition-colors duration-200">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;
