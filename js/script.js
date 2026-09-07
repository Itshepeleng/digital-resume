const projectsData = [
  {
    title: "Parent-Teacher Communication App",
    category: "Flutter & ASP.NET Core",
    description: "A cross-platform application enabling real-time communication between parents and school administration, featuring push notifications and role-based access control.",
    imageUrl: "", 
    githubUrl: "https://github.com/your-username/parent-teacher-app"
  },
  {
    title: "DanceArchive Management System",
    category: "C# & Supabase",
    description: "Digital archiving solution featuring real-time data sync, secure user authentication, and comprehensive database management.",
    imageUrl: "",
    githubUrl: "https://github.com/your-username/dance-archive"
  },
  {
    title: "Study Room Web App",
    category: "HTML / CSS / JavaScript",
    description: "A dark-themed, minimal virtual workspace interface tailored for focused academic study and collaborative learning sessions.",
    imageUrl: "",
    githubUrl: "https://github.com/your-username/study-room-web"
  }
];

function renderProjects() {
  const container = document.getElementById("projectsList");
  if (!container) return;

  container.innerHTML = projectsData.map(project => {
    const hasImage = project.imageUrl && project.imageUrl.trim() !== "";

    return `
      <article class="project-card-row">
        <div class="project-image-box">
          ${
            hasImage
              ? `<img src="${project.imageUrl}" alt="${project.title}" />`
              : `<svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5">
                   <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                   <circle cx="8.5" cy="8.5" r="1.5"></circle>
                   <polyline points="21 15 16 10 5 21"></polyline>
                 </svg>`
          }
        </div>
        
        <div class="project-content">
          <div>
            <div class="project-header">
              <h2 class="project-title">${project.title}</h2>
              <span class="project-category">${project.category}</span>
            </div>
            <p class="project-description">${project.description}</p>
          </div>

          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="take-a-look-btn">
            Take a look ➔
          </a>
        </div>
      </article>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const typeSelect = document.getElementById('projectType');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Validate Name
    if (!nameInput.value.trim()) {
      document.getElementById('nameError').textContent = 'Please enter your name';
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailInput.value.trim()) {
      document.getElementById('emailError').textContent = 'Please enter your email';
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      document.getElementById('emailError').textContent = 'Please enter a valid email';
      isValid = false;
    }

    // Validate Dropdown
    if (!typeSelect.value) {
      document.getElementById('typeError').textContent = 'Please select a project type';
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      document.getElementById('messageError').textContent = 'Please enter a message';
      isValid = false;
    }

    // On Successful Submission
    if (isValid) {
      alert('Message sent successfully!');
      form.reset();
    }
  });
});