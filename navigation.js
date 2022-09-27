
// Nav elements
let home_btn = d.querySelector("#home");
let about_btn = d.querySelector("#about");
let contact_btn = d.querySelector("#contact");

// Section elements
let about_section = d.querySelector("section#about");
let contact_section = d.querySelector("section#contact");

about_btn.addEventListener("click", () => {
  d.querySelector("body").classList.add("hide-overflow");
  about_btn.classList.add("active");
  about_section.classList.add("active");
})

contact_btn.addEventListener("click", () => {
  d.querySelector("body").classList.add("hide-overflow");
  contact_btn.classList.add("active");
  contact_section.classList.add("active");
})

d.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    d.querySelector("body").classList.remove("hide-overflow");
    about_section.classList.remove("active");
    about_btn.classList.remove("active");
    contact_section.classList.remove("active");
    contact_btn.classList.remove("active");
  });
});