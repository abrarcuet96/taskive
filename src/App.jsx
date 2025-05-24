import { useState } from "react";
import AddTaskModal from "./components/AddTaskModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskTable from "./components/TaskTable";
function App() {
  // const tasks = [
  //   {
  //     id: 1,
  //     title: "Integration API",
  //     description:
  //       "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
  //     tags: ["Web", "Python", "API"],
  //     priority: "High",
  //     isFavorite: true,
  //   },
  //   {
  //     id: 2,
  //     title: "API Data Synchronization with Python",
  //     description:
  //       "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
  //     tags: ["Python", "API", "Data Synchronization"],
  //     priority: "High",
  //     isFavorite: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Efficient Web API Connectivity in Python",
  //     description:
  //       "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
  //     tags: ["Web", "Python", "API"],
  //     priority: "High",
  //     isFavorite: true,
  //   },
  //   {
  //     id: 4,
  //     title: "Data Handling",
  //     description:
  //       "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
  //     tags: ["Web", "Python", "Security"],
  //     priority: "High",
  //     isFavorite: false,
  //   },
  // ];
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "React is a very amazing thing.",
    tags: ["web", "react", "js"],
    priority: "Medium",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  };
  const handleEditTask = (task) => {
    console.log("Edited");
    setTaskToUpdate(task);
    setShowAddModal(true);
  };
  const handleCloseModal = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };
  const handleDeleteTask = (taskId) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  };
  const handleDeleteAllClick = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  const handleFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  };
  const handleSearch = (searchTerm) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...filtered]);
  };
  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white">
      <Header />
      <main>
        <Hero />
        <section className="mb-20 px-4" id="tasks">
          {showAddModal && (
            <AddTaskModal
              onSave={handleAddEditTask}
              handleCloseModal={handleCloseModal}
              taskToUpdate={taskToUpdate}
            />
          )}
          <div className="container mx-auto">
            <div className="rounded-xl bg-gray-800 p-6 md:p-9 shadow-lg">
              <TaskTable
                tasks={tasks}
                handleShowModal={() => setShowAddModal(true)}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onDeleteAllClick={handleDeleteAllClick}
                onFav={handleFavorite}
                onSearch={handleSearch}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
