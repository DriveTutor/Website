import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Drive Tutor — Ontario\'s Driving Lesson Platform',
  description: 'Drive Tutor connects learner drivers with verified instructors in Ontario. Simple booking, trusted profiles, and a seamless experience.',
  keywords: 'driving lessons, Ontario, G1, G2, driving instructor, book driving lesson',
  openGraph: {
    title: 'Drive Tutor — Book Driving Lessons with Confidence',
    description: 'Connect with verified driving instructors across Ontario.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var s=localStorage.getItem('dt-theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(s==='dark'||(s===null&&d))document.documentElement.classList.add('dark')}catch(e){}})();`
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
