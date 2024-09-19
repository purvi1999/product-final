import AddToDo from "../components/Todo/AddToDo.js";
import SearchToDo from "../components/Todo/SearchToDo.js";
import ViewToDo from "../components/Todo/ViewToDo.js";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-500">
      <div className="bg-pink-300 rounded">
        <h2 className="text-2xl mb-4 mt-4 text-center">Todo Application</h2>
        <AddToDo />
        <div className="p-2">
          <SearchToDo />
        </div>
        <ViewToDo />
      </div>
    </div>
  );
};

export default Home;
