import styles from "../styles/ScrapList.module.css";
import ScrapCard from "./ScrapCard";

const ScrapList = ({scrapList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>WE OFFER THE BEST PRICE.</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {scrapList.map((trash) => (
          <ScrapCard key={trash._id} trash={trash} />
        ))}
      </div>
    </div>
  );
};

export default ScrapList;
