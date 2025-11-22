/* By Carter Williams
Hello there! I enjoy object oriented programming, hence why this website is script heavy instead
of html heavy! This script is designed to reflect that by creating objects through a list 
'const projects' and then dynamically creating their html elements 
depending entirely on the hardcoded data in the list.
*/



const projects = [
    {
        title: "KanBan Application",
        imageSrc: ["/CarterWilliams-Portfolio/images/kanban.png", "/CarterWilliams-Portfolio/images/kanban2.png", "/CarterWilliams-Portfolio/images/kanban3.png", "/CarterWilliams-Portfolio/images/kanban4.png", "/CarterWilliams-Portfolio/images/kanban5.png"],
        details: "<p>A mobile KanBan application built using only Java. This applications allows users to manage projects by creating"
        + " custom boards, lists, and cards to organize their workflow. Users can easily add, edit and delete tasks from the list, and can"
       + " save the entire board at any point in time.</p><ul><li>Implemented drag-and-drop functionality for task management.</li>"
       +"<li>Used local storage to save user data.</li><li>Responsive design for mobile and desktop use.</li>"
       +"<li>Easy default label option for a quick-start on projects</li></ul>"
    },
    {
        title: "Blackjack Game",
        imageSrc: ["/CarterWilliams-Portfolio/images/blackjack.png", "/CarterWilliams-Portfolio/images/blackjack2.png", "/CarterWilliams-Portfolio/images/blackjack3.png", "/CarterWilliams-Portfolio/images/blackjack4.png", "/CarterWilliams-Portfolio/images/blackjack5.png", "/CarterWilliams-Portfolio/images/blackjack6.png", "/CarterWilliams-Portfolio/images/blackjack7.png"],
        details: "<p>This project was completed using Unity 2D utilizing C# as the main programming language. The project is a"
        + " realistic Blackjack game that contains all the real rules of regular Blackjack.</p><ul><li>Tutorial that explains icons," 
        +" rules of blackjack, and features of my game.</li><li>Split the cards only if the player has two cards of the same value.</li>" + 
        "<li>Change bet and double mid hand to potentially increase payout</li><li>Real Blackjack rules and payout system with options to push, win, win by a dealt blackjack, and lose.</li></ul>"
    },{
        title: "Volunteer and Event Management System",
        imageSrc: ["/CarterWilliams-Portfolio/images/tv.png", "/CarterWilliams-Portfolio/images/tv2.png", "/CarterWilliams-Portfolio/images/tv3.png", "/CarterWilliams-Portfolio/images/tv4.png", "/CarterWilliams-Portfolio/images/tv5.png", "/CarterWilliams-Portfolio/images/tv6.png", "/CarterWilliams-Portfolio/images/tv7.png"],
        details: "<p>This application was designed for Tomorrow's Voices volunteer organization. The application has five pre-made accounts each"
        + " and each account has different restrictions and access. This program was built using C# with an MVC approach and utilizing SQLite,"
        + " javaScript, boostrap and css. The code is available online, and this project was completed with a team of five programmers."
        + "</p><ui><li>Account restrictions depending on the hierarchy of the user</li>"
        +"<li>Can convert excel sheets to sql data, uploading a sheet of volunteers will allow you to add lots of volunteers at once</li>" + 
        "<li>Simple filter and sorting on every page in the app</li>" +
        "<li>Dashboard containing the user's most common actions</li></ui>"
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
        <button class="btn-details" data-index="${index}">View Details</button>
        </div>`;
          console.log(`Card created for ${project.title}:`, card.querySelector("img").src);

    projectList.appendChild(card); 
});

//Grab everything you need from the page
const modal = document.getElementById("project-modal");
modal.style.display = "none";
const modalTitle = document.getElementById("modal-title");
const modalDetails = document.getElementById("modal-details");
const modalImages = document.getElementById("modal-images");
const body = document.body;
const closeBtn = document.getElementById("close-button");

//Add click listeners to all project detail buttons
document.querySelectorAll(".btn-details").forEach(button => {
    button.addEventListener("click", () => {
        //Clear previous content
        modalImages.innerHTML = "";
        modalDetails.innerHTML = "";
        modal.style.display = "block";
        modal.style.justifyContent = "center";
        modal.style.textAlign = "center";
        //Determine which project was clicked
        const index = button.getAttribute("data-index");
        const project = projects[index];
        modalTitle.innerHTML = project.title;
        modalDetails.innerHTML = project.details;
        body.style.backgroundColor = "#1c0281";
        body.style.overflow = "hidden";
        //Display each image in the list of images
    
        for(let i = 1; i < project.imageSrc.length; i++) {
            const img = document.createElement("img");
            img.src = project.imageSrc[i];
            img.alt = `${project.title} Image ${i + 1}`;
            img.classList.add("project-modal-image");
            
            modalImages.appendChild(img);
        }
    });
});
//Close modal
//TODO: CHANGE BACKGROUND COLOR
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.backgroundColor = "rgba(0, 0, 0, 1)";
    body.style.overflow = "auto";
});