import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation(); // get current route

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Doctors', href: '/doctors' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const activeClass = "text-primary font-bold border-b-2 border-primary";
  const normalClass = "text-dark-slate hover:text-primary transition-colors text-sm font-medium";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 no-underline">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="/img/logo.png" className="logohospital" alt="Logo" />
              </div>
              <div className="hidden sm:block ml-3">
                <p className="font-bold text-lg text-blue">Sri Narayana</p>
                <p className="text-xs text-red-500">Hospital</p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`${location === link.href ? activeClass : normalClass}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919019727344">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>

            <Link href="/appointment">
              <a>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Book Appointment
                </Button>
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`px-4 py-2 rounded-lg block ${
                      location === link.href
                        ? "bg-blue-100 text-blue-600 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}

              <div className="px-4 pt-2 flex flex-col gap-2">
                <a href="tel:+919019727344">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>

                <Link href="/appointment">
                  <a>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Book Appointment
                    </Button>
                  </a>
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}