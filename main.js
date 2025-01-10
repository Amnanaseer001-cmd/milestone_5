var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("linkdin");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        "";
        var phone = phoneElement.value;
        var linkdin = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquepath = "".concat(username.replace(/\s+/g, "_"), "_resume.html");
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        var resumeOutput = "\n        <div class=\"resume\">\n          ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n          <p id=\"nameDisplay\" class=\"editable class=\"Name\"><strong>Name:</strong> ").concat(name_1, "</p>\n          <p id=\"emailDisplay\" class=\"editable\" class=\"Name\"><strong>Email:</strong> ").concat(email, "</p>\n          <p id=\"phoneDisplay\" class=\"editable\" class=\"Name\"><strong>Phone Number:</strong> ").concat(phone, "</p>\n          <p id=\"addressDisplay\" class=\"editable\" class=\"Name\"><strong>LinkedIn:</strong> ").concat(linkdin, "</p>\n          <h3>Education</h3>\n          <p id=\"educationDisplay\" class=\"editable\">").concat(education, "</p>\n          <h3>Work Experience</h3>\n          <p id=\"experienceDisplay\" class=\"editable\">").concat(experience, "</p>\n          <h3>Skills</h3>\n          <p id=\"skillsDisplay\" class=\"editable\">").concat(skills, "</p>\n        </div>\n      ");
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/html;charset=utf-8,";
        +encodeURIComponent(resumeOutput);
        downloadLink.download = uniquepath;
        downloadLink.textContent = "Download Your Resume";
        downloadLink.className = "download-link";
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            var editableSections = document.querySelectorAll(".editable");
            editableSections.forEach(function (section) {
                section.addEventListener("click", function () {
                    makeSectionEditable(section);
                });
            });
        }
        else {
            console.error("The resume output element is missing");
        }
    }
    else {
        console.error("One or more form elements are missing");
    }
});
function makeSectionEditable(section) {
    var originalContent = section.innerHTML;
    var input = document.createElement("textarea");
    input.value = section.textContent || "";
    input.style.width = "100%";
    input.style.fontSize = "1rem";
    section.innerHTML = "";
    section.appendChild(input);
    input.addEventListener("blur", function () {
        var newValue = input.value;
        section.innerHTML = "<strong>".concat(section.id.replace("Display", ""), ":</strong> ").concat(newValue);
        section.style.backgroundColor = "#ffefc1";
        setTimeout(function () { return (section.style.backgroundColor = ""); }, 2000);
    });
    input.focus();
}
