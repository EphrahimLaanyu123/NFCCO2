import styles from './style.module.scss'
import { motion } from 'framer-motion';
export default function index({mousePosition, handle}) {
  
  const { x, y } = mousePosition;
  
  return (
    <div className={styles.gallery}>
        <div className={styles.imageContainer}>
            <img
                src={handle}
                alt="image"
    
            />
        </div>
        <motion.div
         className={styles.vignette}
         style={{x, y}}
         >
          <img 
            src={handle}
            alt="image"

          />
        </motion.div>
    </div>
  )
}