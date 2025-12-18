import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white px-4 lg:px-8 py-8 border-t border-buffer">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-body text-sm">
          <p>&copy; {currentYear} Trent Bell. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 items-center">
          <Link 
            to="/privacy-policy" 
            className="text-body hover:text-gold transition-colors duration-200 text-sm"
          >
            Privacy Policy
          </Link>
          
          <a 
            href="https://www.linkedin.com/in/trent-a-bell/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-body hover:text-gold transition-colors duration-200 text-sm"
          >
            LinkedIn
          </a>
          
          <a 
            href="mailto:me@trentb.tech" 
            className="text-body hover:text-gold transition-colors duration-200 text-sm"
          >
            Contact
          </a>
          <a href="http://status.trentb.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body hover:text-gold transition-colors duration-200 text-sm"
          >
            Status
          </a>
        </div>
      </div>
    </footer>
  );
}
