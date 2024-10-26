var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilepictureInput = document.getElementById("profilepicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        //Picture
        var profilepicture = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicture ? URL.createObjectURL(profilepicture) : '';
        var resumeOutput = "\n\n\n    \n    ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"profilepicture\" class= \"profilepicture\" .profilepicture {\n    display: block;\n    margin: 0 auto;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%; \n    border: 2px solid rgb(141, 26, 141);\n    object-fit: cover;\n    margin-bottom: 20px;\n    box-shadow: 0 4px 8px rgb(141, 26, 141);\n} >") : '', "\n    <h2>Editable Resume<h2/> \n    <h2><strong>Personal Information</strong></h2>\n    <p><strong>Name:<span id=\"edit-name\" class=\"editable\">").concat(name_1, "</strong><span></p>\n     <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\">").concat(email, "</strong></span></p>\n     <p><strong>Phone:<span id=\"edit-phone\" class=\"editable\">").concat(phone, "</strong><span></p>\n\n      <h2>Education</h2>\n     <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n     <h2>Skills</h2> \n     <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n     <h2>Experience</h2>\n     <p id=\"edit-experince\" class=\"editable\">").concat(experience, "</p> ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("one or more output are missing");
    }
});
function makeEditable() {
    var editableElemnent = document.querySelectorAll("editable");
    editableElemnent.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input = document.createElement("input");
                input.type = "text";
                input.value = currentValue;
                input.classList.add("editing-input");
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
