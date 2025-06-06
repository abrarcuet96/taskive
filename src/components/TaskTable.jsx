import NoTaskFound from "./NoTaskFound";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskItem from "./TaskItem";

const TaskTable = ({
  tasks,
  handleShowModal,
  onEdit,
  onDelete,
  onDeleteAllClick,
  onFav,
  onSearch,
}) => {
  return (
    <>
      <SearchTask onSearch={onSearch} />
      <TaskActions
        onDeleteAllClick={onDeleteAllClick}
        handleShowModal={handleShowModal}
      />

      {tasks.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-4 pb-4 text-sm font-semibold capitalize text-gray-300 w-[48px]"></th>
                <th className="p-4 pb-4 text-sm font-semibold capitalize text-gray-300 w-[250px] text-left">
                  {" "}
                  Title{" "}
                </th>
                <th className="p-4 pb-4 text-sm font-semibold capitalize text-gray-300 w-[300px] text-left">
                  {" "}
                  Description{" "}
                </th>
                <th className="p-4 pb-4 text-sm font-semibold capitalize text-gray-300 md:w-[200px] text-center">
                  {" "}
                  Tags{" "}
                </th>
                <th className="p-4 pb-4 text-sm font-semibold capitalize text-gray-300 md:w-[120px] text-center">
                  {" "}
                  Priority{" "}
                </th>
                <th className="p-4 pb-4 text-sm font-semibold capitalize text-gray-300 md:w-[150px] text-center">
                  {" "}
                  Options{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <TaskItem
                  onFav={onFav}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  key={task.id}
                  task={task}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoTaskFound />
      )}
    </>
  );
};

export default TaskTable;
