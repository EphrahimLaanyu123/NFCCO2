import styles from './styles.module.scss';
import Picture1 from '/home/user/nfcco/src/assets/_KGP5985.JPG';
import Picture2 from '/home/user/nfcco/src/assets/_KGP6196.JPG';
import Picture3 from '/home/user/nfcco/src/assets/_KGP6384.JPG';
import Picture4 from '/home/user/nfcco/src/assets/_KGP6807.JPG';
import Picture5 from '/home/user/nfcco/src/assets/_KGP5985.JPG';
import Picture6 from '/home/user/nfcco/src/assets/_KGP5985.JPG';
import Picture7 from '/home/user/nfcco/src/assets/_KGP5985.JPG';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ZoomParallax() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scales = [4, 5, 6, 5, 6, 8, 9].map(
        (factor) => useTransform(scrollYProgress, [0, 1], [1, factor])
    );

    const pictures = [
        { src: Picture1, scale: scales[0] },
        { src: Picture2, scale: scales[1] },
        { src: Picture3, scale: scales[2] },
        { src: Picture4, scale: scales[3] },
        { src: Picture5, scale: scales[4] },
        { src: Picture6, scale: scales[5] },
        { src: Picture7, scale: scales[6] }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {pictures.map(({ src, scale }, index) => (
                    <motion.div key={index} style={{ scale }} className={styles.el}>
                        <div className={styles.imageContainer}>
                            <img src={src} alt={`Image ${index + 1}`} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
