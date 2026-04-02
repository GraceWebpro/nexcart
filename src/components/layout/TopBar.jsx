import { useState } from "react";

export default function TopBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
<div
  className={`w-full bg-primary text-white text-sm px-6 transition-all duration-300 ${
    visible ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
  }`}
>      <div className="max-w-7xl mx-auto py-2 flex items-center justify-center">

        {/* TEXT */}
        <p className="text-center w-full md:w-auto">
          Sign up and get <span className="font-semibold">20% off</span> your first order
        </p>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 ml-4">
          
          {/* CTA */}
          <button className="hidden sm:block bg-white text-primary px-3 py-1 rounded-md text-xs font-medium hover:bg-gray-100 transition">
            Sign Up
          </button>

          {/* CLOSE */}
          <button
            onClick={() => setVisible(false)}
            className="text-white/80 hover:text-white text-lg leading-none "
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}