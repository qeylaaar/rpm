# RPM Cafe & Garage - Business Profile Website

Halaman website bisnis profile yang menarik untuk **RPM Cafe & Garage** dengan konsep industrial-modern yang sesuai dengan identitas brand cafe.

## 📋 Analisis Konsep & Tema

### Identitas Brand
- **Nama**: RPM Cafe & Garage
- **Konsep**: Perpaduan passion untuk coffee dengan aesthetic industrial modern
- **Target Audience**: Coffee enthusiasts, creative professionals, young professionals
- **Vibe**: Modern, energik, profesional namun casual

### Palet Warna (Color Palette)
- **Primary Dark**: `#1a1a1a` - Background utama
- **Primary Light**: `#f5f5f5` - Background alternatif
- **Accent Orange**: `#ff6b35` - Warna utama accent (energi, passion)
- **Accent Red**: `#d62828` - Warna secondary accent
- **Accent Gold**: `#f7b801` - Warna premium/special
- **Text Dark**: `#2c2c2c` - Teks utama
- **Text Light**: `#ffffff` - Teks light

## 🎨 Fitur Desain

### 1. **Navigation Bar**
- Sticky navigation dengan logo animasi
- Smooth scrolling ke semua section
- Responsive hamburger menu untuk mobile
- Hover effect yang menarik pada links

### 2. **Hero Section**
- Background gradient dengan animated dot pattern
- Headline yang eye-catching dengan gradient text
- Call-to-action buttons (Reserve Now & Explore Menu)
- Hero image placeholder dengan floating animation
- Mobile responsive layout

### 3. **About Section**
- Informasi lengkap tentang cafe
- 3 feature cards dengan icons
- Grid layout yang responsive
- Image placeholder dengan dashed border

### 4. **Menu Section**
- 6 menu category cards
- Card hover effects dengan scale dan shadow
- Pricing information
- Glass morphism effect dengan backdrop blur

### 5. **Gallery Section**
- Grid gallery dengan 6 item
- Hover zoom effects
- Image placeholders dengan icons
- Fully responsive

### 6. **Statistics Section**
- 4 stat cards dengan animated counters
- Gradient background (orange to red)
- Intersection observer untuk trigger animasi

### 7. **Contact Section**
- Lokasi, telepon, jam operasional
- Contact form dengan validation
- Info cards dengan border accent
- Responsive 2-column layout

### 8. **Social Media Section**
- Links ke Instagram dan social media lainnya
- Social icons dengan hover effects
- Instagram handle showcase

## 🚀 Fitur Interaktif

### JavaScript Features
✅ Smooth scrolling untuk anchor links
✅ Hamburger menu untuk mobile
✅ Intersection Observer untuk animasi scroll
✅ Form validation dan submission
✅ Navbar scroll effects
✅ Gallery hover animations
✅ Button ripple effects
✅ Counter animations untuk statistics
✅ Lazy loading support

## 📱 Responsive Design

- **Desktop**: Full features dengan 2-column layouts
- **Tablet**: 2-column grid yang disesuaikan
- **Mobile**: Single column layout dengan optimized touch targets

### Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px
- Small Mobile: < 480px

## 📁 File Structure

```
rpm/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript interactivity
└── README.md           # Documentation
```

## 🎯 Sections Overview

### 1. Navigation (`<nav class="navbar">`)
- Logo dengan icon animasi
- Menu links
- Hamburger menu (responsive)

### 2. Hero (`<section class="hero">`)
- Main headline
- Tagline dan subtitle
- CTA buttons
- Hero image placeholder

### 3. About (`<section class="about">`)
- Cafe description
- Feature cards
- About image

### 4. Menu (`<section class="menu">`)
- 6 menu category cards
- Pricing
- Icons untuk setiap kategori

### 5. Gallery (`<section class="gallery">`)
- Image grid
- Hover effects
- Responsive columns

### 6. Stats (`<section class="stats">`)
- Animated counter
- Business metrics
- Gradient background

### 7. Contact (`<section class="contact">`)
- Contact information
- Contact form
- Info cards

### 8. Social Media (`<section class="social-media">`)
- Instagram handle
- Social icons
- Links ke social media

### 9. Footer (`<footer>`)
- Copyright info
- Credits

## 🎨 Customization Guide

### Mengubah Warna
Edit `:root` CSS variables di `styles.css`:
```css
:root {
    --primary-dark: #1a1a1a;
    --accent-orange: #ff6b35;
    --accent-gold: #f7b801;
    /* dst */
}
```

### Mengubah Konten
Edit text langsung di `index.html`:
- Judul, deskripsi
- Menu items
- Contact information
- Social media links

### Menambah Gambar Real
1. Ganti `.gallery-image-placeholder` dengan `<img>` tags
2. Update hero section dengan image asli
3. Tambah `data-src` untuk lazy loading

## 🔧 Instalasi & Usage

1. **Buka di browser**
   ```bash
   Buka index.html dengan browser favorit Anda
   ```

2. **Local server (recommended)**
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Menggunakan Node (dengan http-server)
   npx http-server
   
   # Menggunakan Laragon
   Letakkan di folder www dan akses via http://rpm.local
   ```

3. **Customize content**
   - Edit text di index.html
   - Update styling di styles.css
   - Modifikasi interaktivitas di script.js

## 📊 Performance Features

✅ Smooth animations dengan CSS transforms
✅ Hardware-accelerated effects
✅ Lazy loading support untuk images
✅ Efficient event listeners
✅ Optimized media queries
✅ No external dependencies required

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Best Practices Applied

✅ Semantic HTML5
✅ CSS Grid & Flexbox layouts
✅ Mobile-first responsive design
✅ Accessibility considerations
✅ Performance optimization
✅ Clean, maintainable code
✅ Modular CSS structure
✅ Progressive enhancement

## 📝 SEO Features

✅ Semantic HTML structure
✅ Proper heading hierarchy (H1, H2, H3)
✅ Meta tags (viewport, description)
✅ Alt text ready untuk images
✅ Structured content sections
✅ Fast page load

## 🔗 Links & Integration

- Instagram: `@revolutionpermeal_`
- Whatsapp: Ready for integration
- Contact form: Ready for backend integration
- Reservation: Ready for integration

## 💬 Feedback & Customization

Halaman ini siap untuk:
- ✅ Menambah real images
- ✅ Mengintegrasikan backend (form submission, reservations)
- ✅ Menambah lebih banyak menu items
- ✅ Customizing colors dan fonts
- ✅ Menambah animations lebih banyak
- ✅ SEO optimization

---

**Created for RPM Cafe & Garage**
*Where Passion Meets Coffee* ☕🚀

Terakhir diupdate: 2024
Version: 1.0
