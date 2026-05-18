import { useState, useEffect, useRef } from 'react'
import meBg from '../assets/me-bg.png'
import meCutout from '../assets/me-cutout.png'
import tacoShot1 from '../assets/taco-rummy/1-home.png'
import tacoShot2 from '../assets/taco-rummy/2-setup.png'
import tacoShot3 from '../assets/taco-rummy/3-game.png'
import tacoShot4 from '../assets/taco-rummy/4-game-mid.png'
import tacoAppIcon from '../assets/taco-rummy/app-icon.png'
import LogoScroller from './logoScroller'
import Navigation from './Navigation'

export default function Home() {
  const adjectives = ['intuitive', 'seamless', 'engaging', 'memorable'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [showScreenshots, setShowScreenshots] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
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
      // Mobile: use scroll-based parallax
      const handleScroll = () => {
        if (!imageContainerRef.current) return;

        const rect = imageContainerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress relative to viewport (-1 to 1)
        // When element is at bottom of screen: progress = 1
        // When element is at top of screen: progress = -1
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const y = -(elementCenter - viewportCenter) / (windowHeight / 2);
        
        // Clamp values between -1 and 1
        const clampedY = Math.max(-1, Math.min(1, y));
        
        // Subtle parallax for mobile (smaller values than desktop)
        const bgTranslateY = clampedY * 15;
        const fgTranslateY = clampedY * 30;

        setRotation({ 
          background: { x: 0, y: 0, translateX: 0, translateY: bgTranslateY }, 
          foreground: { x: 0, y: 0, translateX: 0, translateY: fgTranslateY } 
        });
      };

      // Initial call
      handleScroll();

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Desktop: use mouse-based parallax
      const handleMouseMove = (e: MouseEvent) => {
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

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isMobile]);

  return (
    <>
      <Navigation />
      <div className="hero-section w-full h-screen flex flex-col lg:flex-row text-white px-4 lg:px-8">
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
      <div id='projects' className='projects-section w-full text-white px-4 lg:px-8 py-12 flex justify-center'>
        <div className='glass-card max-w-5xl w-full'>
          <h1>Projects</h1>
          <div className='project-card mt-8'>
            <div className='flex flex-col'>
              <div className='flex flex-col'>
                <div className='flex flex-wrap items-center gap-4 mb-3'>
                  <img
                    src={tacoAppIcon}
                    alt='Taco Rummy app icon'
                    className='w-14 h-14 rounded-xl shadow-md'
                  />
                  <h3 className='text-3xl font-semibold text-heading'>Taco Rummy</h3>
                </div>
                <div className='flex flex-wrap gap-2 mb-3'>
                  <span className='px-3 py-1 text-xs font-medium rounded-full bg-gold/20 text-gold border border-gold/40'>
                    Coming soon to iOS & Android
                  </span>
                </div>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {['React Native', 'Expo', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Proxmox'].map((tech) => (
                    <span key={tech} className='tech-pill'>{tech}</span>
                  ))}
                </div>
                <p className='text-body mb-4 leading-relaxed'>
                  A cross-platform card game built with React Native and Expo. Play <strong className='text-heading'>online multiplayer</strong> with
                  friends or take on <strong className='text-heading'>AI opponents</strong> in single-player mode, powered by a Node.js
                  game server with Socket.io and a shared TypeScript engine driving gameplay across web and mobile.
                </p>
                <p className='text-body mb-4 leading-relaxed'>
                  Also playable directly inside Discord as an <strong className='text-heading'>Embedded Activity</strong>, so friends can
                  jump in from a voice channel without leaving the app. Built against Discord&apos;s Embedded App SDK with
                  OAuth-based authentication and channel-scoped lobbies.
                </p>
                {showReadMore && (
                  <div className='fade-enter'>
                    <p className='text-body mb-4 leading-relaxed'>
                      Includes a <strong className='text-heading'>full moderation system</strong> for player reports, review,
                      and enforcement, built with privacy in mind so the database stores no raw PII.
                    </p>
                    <p className='text-body mb-4 leading-relaxed'>
                      Players can also <strong className='text-heading'>file bug reports from inside the game</strong>, which the
                      server enriches with a redacted client log and recent game state and posts straight to the project&apos;s
                      GitHub Issues, with global rate caps so a misbehaving client can&apos;t flood the tracker. Server-side
                      errors take the same path automatically, turning crashes into actionable, deduplicated issues.
                    </p>
                    <p className='text-body mb-4 leading-relaxed'>
                      Backed by a <strong className='text-heading'>full CI/CD pipeline</strong> on GitHub Actions: every push runs
                      typecheck, unit tests on the shared engine and server, and Playwright end-to-end tests against the web
                      build, alongside cached Docker image builds for the server and web app. Merges to <code>main</code>{' '}
                      automatically deploy via a <strong className='text-heading'>self-hosted runner</strong> on my home Proxmox
                      cluster, which rebuilds and rolls the Docker Compose stack in place. Mobile releases are
                      cut through Expo Application Services (EAS) for iOS and Android.
                    </p>
                  </div>
                )}
                <button
                  type='button'
                  onClick={() => setShowReadMore((v) => !v)}
                  aria-expanded={showReadMore}
                  className='inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:opacity-80 transition-opacity mb-5 self-start'
                >
                  {showReadMore ? 'Show less' : 'Read more'}
                  <svg
                    viewBox='0 0 24 24'
                    className={`w-4 h-4 transition-transform duration-200 ${showReadMore ? 'rotate-180' : ''}`}
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    aria-hidden='true'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                <div className='flex flex-wrap gap-3 mt-auto'>
                  <a
                    href='https://tacorummy.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-2.5 bg-gold text-heading font-semibold rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2'
                  >
                    <svg viewBox='0 0 24 24' className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={2} aria-hidden='true'>
                      <circle cx='12' cy='12' r='10' />
                      <path strokeLinecap='round' strokeLinejoin='round' d='M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20' />
                    </svg>
                    Visit tacorummy.com
                  </a>
                  <a
                    href='https://tbell19.itch.io/tacorummy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-2.5 border border-buffer text-heading font-semibold rounded-lg hover:border-gold hover:text-gold transition-colors inline-flex items-center gap-2'
                  >
                    <svg role='img' viewBox='0 0 24 24' className='w-4 h-4' fill='currentColor' aria-hidden='true'>
                      <path d='M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z' />
                    </svg>
                    Play on itch.io
                  </a>
                  <a
                    href='https://discord.com/oauth2/authorize?client_id=1504839444031865033'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-2.5 bg-indigo-500/20 text-indigo-200 border border-indigo-400/40 font-semibold rounded-lg hover:bg-indigo-500/30 hover:text-indigo-100 transition-colors inline-flex items-center gap-2'
                  >
                    <svg role='img' viewBox='0 0 24 24' className='w-4 h-4' fill='currentColor' aria-hidden='true'>
                      <path d='M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z' />
                    </svg>
                    Add to Discord
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <button
                type='button'
                onClick={() => setShowScreenshots((v) => !v)}
                aria-expanded={showScreenshots}
                aria-controls='taco-rummy-screenshots'
                className='inline-flex items-center gap-2 text-sm font-medium text-body hover:text-gold transition-colors'
              >
                <svg
                  viewBox='0 0 24 24'
                  className={`w-4 h-4 transition-transform duration-200 ${showScreenshots ? 'rotate-90' : ''}`}
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                </svg>
                {showScreenshots ? 'Hide screenshots' : 'View screenshots'}
                <span className='text-xs text-body/60'>(4)</span>
              </button>
              {showScreenshots && (
                <div
                  id='taco-rummy-screenshots'
                  className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 fade-enter'
                >
                  {[
                    { src: tacoShot1, label: 'Home' },
                    { src: tacoShot2, label: 'Setup' },
                    { src: tacoShot3, label: 'Gameplay' },
                    { src: tacoShot4, label: 'Mid-game' },
                  ].map((shot) => (
                    <div key={shot.label} className='screenshot-frame'>
                      <img src={shot.src} alt={`Taco Rummy ${shot.label}`} className='w-full h-auto rounded-lg' />
                    </div>
                  ))}
                </div>
              )}
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
