import { useNavigate } from "react-router-dom";
import Best from '../../assets/collection/best.jpeg'
import Trend from '../../assets/collection/trend.jpeg'
import New from '../../assets/collection/new.jpeg'
import Holi from '../../assets/collection/out2.jpeg'
import Street from '../../assets/collection/street.jpg'

const collections = [
  {
    name: "Best Sellers",
    slug: "bestsellers",
    image: Best,
  },
  {
    name: "Trending",
    slug: "trending",
    image: Trend,
  },
  {
    name: "New Arrivals",
    slug: "new",
    image: New,
  },
  {
    name: "Holiday Outfits",
    slug: "holiday",
    image: Holi,
  },
  {
    name: "Streetwear",
    slug: "streetwear",
    image: Street,
  },
];

export default function ShopByCollection() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto bg-background px-6 py-20">

      {/* HEADER */}
      <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">
            Collections
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Shop by Collection
          </h2>
          <p className="text-text-secondary mt-3">
          Curated styles for every moment
          </p>
        </div>


      {/* SCROLL CONTAINER */}

      <div className="relative">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">

            {collections.map((col, i) => (
            <div
                key={i}
                onClick={() => navigate(`/shop?collection=${col.slug}`)}
                className="group relative min-w-[260px] md:min-w-[320px] h-[360px] rounded-2xl overflow-hidden cursor-pointer"
            >

                {/* IMAGE */}
                <img
                src={col.image}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover 
                group-hover:scale-110 transition duration-700"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                {/* CONTENT */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-1">
                    {col.name}
                </h3>

                <p className="text-sm opacity-80 group-hover:opacity-100 transition">
                    Shop now →
                </p>
                </div>

                {/* SUBTLE BORDER GLOW */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition" />

            </div>
            ))}

        </div>
      </div>
    </section>
  );
}