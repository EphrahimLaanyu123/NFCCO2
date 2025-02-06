import styles from './style.module.scss';
import { motion } from 'framer-motion';

export default function index({ mousePosition, handle }) {
  const { x, y } = mousePosition;

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <img
          src={`/assets/pexels-joe-arts-1830507-3505000.webp`} // Corrected image path
          alt="background image"
          className={styles.backgroundImage} // Optional: to apply any specific styling if needed
        />
      </div>
      <motion.div
        className={styles.vignette}
        style={{ x, y }}
      >
        <img
          src={`/assets/pexels-mohit-hambiria-92377455-9145465.jpg`} // Corrected image path
          alt="vignette image"
          className={styles.vignetteImage} // Optional: to apply any specific styling if needed
        />
      </motion.div>
    </div>
  );
}
