/* By Carter Williams
Hello there! I enjoy object oriented programming, hence why this website is script heavy instead
of html heavy! This script is designed to reflect that by creating objects through a list 
'const projects' and then dynamically creating their html elements 
depending entirely on the hardcoded data in the list.
*/



const projects = [
    {
        title: "KanBan Application",
        imageSrc: ["/images/kanban.png", "/images/kanban2.png"],
        details: "<p>A web-based KanBan application built using JavaScript, HTML, and CSS. It allows users to create, edit, and manage tasks in a visual board format.</p><ul><li>Implemented drag-and-drop functionality for task management.</li><li>Used local storage to save user data.</li><li>Responsive design for mobile and desktop use.</li></ul>"
    },
    {
        title: "Project Two",
        imageSrc: ["/images/blackjack.png"],
        details: "<p>Description of Project Two.</p><ul><li>Feature one.</li><li>Feature two.</li></ul>"
    }
]

const projectList = document.getElementById("grid-projects");
//Create project cards dynamically based on the hardcoded projects above
projects.forEach((project, index) => {
   
    const card = document.createElement("div");
    card.classList.add("project-card");
    console.log(project.imageSrc[0]);
    card.innerHTML = `
        <img class="project-image" src="${project.imageSrc[0]}" alt="${project.title} Image">
        <div class="item-details">
        <h2>${project.title}</h2>
        <button class="details-btn" data-index="${index}">View Details</button>
        </div>`;
          console.log(`Card created for ${project.title}:`, card.querySelector("img").src);

    projectList.appendChild(card); 
});

//Grab everything you need from the page
const modal = document.getElementById("project-modal");
modal.style.display = "none";
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDetails = document.getElementById("modal-details");
const closeBtn = document.getElementById("close-button");

//Add click listeners to all project detail buttons
document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
        modalDetails.innerHTML = "";
        modal.style.display = "flex";
        //Determine which project was clicked
        const index = button.getAttribute("data-index");
        const project = projects[index];
        modalTitle.innerText = project.title;
        modalDetails.innerHTML = project.details;

        //Display each image in the list of images
        for(let i = 0; i < project.imageSrc.length; i++) {
            const img = document.createElement("img");
            img.src = project.imageSrc[i];
            modalImage.appendChild(img);
        }       
    });
});

//Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});