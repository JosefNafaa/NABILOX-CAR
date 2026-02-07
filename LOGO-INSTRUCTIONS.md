# Logo Integration Instructions

## How to Add Your Nabilox Car Logo

The website is configured to display your logo in the navigation bar. Follow these simple steps:

### Step 1: Save Your Logo
1. Save your Nabilox Car logo image file
2. Recommended format: PNG (with transparent background) or JPG
3. Recommended size: Width 200-300px, Height 50-80px

### Step 2: Add Logo to Project
1. Copy your logo file to the `images` folder
2. Rename it to: `nabilox-logo.png` (or keep the extension that matches your file)

### Step 3: Update HTML (if needed)
If your logo file has a different name or extension, update line 59 in `index.html`:

```html
<img src="images/YOUR-LOGO-FILENAME.png" alt="Nabilox Car Logo">
```

### Current Setup
- The website will automatically try to load: `images/nabilox-logo.png`
- If the logo file is not found, it will show a text fallback: "NABILOX CAR" with a car icon
- Once you add the logo file, it will display automatically

### Logo Specifications
Your logo should match the brand colors:
- **Primary Red**: #C41E3A
- **Black**: #000000
- **White text**: For contrast on dark backgrounds

The logo will be displayed at 50px height and will scale proportionally.

---

## Quick Start
Simply place your logo file named `nabilox-logo.png` in the `images` folder and refresh the website!
