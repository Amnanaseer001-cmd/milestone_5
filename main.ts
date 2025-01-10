document
  .getElementById("resumeForm")
  ?.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById(
      "linkdin"
    ) as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;

    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      addressElement &&
      educationElement &&
      experienceElement &&
      skillsElement &&
      usernameElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      ``;
      const phone = phoneElement.value;
      const linkdin = addressElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      const username = usernameElement.value;
      const uniquepath = `${username.replace(/\s+/g, "_")}_resume.html`;

      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      const resumeOutput = `
        <div class="resume">
          ${
            profilePictureURL
              ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
              : ""
          }
          <p id="nameDisplay" class="editable class="Name"><strong>Name:</strong> ${name}</p>
          <p id="emailDisplay" class="editable" class="Name"><strong>Email:</strong> ${email}</p>
          <p id="phoneDisplay" class="editable" class="Name"><strong>Phone Number:</strong> ${phone}</p>
          <p id="addressDisplay" class="editable" class="Name"><strong>LinkedIn:</strong> ${linkdin}</p>
          <h3>Education</h3>
          <p id="educationDisplay" class="editable">${education}</p>
          <h3>Work Experience</h3>
          <p id="experienceDisplay" class="editable">${experience}</p>
          <h3>Skills</h3>
          <p id="skillsDisplay" class="editable">${skills}</p>
        </div>
      `;

      const downloadLink = document.createElement("a");
      downloadLink.href = "data:text/html;charset=utf-8,";
      +encodeURIComponent(resumeOutput);
      downloadLink.download = uniquepath;
      downloadLink.textContent = "Download Your Resume";
      downloadLink.className = "download-link";

      const resumeOutputElement = document.getElementById("resumeOutput");

      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.appendChild(downloadLink);

        const editableSections =
          document.querySelectorAll<HTMLParagraphElement>(".editable");
        editableSections.forEach((section) => {
          section.addEventListener("click", () => {
            makeSectionEditable(section);
          });
        });
      } else {
        console.error("The resume output element is missing");
      }
    } else {
      console.error("One or more form elements are missing");
    }
  });

function makeSectionEditable(section: HTMLParagraphElement): void {
  const originalContent = section.innerHTML;
  const input = document.createElement("textarea");
  input.value = section.textContent || "";
  input.style.width = "100%";
  input.style.fontSize = "1rem";
  section.innerHTML = "";
  section.appendChild(input);

  input.addEventListener("blur", () => {
    const newValue = input.value;
    section.innerHTML = `<strong>${section.id.replace(
      "Display",
      ""
    )}:</strong> ${newValue}`;
    section.style.backgroundColor = "#ffefc1";
    setTimeout(() => (section.style.backgroundColor = ""), 2000);
  });

  input.focus();
}
