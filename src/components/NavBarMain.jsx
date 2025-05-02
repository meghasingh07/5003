import React from "react";
import { Menu } from "lucide-react";

export default function NavBarMain({
  pagesRef,
  isPagesOpen,
  setIsPagesOpen,
  setIsMobileOpen,
}) {
  const menuItems = [
    { num: "01", label: "Home", href: "/" },
    { num: "02", label: "About Us", href: "#about" },
    { num: "03", label: "Services", href: "#services" },
    { num: "04", label: "Pages", hasDropdown: true },
    { num: "05", label: "News", href: "#news" },
    { num: "06", label: "Contact", href: "/contact" },
  ];
  
  return (
    <div className=" flex justify-between items-center px-6 md:px-16 py-4 bg-black/30 backdrop-blur">
      <div className="flex items-center gap-2 font-bold text-xl">
        <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
      </div>
      <div className="hidden md:flex items-center gap-10 font-semibold text-center ml-auto">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="relative flex items-start gap-1 font-bold hover:text-yellow-400"
          >
            {item.hasDropdown ? (
              <div ref={pagesRef} className="relative z-50">
                <div
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                  className="flex items-center gap-1 cursor-pointer hover:text-yellow-400"
                >
                  {item.label}
                  <span className="text-xs text-white translate-y-[-6px] hidden md:inline-block">
                    {item.num}
                  </span>
                </div>
                {isPagesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg z-[100]">
                    <ul className="divide-y divide-gray-200">
                      <li className="p-3 hover:bg-gray-100 cursor-pointer">
                        What We do
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <>
                <a
                  href={item.href}
                  className="cursor-pointer hover:text-yellow-400"
                >
                  {item.label}
                </a>
                <span className="text-xs text-white translate-y-[-6px] hidden md:inline-block">
                  {item.num}
                </span>
              </>
            )}
          </div>
        ))}
        <div className="text-left text-sm pl-6 border-l border-white/30">
          <p>call us now</p>
          <p className="text-yellow-400 text-lg font-bold">+1 714 7788</p>
        </div>
      </div>
      <div className="md:hidden">
        <Menu
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            console.log("Menu clicked");
            setIsMobileOpen(true);
          }}
        />
      </div>
    </div>
  );
}
