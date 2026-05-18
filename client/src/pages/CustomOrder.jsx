import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CustomOrder() {
  return (
    <>
      <Navbar />

      <section className="px-10 py-20 max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Custom Cake Order
        </h1>

        <form className="flex flex-col gap-6">

          <input
            type="text"
            placeholder="Name"
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Cake Theme"
            className="border p-4 rounded-xl"
          />

          <textarea
            placeholder="Describe your cake"
            className="border p-4 rounded-xl h-40"
          />

          <input type="file" />

          <button className="bg-pink-500 text-white py-4 rounded-xl">
            Submit Order
          </button>

        </form>
      </section>

      <Footer />
    </>
  );
}

export default CustomOrder;