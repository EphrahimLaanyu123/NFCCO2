import styles from './style.module.scss'
import { motion } from 'framer-motion';
export default function index({mousePosition, handle, handle2}) {
  
  const { x, y } = mousePosition;
  
  return (
    <div className={styles.gallery}>
        <div className={styles.imageContainer}>
            <img
                src={handle}
                alt="image"
                fill="true"
            />
        </div>
        <motion.div
         className={styles.vignette}
         style={{x, y}}
         >
          <img 
            src={handle}
            alt="image"
            fill="true"
          />
        </motion.div>
    </div>
  )
}