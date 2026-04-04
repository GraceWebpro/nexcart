import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenuDrawer = ({
  isOpen,
  onClose,
  NAV_LINKS,
  handleNavClick,
  activeSection,
  location,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000]">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="absolute left-0 top-0 h-full w-[280px] bg-background-card p-6 
        shadow-2xl transform transition-transform duration-300 translate-x-0"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 mt-10">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.type === "route"
                ? location.pathname === link.path
                : activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`text-left py-2 rounded-lg font-medium transition ${
                  isActive ? "text-primary" : "hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <Link to="/shop">
          <button className="w-full bg-primary text-white font-medium px-5 py-3 mt-6 rounded-xl">
            Shop Now
          </button>
        </Link>
      </div>
    </div>,
    document.body
  );
};

export default MobileMenuDrawer;