// import Image from "next/image";
import styles from "../styles/Titlebar.module.css";

import vscode from "../public/vscode_icon.png";

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      {/* <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      /> */}
      <img
        unoptimized
        // src="https://raw.githubusercontent.com/Shubham180401/code/main/public/favicon.ico"
        src = "vscode_icon.png"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Shubham Negi - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
