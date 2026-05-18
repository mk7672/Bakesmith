import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center px-10 py-20 gap-10">

      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold leading-tight"
        >
          Custom Cakes For Every Celebration
        </motion.h1>

        <p className="mt-6 text-gray-600 text-lg">
          Beautiful handcrafted cakes designed specially for your moments.
        </p>

        <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg">
          Order Custom Cake
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
        className="rounded-3xl shadow-2xl"
      />
    </section>
  );
}

export default Hero;