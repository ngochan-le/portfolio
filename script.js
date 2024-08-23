// Function to toggle the visibility of the project row
function toggleProjects(event) {
    var projectsRow = document.querySelector('.projects-row');
    projectsRow.classList.toggle('hide');
    event.stopPropagation(); // Stop the event from propagating to the document body
}

// Function to close the project row
function closeProjects() {
    var projectsRow = document.querySelector('.projects-row');
    projectsRow.classList.add('hide');
}

// Function to close the project row if clicked outside
function closeProjects(event) {
    var projectsRow = document.querySelector('.projects-row');
    var menuToggle = document.querySelector('.menu-toggle');

    // Check if the clicked element is not part of the projects row or menu toggle
    if (!projectsRow.contains(event.target) && event.target !== menuToggle) {
        projectsRow.classList.add('hide');
    }
}

// Add event listener to the document body
document.body.addEventListener('click', closeProjects);


