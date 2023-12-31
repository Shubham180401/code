import styles from "../styles/SkillCard.module.css";
// import Image from "next/image";

const RepoCard = ({ repo }) => {
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.imageCover}>
          {/* <Image
            src={repo.coverImage}
            alt={repo.title}
            width={255}
            height={150}
          /> */}
          <img 
            src={repo.coverImage}
            alt="certificate failed to load :("
            width={255}
            height={150}
            className={styles.image}
          />
        </p>
      </div>
      <div>
        <h3 className={styles.title}>{repo.name}</h3>
        <p>{repo.description}</p>
      </div>
    </div>
  );
};

export default RepoCard;
