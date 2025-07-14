'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  id?: string;
}

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('HOME');

  const navItems: NavItem[] = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
    { label: 'PRESS/ANNOUNCEMENTS', href: '#press-announcements', id: 'press-announcements' },
    { label: 'MERCH', href: '#merch', id: 'merch' },
    { label: 'LISTEN', href: '#listen', id: 'listen' },
    { label: 'CONTACT ME', href: '#contact', id: 'contact' },
    { label: 'SHOWS NEAR YOU', href: '#shows', id: 'shows' },
    { label: 'MUSIC', href: '#listen', id: 'music' },
  ];

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <nav className="hidden lg:block fixed bottom-0 left-0 right-0 z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <ul className="flex space-x-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => handleItemClick(item.label)}
                  className={`
                    relative px-3 py-2 transition-colors duration-200 hover:text-gray-300
                    ${activeItem === item.label ? 'text-white' : 'text-gray-400'}
                  `}
                >
                  {item.label}
                  {activeItem === item.label && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;