import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-24">
      <h1 className="text-4xl font-bold mb-6">Welcome to Productivity Hub</h1>
      <p className="text-lg text-gray-600 mb-8">Choose a tool below to get started:</p>
      <div className="space-x-4">
        <Link to="/tasks" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Task Manager</Link>
        <Link to="/fetch" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Fetch API Tool</Link>
      </div>
    </div>
  );
}