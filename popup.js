function setSpeed(speed) {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `
        document.querySelectorAll('video').forEach(v => { v.playbackRate = ${speed}; });
        console.log('Speed: ${speed}x');
      `
    });
  });
}
