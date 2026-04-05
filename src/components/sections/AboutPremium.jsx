import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from "react-icons/fa";
import Trend from '../../assets/collection/trend.jpeg'

export default function WhyChooseUs() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid md:grid-cols-2 gap-16 items-center mb-16">

        {/* LEFT - BRAND STORY */}
        <div>
          <p className="text-sm text-primary mb-3 uppercase tracking-wider">
            About NexCart
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-6">
            Designed for modern lifestyles.
            Built for seamless shopping.
          </h2>

          <p className="text-text-secondary mb-6 max-w-md">
            We curate premium products that combine quality, style, and functionality — 
            giving you a shopping experience that feels effortless and refined.
          </p>

          <p className="text-text-secondary max-w-md">
            From everyday essentials to standout pieces, every product is carefully 
            selected to match your lifestyle.
          </p>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="relative">
          <img
            src={Trend}
            alt=""
            className="rounded-2xl w-full h-[400px] object-cover shadow-2xl"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
        </div>

      </div>

      {/* TRUST FEATURES */}
      <div className="grid md:grid-cols-4 gap-6">

        {[
          { icon: <FaTruck />, title: "Fast Delivery" },
          { icon: <FaShieldAlt />, title: "Secure Payment" },
          { icon: <FaUndo />, title: "Easy Returns" },
          { icon: <FaHeadset />, title: "24/7 Support" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-5 rounded-xl 
            border border-border bg-background-card
            hover:shadow-lg transition"
          >
            <div className="text-primary text-lg">
              {item.icon}
            </div>

            <span className="font-medium text-text-primary">
              {item.title}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}