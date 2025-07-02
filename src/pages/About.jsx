export default function About() {
  return (
    <div className="max-w-3xl mx-auto mt-16">
      <h1 className="text-4xl font-bold mb-6 text-center">About Productivity Hub</h1>
      <p className="text-lg text-gray-700 mb-6">
        Productivity Hub is a simple utility app that provides two helpful tools:
      </p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-700">1. Task Manager</h2>
        <p className="text-gray-600">
          This feature lets you add and delete tasks in a minimal to-do list interface. It's perfect for keeping track of daily goals and small to-do items without overwhelming features. Simply enter a task, click "Add," and remove it when you're done.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-green-700">2. Fetch API Tool</h2>
        <p className="text-gray-600">
          This tool allows you to enter a URL and fetch JSON data from public APIs. It's great for quickly testing endpoints or exploring API responses in a readable format. Just paste the URL and click "Fetch."
        </p>
      </div>
    </div>
  );
}