const sentences = [
    "DRAMAJ IS A THEATRE*PERFORMANCE/PRODUCTION COLLECTIVE",
    "FUNDED IN 2024 AND CURRENTLY BASED IN VIENNA AND ZURICH.",
    "DRAMAJ IS CONSTUTUTED AROUND A MISTY UNCONDITIONAL CORE,",
    "«SUCH MIST CAN BE DESCRIBED AS THE DREAMY, FOGGY, STEAMY MATTER", 
    "OR TO PUT IT DIFFERENTLY, AN UNCONTROLLABLE AND WET FOAM OF IMAGINATION.»",
    "PRESS ANY KEY TO ENTER THE MISTY UNCONDITIONAL CORE",
  ];
  let index = 0;
  let sentenceIndex = 0;
  let isTyping = false;
  let sentence = "";
  
  function typewriter() {
    if (!isTyping && index < sentences.length) {
      sentence = sentences[index];
      document.getElementById("output").textContent = "";
      sentenceIndex = 0;
      typeSentence();
      index++;
    }
  }
  
  function typeSentence() {
    isTyping = true;
    if (sentenceIndex < sentence.length) {
      document.getElementById("output").textContent += sentence.charAt(sentenceIndex);
      sentenceIndex++;
      setTimeout(typeSentence, 50);
    } else {
      isTyping = false;
      setTimeout(overwrite, 1500);
    }
  }
  
  function overwrite() {
    if (index >= sentences.length) {
      return;
    }
    const nextSentence = sentences[index];
    document.getElementById("output").textContent = nextSentence;
    sentence = nextSentence;
    typewriter();
  }
  
  typewriter(); // Call typewriter function to start the typing effect

  document.addEventListener("keydown", function() {
    window.location.href = "menu.html";
  });