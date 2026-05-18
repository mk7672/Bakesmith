import { motion } from "framer-motion";

function ProductCard({ image, name, category, price }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="text-2xl font-semibold">
          {name}
        </h2>

        <p className="text-gray-500 mt-2">
          {category}
        </p>

        <p className="mt-4 text-pink-500 font-bold text-xl">
          ₹{price}
        </p>

        <button className="mt-5 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl transition">
          Order Now
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;