(async function () {
  function querySelectorPromise(selector, timeout = 500) {
    return new Promise((resolve, reject) => {
      let intervalId = null;
      let timeoutId = null;
  
      const checkElement = () => {
        const element = document.querySelector(selector);
        if (element) {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
          resolve(element);
        }
      };
  
      intervalId = setInterval(checkElement, timeout);
      timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        const error = new Error(`Element with selector "${selector}" was not found within the timeout period.`)
        reject(error);
      }, 5000);
    });
  }

    const descriptionExpander = document.querySelector('.ytd-text-inline-expander');
    if (descriptionExpander) {
        // We want to expand the description if it's collapsed
        descriptionExpander.click();
        // Wait for the description to expand
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    const showTranscriptBtn = Array.from(document.querySelectorAll("button")).find(
        btn => btn.textContent.includes("Show transcript")
    );
    if (showTranscriptBtn) {
        // We want to show the transcript if it's hidden
        showTranscriptBtn.click();
    }

    const captions = await querySelectorPromise("ytd-transcript-segment-list-renderer");
    if (captions.length === 0) {
      alert("No transcript found. Make sure you've opened the transcript panel.");
      return;
    }
    let transcript = captions.innerText;
    navigator.clipboard
      .writeText(transcript.trim())
      .then(() => {
        alert("Transcript copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy transcript: ", err);
        alert("Failed to copy transcript. See console for details.");
      });
  })();
  