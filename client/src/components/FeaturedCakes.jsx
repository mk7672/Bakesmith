import cakes from "../data/cakes";


function FeaturedCakes() {
  return (
    <section className="px-10 py-20">

      <h2 className="text-4xl font-bold mb-10">
        Featured Cakes
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {cakes.map((cake) => (
          <div
            key={cake.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={cake.image}
              className="h-72 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-semibold">
                {cake.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {cake.category}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default FeaturedCakes;