import "./health_equity.css"

export const HealthEquity = () => {


  return (

    // Container for the Equity Part of the Website
      <div class="redirect-container equity-container">
        <div className = "stay-safe-title equity-title">
          <h3>Air Quality & <span class="goldText">Health Equity</span></h3>
          {/* Test Descriptions of Inequity & External Reourses */}
          <div class="equity-text">
            <p>The air that we breathe is of vital importance to our health, however, some areas of the United States do not have equal air qualities.<br/><br/>Due to the presence of factories and large roadways, <span class="goldText">low-income communities</span> are more likely to have <span class="goldText">worse air quality</span> than their midde-income and high-income counterparts. <a class="source-link" href="https://www.epa.gov/ej-research/epa-research-environmental-justice-and-air-pollution#:~:text=Residents%20of%20low%2Dincome%20neighborhoods,ports%20with%20diesel%20truck%20operations." target="_blank">(EPA)</a><br/><br/>Additionally, <span class="goldText">People of Color</span> are <span class="goldText">more likely to experience</span> bad air quality, as opposed to people who are White.<a href="https://www.lung.org/clean-air/outdoors/who-is-at-risk/disparities" class="source-link" target="_blank">(American Lung Association)</a><br/><br/>It is because of these <span class="goldText">socioeconomic factors</span> that makes air quality a health equity issue, or a <span class="goldText">health inequity.</span> <br/><br/>To stay safe, it is recommended that you wear a <span class="goldText">surgical or N95 mask</span> in areas unhealthy air quality. Most <span class="goldText">Health Resource Centers</span> offer free masks, to find a Health Resource Center close to you, use<a href="https://findahealthcenter.hrsa.gov/" class="source-link" target="_blank">this resource!</a></p>
            {/* Image of Air Pollution to fille space! */}
            <img src="figures/air_img.jpg" alt="Air Pollution Image"/>
          </div>
          
    
      
        </div>
      </div>

  );
};