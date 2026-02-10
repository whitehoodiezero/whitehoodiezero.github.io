// ===== MATRIX RAIN EFFECT =====
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff88';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===== TYPING EFFECT =====
const typingText = document.querySelector('.typing-text');
const phrases = [
    'CYBER SECURITY SPECIALIST',
    'BUG BOUNTY HUNTER',
    'AI AUTOMATION EXPERT',
    'PENETRATION TESTER',
    'THREAT ANALYST'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

typeEffect();

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.stat-value');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounters(), 10);
        } else {
            counter.innerText = target;
        }
    });
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    observer.observe(statsSection);
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== FORM HANDLING =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:abdulazishartadi@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            contactForm.reset();
        }, 500);
    });
}

// ===== SCROLL ANIMATIONS =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.expertise-card, .project-card, .about-text, .terminal, .timeline-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.querySelectorAll('.expertise-card, .project-card, .about-text, .terminal, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// ===== FLOATING TERMINAL =====
const floatingTerminal = document.getElementById('floatingTerminal');
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const closeTerminal = document.getElementById('closeTerminal');
const maximizeTerminal = document.getElementById('maximizeTerminal');

// Terminal Commands
const terminalCommands = {
    help: () => {
        return `Available commands:
  help       - Show this help message
  about      - Learn more about me
  skills     - View my skill set
  projects   - Navigate to projects
  timeline   - View vulnerability timeline
  contact    - Go to contact section
  clear      - Clear terminal output
  whoami     - Display user information
  ls         - List available sections
  cat        - Read section content`;
    },
    about: () => {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        return 'Navigating to About section...';
    },
    skills: () => {
        document.querySelector('#expertise').scrollIntoView({ behavior: 'smooth' });
        return 'Navigating to Expertise section...';
    },
    projects: () => {
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        return 'Navigating to Projects section...';
    },
    timeline: () => {
        document.querySelector('#timeline').scrollIntoView({ behavior: 'smooth' });
        return 'Navigating to Vulnerability Timeline...';
    },
    contact: () => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        return 'Navigating to Contact section...';
    },
    clear: () => {
        terminalOutput.innerHTML = '';
        return '';
    },
    whoami: () => {
        return 'abdul-azis-hartadi\nRole: Elite Cyber Security Specialist\nLocation: Tactical Suroboyo';
    },
    ls: () => {
        return 'home/\nabout/\nexpertise/\ntimeline/\nprojects/\ncontact/';
    },
    cat: (args) => {
        if (!args[0]) return 'Usage: cat <section>';
        switch(args[0]) {
            case 'profile':
                return 'Name: Abdul Azis Hartadi\nRole: Cyber Security Specialist\nFocus: Bug Bounty | AI | Automation';
            case 'skills':
                return 'penetration_testing/\nweb_security/\nai_automation/\nthreat_analysis/';
            default:
                return `cat: ${args[0]}: No such file or directory`;
        }
    }
};

// Process terminal command
function processCommand(input) {
    const parts = input.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    if (terminalCommands[command]) {
        return terminalCommands[command](args);
    } else if (command === '') {
        return '';
    } else {
        return `Command not found: ${command}\nType 'help' for available commands`;
    }
}

// Handle terminal input
terminalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const input = terminalInput.value;
        const output = processCommand(input);
        
        // Add command to output
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.innerHTML = `<span class="prompt">$</span> ${input}`;
        terminalOutput.appendChild(commandLine);
        
        // Add output
        if (output) {
            const outputLines = output.split('\n');
            outputLines.forEach(line => {
                const outputLine = document.createElement('div');
                outputLine.className = 'terminal-line output';
                outputLine.textContent = line;
                terminalOutput.appendChild(outputLine);
            });
        }
        
        terminalInput.value = '';
        
        // Scroll to bottom
        const terminalBody = document.querySelector('.floating-terminal-body');
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});

// Close terminal
closeTerminal.addEventListener('click', () => {
    floatingTerminal.classList.toggle('minimized');
});

// Maximize terminal
maximizeTerminal.addEventListener('click', () => {
    floatingTerminal.classList.toggle('maximized');
});

// Make terminal draggable
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

const terminalHeader = document.querySelector('.floating-terminal-header');

terminalHeader.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);

function dragStart(e) {
    if (e.target === terminalHeader || terminalHeader.contains(e.target)) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        
        floatingTerminal.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
}

function dragEnd(e) {
    isDragging = false;
}

// ===== CONSOLE EASTER EGGS =====
console.log('%c[SYSTEM INITIALIZED]', 'color: #00ff88; font-size: 16px; font-weight: bold;');
console.log('%cTACTICAL SUROBOYO PORTFOLIO v2.0', 'color: #00d4ff; font-size: 14px;');
console.log('%cWelcome to Abdul Azis Hartadi\'s Elite Portfolio', 'color: #00d4ff; font-size: 14px;');
console.log('%cTry the floating terminal for quick navigation!', 'color: #8a8a9a; font-size: 12px;');
console.log('%cType "help" in the terminal for available commands', 'color: #8a8a9a; font-size: 12px;');

// Konami Code Easter Egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        // Add rainbow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Add terminal message
        const easterEggLine = document.createElement('div');
        easterEggLine.className = 'terminal-line output';
        easterEggLine.textContent = '🎉 KONAMI CODE ACTIVATED! Rainbow mode engaged!';
        easterEggLine.style.color = '#ff00ff';
        terminalOutput.appendChild(easterEggLine);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Welcome message in terminal after 2 seconds
setTimeout(() => {
    const welcomeLine = document.createElement('div');
    welcomeLine.className = 'terminal-line output';
    welcomeLine.innerHTML = '<span style="color: #00ff88;">⚡</span> Quick Terminal ready! Type "help" to begin.';
    terminalOutput.appendChild(welcomeLine);
}, 2000);
