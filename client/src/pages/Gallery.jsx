import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cakes from "../data/cakes";

function Gallery() {
  return (
    <>
      <Navbar />

      <section className="px-10 py-20">

        <h1 className="text-5xl font-bold mb-10">
          Gallery
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {cakes.map((cake) => (
            <img
              key={cake.id}
              src={cake.image}
              className="rounded-3xl h-96 w-full object-cover"
            />
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Gallery;