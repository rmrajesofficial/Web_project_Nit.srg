window.onload = function () {
  // Count Update
  var countElements = document.getElementsByClassName("count_1");
  var countElements_2 = document.getElementsByClassName("count_2");
  var countElements_3 = document.getElementsByClassName("count_3");
  var count = 0;
  var count_2 = 100;
  var count_3 = 0;

  var interval = setInterval(function () {
    for (var i = 0; i < countElements.length; i++) {
      countElements[i].textContent = count;
    }
    count++;
    if (count > 36) {
      clearInterval(interval);
    }
  }, 80);

  var interval2 = setInterval(function () {
    for (var i = 0; i < countElements_2.length; i++) {
      countElements_2[i].textContent = count_2;
    }
    count_2++;
    if (count_2 > 36 * 9) {
      clearInterval(interval2);
    }
  }, 20);

  var interval3 = setInterval(function () {
    for (var i = 0; i < countElements_3.length; i++) {
      countElements_3[i].textContent = count_3;
    }
    count_3++;
    if (count_3 > 144) {
      clearInterval(interval3);
    }
  }, 30);

  // Typing Effect
  var textElement = document.getElementById("changing-text");
  var texts = [
    "Welcome",
    "स्वागत",
    "স্বাগত",
    "स्वागत आहे",
    "స్వాగతం",
    "خوش آمدید",
  ];
  var index = 0;
  var speed = 50; // Speed of typing effect (in milliseconds)

  function typeText() {
    var text = texts[index];
    var i = 0;

    function type() {
      if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(eraseText, 1000); // Wait for 1 second before erasing the text
      }
    }

    function eraseText() {
      var currentText = textElement.textContent;
      if (currentText.length > 0) {
        textElement.textContent = currentText.slice(0, -1);
        setTimeout(eraseText, speed);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(typeText, 500); // Wait for 0.5 seconds before typing the next text
      }
    }

    type(); // Start typing
  }

  typeText(); // Call the function immediately to start the typing effect
};


