import cakes from "../data/cakes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function GalleryPreview() {
  return (
    <section className="px-10 py-24 bg-pink-50">

      {/* TITLE */}
      <div className="flex justify-between items-center mb-14">

        <div>
          <p className="text-pink-500 font-semibold tracking-widest uppercase">
            Our Creations
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Cake Gallery
          </h2>
        </div>

        <Link
          to="/gallery"
          className="border border-pink-500 text-pink-500 px-6 py-3 rounded-full hover:bg-pink-500 hover:text-white transition"
        >
          View More
        </Link>

      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {cakes.map((cake, index) => (
          <motion.div
            key={cake.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl group cursor-pointer shadow-xl"
          >

            {/* IMAGE */}
            <img
              src={cake.image}
              alt={cake.name}
              className="h-96 w-full object-cover transition duration-700 group-hover:scale-125"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-5">

              <h2 className="text-white text-3xl font-bold">
                {cake.name}
              </h2>

              <p className="text-pink-200 mt-3">
                {cake.category}
              </p>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default GalleryPreview;