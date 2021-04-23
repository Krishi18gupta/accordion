const accordionTitles = document.querySelectorAll(".title-acc");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener('click', () => {
    const height = accordionTitle.nextElementSibling.scrollHeight;
    console.log(height);  
    accordionTitle.classList.toggle("active-header");
    if (accordionTitle.classList.contains('active-header')) {
accordionTitle.nextElementSibling.style.maxHeight = "100px";
    } else {
        accordionTitle.nextElementSibling.style.maxHeight = "0px";
    }
  });
});