import Link from "next/link";
import ButtonLink from "./Button";
import "./css/header.css";

export default function Header() {
    return (
        <header className="header">
            <nav className="page-width header__navigation">
                <div className="header__navigation__logo">
                    <Link href="/">
                        <svg aria-label="Timéo Poupiot logo" role="img" width="32" height="32" fill="none" viewBox="0 0 32 32">
                            <path fill="var(--white)" d="m22.568 0 9.43 9.455L9.455 31.942.023 22.488z"/>
                            <path fill="var(--white)" d="M0 9.455 9.43.001l22.545 22.487-9.43 9.455z"/>
                        </svg>
                    </Link>
                    <span>
                        timéo <br />  poupiot
                    </span> 
                </div>

                <div className="header__navigation__links">
                    <ButtonLink href={"/projects"} tertiary>
                        projets
                    </ButtonLink>

                    <ButtonLink href={"/formations"} tertiary>
                        formations
                    </ButtonLink>

                    <ButtonLink href={"/#contact"} secondary>
                        contact
                    </ButtonLink>

                    <ButtonLink href={"/cv-original-poupiot.pdf"} primary 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >cv</ButtonLink>
                </div>
            </nav>
        </header>
    );
}