import { Inter } from "next/font/google"
import Link from "next/link"
import { PhoneCall } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "R&M Plumbing & Heating | Professional Plumbing & Heating Services",
  description: "Licensed, insured, and trusted plumbers serving New Jersey with 24/7 emergency service.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <footer className="bg-gray-900 text-gray-300">
            <div className="container py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/logo.png"
                        alt="RM Plumbing & Heating"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <span className="text-xl font-bold text-white">R&M Plumbing & Heating</span>
                    </div>
                  </div>
                  <p className="text-sm mb-4">
                    Professional plumbing services for residential and commercial properties throughout New Jersey.
                  </p>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4 text-blue-400" />
                    <Link href="tel:+12015222834" className="hover:text-white">
                      201-522-2834
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-4">Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/services#repairs" className="hover:text-white">
                        Repairs & Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#bathroom" className="hover:text-white">
                        Bathroom Remodeling
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#water-heaters" className="hover:text-white">
                        Water Heater Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#installations" className="hover:text-white">
                        New Installations
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#sewer-drain" className="hover:text-white">
                        Sewer & Drain Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#emergency" className="hover:text-white">
                        Emergency Services
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-4">Company</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/about" className="hover:text-white">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/testimonials" className="hover:text-white">
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="hover:text-white">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-white">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="hover:text-white">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-4">Contact</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-blue-400 mt-0.5"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>147 Sylvan St, Rutherford, NJ 07070</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-blue-400 mt-0.5"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>201-522-2834</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-blue-400 mt-0.5"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>info@randmplumbingheating.com</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-blue-400 mt-0.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>
                        Mon-Fri: 7am-7pm
                        <br />
                        Sat: 8am-5pm
                        <br />
                        Emergency: 24/7
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p>&copy; {new Date().getFullYear()} R&M Plumbing & Heating. All rights reserved.</p>
                  <div className="flex gap-4">
                    <Link href="/privacy" className="hover:text-white">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-white">
                      Terms of Service
                    </Link>
                    <Link href="/sitemap" className="hover:text-white">
                      Sitemap
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
