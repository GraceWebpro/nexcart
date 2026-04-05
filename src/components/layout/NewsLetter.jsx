import { Mail } from "lucide-react";
import { useState } from "react";

export default function PremiumNewsletter() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 -mt-20 mb-20 relative">

      {/* 🔥 Glow Background */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-primary/40 rounded-3xl" />

      <div className="
        relative
        bg-gradient-to-br from-primary to-[#000435]
    text-white
        rounded-3xl
        p-6 sm:p-8 lg:p-10
        shadow-[0_20px_80px_rgba(0,0,0,0.15)]
        overflow-hidden
      ">

          {/* subtle overlay */}
        <div className="absolute inset-0 bg-white/5" />

        {/* CONTENT */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* TEXT */}
          <div className="text-center lg:text-left max-w-lg">
            <p className="text-xs tracking-widest uppercase font-semibold mb-3">
              Stay Updated
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Get Exclusive Deals & New Arrivals
            </h2>

            <p className="text-white/80 mt-3 text-sm sm:text-base">
              Join thousands of customers receiving premium offers, product drops, and curated deals.
            </p>
          </div>

          {/* INPUT */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 max-w-md">

            {/* Input field */}
            <div className={`
              flex items-center gap-2 px-4 py-3 rounded-full
              bg-white/10 border border-white/20 transition backdrop-blur-md w-full
              ${focused ? "border-primary shadow-md" : "border-gray-200"}
            `}>
              <Mail size={18} className="text-white/70 shrink-0" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="bg-transparent outline-none text-sm w-full placeholder-white/60 text-white"
              />
            </div>

            {/* Button */}
            <button className="
              w-full sm:w-auto
              px-6 py-3
              rounded-full
              bg-white
              text-primary font-medium
              shadow-lg
              hover:scale-[1.03] active:scale-[0.98]
              transition
            ">
              Subscribe
            </button>

          </div>

        </div>

        {/* 🔥 Bottom subtle divider */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">

          <p>✨ No spam. Only premium updates.</p>

          <div className="flex items-center gap-4">
            <span>✔ Exclusive Deals</span>
            <span>✔ Early Access</span>
            <span>✔ Weekly Drops</span>
          </div>

        </div>

      </div>
    </div>
  );
}