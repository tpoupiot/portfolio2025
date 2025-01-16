"use client"
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import './css/cursor.css';

export default function Cursor() {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');

        const moveCursor = (e: MouseEvent) => {
            if (cursor) {
                cursor.setAttribute('style', `top: ${e.clientY + window.scrollY}px; left: ${e.clientX + window.scrollX}px;`);
            }
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="cursor">
            <ArrowUpRight />
            <ArrowUpRight />
        </div>
    );
}