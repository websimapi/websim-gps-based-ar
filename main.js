window.onload = () => {
    const camera = document.querySelector('#camera');
    const loader = document.querySelector('#loader');

    // Hide loader when GPS is ready
    camera.addEventListener('gps-camera-update-position', () => {
        loader.style.display = 'none';
    });

    // Optional: add a timeout to hide the loader anyway after some time
    // This can be useful if the GPS signal is weak or the event doesn't fire
    setTimeout(() => {
        if (loader.style.display !== 'none') {
            console.warn("GPS signal not found after 30 seconds. Hiding loader.");
            loader.style.display = 'none';
        }
    }, 30000); // 30 seconds
};