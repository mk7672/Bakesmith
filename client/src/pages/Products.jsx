import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductsCard";

import cakes from "../data/cakes";

function Products() {
  return (
    <>
      <Navbar />

      <section className="px-10 py-20 bg-pink-50 min-h-screen">

        <h1 className="text-5xl font-bold mb-14 text-center">
          Our Products
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {cakes.map((cake) => (
            <ProductCard
              key={cake.id}
              image={cake.image}
              name={cake.name}
              category={cake.category}
              price={cake.price}
            />
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Products;