import { FaStar } from "react-icons/fa";

const MyReviews = () => {
  const reviews = [
    { id: 1, artwork: "Sunset", rating: 5, comment: "Excellent!" },
    { id: 2, artwork: "Ocean Art", rating: 4, comment: "Nice colors" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">My Reviews</h2>

      {reviews.map(r => (
        <div key={r.id} className="mb-4 p-4 border rounded">
          <h4 className="font-semibold">{r.artwork}</h4>
          <div className="flex text-yellow-400 my-2">
            {[...Array(r.rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default MyReviews;
