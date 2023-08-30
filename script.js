const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBranding = document.querySelector (".nav-branding")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBranding.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach (n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBranding.classList.remove("active");
}))

/*popup detail */

function popupInfo() {
  const nameInput = document.getElementsByClassName('name').value;
  const descriptionInput = document.getElementsByClassName('description').value;
  const techInput = document.getElementsByClassName('technologies').value;
  const imageInput = document.getElementsByClassName('featured-image').value;
  const liveInput = document.getElementsByClassName('link-to-live-version').value;
  const sourceInput = document.getElementsByClassName('link-to-source').value;

  const popupInput = {
  username: nameInput,
  description: descriptionInput,
  technologies: techInput,
  featuredImage:imageInput,
  liveVersion: liveInput,
  linkSource: sourceInput,
}

}

function toggle(){
    const blur = document.querySelector(".blur");
    blur.classList.toggle("active");

    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
}


/*form validation */
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;
const emailRegExp = /^([a-z0-9\._]+)@([a-z0-9])+.([a-z]+)(.[a-z]+)?$/

window.addEventListener('load', () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    email.className = isValid ? "valid" : "invalid";
});

email.addEventListener('input', () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (isValid) {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
      } else {
        email.className = "invalid";
      }
});

form.addEventListener("submit", (event) => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (!isValid) {
      event.preventDefault();
      email.className = "invalid";
      error.textContent = "email field has to be in lower case";
      error.className = "error active";
    } else {
      email.className = "valid";
      error.textContent = " ";
      error.className = "error active";
    }
  });


// Local Storage 
    function formInfo() {
    const nameInput = document.getElementById('Full_name').value;
    const emailInput = document.getElementById('mail').value;
    const messageInput = document.getElementById('message').value;
  
    const formInput = {
    username: nameInput,
    email: emailInput,
    message: messageInput,
    };

    localStorage.setItem('formInput', JSON.stringify(formInput));
  }

  //Event Listeners
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formInfo();
  });




