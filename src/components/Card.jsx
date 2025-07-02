const Card = ({ id, title, completed }) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md border-sm hover:bg-gray-200">
      <h3 className="text-lg font-bold mb-1">
        #{id}: {title}
      </h3>
      <p
        className={`text-sm font-medium ${
          completed ? "text-green-600" : "text-red-500"
        }`}
      >
        {completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
};

export default Card;
