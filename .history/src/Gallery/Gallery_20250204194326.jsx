'use client'
import styles from './page.module.scss'
import ZoomParallax from '.';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Image from 'next/image'; // Example for Next.js


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