javascript: (function () {
    const captions = document.querySelector(
      "ytd-transcript-segment-list-renderer",
    );
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
  