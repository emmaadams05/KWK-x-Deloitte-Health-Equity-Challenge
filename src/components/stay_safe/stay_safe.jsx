// Code for Cloud positioning -- hidden when the window becomes small
import './stay_safe.css'
import { Tabs } from '../tabs/tabs'

export const StaySafe = () => {

  return (

  <div className = "stay-safe-title" id="stay-safe">
    {/* Container for the Stay Safe portion of the website */}
    <h3><span class="goldText">Stay Safe:</span> Check Your Location’s <span class="goldText">Air Quality Index (AQI)</span></h3>
    <p>Search your current location on the map and view the current <span class="goldText">air quality index</span> in your area.<br/>
    Also check out the <span class="goldText">safety tips</span> for different <span class="goldText">at-risk populations</span>.</p>
    <section class="map">
      
      <div class="tab-section">
        <p>Select Below your Area’s Color from the Map</p>
        {/* CALL THE TABS ELEMENT ------- Displays tab part */}
        <Tabs />
      </div>

    {/* Map to identify current AQI based on location */}
      <iframe src="https://gispub.epa.gov/airnow/?forecastcontours=forecasttoday&forecastmonitors=forecasttoday&xmin=-17238319.300084777&xmax=-3149446.2465648362&ymin=1749961.190105642&ymax=7258319.196447119&tab=forecast&showgreencontours=true"></iframe>
    </section>
    
  </div>

  );
};