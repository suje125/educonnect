# EduConnect - Study Abroad Website

A modern, responsive website for an education consultancy firm, built with Next.js and Tailwind CSS.

## Features

- 🎓 Comprehensive study abroad information
- 🌍 Multiple country destinations
- 📝 Detailed service descriptions
- 📅 Consultation booking system
- 📱 Fully responsive design
- ⚡ Fast and SEO-friendly with Next.js
- 🎨 Modern UI with Tailwind CSS
- 🔍 Easy to customize and extend

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Font Awesome
- React Hooks

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/educonnect.git
cd educonnect
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
educonnect/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── study-abroad/         # Study abroad section
│   │   ├── services/            # Services section
│   │   ├── contact/             # Contact page
│   │   └── book-consultation/   # Consultation booking
│   ├── components/              # Reusable components
│   └── styles/                  # Global styles
├── public/
│   └── images/                  # Static images
└── package.json
```

## Customization

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your content
3. Update the navigation in `components/Navbar.tsx`

### Modifying Styles

- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom colors and themes can be configured in `tailwind.config.js`

### Adding Images

1. Place new images in `public/images/`
2. Use the Next.js Image component:
```jsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={500}
  height={300}
/>
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@educonnect.com or create an issue in the repository.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Font Awesome for the icons
- All contributors who have helped shape this project
