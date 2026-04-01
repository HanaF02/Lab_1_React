const Card = ({ title, price, image }) => {
  const handleClick = () => {
    alert(`You Just Bought: ${title}, With Price: ${price}`);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-52 text-center m-2 shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover mb-3 rounded"
      />
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-700 mb-3">${price}</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
      >
        Buy
      </button>
    </div>
  );
};
export default Card;
