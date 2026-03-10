import { Link } from 'wouter';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-slate text-black footer-bg">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent-orange rounded-lg flex items-center justify-center">
               <img src="/img/logo.png" className="logohospital" alt="Logo" />
              </div>
              <div className='ml-5'>
                <p className="font-bold text-lg">Sri Narayana</p>
                <p className="text-xs text-gray">Hospital</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              24/7 Emergency Care | Whitefield, Bengaluru
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-accent-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-orange transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-accent-orange transition-colors text-sm no-underline">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-accent-orange transition-colors text-sm no-underline">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-300 hover:text-accent-orange transition-colors text-sm no-underline">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/doctors">
                  <a className="text-gray-300 hover:text-accent-orange transition-colors text-sm no-underline">
                    Our Doctors
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-gray-300 hover:text-accent-orange transition-colors text-sm no-underline">
                    Health Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors text-sm no-underline">
                  Emergency Care
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors text-sm no-underline">
                  General Medicine
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors text-sm no-underline">
                  Pediatric Care
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors text-sm no-underline">
                  Physiotherapy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors text-sm no-underline">
                  Diagnostics
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Emergency</p>
                  <a href="tel:+919019727344" className="text-white font-semibold hover:text-accent-orange transition-colors no-underline">
                    +91 90197 27344
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:info@srinarayana.com" className="text-white hover:text-accent-orange transition-colors text-sm no-underline">
                    info@srinarayana.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-white text-sm">NO:43, Whitefield, Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sri Narayana Hospital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors text-sm no-underline">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors text-sm no-underline">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors text-sm no-underline">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
