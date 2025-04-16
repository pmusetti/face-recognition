const URL = "./my_model/";

let model, webcam, labelContainer, maxPredictions;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(300, 200, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        const container = document.createElement("div");
        const label = document.createElement("span");
        label.className = "label-text";
        const barContainer = document.createElement("div");
        barContainer.className = "progress-bar";
        const bar = document.createElement("div");
        bar.className = "progress";
        bar.id = "progress-" + i;

        barContainer.appendChild(bar);
        container.appendChild(label);
        container.appendChild(barContainer);
        labelContainer.appendChild(container);
    }
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);

    for (let i = 0; i < maxPredictions; i++) {
        const prob = prediction[i].probability;
        const label = prediction[i].className + ": " + (prob * 100).toFixed(1) + "%";
        labelContainer.childNodes[i].querySelector(".label-text").innerText = label;
        
        const bar = document.getElementById("progress-" + i);
        bar.style.width = Math.round(prob * 100) + "%";

        if (prob > 0.98) {
            // Send a POST request to the server
            const className = prediction[i].className.toLowerCase().replace(" ", "");
            //alert("Detected: " + className);
            const url = className === "class1" ? "http://localhost:1880/clase1"
                       : className === "class2" ? "http://localhost:1880/clase2"
                       : null;

            if (url) {
                fetch(url, { method: "POST" }).catch(err => console.error("Fetch error:", err));
            }
        }
    
    }
}
