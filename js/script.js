document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-input');

    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            const validationIcon = document.getElementById(this.id + '-check');

            if (validationIcon) {
                if (this.value.trim() !== '') {
                    validationIcon.style.display = 'inline-block';
                } else {
                    validationIcon.style.display = 'none';
                }
            }
        });
    });

    let menuVisible = false;

    function toggleMenu() {
        const nav = document.getElementById("nav");
        if (menuVisible) {
            nav.classList.remove("responsive");
            menuVisible = false;
        } else {
            nav.classList.add("responsive");
            menuVisible = true;
        }
    }

    const navResponsiveButton = document.querySelector('.nav-responsive');
    if (navResponsiveButton) {
        navResponsiveButton.addEventListener('click', toggleMenu);
    }

    function selectMenuItem() {
        const nav = document.getElementById("nav");
        nav.classList.remove("responsive");
        menuVisible = false;
    }

    const navLinks = document.querySelectorAll('#nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', selectMenuItem);
    });

    function applySkillAnimations() {
        const skillsSection = document.getElementById("skills");
        if (!skillsSection) return;

        const distanceFromSkills = window.innerHeight - skillsSection.getBoundingClientRect().top;

        if (distanceFromSkills >= 300) {
            const skillProgressBars = document.querySelectorAll(".progreso");

            const skillClasses = [
                "javascript", "htmlcss", "photoshop", "wordpress",
                "comunicacion", "trabajo", "creatividad", "dedicacion"
            ];

            skillProgressBars.forEach((progressBar, index) => {
                if (skillClasses[index] && !progressBar.classList.contains(skillClasses[index])) {
                    progressBar.classList.add(skillClasses[index]);
                }
            });

            window.removeEventListener('scroll', applySkillAnimations);
        }
    }

    window.addEventListener('scroll', applySkillAnimations);

    const projectModal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.close-button');

    const projects = document.querySelectorAll('.portfolio .galeria .proyecto');

    projects.forEach(project => {
        project.addEventListener('click', function() {
            const title = this.dataset.title;
            const description = this.dataset.description;

            modalTitle.textContent = title;
            modalDescription.textContent = description;

            projectModal.classList.add('show-modal');
        });
    });

    closeButton.addEventListener('click', function() {
        projectModal.classList.remove('show-modal');
    });

    window.addEventListener('click', function(event) {
        if (event.target === projectModal) {
            projectModal.classList.remove('show-modal');
        }
    });

    document.querySelector('.modal-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });



    const sendButton = document.getElementById('sendButton');
    const successMessage = document.getElementById('successMessage');

    if (sendButton) { 
        sendButton.addEventListener('click', function(event) {
            event.preventDefault();

            if (successMessage) { 
                successMessage.classList.add('show');

                setTimeout(() => {
                    successMessage.classList.remove('show');
                    formInputs.forEach(input => {
                        input.value = ''; 
                        const validationIcon = document.getElementById(input.id + '-check');
                        if (validationIcon) {
                            validationIcon.style.display = 'none'; 
                        }
                    });
                    document.getElementById('mensaje').value = ''; 
                    document.getElementById('mensaje-check').style.display = 'none'; 

                }, 2000); 
            }
        });
    }
});