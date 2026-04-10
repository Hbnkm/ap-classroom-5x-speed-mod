// Inject speed modification into AP Classroom video player
const script = document.createElement('script');
script.textContent = `
  // Override playback rate limits
  const originalSetter = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').set;
  Object.defineProperty(HTMLMediaElement.prototype, 'playbackRate', {
    set: function(rate) {
      console.log('Setting playback rate to: ' + rate);
      originalSetter.call(this, rate);
    }
  });

  // Add speed controls
  function addSpeedControls() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      if (!video.hasSpeedMod) {
        video.hasSpeedMod = true;
        
        // Create speed button
        const btn = document.createElement('button');
        btn.textContent = '5x';
        btn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; padding: 10px 15px; background: #0078d4; color: white; border: none; border-radius: 5px; cursor: pointer; z-index: 10000; font-weight: bold;';
        
        btn.addEventListener('click', () => {
          video.playbackRate = 5;
          console.log('5x speed activated!');
        });
        
        document.body.appendChild(btn);
      }
    });
  }

  setInterval(addSpeedControls, 1000);
  addSpeedControls();

  // Keyboard shortcuts: 0-9 for speeds
  document.addEventListener('keydown', (e) => {
    const num = parseInt(e.key);
    if (!isNaN(num)) {
      const videos = document.querySelectorAll('video');
      videos.forEach(v => v.playbackRate = num);
      console.log('Speed set to: ' + num + 'x');
    }
  });
`;
document.documentElement.appendChild(script);
script.remove();
