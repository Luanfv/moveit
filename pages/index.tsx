import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CountdownProvider } from '../src/contexts/CountdownContext';
import { ChallengesProvider } from '../src/contexts/ChallengesContext';

import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { Countdown } from '../src/components/Countdown';
import { ExporienceBar } from "../src/components/ExperienceBar";
import { Profile } from '../src/components/Profile';
import { ChallengeBox } from '../src/components/ChallengeBox';

import styles from '../src/styles/components/Home.module.css';
interface Props {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: Props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <CountdownProvider>
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
              <ChallengeBox />
            </div>
          </section>
        </div>
      </CountdownProvider>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  }
}
