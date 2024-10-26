document.getElementById("resume-form")?.addEventListener("submit", function (event) {
    event.preventDefault();


   const profilepictureInput = document.getElementById("profilepicture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById( "education") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const experienceElement = document.getElementById(  "experience" ) as HTMLInputElement;

    if (
       profilepictureInput && nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const skills = skillsElement.value;
      const experience = experienceElement.value;

      //Picture
      const profilepicture = profilepictureInput.files?.[0];
      const profilepictureURL = profilepicture ? URL.createObjectURL(profilepicture) : '';


      const resumeOutput = `


    
    ${profilepictureURL ? `<img src="${profilepictureURL}" alt="profilepicture" class= "profilepicture" .profilepicture {
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 150px;
    border-radius: 50%; 
    border: 2px solid rgb(141, 26, 141);
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgb(141, 26, 141);
} >` : ''}
    <h1>Editable Resume<h1/> 
    <h2><strong>Personal Information</strong></h2>
    <p><strong>Name:<span id="edit-name" class="editable">${name}</strong><span></p>
     <p><strong>Email:</strong><span id="edit-email" class="editable">${email}</strong></span></p>
     <p><strong>Phone:<span id="edit-phone" class="editable">${phone}</strong><span></p>

      <h2>Education</h2>
     <p id="edit-education" class="editable">${education}</p>

     <h2>Skills</h2> 
     <p id="edit-skills" class="editable">${skills}</p>

     <h2>Experience</h2>
     <p id="edit-experince" class="editable">${experience}</p> `;

      const resumeOutputElement = document.getElementById("resumeOutput");

      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;

        makeEditable();
      }
    } else {
      console.error("one or more output are missing");
    }
  });

function makeEditable() {
  const editableElemnent = document.querySelectorAll("editable");
  editableElemnent.forEach((element) => {
    element.addEventListener("click", function () {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";

      // replace content
      if (currentElement.tagName === "p" || currentElement.tagName === "span") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing-input");

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}
