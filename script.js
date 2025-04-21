// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal for scroll animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease',
        reset: false
    });

    // Apply reveal animations to different sections
    sr.reveal('.about .section-title', {});
    sr.reveal('.about-image', { delay: 300 });
    sr.reveal('.about-text', { delay: 400 });
    sr.reveal('.education .section-title', {});
    sr.reveal('.timeline-item', { interval: 200 });
    sr.reveal('.skills .section-title', {});
    sr.reveal('.skills-category', { interval: 200 });
    sr.reveal('.other-skills', { delay: 300 });
    sr.reveal('.projects .section-title', {});
    sr.reveal('.project-card', { interval: 200 });
    sr.reveal('.contact .section-title', {});
    sr.reveal('.contact-info', { delay: 300 });
    sr.reveal('.contact-form', { delay: 400 });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Navigation active state on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Circuit Animation
    function createCircuitAnimation() {
        const svg = document.querySelector('.circuit-animation svg');
        
        // Create circuit paths
        createCircuitPaths(svg);
        
        // Create circuit nodes
        createCircuitNodes(svg);
        
        // Animate electricity flowing through the circuits
        animateElectricity();
    }

    function createCircuitPaths(svg) {
        // Main vertical path
        createPath(svg, 'M250,50 V450', 'main-path');
        
        // Horizontal branches
        createPath(svg, 'M100,150 H400', 'branch-path');
        createPath(svg, 'M100,250 H400', 'branch-path');
        createPath(svg, 'M100,350 H400', 'branch-path');
        
        // Connecting paths
        createPath(svg, 'M100,150 v100', 'connect-path');
        createPath(svg, 'M400,150 v100', 'connect-path');
        createPath(svg, 'M100,250 v100', 'connect-path');
        createPath(svg, 'M400,250 v100', 'connect-path');
        
        // Circuit components (resistors, capacitors, etc.)
        createResistor(svg, 150, 350, 'horizontal');
        createCapacitor(svg, 250, 150, 'horizontal');
        createInductor(svg, 300, 250, 'horizontal');
    }
    
    function createPath(svg, d, className) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('stroke', '#00b4d8');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('fill', 'none');
        path.classList.add(className);
        svg.appendChild(path);
        
        // Set initial state for animation
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        
        // Animate the path
        setTimeout(() => {
            path.style.transition = 'stroke-dashoffset 2s ease-in-out';
            path.style.strokeDashoffset = '0';
        }, 500);
    }
    
    function createResistor(svg, x, y, direction) {
        let d;
        if (direction === 'horizontal') {
            d = `M${x-20},${y} h5 l5,-10 l10,20 l10,-20 l10,20 l5,-10 h5`;
        } else {
            d = `M${x},${y-20} v5 l-10,5 l20,10 l-20,10 l20,10 l-10,5 v5`;
        }
        
        const resistor = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        resistor.setAttribute('d', d);
        resistor.setAttribute('stroke', '#023e8a');
        resistor.setAttribute('stroke-width', '2');
        resistor.setAttribute('fill', 'none');
        resistor.classList.add('component');
        svg.appendChild(resistor);
    }
    
    function createCapacitor(svg, x, y, direction) {
        let d1, d2;
        if (direction === 'horizontal') {
            d1 = `M${x-10},${y-15} v30`;
            d2 = `M${x+10},${y-15} v30`;
        } else {
            d1 = `M${x-15},${y-10} h30`;
            d2 = `M${x-15},${y+10} h30`;
        }
        
        const cap1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        cap1.setAttribute('d', d1);
        cap1.setAttribute('stroke', '#023e8a');
        cap1.setAttribute('stroke-width', '2');
        cap1.setAttribute('fill', 'none');
        cap1.classList.add('component');
        svg.appendChild(cap1);
        
        const cap2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        cap2.setAttribute('d', d2);
        cap2.setAttribute('stroke', '#023e8a');
        cap2.setAttribute('stroke-width', '2');
        cap2.setAttribute('fill', 'none');
        cap2.classList.add('component');
        svg.appendChild(cap2);
    }
    
    function createInductor(svg, x, y, direction) {
        let d;
        if (direction === 'horizontal') {
            d = `M${x-25},${y} 
                a5,5 0 0,1 5,-5 
                a5,5 0 0,1 5,5 
                a5,5 0 0,1 5,-5 
                a5,5 0 0,1 5,5 
                a5,5 0 0,1 5,-5 
                a5,5 0 0,1 5,5 
                a5,5 0 0,1 5,-5 
                a5,5 0 0,1 5,5`;
        } else {
            d = `M${x},${y-25} 
                a5,5 0 0,1 -5,5 
                a5,5 0 0,1 5,5 
                a5,5 0 0,1 -5,5 
                a5,5 0 0,1 5,5 
                a5,5 0 0,1 -5,5 
                a5,5 0 0,1 5,5 
                a5,5 0 0,1 -5,5 
                a5,5 0 0,1 5,5`;
        }
        
        const inductor = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        inductor.setAttribute('d', d);
        inductor.setAttribute('stroke', '#023e8a');
        inductor.setAttribute('stroke-width', '2');
        inductor.setAttribute('fill', 'none');
        inductor.classList.add('component');
        svg.appendChild(inductor);
    }
    
    function createCircuitNodes(svg) {
        // Create nodes at intersections
        createNode(svg, 250, 50);
        createNode(svg, 250, 150);
        createNode(svg, 250, 250);
        createNode(svg, 250, 350);
        createNode(svg, 250, 450);
        
        createNode(svg, 100, 150);
        createNode(svg, 100, 250);
        createNode(svg, 100, 350);
        
        createNode(svg, 400, 150);
        createNode(svg, 400, 250);
        createNode(svg, 400, 350);
    }
    
    function createNode(svg, x, y) {
        const node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        node.setAttribute('cx', x);
        node.setAttribute('cy', y);
        node.setAttribute('r', '4');
        node.setAttribute('fill', '#023e8a');
        node.classList.add('node');
        svg.appendChild(node);
        
        // Add pulse animation
        const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        pulse.setAttribute('cx', x);
        pulse.setAttribute('cy', y);
        pulse.setAttribute('r', '4');
        pulse.setAttribute('fill', 'none');
        pulse.setAttribute('stroke', '#00b4d8');
        pulse.setAttribute('stroke-width', '2');
        pulse.classList.add('node-pulse');
        svg.appendChild(pulse);
        
        // Randomly animate the pulse with different delays
        const delay = Math.random() * 3;
        pulse.style.animation = `pulsate 2s ease-out ${delay}s infinite`;
    }
    
    function animateElectricity() {
        // Add electricity particles
        const svg = document.querySelector('.circuit-animation svg');
        const paths = document.querySelectorAll('.circuit-animation svg path.branch-path, .circuit-animation svg path.main-path');
        
        paths.forEach(path => {
            const length = path.getTotalLength();
            
            // Create multiple particles per path
            for (let i = 0; i < 3; i++) {
                const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                particle.setAttribute('r', '3');
                particle.setAttribute('fill', '#48cae4');
                particle.classList.add('electricity-particle');
                svg.appendChild(particle);
                
                // Animate particle along the path
                animateParticle(particle, path, length, i * 2);
            }
        });
    }
    
    function animateParticle(particle, path, length, delay) {
        // Define start position
        let position = 0;
        let start = null;
        const duration = 3000; // 3 seconds per full path
        
        function step(timestamp) {
            if (!start) start = timestamp;
            const elapsed = ((timestamp - start + (delay * 1000)) % duration) / duration;
            position = elapsed * length;
            
            const point = path.getPointAtLength(position);
            particle.setAttribute('cx', point.x);
            particle.setAttribute('cy', point.y);
            
            // Add glow effect
            particle.setAttribute('filter', 'url(#glow)');
            
            window.requestAnimationFrame(step);
        }
        
        // Create a glow filter if it doesn't exist
        if (!document.getElementById('glow')) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
            filter.setAttribute('id', 'glow');
            
            const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
            feGaussianBlur.setAttribute('stdDeviation', '2.5');
            feGaussianBlur.setAttribute('result', 'coloredBlur');
            
            const feMerge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
            const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
            feMergeNode1.setAttribute('in', 'coloredBlur');
            const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
            feMergeNode2.setAttribute('in', 'SourceGraphic');
            
            feMerge.appendChild(feMergeNode1);
            feMerge.appendChild(feMergeNode2);
            filter.appendChild(feGaussianBlur);
            filter.appendChild(feMerge);
            defs.appendChild(filter);
            
            document.querySelector('.circuit-animation svg').appendChild(defs);
        }
        
        window.requestAnimationFrame(step);
    }
    
    // Initialize circuit animation
    createCircuitAnimation();
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to your server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add CSS animations for node pulses
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulsate {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            70% {
                transform: scale(3);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}); 