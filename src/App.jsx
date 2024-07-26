import './App.css';
import { Navbar } from './components/navbar/navbar';
import { Clouds } from './components/clouds/clouds';
import { StaySafe } from './components/stay_safe/stay_safe';
import { DetectRedirect} from './components/detect_redirect/detect_redirect';
import {HealthEquity} from './components/health_equity/health_equity';

export default function App() {
  return (
      <main>
        {/* import the navbar element defined in components */}
        <Navbar />

        
        {/* code for landing section of the page */}
        <header>
          <h1>Aware Air</h1>
          <h4>Promoting health equity <span className="goldText">one breath</span> at a time.</h4>
        </header>

        {/* import the Clouds element defined in the clouds react file */}
        <Clouds />

        {/* import the detect_redirect element defined in the redirect react file */}
        <DetectRedirect />
        

        {/* import the Stay Safe element defined in the staysafe react file */}
        <StaySafe />

        {/* import the HealthEquity element defined in the healthequity react file */}
        <HealthEquity />
        

      </main>
  );
}
