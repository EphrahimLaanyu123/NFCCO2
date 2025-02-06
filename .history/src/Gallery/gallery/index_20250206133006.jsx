import styles from './style.module.scss'
import { motion } from 'framer-motion';
export default function index({mousePosition, handle}) {
  
  const { x, y } = mousePosition;
  
  return (
    <div className={styles.gallery}>
        <div className={styles.imageContainer}>
            <img
                src={`/assets/${handle}/background.jpg`}
                alt="image"
                fill="true"
            />
        </div>/home/user/nfcco/src/assets/_KGP6384.JPG
        <motion.div
         className={styles.vignette}
         style={{x, y}}
         >
          <img 
            src={`/images/${handle}/1.jpg`}
            alt="image"
            fill="true"
          />
        </motion.div>
    </div>
  )
}