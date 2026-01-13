//huvudlayouten som wrappas runt alla sidor i applikationen
import { Montserrat, Work_Sans } from "next/font/google";
import "./globals.css";

//Montserrat används för rubriker (h1, h2, h3 osv)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

//Work Sans används för brödtext och övrig text
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

//metadata som visas i webbläsarfliken och för SEO (sökmotoroptimering)
export const metadata = {
  title: "Alma PT - Personal Trainer",
  description: "Personal training that combines physical strength with mental health. Strength training, conditioning and holistic coaching in Santa Barbara.",
  icons: {
    icon: '/favicon.svg',
  },
};

//importerar Navigation och Footer som visas på alla sidor
import Navigation from './components/Navigation';
import Footer from './components/Footer';

//RootLayout wrappas runt alla sidor, Navigation och Footer visas alltid
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${workSans.variable} antialiased`}
      >
        {/* Navigation visas högst upp på alla sidor */}
        <Navigation />
        {/* children är innehållet från varje specifik sida */}
        {children}
        {/* Footer visas längst ner på alla sidor */}
        <Footer />
      </body>
    </html>
  );
}
