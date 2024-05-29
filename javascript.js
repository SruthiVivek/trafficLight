document.addEventListener("DOMContentLoaded", function() {
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');

    const lights = [redLight, yellowLight, greenLight];
    const durations = [5000, 2000, 3000]; 

    let currentLight = 0;

    function changeLight() {
        
        lights.forEach(light => light.classList.remove('active'));  // Turn off all lights

      
        lights[currentLight].classList.add('active');      // Turn on the current light

        
        currentLight = (currentLight + 1) % lights.length;   // Move to the next light

      
        setTimeout(changeLight, durations[currentLight]);     // Set timeout for the next change
    }


    changeLight();       // Start the traffic light sequence
});
