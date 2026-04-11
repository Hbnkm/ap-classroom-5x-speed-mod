// AP Classroom uses a custom player, not standard video tags
function initSpeedMod() {
  console.log('AP Classroom Speed Mod initialized');

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    const num = parseInt(e.key);
    if (!isNaN(num) && num >= 0 && num <= 9) {
      setPlayerSpeed(num);
      console.log('Speed set to: ' + num + 'x');
    }
  });
}

function setPlayerSpeed(speed) {
  // Try different ways to access the player
  
  // Method 1: Look for video element in iframes
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const video = iframeDoc.querySelector('video');
      if (video) {
        video.playbackRate = speed;
        console.log('Set iframe video to ' + speed + 'x');
      }
    } catch (e) {
      // Cross-origin, skip
    }
  });

  // Method 2: Direct video elements
  const videos = document.querySelectorAll('video');
  videos.forEach(v => v.playbackRate = speed);

  // Method 3: Look for player objects in window
  if (window.player) {
    window.player.playbackRate = speed;
  }
  if (window.videoPlayer) {
    window.videoPlayer.playbackRate = speed;
  }
}

initSpeedMod();
