const jobDropZone = document.getElementById("jobDropZone");
const jobFileInput = document.getElementById("jobFileInput");
const resumeDropZone = document.getElementById("resumeDropZone");
const resumeFileInput = document.getElementById("resumeFileInput");
const submitButton = document.getElementById("submitButton");
const jobFilesList = document.getElementById("jobFilesList");
const resumeFilesList = document.getElementById("resumeFilesList");

function handleFileDrop(dropZone, fileInput, files, filesList) {
  dropZone.classList.remove("active");
  if (files.length) {
    fileInput.files = files;
    const fileName = files[0].name;
    const listItem = document.createElement("div");
    listItem.textContent = fileName;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => {
      fileInput.value = "";
      filesList.removeChild(listItem);
      // Reset the text in the drop zone label
      const originalLabelText =
        dropZone.querySelector("label").getAttribute("for") === "jobFileInput"
          ? "Drag & Drop job description file here or click to upload"
          : "Drag & Drop your resume file here or click to upload";
      dropZone.querySelector("label").textContent = originalLabelText;
      dropZone.style.border = "2px dashed #ccc"; // Reset border style
      dropZone.classList.remove("error"); // Remove error class
    });
    listItem.appendChild(removeButton);
    filesList.appendChild(listItem);
    dropZone.style.border = "2px solid green";
    dropZone.querySelector("label").textContent = "File Added";
  } else {
    // No files present, reset drop zone to default format
    dropZone.querySelector("label").textContent =
      dropZone.getAttribute("id") === "jobDropZone"
        ? "Drag & Drop job description file here or click to upload"
        : "Drag & Drop your resume file here or click to upload";
    dropZone.style.border = "2px dashed #ccc";
  }
}

function initializeDropZone(dropZone, fileInput, filesList) {
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("active");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("active");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileDrop(dropZone, fileInput, files, filesList);
  });

  fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    handleFileDrop(dropZone, fileInput, files, filesList);
  });
}

initializeDropZone(jobDropZone, jobFileInput, jobFilesList);
initializeDropZone(resumeDropZone, resumeFileInput, resumeFilesList);

submitButton.addEventListener("click", () => {
  if (!jobFileInput.files.length || !resumeFileInput.files.length) {
    alert("Please add both job description and resume files.");
  } else {
    const formData = new FormData();
    formData.append("resume", resumeFileInput.files[0]);
    fetch("/parse_resume", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((parsedData) => {
        console.log("Parsed data:", parsedData);
        alert("Submitted successfully"); // Display alert after successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
