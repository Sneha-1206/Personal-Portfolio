# Personal Portfolio Website

This personal portfolio website showcases my software development projects, technical skills, and computer science background.

## Design Rationale & Code Organization
- **AI-Assisted Color Mapping via `:root`**: I leveraged AI to map design colors, gradients, and custom shadows as CSS custom properties within the `:root` selector. This facilitated code cleaning, ensured visual consistency, and enabled swift debugging or theme updates.
- **Visual Aesthetic**: The UI employs a sleek dark theme featuring deep purple (`#7851a9`) and magenta (`#d016da`) accents. To blend technical aesthetics with readability, monospace fonts (`Courier New`) are paired with legible sans-serifs (`Segoe UI`, `Gill Sans`).
- **Clean Commenting**: With AI assistance, key sections are clearly demarcated using structural comment blocks to enhance readability, clean code navigation, and project maintenance.

## Layout Technique Justification
- **CSS Grid**: Utilized in projects, skills, and contact sections. Using `repeat(auto-fit, minmax(..., 1fr))` ensures layout responsiveness across diverse viewports without bloating the CSS with media queries.
- **Flexbox**: Employed for the header navigation and about page alignment. It is chosen for its efficiency with 1-dimensional layouts, permitting horizontal alignment that wraps cleanly on mobile devices.
- **Responsive Breakpoints**: Breakpoints at `992px`, `768px`, and `600px` adapt column ratios and nav visibility for a fluid, mobile-first experience.

## Known Limitations
1. **CSS-Only Hamburger Menu**: The mobile toggle uses a checkbox selector hack (`#menu-toggle:checked`). Although lightweight, it lacks keyboard accessibility (focus trapping) and does not automatically collapse when a link is clicked.
2. **Fixed Asset Ratios**: Grid cards expect standard, uniform asset dimensions; mismatched image sizes might result in uneven cropping.
