import './globals.css'

export const metadata = {
  title: 'Ajaykumar M A | Full Stack Developer',
  description: 'Full Stack Developer with 1+ year of experience in MERN stack, React Native, and modern web technologies. Based in Kerala, India.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React', 'Node.js', 'React Native', 'Kerala'],
  authors: [{ name: 'Ajaykumar M A' }],
  openGraph: {
    title: 'Ajaykumar M A | Full Stack Developer',
    description: 'Full Stack Developer with 1+ year of experience in MERN stack and mobile development.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
