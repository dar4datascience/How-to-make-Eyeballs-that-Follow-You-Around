// Listen for the 'mousemove' event
document.addEventListener('mousemove', (e) => { 
    // Log the event object to the console
    console.log(e);

    // Get the mouse coordinates
    const mouseX = e.clientX; 
    const mouseY = e.clientY;

    // Get the 'anchor' element and its position
    const anchor = document.getElementById('anchor');
    const rect = anchor.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    // Calculate the angle in degrees between the mouse and the anchor
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    console.log(angleDeg);

    // Get all elements with class 'eye' and apply rotation
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    });
});

// Function to calculate the angle between two points
function angle(cx, cy, ex, ey) { 
    // Calculate the differences in coordinates
    const dy = ey - cy; 
    const dx = ex - cx;

    // Calculate the angle in radians and degrees
    const rad = Math.atan2(dy, dx); // Range: (-PI, PI]
    const deg = rad * 180 / Math.PI; // Convert radians to degrees, Range: (-180, 180]
            
    return deg; // Return the calculated angle in degrees
}
