import './style.css'
import ideastreamImg from './assets/ideastream.webp'
import fmsImg from './assets/fms.webp'
import hmsImg from './assets/hms.webp'



const allSkills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "JSON", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Neo4j", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" }
];

const track1 = document.querySelector('#track-1');
const track2 = document.querySelector('#track-2');
const track3 = document.querySelector('#track-3');
const track4 = document.querySelector('#track-4');
const track5 = document.querySelector('#track-5');

function populateTrack(trackElement, skillsArray) {
  if (!trackElement) return;
  const duplicatedSkills = [...skillsArray, ...skillsArray, ...skillsArray, ...skillsArray];

  duplicatedSkills.forEach(skill => {
    const imgTag = skill.logo ? `<img src="${skill.logo}" alt="${skill.name}" width="32" height="32" loading="lazy">` : '';
    const iconHTML = `
      <div class="skill-icon" data-name="${skill.name}">
       ${imgTag}
       <span class="skill-name">${skill.name}</span>
      </div>
    `;
    trackElement.insertAdjacentHTML("beforeend", iconHTML);
  });
}

const tracksMobile = [track1, track2, track3, track4, track5];
const tracksDesktop = [track1, track2, track3];

const isMobile = window.innerWidth <= 900 || window.matchMedia("(hover: none) and (pointer: coarse)").matches;
const tracksToUse = isMobile ? tracksMobile : tracksDesktop;

// Dynamically calculate how many skills should go in each row
const skillsPerRow = Math.ceil(allSkills.length / tracksToUse.length);

tracksToUse.forEach((track, index) => {
  const startIndex = index * skillsPerRow;
  const endIndex = startIndex + skillsPerRow;
  populateTrack(track, allSkills.slice(startIndex, endIndex));
});


const projects = [
  {
    title: "Ideastream",
    description: "IdeaStream is a multi-database social media web application. It demonstrates advanced concepts in data modeling, polyglot persistence, and modern web application architecture by using a specialized database for each domain constraint.",
    image: ideastreamImg,
    github: "https://github.com/saubanahmad/ideastream-adms"
  },
  {
    title: "Flight Management System",
    description: "A Data Structures and Algorithms (DSA) based flight management system developed in C# with Windows Forms and MySQL. The project simulates a real-world airline network where users can search flights, view routes, and create bookings. While administrators can add airports, create routes, schedule flights, and monitor airline operations.",
    image: fmsImg,
    github: "https://github.com/saubanahmad/Flight-Booking-and-Ticket-Management-System"
  },
  {
    title: "Hospital Management System",
    description: "Hospital Management System built with C# WinForms and MySQL to manage doctors, patients, departments, appointments, schedules, and medical reports in a structured OOP-based desktop application.",
    image: hmsImg,
    github: "https://github.com/saubanahmad/Hospital-Management-System"
  }
];

const projectList = document.querySelector('#project-list');
projects.forEach((project, index) => {
  const cardHTML = `
    <div class="project-card reveal">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.github}" target="_blank" class="project-link">View on GitHub</a>
      </div>
      <div class="project-image">
        <img src="${project.image}" alt="${project.title} screenshot" width="600" height="300" loading="lazy" />
      </div>
    </div>
  `;
  projectList.insertAdjacentHTML('beforeend', cardHTML);
});

// Cursor logic with performance optimization
const cursorDot = document.querySelector('.cursor-dot');
window.addEventListener('mousemove', (e) => {
  // Disable custom cursor on touch devices to save battery
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

  requestAnimationFrame(() => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.transform = `translate(${posX - 4}px, ${posY - 4}px)`;

    document.documentElement.style.setProperty('--mouse-x', `${posX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${posY}px`);
  });
});


// --- 3D Tilt Effect for Project Cards ---
const cards = document.querySelectorAll('.tilt-card');

window.addEventListener('mousemove', (e) => {
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches || window.innerWidth <= 900) {
    cards.forEach(card => card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    return;
  }

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + (rect.width / 2);
    const cardCenterY = rect.top + (rect.height / 2);

    const deltaX = e.clientX - cardCenterX;
    const deltaY = e.clientY - cardCenterY;

    const rotateX = (deltaY / (rect.height / 2)) * -15;
    const rotateY = (deltaX / (rect.width / 2)) * 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});

// hero typing effecty
const subtitleElement = document.getElementById('hero-subtitle');
const textToType = "B.S. Computer Science Student at University of Engineering and Technology, Lahore";
let typeIndex = 0;

function typeWriter() {
  if (typeIndex < textToType.length) {
    subtitleElement.innerHTML += textToType.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeWriter, 40);
  }

}
setTimeout(typeWriter, 500);



// --- Scroll Spy for Nav Active State ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const observerOptions = {
  root: null,
  // This creates a 0px horizontal line perfectly in the center of the screen.
  // Whichever section is touching that line will become active!
  rootMargin: '-50% 0px -50% 0px',
  threshold: 0
};


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add active class to the link that corresponds to this section
      const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
        movePill(activeLink)
      }

    }
  });
}, observerOptions);

// Start observing all sections
sections.forEach(section => {
  observer.observe(section);
});

function movePill(targetElement) {
  const pill = document.querySelector('.nav-pill');
  if (!pill || !targetElement) return;

  const pillWidth = targetElement.offsetWidth;
  const pillOffset = targetElement.offsetLeft;

  pill.style.width = `${pillWidth}px`;
  pill.style.transform = `translateX(${pillOffset}px)`;
}

// --- Drag & Drop Nav Pill Logic ---
const nav = document.querySelector('nav');
nav.addEventListener('dragstart', (e) => e.preventDefault());
const pill = document.querySelector('.nav-pill');
let isDraggingPill = false;
let startMouseX = 0;
let startPillX = 0;
let hasDragged = false;

nav.addEventListener('mousedown', (e) => {
  isDraggingPill = true;
  hasDragged = false;
  startMouseX = e.clientX;

  // Find where the pill currently is
  const activeLink = document.querySelector('nav a.active');
  startPillX = activeLink ? activeLink.offsetLeft : 0;
});

window.addEventListener('mousemove', (e) => {
  if (!isDraggingPill) return;
  const deltaX = e.clientX - startMouseX;
  if (Math.abs(deltaX) > 5) {
    hasDragged = true;
    const navLinks = document.querySelectorAll('nav a:not([style*="display: none"])');
    if (navLinks.length === 0) return;

    const firstLink = navLinks[0];
    const lastLink = navLinks[navLinks.length - 1];

    const minX = firstLink.offsetLeft;
    const maxX = lastLink.offsetLeft;

    let targetX = startPillX + deltaX;
    if (targetX < minX) targetX = minX;
    if (targetX > maxX) targetX = maxX;

    pill.style.transition = 'none';
    pill.style.transform = `translateX(${targetX}px)`;
  }
});

window.addEventListener('mouseup', (e) => {
  if (!isDraggingPill) return;
  isDraggingPill = false;

  // Turn CSS smooth transitions back on
  pill.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), width 0.3s cubic-bezier(0.25, 1, 0.5, 1)';

  if (hasDragged) {
    // 1. Find which link the pill was dropped closest to
    const navLinks = document.querySelectorAll('nav a');
    const pillRect = pill.getBoundingClientRect();
    const pillCenter = pillRect.left + (pillRect.width / 2);

    let closestLink = null;
    let closestDistance = Infinity;

    navLinks.forEach(link => {
      const linkRect = link.getBoundingClientRect();
      const linkCenter = linkRect.left + (linkRect.width / 2);
      const distance = Math.abs(pillCenter - linkCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestLink = link;
      }
    });

    // 2. Scroll the page to that link's section!
    document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
    closestLink.classList.add('active');
    const targetId = closestLink.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Smoothly scroll the screen to the new section
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      // If section doesn't exist (like #contact), just snap the pill to it
      movePill(closestLink);
    }
  }
});

// --- Reveal on Scroll Logic ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


// --- Print Resume Animation ---
const printBtn = document.querySelector('#print-resume-btn');
if (printBtn) {
  printBtn.addEventListener('click', () => {
    const btnText = printBtn.querySelector('.btn-text');

    // Start printing animation
    printBtn.classList.add('is-printing');
    btnText.textContent = "PRINTING...";

    // Wait for the paper to slide out (1.5s), then trigger the actual PDF download!
    setTimeout(() => {
      // Create an invisible link to force the download
      const link = document.createElement('a');
      link.href = '/Sauban Ahmad - Resume.pdf';
      link.download = 'Sauban_Ahmad_Resume.pdf'; // Name of the downloaded file
      document.body.appendChild(link);
      link.click(); // Trigger the download
      document.body.removeChild(link);

      // Wait a few seconds then roll the paper back up
      setTimeout(() => {
        printBtn.classList.remove('is-printing');
        btnText.textContent = "PRINT RESUME";
      }, 2000);
    }, 1500);
  });
}