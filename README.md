# Electrical Engineer Resume Website

A modern, animated resume website for Electrical Engineers, specially designed for graduates from Jamia Millia Islamia University, Delhi.

## Features

- Interactive UI with smooth animations and transitions
- Animated circuit diagram that simulates electrical components
- Responsive design that works on all devices
- Professional sections for showcasing skills, education, and projects
- Contact form for easy communication
- Modern aesthetics with electrical engineering theme

## Technology Stack

- HTML5
- CSS3 (with modern features like CSS variables, flexbox, grid)
- JavaScript (vanilla, no frameworks)
- SVG animations for circuit diagram
- ScrollReveal.js for scroll animations
- Font Awesome for icons

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser

No build steps or server setup required! This is a static website that can run directly in any modern browser.

## Customization

### Personal Information

Edit the `index.html` file to update your personal information:

- Name, contact details, and social media links
- Education history and qualifications
- Skills and expertise
- Project descriptions

### Color Scheme

The color scheme can be easily customized by editing the CSS variables in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #00b4d8;
    --secondary-color: #0077b6;
    --accent-color: #48cae4;
    --dark-color: #023e8a;
    --light-color: #caf0f8;
    /* ... other colors ... */
}
```

### Profile Image

Replace the placeholder image by changing the URL in the `.profile-image::before` CSS selector in `styles.css`:

```css
.profile-image::before {
    /* ... */
    background: url('path/to/your/image.jpg') no-repeat center center/cover;
    /* ... */
}
```

### Circuit Animation

The circuit animation can be customized in the `script.js` file by modifying the circuit paths, components, and animation parameters.

## Browser Compatibility

This website is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your personal resume website.

## Credits

- ScrollReveal.js - https://scrollrevealjs.org/
- Font Awesome - https://fontawesome.com/ 