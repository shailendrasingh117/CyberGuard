import Image from 'next/image'
import styles from './page.module.css'
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
    <h1 className={styles.title}> Your Shield in the Digital Age</h1>
    <p className={styles.desc}>Where Security Meets Simplicity, Ensuring a Safer Tomorrow with Brute Force Resilience and Precision Safety Measures.  
    </p>
    <Button url="/portfolio" text="Dive in"/> 
    </div>
    <div className={styles.item}>
    <Image src="/hero.png" width={500} height={500} alt='' className={styles.img} />
    </div>
    </div>
  )
}
