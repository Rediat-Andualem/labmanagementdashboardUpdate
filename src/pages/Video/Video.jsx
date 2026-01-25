"use client";

import styles from "./Video.module.css";
import { motion } from "framer-motion";
import youtubeIcon from "../../assets/youtubeicon.png"

function Videos() {
  const videos = [
    {
      name: "BET Machine Operation",
      link: "https://www.youtube.com/playlist?list=PLfsAq3WZadM6_ntUg5TQN15MVA7-ASKik",
      desc: "Step-by-step guide on operating the BET surface area analyzer",
    },
    {
      name: "FE-SEM sample preparation",
      link: "https://www.youtube.com/watch?v=VYzXucfpOcU&list=PLfsAq3WZadM76Ffs_CRZcDvgLaoz7jyEM&index=1&pp=gAQBiAQB",
      desc: "How to prepare sample for Gold plating and FE-SEM analysis",
    },
    {
      name: "NEWCHROM GC Operation Basics",
      link: "https://www.youtube.com/playlist?list=PLfsAq3WZadM4X7_hNRil5mG_CbS6bZgNg",
      desc: "GC starting and operation",
    },
    {
      name: "XPS",
      link: "https://www.youtube.com/watch?v=M8QPHIfPcr8&list=PLfsAq3WZadM6LM8z2h8X-XKGViNyX0xUz",
      desc: "xps data extraction and deconvolution",
    },
    {
      name: "TEM",
      link: "https://www.youtube.com/watch?v=LibS9wcHyik&list=PLfsAq3WZadM46IsbXy8DYJnNZmTsqz_1d",
      desc: "FFT and Reverse FFT plotting",
    },
    {
      name: "Origin related",
      link: "https://www.youtube.com/watch?v=PMH0HDgbXJY&list=PLfsAq3WZadM5COlj2UlrGBdOcYVBPnuRu",
      desc: "How to plot error bars, how to deconvolate, how to calculate crystallinity index from xrd",
    },
    {
      name: "XRD related",
      link: "https://www.youtube.com/watch?v=moE7-9HxV1A&list=PLfsAq3WZadM5rubdKPnQnU6bisIkf8ZRp",
      desc: "How draw simulated XRD plotting and others",
    },
    {
      name: "TPR calibration",
      link: "https://www.youtube.com/watch?v=XqO4dwJmOI0&list=PLfsAq3WZadM4ae0xpnZ4yXXIyL23btnEr",
      desc: "how to calibrate TPR machine",
    },
    {
      name: "HPLC",
      link: "https://www.youtube.com/watch?v=OO6EdgF0Xro&list=PLfsAq3WZadM5141B0if06qowrsLdYjMl-&index=1",
      desc: "How to use HPLC machine and mobile phase preparation",
    },
    {
      name: "Hot air oven",
      link: "https://www.youtube.com/watch?v=wtnVZbJNs1Y&list=PLfsAq3WZadM7YNu8l9b9NUolRekv7NWIs",
      desc: "How to use hot air oven",
    },
    {
      name: "Muffel furnace",
      link: "https://www.youtube.com/watch?v=tkgYo-dTEs4&list=PLfsAq3WZadM6A3-Kg6fbsdh3i8miLIAwj",
      desc: "How to use muffle furnace",
    },
    {
      name: "Amar reactor operations",
      link: "https://www.youtube.com/watch?v=3Jt0RXjlJtg&list=PLfsAq3WZadM7_StQmYJx_T8o6wOhDnDZI",
      desc: "Amar operation related",
    },
    {
      name: "Chemisorption calibration",
      link: "https://www.youtube.com/watch?v=-ju57Bat2mg&list=PLfsAq3WZadM419_gUy_GgmALxrQQt5y85",
      desc: "how to calibrate machine for chemisorption",
    },
    {
      name: "Centrifuge",
      link: "https://www.youtube.com/watch?v=6I1y254qRYo&list=PLfsAq3WZadM6xJpmBhMe__NY1Usz1n0Gy",
      desc: "how to use centrifuge machine",
    },
    {
      name: "MFC Related",
      link: "https://www.youtube.com/watch?v=0Jr0-I18LQ4&list=PLfsAq3WZadM7S8bGgwEL7O0-NAQ4Eb0JJ&pp=gAQBsAgC",
      desc: "how to set flow and combination of gas setup in MFC",
    },
    {
      name: "SAMTEK 50ml reactor related",
      link: "https://www.youtube.com/watch?v=nZbiR-NtDKg&list=PLfsAq3WZadM6jb22nhuh-lc7j-C78d9LS&pp=gAQBsAgC",
      desc: "how to set ramping and reset all programs",
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
          Equipment Operation Videos
        </motion.h1>

        <div className={styles.divider}></div>

        <p className={styles.intro}>
          Watch step-by-step video tutorials or playlists showing safe and effective equipment operation.
          Click on a card to open the video or playlist on YouTube.
        </p>

        <div className={styles.cardGrid}>
          {videos.map((v, i) => (
            <motion.a
              key={i}
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className={styles.videoPlaceholder}>
                <img
                  src={youtubeIcon}
                  alt="YouTube Icon"
                  className={styles.youtubeIcon}
                />
              </div>

              <div className={styles.videoContent}>
                <h3 className={styles.cardTitle}>{v.name}</h3>
                <p className={styles.cardDesc}>{v.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;
