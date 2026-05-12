import { useState, useEffect, useRef } from 'react'
import meBg from '../assets/me-bg.png'
import meCutout from '../assets/me-cutout.png'
import LogoScroller from './logoScroller'
import Navigation from './Navigation'

export default function Home() {
  const adjectives = ['intuitive', 'seamless', 'engaging', 'memorable'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [rotation, setRotation] = useState({ 
    background: { x: 0, y: 0, translateX: 0, translateY: 0 }, 
    foreground: { x: 0, y: 0, translateX: 0, translateY: 0 }
  });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const foregroundImageRef = useRef<HTMLImageElement>(null);
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
      setFadeKey(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        if (!imageContainerRef.current) return;

        const rect = imageContainerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const y = -(elementCenter - viewportCenter) / (windowHeight / 2);
        
        const clampedY = Math.max(-1, Math.min(1, y));
        
        const bgTranslateY = clampedY * 15;
        const fgTranslateY = clampedY * 30;

        setRotation({ 
          background: { x: 0, y: 0, translateX: 0, translateY: bgTranslateY }, 
          foreground: { x: 0, y: 0, translateX: 0, translateY: fgTranslateY } 
        });
      };

      handleScroll();

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      const handleMouseMove = (e: MouseEvent) => {
        if (!foregroundImageRef.current || !imageContainerRef.current) return;

        const rect = imageContainerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);

        const bgRotateY = x * 1.5;
        const bgRotateX = -y * 1.5;
        const bgTranslateX = x * 5;
        const bgTranslateY = y * 5;
        
        const fgRotateY = x * 3;
        const fgRotateX = -y * 3;
        const fgTranslateX = x * 12;
        const fgTranslateY = y * 12;

        setRotation({ 
          background: { x: bgRotateX, y: bgRotateY, translateX: bgTranslateX, translateY: bgTranslateY }, 
          foreground: { x: fgRotateX, y: fgRotateY, translateX: fgTranslateX, translateY: fgTranslateY } 
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isMobile]);

  return (
    <>
      <Navigation />
      <div id="home" className="hero-section w-full h-screen flex flex-col lg:flex-row text-white px-4 lg:px-8">
        <div className="w-full lg:w-1/2">
          <div className="h-100 flex flex-col justify-center lg:h-full lg:justify-center">
            <h1>Hey, 👋</h1>
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
                        <span className="text-body"><strong className="text-heading">Specialization including six courses covering cross-platform mobile development</strong>, JavaScript, version control, React, React Native, working with data, principles of UI/UX design, and a capstone React Native app.</span>
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
                        <span className="text-body"><strong className="text-heading">Facilitated weekly meetings</strong> of over 70 members utilizing Robert's Rules of Order.</span>
                        </li>
                      </ul>
                    </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                    <time className="text-sm font-normal leading-none text-body">August 2019 - May 2023</time>
                    <h3 className="text-lg font-semibold text-heading my-2">Bachelor of Science, Computer Science, Minor in Mathematics - Texas Tech University</h3>
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
      <div id="projects" className='w-full text-white px-4 lg:px-8 py-12 flex justify-center'>
        <div className='glass-card max-w-5xl w-full'>
          <h1 className='mb-8'>Projects</h1>
          <div className='border border-white/10 rounded-2xl overflow-hidden'>
            <div className='flex flex-col lg:flex-row'>
              <div
                className='lg:w-56 flex-shrink-0 flex items-center justify-center p-10'
                style={{ background: 'linear-gradient(135deg, #7B2D8B 0%, #B83A2A 100%)' }}
              >
                <div className='text-center'>
                  <div className='text-6xl mb-3'>🌮</div>
                  <div className='text-white font-black text-xl leading-tight'>Taco<br />Rummy</div>
                </div>
              </div>
              <div className='flex-1 p-6 flex flex-col'>
                <div className='flex flex-wrap items-center gap-3 mb-3'>
                  <h2 className='text-gold m-0'>Taco Rummy</h2>
                  <span className='px-2 py-0.5 text-xs bg-gold/20 text-gold rounded-full border border-gold/30 font-medium'>
                    Card Game
                  </span>
                </div>
                <p className='text-body mb-4'>
                  A cross-platform digital adaptation of the classic Taco Rummy card game.
                  Challenge the AI in single-player or compete with friends in real-time
                  online multiplayer — available on iOS, Android, and Web.
                </p>
                <ul className='space-y-2 mb-5'>
                  {[
                    'Online multiplayer with public & private rooms (no account required)',
                    'Single-player vs AI',
                    '7-round contract system following classic Taco Rummy rules',
                    'Cross-platform: iOS, Android, and Web via React Native & Expo',
                  ].map((feature) => (
                    <li key={feature} className='flex items-start gap-2 text-body text-sm'>
                      <span className='inline-block w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0' />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {['React Native', 'Expo', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Docker'].map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-body'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex flex-wrap gap-3 mt-auto'>
                  <a
                    href='https://tbell19.itch.io/tacorummy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-85'
                    style={{ backgroundColor: '#FA5C5C' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M71.092 7.888C49.477 21.02 0 82.532 0 94.794v19.5C0 138.6 21.816 161 48.617 161c30.78 0 55.72-25.4 55.72-56.694a56.3 56.3 0 0 0 55.764 56.694 56.3 56.3 0 0 0 55.764-56.694 56.3 56.3 0 0 0 55.764 56.694 56.3 56.3 0 0 0 55.764-56.694 56.3 56.3 0 0 0 55.764 56.694c26.8 0 48.617-22.4 48.617-49.706v-19.5c0-12.262-49.477-73.774-71.092-86.906C394.714 1.41 327.7 0 256 0S117.286 1.41 71.092 7.888zM206 212v136h-35l-8 32H0v40h512v-40H349l-8-32h-35V212z"/>
                    </svg>
                    Support on itch.io
                  </a>
                </div>
              </div>
            </div>
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
