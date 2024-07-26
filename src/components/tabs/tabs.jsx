import { useState } from 'react';
import "./tabs.css"

export const Tabs = () => {

  const [activeTab, setActive] = useState("tab1");

  const tabChange = (tab) => {
    setActive(tab)
  }
    
  return (
   // create the actual tabs themselves, one for each color on map
  // each tab is waiting for a click to change the tab
  <div className="tabs-section">
    <div className="tabs">
      <button id="green" className={activeTab === "tab1" ? "active-tab" : ""}
              onClick={() => tabChange("tab1")}>
        Green
      </button>
      <button id="yellow" className={activeTab === "tab2" ? "active-tab" : ""}
              onClick={() => tabChange("tab2")}>
        Yellow
      </button>
      <button id="orange" className={activeTab === "tab3" ? "active-tab" : ""}
              onClick={() => tabChange("tab3")}>
        Orange
      </button>
      <button id="red" lassName={activeTab === "tab4" ? "active-tab" : ""}
              onClick={() => tabChange("tab4")}>
        Red
      </button>
      <button id="purple" className={activeTab === "tab5" ? "active-tab" : ""}
              onClick={() => tabChange("tab5")}>
        Purple
      </button>
      
    </div>

    <div className="card-container">
      <div className="card">
      
      </div>

      {/* create a card to fill with context and content for each color on map */}
      {/* Click on tab makes it so the respective content for that tab pops up */}
      {activeTab === "tab1" && (
        <div class="tab-background">
          <h5><span class="green">Good:</span> AQI of 0-50</h5>
          <p><strong>General Population:</strong> No limitations, air quality is excellent.</p>
          <p><strong>Children:</strong> No limitations, air quality is safe for children.</p>
          <p><strong>Elderly:</strong> No limitations, air quality is sufficient for the elderly.</p>
          <p><strong>Pregnant Persons:</strong> No limitations, air quality is safe for pregnant persons.</p>
          <p><strong>Immunocompromised Persons:</strong> No limitations, air quality is tolerable for immunocompromised persons!</p>
        </div>
      )}
      {activeTab === "tab2" && (
        <div class="tab-background">
          <h5><span class="yellow">Moderate:</span> AQI of 51-100</h5>
          <p><strong>General Population:</strong> Air is acceptable, but avoid outside areas if possible.</p>
          <p><strong>Children:</strong> Air is acceptable, but children should remain indoors if possible.</p>
          <p><strong>Elderly:</strong> Air is acceptable, the elderly should avoid  going outside.</p>
          <p><strong>Pregnant Persons:</strong> Air is acceptable, outside air should be avoided if possible.</p>
          <p><strong>Immunocompromised Persons:</strong> Some limitations, moderate quality air may negatively affect some immunocompromised persons.</p>
        </div>
      )}
      {activeTab === "tab3" && (
        <div class="tab-background">
          <h5><span class="orange">Unhealthy for Sensitive Groups:</span> AQI of 101-150</h5>
          <p><strong>General Population:</strong> Air is unhealthy but not dangerous, avoid outside areas.</p>
          <p><strong>Children:</strong> Air is less safe, children should remain indoors and away from air.</p>
          <p><strong>Elderly:</strong> Air is less safe, the elderly should avoid going outside and wear a mask.</p>
          <p><strong>Pregnant Persons:</strong> Air is less safe, pregnant persons should avoid the outside if possible and wear a mask.</p>
          <p><strong>Immunocompromised Persons:</strong> Air is very unsafe, ou air will likely negatively affect immunocompromised persons; wear a mask!</p></div>
      )}
      {activeTab === "tab4" && (
        <div class="tab-background">
          <h5><span class="red">Unhealthy:</span> AQI of 151-200</h5>
          <p><strong>General Population:</strong> Air is dangerous, remain inside indoor areas.</p>
          <p><strong>Children:</strong> Air is dangerous, children should not go outside with bad air quality.</p>
          <p><strong>Elderly:</strong> Air is dangerous, the elderly should not go outside.</p>
          <p><strong>Pregnant Persons:</strong> Air is dangerous, pregnant persons should obstain from going outside.</p>
          <p><strong>Immunocompromised Persons:</strong> Air is very hazardous, the air will negatively affect immunocompromised persons.</p>
        </div>
      )}
      {activeTab === "tab5" && (
        <div class="tab-background">
          <h5><span class="purple">Very Unhealthy-Hazardous:</span> AQI of 200+</h5>
          <p><strong>General Population:</strong> Air is extremely dangerous, remain indoors.</p>
            <p><strong>Children:</strong> Air is extremely dangerous, children should not remain in inside areas.</p>
            <p><strong>Elderly:</strong> Air is dangerous, the elderly should not go outside.</p>
            <p><strong>Pregnant Persons:</strong> Air is extremely dangerous, pregnant persons should obstain from going outside.</p>
            <p><strong>Immunocompromised Persons:</strong> Air is very extremely hazardous, the air will negatively affect immunocompromised persons.</p>
        </div>
      )}
      
    </div>
    
  </div>

  );
};