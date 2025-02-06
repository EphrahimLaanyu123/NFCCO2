import { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';

export default function index({mousePosition, projects}) {
  const [index, setIndex] = useState(0);
  const {x, y} = mousePosition;

  return (
    <div className={styles.description}>
        <div className={styles.descriptionContainer}>
            {
                projects.map( ({name}, i) => {
                    return <p onMouseOver={() => {setIndex(i)}} key={`p${i}`}>
                        {name}
                    </p>
                })
            }
        </div>
         <motion.div
         className={styles.vignette}
         style={{x, y}}
         >
          <img 
            src={`/images/${projects[index].handle}`}
            alt="image"
            fill="true"
          />
        </motion.div>
    </div>
  )
}