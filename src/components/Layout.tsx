import { Link, useLocation } from 'react-router-dom';
import {Linkedin, Twitter, Github, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#F5F4ED]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F4ED]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <a href="https://github.com/Atharwa23" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Github size={22} />
              </a>
              <a href="https://x.com/Atharwa_23_" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Twitter size={22} />
              </a>
              <a href="https://linkedin.com/in/atharwa-zawar-476597292" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Linkedin size={22} />
              </a>
            </div>

            <nav className="flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-colors ${isActive('/') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${isActive('/about') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              >
                About
              </Link>
               <Link
                to="/projects"
                className={`font-medium transition-colors ${isActive('/projects') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Projects
              </Link>
               <Link
                to="/services"
                className={`font-medium transition-colors ${isActive('/services') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors ${isActive('/contact') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Contact
              </Link>
              {/* <Link
                to="/resume"
                className="px-6 py-2 border-2 border-gray-800 rounded-full font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
              >
                Resume
              </Link> */}
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
