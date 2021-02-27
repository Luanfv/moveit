import '../src/styles/global.css';

import { ChallengesProvider } from '../src/contexts/ChallengesContext';
import { CountdownProvider } from '../src/contexts/CountdownContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
