import Link from "next/link";
import "./css/footer.css";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <>  
            <div className="background"></div>
            <svg id="texture"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"></feTurbulence><feColorMatrix type="saturate" values="0"></feColorMatrix></filter><rect width="100%" height="100%" filter="url(#noise)"></rect></svg>

            <footer>
                <div className="footer__content page-width">
                    <div>
                        <div className="logo">
                            <Link href="/">
                                <svg aria-label="Timéo Poupiot logo" role="img" width="32" height="32" fill="none" viewBox="0 0 32 32">
                                    <path fill="var(--white)" d="m22.568 0 9.43 9.455L9.455 31.942.023 22.488z"/>
                                    <path fill="var(--white)" d="M0 9.455 9.43.001l22.545 22.487-9.43 9.455z"/>
                                </svg>
                            </Link>
                        </div>
                        <span>Fait par <strong>Timéo POUPIOT</strong>.</span>
                        <span>Couleurs par <a href="https://www.radix-ui.com/">Radix UI</a>.</span>
                        <span>© 2025</span>
                    </div>
                    <div>
                        <h3>Coordonnées</h3>
                        <ul>
                            <li>Cesson-Sévigné, France</li>
                            <li><Link href={"mailto:timeo.poupiot35700@gmail.com"} >timeo.poupiot35700@gmail.com</Link></li>
                            <li><Link href={"/cv-original-poupiot.pdf"} >Mon CV</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Navigation</h3>
                        <ul>
                            <li><Link href="/">accueil</Link></li>
                            <li><Link href="/projects">projets</Link></li>
                            <li><Link href="/formations">formations</Link></li>
                            <li><Link href="/#contact">contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Réseaux</h3>
                        <ul>
                            <li><Link href="https://github.com/tpoupiot/">GitHub<GitHubLogoIcon width={16} height={16} /></Link></li>
                            <li><Link href="linkedin.com/in/timéo-poupiot-440a08268">Linkedin<LinkedInLogoIcon width={16} height={16} /></Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}