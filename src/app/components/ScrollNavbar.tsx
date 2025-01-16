"use client"
import { BackpackIcon, MobileIcon, ReaderIcon, RocketIcon } from "@radix-ui/react-icons"
import './css/scrollNavbar.css'
import { useCallback, useEffect } from 'react';
import Link from 'next/link';

export default function ScrollNavbar() {
    const handleScroll = useCallback(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        const detailsElement = document.querySelector('.inner-navbar details');

        if (scrollContainer) {
            const rect = scrollContainer.getBoundingClientRect();

            if (!scrollContainer.classList.contains("isStuck") && rect.top === 10) {
                scrollContainer.classList.add("isStuck");
            } else if (scrollContainer.classList.contains("isStuck") && rect.top !== 10) {
                scrollContainer.classList.remove("isStuck");
            }

            if (!scrollContainer.classList.contains("isStuck") && detailsElement) {
                detailsElement.removeAttribute('open');
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className='scroll-container page-width'>
            <div className='scroll-navbar'>
                <div className='inner-navbar'>
                    <div className="logo-navbar">
                        <svg className='scroll-logo' aria-label="Timéo Poupiot logo" role="img" width="32" height="32" fill="none" viewBox="0 0 32 32">
                            <path fill="var(--white)" d="m22.568 0 9.43 9.455L9.455 31.942.023 22.488z"/>
                            <path fill="var(--white)" d="M0 9.455 9.43.001l22.545 22.487-9.43 9.455z"/>
                        </svg>
                    </div>

                    <details>
                        <summary>menu</summary>
                        <div>
                            <div><Link href="/projects"><RocketIcon />projets</Link></div>
                            <div><Link href="/formations"><BackpackIcon />formations</Link></div>
                            <div><Link href="/#contact"><MobileIcon />contact</Link></div>
                            <div className="sep"></div>
                            <div><a href="/cv-original-poupiot.pdf"><ReaderIcon />cv</a></div>
                        </div>
                    </details>
                </div>

                <div className='bg-blur'>
                    <div className='bg-blur-inner'></div>
                    <div className='bg-blur-inner'></div>
                    <div className='bg-blur-inner'></div>
                    <div className='bg-blur-inner'></div>
                </div>
            </div>
        </div>
    )
}