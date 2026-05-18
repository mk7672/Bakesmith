import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="px-10 py-24 text-center">

      <h2 className="text-5xl font-bold">
        Have a Dream Cake in Mind?
      </h2>

      <Link
        to="/custom-order"
        className="inline-block mt-10 bg-pink-500 text-white px-10 py-4 rounded-full text-xl hover:bg-pink-600 transition"
      >
        Start Custom Order
      </Link>

    </section>
  );
}

export default CTA;