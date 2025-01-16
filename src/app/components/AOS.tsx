"use client";
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AOS() {
    useEffect(() => {
        aos.init();
    }, []);

    return null;
}