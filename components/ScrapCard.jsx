import Image from "next/image";
import styles from "../styles/ScrapCard.module.css";
import Link from "next/link";

const ScrapCard = ({trash}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${trash._id}`} passHref>
      <Image src={trash.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{trash.title}</h1>
      <span className={styles.price}>Rs {trash.prices[0]}</span>
      <p className={styles.desc}>
        {trash.desc}
      </p>
    </div>
  );
};

export default ScrapCard;