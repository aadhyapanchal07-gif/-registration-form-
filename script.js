// ===============================
// Get Elements
// ===============================

const form = document.getElementById("registerForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const course = document.getElementById("course");
const togglePassword = document.getElementById("togglePassword");
const container = document.querySelector(".container");
const button = document.querySelector("button");

// ===============================
// Show / Hide Password
// ===============================

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";

        togglePassword.innerHTML =
        '<i class="fa-solid fa-eye"></i>';

    }

});

// ===============================
// Email Validation
// ===============================

function validateEmail(emailValue) {

    const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(emailValue);

}

// ===============================
// Name Validation
// ===============================

function validateName(name) {

    const pattern = /^[A-Za-z ]+$/;

    return pattern.test(name);

}

// ===============================
// Form Submit
// ===============================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const gender =
    document.querySelector('input[name="gender"]:checked');

    if (fullname.value.trim() === "") {

        alert("Please enter your full name.");
        fullname.focus();
        return;

    }

    if (!validateName(fullname.value.trim())) {

        alert("Name should contain only letters.");
        fullname.focus();
        return;

    }

    if (email.value.trim() === "") {

        alert("Please enter your email.");
        email.focus();
        return;

    }

    if (!validateEmail(email.value.trim())) {

        alert("Please enter a valid email.");
        email.focus();
        return;

    }

    if (password.value.length < 6) {

        alert("Password must contain at least 6 characters.");
        password.focus();
        return;

    }

    if (!gender) {

        alert("Please select your gender.");
        return;

    }

    if (course.value === "") {

        alert("Please select a course.");
        course.focus();
        return;

    }

    // Success

    alert(
`?? Registration Successful!

Name : ${fullname.value}

Email : ${email.value}

Gender : ${gender.value}

Course : ${course.value}`
    );

    form.reset();

    password.type = "password";

    togglePassword.innerHTML =
    '<i class="fa-solid fa-eye"></i>';

});

// ===============================
// 3D Card Effect
// ===============================

document.addEventListener("mousemove", (e) => {

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    const rotateY = (e.clientX - x) / 35;
    const rotateX = -(e.clientY - y) / 35;

    container.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;

});

document.addEventListener("mouseleave", () => {

    container.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

// ===============================
// Button Click Animation
// ===============================

button.addEventListener("click", () => {

    button.style.transform = "scale(0.97)";

    setTimeout(() => {

        button.style.transform = "";

    }, 150);

});

// ===============================
// Input Glow Animation
// ===============================

const inputs = document.querySelectorAll("input, select");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.boxShadow =
            "0 0 20px rgba(59,130,246,.6)";

    });

    input.addEventListener("blur", () => {

        input.style.boxShadow = "";

    });

});