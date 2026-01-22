"use client";

import styles from "./Software.module.css";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

function Manuals() {
  const manuals = [
    {
      name: "Any connect",
      file: "/ZippedFiles/anyconnect.zip",
      desc: "Any connect software for internet connection",
    },
    // {
    //   name: "Foxit Reader",
    //   file: "/ZippedFiles/FoxitReader96_enu_Setup.rar",
    //   desc: "Foxit pdf reader software",
    // },
    // {
    //   name: "HighScore",
    //   file: "/ZippedFiles/HighScore.7z",
    //   desc: "XRD highScore software",
    // },
    {
      name: "ImageJ",
      file: "/ZippedFiles/imajeJ.zip",
      desc: "ImageJ software for TEM and other imaging",
    },
    // {
    //   name: "KingDraw",
    //   file: "/ZippedFiles/KingDraw.exe",
    //   desc: "King draw software for molecular structure drawing",
    // },
    {
      name: "MathType",
      file: "/ZippedFiles/MathType.rar",
      desc: "Math type software for equation writing in word and ppt",
    },
    {
      name: "Mendeley",
      file: "/ZippedFiles/Mendeley.exe",
      desc: "Mendeley software for desktop",
    },
    {
      name: "PotPlayer",
      file: "/ZippedFiles/PotPlayer.rar",
      desc: "PotPlayer for video playing",
    },
    {
      name: "WinRAR",
      file: "/ZippedFiles/WinRARx86Eng.exe",
      desc: "zipping and unzipping software",
    },
    {
      name: "Xpert high score (older version)",
      file: "/ZippedFiles/xpertHighScore.zip",
      desc: "xpert high score software for xrd, old version",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <div className={styles.wrapper}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Software for download
        </motion.h1>

        <div className={styles.divider}></div>

        <p className={styles.intro}>
          Software downloads for easy access and utilization. You can download the software, unzip it if necessary, and install it for direct and easy use.
        </p>

        <div className={styles.cardGrid}>
          {manuals.map((m, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}>🖥️</div>
              <h3 className={styles.cardTitle}>{m.name}</h3>
              <p className={styles.cardDesc}>{m.desc}</p>
              <a href={m.file} download className={styles.downloadBtn}>
                <Download size={18} />
                <span>Download software</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Manuals;
