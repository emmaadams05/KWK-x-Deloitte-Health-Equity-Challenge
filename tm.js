// CODE FOR NAVIGATION MENU/BARS
function toggleNav() {
    var menu = document.getElementById("open")
    
    if (menu.style.display == "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

// Ensure the menu is displayed appropriately when resizing the window
window.addEventListener('resize', function() {
    var menu = document.getElementById("open");
    if (window.innerWidth > 820) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});

// TEACHABLE MACHINE CODE ------------------------------
// Learn more about how the model works below

const URL = "https://teachablemachine.withgoogle.com/models/mfdal8JWF/";

// Learn more about how the model works below

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {


    document.getElementById("startButton").style.display = "none"; // Hide the button

    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    const flip = true;
    // Convenience function to setup a webcam
     // whether to flip the webcam
    webcam = new tmImage.Webcam(300, 300, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update(); // update the webcam frame
    var temp = await predict();
    window.requestAnimationFrame(loop);
    // Identify which is the most likely the proper class, and add that text to the HTML div!!
    let possible_html = ["<p id='GM' class='GM'>Good/Moderate</p>", 
                         "<p id='UH' class='UH'>Unhealthy/Hazardous</p>", 
                         "<p id='IND' class='IND'>Picture is Indoors</p>"]
    let max = Math.max(...temp.map(Number));
    let max_idx = temp.indexOf(max);
    console.log(max_idx);

    //add the proper p tag to the web display!
    document.getElementById("results-container").innerHTML = possible_html[max_idx]

}

// run the webcam image through the image model
async function predict() {

    temp_list = []

    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i].className;

    temp_list.push(parseFloat(prediction[i].probability.toFixed(2)));

    }

    // return the list for react purposes
    return temp_list;

}
