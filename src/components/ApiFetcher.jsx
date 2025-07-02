import { useState } from "react";
import Card from "./card";

export default function ApiFetcher() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const response = await res.json();
      setData(response);
      setVisibleCount(10);
    } catch (err) {
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(10); // Optional: Reset visible count on search
  };

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleDataItems = filteredData.slice(0, visibleCount);
  const hasMore = filteredData.length > visibleCount;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="max-w-3xl mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4">Fetch API Tool</h2>

      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by title..."
        className="w-full border px-4 py-2 mb-4 rounded"
      />

      {/* Fetch Button */}
      <div className="flex mb-6">
        <button
          onClick={fetchData}
          disabled={loading}
          className={`px-4 py-2 font-semibold text-white rounded transition-all ${
            loading
              ? "bg-green-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Loading...
            </div>
          ) : (
            "Fetch data"
          )}
        </button>
      </div>

      {/* Show Results */}
      <div className="space-y-4">
        {visibleDataItems.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
          />
        ))}
      </div>

      {/* Load more button */}
      {hasMore && (
        <button
          onClick={loadMore}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Load More
        </button>
      )}

      {/* No Results */}
      {!loading && filteredData.length === 0 && (
        <p className="mt-4 text-red-600 font-medium">No results found.</p>
      )}
    </div>
  );
}
