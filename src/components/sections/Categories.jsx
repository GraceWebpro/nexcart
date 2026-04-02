import men from '../../assets/mens_watch.jpeg'
import women from '../../assets/womens.jpeg'
import tech from '../../assets/tech.jpeg'
import access from '../../assets/collection/accesso.jpeg'

const categories = [
  {
    name: "Men",
    image: men,
  },
  {
    name: "Women",
    image: women,
  },
  {
    name: "Tech",
    image: tech,
  },
  {
    name: "Accessories",
    image: access,
  },
];

export default function Categories() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">
            Categories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Shop by Category
          </h2>
          <p className="text-text-secondary mt-3">
            Find what fits your lifestyle
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-[260px] object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">
                  {cat.name}
                </h3>
                <p className="text-sm opacity-80">
                  Explore →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}