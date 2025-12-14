import './App.css'
import { useState, useEffect, useRef } from 'react'
import meBg from './assets/me-bg.png'
import meCutout from './assets/me-cutout.png'
import LogoScroller from './components/logoScroller'
import Navigation from './components/Navigation'

function App() {
  const adjectives = ['intuitive', 'seamless', 'engaging', 'memorable'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [rotation, setRotation] = useState({ 
    background: { x: 0, y: 0, translateX: 0, translateY: 0 }, 
    foreground: { x: 0, y: 0, translateX: 0, translateY: 0 }
  });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const foregroundImageRef = useRef<HTMLImageElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
      setFadeKey(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position directly via DOM for performance
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      if (!foregroundImageRef.current || !imageContainerRef.current) return;

      const rect = imageContainerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to center (-1 to 1)
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      // Convert to rotation angles and translation for subtle parallax
      // Background moves less (subtle)
      const bgRotateY = x * 1.5;
      const bgRotateX = -y * 1.5;
      const bgTranslateX = x * 5;
      const bgTranslateY = y * 5;
      
      // Foreground moves more (pronounced)
      const fgRotateY = x * 3;
      const fgRotateX = -y * 3;
      const fgTranslateX = x * 12;
      const fgTranslateY = y * 12;

      setRotation({ 
        background: { x: bgRotateX, y: bgRotateY, translateX: bgTranslateX, translateY: bgTranslateY }, 
        foreground: { x: fgRotateX, y: fgRotateY, translateX: fgTranslateX, translateY: fgTranslateY } 
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`custom-cursor ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
      />
      <Navigation />
      <div className="hero-section w-full h-screen flex flex-col lg:flex-row text-white px-4 lg:px-8">
        <div className="w-full lg:w-1/2">
          <div className="h-100 flex flex-col justify-center lg:h-full lg:justify-center">
            <h1>Hey 👋</h1>
            <h1>I'm <span>Trent</span> Bell</h1>
            <h2>A <span>Full-Stack Software Engineer</span> with a passion for creating <span key={fadeKey} className="changing-text fade-enter text-gold underline">{adjectives[currentIndex]}</span><br />
            user experiences.</h2>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-4/5" ref={imageContainerRef} style={{
            perspective: '1500px',
            transformStyle: 'preserve-3d'
          }}>
              <img src={meBg} alt="" className="w-full h-auto" ref={bgImageRef} style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(0,0,0,1) 80%, transparent 100%), linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(0,0,0,1) 80%, transparent 100%), linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'intersect',
                transform: `translate(${rotation.background.translateX}px, ${rotation.background.translateY}px) translateZ(-30px) rotateX(${rotation.background.x}deg) rotateY(${rotation.background.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out'
              }}
              />
              <img src={meCutout} alt="Trent Bell" ref={foregroundImageRef} className="absolute top-0 left-0 w-full h-auto" style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 95%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 95%, transparent 100%)',
                transform: `translate(${rotation.foreground.translateX}px, ${rotation.foreground.translateY}px) translateZ(50px) rotateX(${rotation.foreground.x}deg) rotateY(${rotation.foreground.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out'
              }} />
          </div>
        </div>
      </div>
      <div className="tools-section w-full h-64 flex flex-col justify-center items-center text-white px-4 lg:px-8">
        <LogoScroller direction="left" />
        <h1>Experienced in the right tools for any task</h1>
        <LogoScroller direction="right" />
      </div>
      <div className='w-full text-white px-4 lg:px-8 py-12 flex justify-center'>
        <div className='glass-card max-w-5xl w-full'>
          <h1>My Journey</h1>
            <div className='clear-both'>
              <ol className="relative border-s border-default">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                    <time className="text-sm font-normal leading-none text-body">June 2023 - Present</time>
                    <h3 className="text-lg font-semibold text-heading my-2">Software Developer - AccountingWare</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-body"><strong className="text-heading">Spearheaded a complete overhaul</strong> of the customer facing dashboard. Planned, designed, and implemented new features and drastically improved user experience.</span>
                      </li>
                      <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-body"><strong className="text-heading">Implemented enhancements and maintained functionality</strong> of the self-service portal, working across the entire stack.</span>
                      </li>
                      <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-body"><strong className="text-heading">Led and participated in conversations</strong> surrounding design language, user experience, and programming best practices and trends.</span>
                      </li>
                    </ul>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                    <time className="text-sm font-normal leading-none text-body">Dec 2025</time>
                    <h3 className="text-lg font-semibold text-heading my-2">React Native Specialization Certification - Meta</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading">Specialization including six courses covering cross-platform mobile development</strong>, javascript, version control, React, React Native, working with data, principles of UI/UX design, and a capstone React Native app.</span>
                        </li>
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading underline"><a href='https://www.coursera.org/account/accomplishments/specialization/CAA1U8C6DQRT'>View Certificate</a></strong></span>
                        </li>
                      </ul>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                    <time className="text-sm font-normal leading-none text-body">May 2021 - 2023</time>
                    <h3 className="text-lg font-semibold text-heading my-2">Project Developer - AccountingWare</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading">Created Integrations with 3rd Party APIs</strong> to help our customers automate their tasks, and speed up their workflows.</span>
                        </li>
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading">Helped create and standardize</strong> practices and processes for creating automated workflows or "bots"</span>
                        </li>
                      </ul>
                    </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                    <time className="text-sm font-normal leading-none text-body">May 2022 - May 2023</time>
                    <h3 className="text-lg font-semibold text-heading my-2">President - Texas Tech University Saddle Tramps</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading">Worked directly with the University President and his office, Athletics Department, Center for Campus Life, and other key departments</strong> of the university to orchestrate events and experiences for students.</span>
                        </li>
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading">Increased membership by more than 30%</strong> as well as increasing event attendance and member satisfaction.</span>
                        </li>
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading">Facilitated weekly meetings</strong> of over 70 members utilizing Robert’s Rules of Order.</span>
                        </li>
                      </ul>
                    </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                    <time className="text-sm font-normal leading-none text-body">August 2019 - May 2023</time>
                    <h3 className="text-lg font-semibold text-heading my-2">Bachelors of Science, Computer Science, Minor in Mathematics - Texas Tech University</h3>
                </li>

                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-body">July 2017 - April 2021</time>
                    <h3 className="text-lg font-semibold text-heading my-2">IT Support Specialist - Midland Christian School</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading">Launched a digital-signage initiative</strong> installing more than 10 digital signage installations throughout the campus, as well as necessary supporting infrastructure.</span>
                        </li>
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading">Wrote scripts to automate common IT Department tasks</strong>, as well as scanning student computers for issues and prohibited content.</span>
                        </li>
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading">Provided direct support</strong> to both students and staff.</span>
                        </li>
                        <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-body"><strong className="text-heading">Implemented network, security, VOIP, live sound, and lighting</strong> solutions across the campus.</span>
                        </li>
                      </ul>
                </li>
            </ol>
            </div>
        </div>
      </div>
      <div className='contact-section w-full text-white px-4 lg:px-8 py-12 flex justify-center'>
        <div className='glass-card max-w-2xl w-full'>
        <h1 className='mb-8'>Get In Touch</h1>
        <form action="https://formsubmit.co/me@trentb.tech" method="POST" className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label htmlFor='firstName' className='block text-body mb-2'>First Name</label>
              <input 
                type='text' 
                id='firstName' 
                name='firstName' 
                required 
                className='w-full px-4 py-2 bg-neutral-quaternary border border-buffer rounded text-heading focus:outline-none focus:border-gold'
              />
            </div>
            <div>
              <label htmlFor='lastName' className='block text-body mb-2'>Last Name</label>
              <input 
                type='text' 
                id='lastName' 
                name='lastName' 
                required 
                className='w-full px-4 py-2 bg-neutral-quaternary border border-buffer rounded text-heading focus:outline-none focus:border-gold'
              />
            </div>
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='block text-body mb-2'>Email</label>
            <input 
              type='email' 
              id='email' 
              name='email' 
              required 
              className='w-full px-4 py-2 bg-neutral-quaternary border border-buffer rounded text-heading focus:outline-none focus:border-gold'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='block text-body mb-2'>Subject</label>
            <input 
              type='text' 
              id='subject' 
              name='subject' 
              required 
              className='w-full px-4 py-2 bg-neutral-quaternary border border-buffer rounded text-heading focus:outline-none focus:border-gold'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='block text-body mb-2'>Message</label>
            <textarea 
              id='message' 
              name='message' 
              rows={6} 
              required 
              className='w-full px-4 py-2 bg-neutral-quaternary border border-buffer rounded text-heading focus:outline-none focus:border-gold resize-vertical'
            ></textarea>
          </div>
          <button 
            type='submit' 
            className='px-8 py-3 bg-gold text-heading font-semibold rounded hover:opacity-90 transition-opacity'
          >
            Send Message
          </button>
        </form>
        </div>
      </div>
    </>
  )
}

export default App
