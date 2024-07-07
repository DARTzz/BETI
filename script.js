document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-text");
  const text = textElement.textContent;
  textElement.textContent = "";
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust the speed of typing here (in milliseconds)
    } else {
      setTimeout(() => {
        textElement.textContent = "";
        index = 0;
        setTimeout(type, 2000); // Pause for 2 seconds before restarting
      }, 2000); // Pause for 2 seconds after finishing typing
    }
  }

  type();
});

document.getElementById("pdfFile").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file && file.type === "application/pdf") {
    const fileURL = URL.createObjectURL(file);
    document.getElementById("pdfViewer").src = fileURL;
  } else {
    alert("Please upload a valid PDF file.");
  }
});
