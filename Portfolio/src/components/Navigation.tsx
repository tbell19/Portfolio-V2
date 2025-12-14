// import { useState, useRef, useEffect } from 'react';

export default function Navigation() {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

  return (
    <nav className="fixed top-8 right-8 z-50">
      <div className="glass-card flex items-center gap-3 py-3 px-4">
        <a 
          href="#home" 
          className="nav-button text-white hover:text-gold transition-colors duration-200"
          aria-label="Home"
        >
          Home
        </a>
        
        <a 
          href="https://www.linkedin.com/in/trent-a-bell/" 
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button text-white hover:text-gold transition-colors duration-200"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        
        <a 
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button text-white hover:text-gold transition-colors duration-200"
          aria-label="Resume"
        >
          Resume
        </a>
        
        {/* <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="nav-button text-white hover:text-gold transition-colors duration-200 flex items-center gap-1"
            aria-label="More options"
            aria-expanded={isDropdownOpen}
          >
            More
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 glass-card min-w-[150px] py-2">
              <a 
                href="#about" 
                className="block px-4 py-2 text-white hover:text-gold transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="block px-4 py-2 text-white hover:text-gold transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block px-4 py-2 text-white hover:text-gold transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
}
