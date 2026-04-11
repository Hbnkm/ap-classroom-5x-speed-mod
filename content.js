// Simple speed modification - no inline scripts needed
function initSpeedMod() {
  // Listen for keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    const num = parseInt(e.key);
    if (!isNaN(num) && num >= 0 && num <= 9) {
      const videos = document.querySelectorAll('video');
      videos.forEach(v => {
        v.playbackRate = num;
      });
      console.log('Speed set to: ' + num + 'x');
    }
  });

  // Add 5x button
  function addButton() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      if (!video.hasButton) {
        video.hasButton = true;
        
        const btn = document.createElement('button');
        btn.textContent = '5x ⚡';
        btn.style.cssText = 'position: fixed; bottom: 80px; right: 20px; padding: 10px 15px; background: #0078d4; color: white; border: none; border-radius: 5px; cursor: pointer; z-index: 10000; font-weight: bold; font-size: 14px;';
        
        btn.addEventListener('click', () => {
          video.playbackRate = 5;
          console.log('5x speed activated!');
        });
        
        document.body.appendChild(btn);
      }
    });
  }

  // Check for videos regularly
  setInterval(addButton, 1000);
  addButton();
}

// Start the mod
initSpeedMod();
