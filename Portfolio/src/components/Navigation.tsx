export default function Navigation() {
  return (
    <nav className="fixed top-8 right-8 z-50">
      <div className="glass-card flex items-center gap-3 py-3 px-4">
        <a 
          href="/#home" 
          className="nav-button text-white hover:text-gold transition-colors duration-200"
          aria-label="Home"
        >
          Home
        </a>

        <a 
          href="/#projects" 
          className="nav-button text-white hover:text-gold transition-colors duration-200"
          aria-label="Projects"
        >
          Projects
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
      </div>
    </nav>
  );
}
