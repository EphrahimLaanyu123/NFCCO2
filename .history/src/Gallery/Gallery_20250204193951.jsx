'use client'
import ZoomParallax from '.';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function Gallery() {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    return (
        <main className={styles.main}>
            <ZoomParallax />
        </main>
    )
}