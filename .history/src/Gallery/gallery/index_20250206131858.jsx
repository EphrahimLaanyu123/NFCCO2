import styles from './style.module.scss'
import { motion } from 'framer-motion';
export default function index({mousePosition, handle}) {
  
  const { x, y } = mousePosition;
  
  return (
    <div className={styles.gallery}>
        <div className={styles.imageContainer}>
            <img
                src="/home/user/nfcco/src/assets/pexels-anthony-derosa-39577-236915.jpg"
                alt="image"
                fill="true"
            />
        </div>
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