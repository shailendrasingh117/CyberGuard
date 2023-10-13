import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Button from "@/components/Button/Button";


const about = () => {
  return (
    <div className={styles.container}>
    
    <div className={styles.imgContainer}>
    <Image src="/banner.webp" width={1260} height={380} alt="" className={styles.img} />
    
    <div className={styles.imgText}>
    <h1 className={styles.imgTitle}>Unlocking Cybersecurity Excellence</h1>
     <h2 className={styles.imgDesc}>
     Trust us to safeguard your digital presence with<br/> cutting-edge solutions
     </h2>
    </div>
    </div>
    <div className={styles.textContainer}>
    <div className={styles.item}>
    <h1 className={styles.Title}>About CyberGuard</h1>
    <p className={styles.desc}>At CyberGuard, we're passionate about cybersecurity. With a dedicated team of experts, we're committed to making the digital world a safer place for everyone. 
     Our mission is clear to empower individuals, businesses, and organizations with 
    <br/>
    <br/>the knowledge, tools, and solutions they need to protect themselves in an ever-evolving online landscape.</p>
    </div>
    
     <div className={styles.item}>
          <h1 className={styles.title}>Our Commitment</h1>
          <p className={styles.desc}>CyberGuard is more than just a brand; it's a commitment to your online security. We strive to make the digital realm a safer and more secure place, one step at a time.
          <br/>
          <br/> 
          Explore our range of services and resources and join us in the mission to defend the digital universe.
           <br/>
           <br/>1) Expertise: Our team comprises cybersecurity professionals with years of experience.
           <br/>
           <br/>2) Innovation: We stay ahead of the curve to provide you with the latest protection.
           <br/>
           <br/>3) Simplicity: We make cybersecurity easy to understand and implement.
           </p>
    <Button url="/contact" text="Contact" />
    </div>
    </div>
    </div>
   
    
  )
}


export default about
