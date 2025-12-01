
// JS interaction requirement #1 fun facts button 

const facts = [
  "Nicaragua has the largest lake in Central America: Lake Nicaragua.",
  "The country’s name comes from the Nicarao tribe and the Spanish word 'agua’.",
  "Baseball is more popular than soccer in Nicaragua.",
  "You can visit active volcanoes safely in some areas!",
  "Nicaragua’s flag has two blue stripes for the Pacific and Caribbean coasts."
];

const factDisplay = document.getElementById("fact-display");
const button = document.getElementById("new-fact-btn");

let currentFactIndex = 0; 

factDisplay.textContent = facts[currentFactIndex];

button.addEventListener("click", () => {
  currentFactIndex++; 
  if (currentFactIndex >= facts.length) {
    currentFactIndex = 0; 
  }
  factDisplay.textContent = facts[currentFactIndex];
});


//  JS interaction requirement #2 scroll to top button

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// JS interaction requirement #3 image gallery with facts if you click on an image


const galleryImages = document.querySelectorAll(".gallery-item img");
const galleryInfo = document.getElementById("gallery-info");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const info = img.getAttribute("data-info");
    galleryInfo.textContent = info;
  });
});
