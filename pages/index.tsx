import Head from 'next/head';

import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { Countdown } from '../src/components/Countdown';
import { ExporienceBar } from "../src/components/ExperienceBar";
import { Profile } from '../src/components/Profile';

import styles from '../src/styles/components/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <title>Início | move.it</title>
      </Head>

      <ExporienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>

        </div>
      </section>
    </div>
  );
}
