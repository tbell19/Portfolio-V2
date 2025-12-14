import ReactLogo from '../assets/techLogos/svg/React.svg';
import TypeScriptLogo from '../assets/techLogos/svg/TypeScript.svg';
import JavaScriptLogo from '../assets/techLogos/svg/JavaScript.svg';
import PythonLogo from '../assets/techLogos/svg/Python.svg';
import HTMLLogo from '../assets/techLogos/svg/HTML5.svg';
import CSSLogo from '../assets/techLogos/svg/CSS3.svg';
import GitLogo from '../assets/techLogos/svg/Git.svg';
import DockerLogo from '../assets/techLogos/svg/Docker.svg';
import AWSLogo from '../assets/techLogos/svg/AWS.svg';
import PostgresLogo from '../assets/techLogos/svg/PostgresSQL.svg';
import VueLogo from '../assets/techLogos/svg/Vue.js.svg';
import AngularLogo from '../assets/techLogos/svg/Angular.svg';
import LinuxLogo from '../assets/techLogos/svg/Linux.svg';
import BootstrapLogo from '../assets/techLogos/svg/Bootstrap.svg';
import FigmaLogo from '../assets/techLogos/svg/Figma.svg';
import GitHubLogo from '../assets/techLogos/svg/GitHub.svg';
import CSharpLogo from '../assets/techLogos/svg/CSharp.svg';

const logos = [
    { src: ReactLogo, alt: 'React' },
    { src: TypeScriptLogo, alt: 'TypeScript' },
    { src: JavaScriptLogo, alt: 'JavaScript' },
    { src: LinuxLogo, alt: 'Linux' },
    { src: PythonLogo, alt: 'Python' },
    { src: HTMLLogo, alt: 'HTML5' },
    { src: CSSLogo, alt: 'CSS3' },
    { src: GitLogo, alt: 'Git' },
    { src: DockerLogo, alt: 'Docker' },
    { src: AWSLogo, alt: 'AWS' },
    { src: PostgresLogo, alt: 'PostgreSQL' },
    { src: VueLogo, alt: 'Vue.js' },
    { src: AngularLogo, alt: 'Angular' },
    { src: BootstrapLogo, alt: 'Bootstrap' },
    { src: FigmaLogo, alt: 'Figma' },
    { src: GitHubLogo, alt: 'GitHub' },
    { src: CSharpLogo, alt: 'C#' },
];

interface LogoScrollerProps {
    direction?: 'left' | 'right';
}

export default function LogoScroller({ direction = 'left' }: LogoScrollerProps) {

    return (
        <>
            <style>
                {`
                    .container{
                    
                        position: relative;
                        mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
                        -webkit-mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
                    }
                    .marquee {
                        display: flex;
                        flex-direction: row;
                        flex-overflow: hidden;
                        min-width: 100%;
                        width: fit-content;
                        
                    }

                    .marquee:hover{
                        animation-play-state: paused;
                    }


                    .marquee-left {
                        animation: marquee-left 20s linear infinite;
                    }


                    .marquee-right {
                        animation: marquee-right 20s linear infinite;
                    }

                    .logoImage{
                    
                        height: 50px;
                        width: 50px;
                        filter: grayscale(100%);
                        transition: filter 0.3s;
                    }
                    .logoImage:hover {
                        filter: grayscale(0%);
                    }

                    .logoSet {
                        flex-shrink: 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        min-width: 100%;
                        width: max-content;
                    }

                    @keyframes marquee-left {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                    }

                    @keyframes marquee-right {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(0%);
                    }
                    }
                `}
            </style>
            <div className='container overflow-hidden'>
                <div className={`marquee marquee-${direction}`}>
                    <div className='logoSet'>
                        {logos.map((logo, index) => (
                            <img 
                                className='logoImage'
                                key={`first-${index}`}
                                src={logo.src} 
                                alt={logo.alt}
                                onError={(e) => console.error(`Failed to load ${logo.alt}:`, logo.src, e)}
                                onLoad={() => console.log(`Loaded ${logo.alt}`)}
                            />
                        ))}
                    </div>
                    <div className='logoSet'>
                        {logos.map((logo, index) => (
                            <img 
                                className='logoImage'
                                key={`first-${index}`}
                                src={logo.src} 
                                alt={logo.alt}
                                onError={(e) => console.error(`Failed to load ${logo.alt}:`, logo.src, e)}
                                onLoad={() => console.log(`Loaded ${logo.alt}`)}
                            />
                        ))}
                    </div>
                    
                </div>
            </div>
            
        </>
    );
}