import "./detect_redirect.css"

export const DetectRedirect = () => {


  return (

    // Redirect AI portion of the webpage!
  <div class="redirect-container">
    <div className = "stay-safe-title">
      <h3>Detect Air Quality <span class="goldText">with AI</span></h3>
      <p>Use your <span class="goldText">camera</span> to detect the relative quality of the air around you.</p>
      {/* Link to the AI page! */}
      <a href="/teachable_machine.html"><p class="redirect-btn">🔗 Go to AI Air Detection</p></a>
    </div>
  </div>

  );
};