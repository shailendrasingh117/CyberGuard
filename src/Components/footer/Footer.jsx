import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 CyberGuard. All rights reserved</div>
      <div>
        <Image src="/x.png" width={25} height={25} className={styles.icon} alt="Lama Dev" />
        <Image src="/meta.png" width={25} height={25} className={styles.icon} alt="Lama Dev" />
        <Image src="/yt.png" width={25} height={25} className={styles.icon} alt="Lama Dev" />
        <Image src="/instagram.png" width={25} height={25} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;
