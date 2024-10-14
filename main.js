import "./style.css";
import ScrollReveal from "scrollreveal";

//declaring variables
const Text = document.getElementById("textChange");

function ChangeText() {
  document.addEventListener("click", () => {
    Text.textContent = "Hello";
  });
}

ChangeText();

function PartnersBtnText() {
  const patners = document.querySelector(".partners__btn");
  document.addEventListener("drag", () => {
    patners.textContent = "partner";
  });
}
PartnersBtnText();

//using the ScrollReveal Library for the reveal animation
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//Animation targeted to elements of the hero section
ScrollReveal().reveal(".hero__img", { delay: 600, origin: "right" });
ScrollReveal().reveal(".hero__btn", { delay: 800, origin: "bottom" });
ScrollReveal().reveal(".hero__text", { delay: 700, origin: "top" });

//Animation targeted to elements of the partners section
ScrollReveal().reveal(".partners__group1", { delay: 600, origin: "top" });
ScrollReveal().reveal(".partners__img", { delay: 700, origin: "left" });
ScrollReveal().reveal(".partners__btn", { delay: 800, origin: "bottom" });

//Animation targeted to elements of the article section
ScrollReveal().reveal(".article", { delay: 600, origin: "top" });
ScrollReveal().reveal(".article__btn", { delay: 700, origin: "bottom" });

//Animation targeted to elements of the team section
ScrollReveal().reveal(".team__talent", { delay: 700, origin: "left" });
ScrollReveal().reveal(".team__btn", { delay: 750, origin: "bottom" });

//Animation targeted to elements of the footer section
ScrollReveal().reveal(".footer__icon", { delay: 600, origin: "left" });
ScrollReveal().reveal(".footer__copyright", { delay: 700, origin: "right" });
