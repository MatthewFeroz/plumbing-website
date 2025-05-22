import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, Clock, MapPin, Wrench, Droplet, ShowerHead, Hammer, Mail, Clock3 } from "lucide-react"
import { Logo } from "@/app/components/logo"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating Call Button - Fixed Position */}
      <div className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10">
        <Link href="tel:201-522-2834" className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-xl">
          <PhoneCall className="h-6 w-6 animate-pulse" />
          <span className="font-bold">Call Now: 201-522-2834</span>
        </Link>
      </div>
      
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="ml-2">
            <Logo />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4 mr-2">
            <Link href="tel:2015222834" className="hidden md:flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-blue-600" />
              <span className="font-medium">201-522-2834</span>
            </Link>
            <Link href="#contact">
              <Button className="px-4">Get a Quote</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1600"
              alt="Plumbing services"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 md:py-32">
            <div className="max-w-2xl space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Professional Plumbing & Heating Services in New Jersey
              </h1>
              <p className="text-lg md:text-xl">
                Licensed, insured, and trusted plumbers serving all of New Jersey with 24/7 emergency service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-6" asChild>
                  <Link href="#contact">Schedule Service</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 px-6" asChild>
                  <Link href="tel:201-522-2834"><PhoneCall className="mr-2 h-4 w-4" /> Emergency Service</Link>
                </Button>
              </div>
              
              {/* Big Phone Number Callout */}
              <div className="mt-8 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <h3 className="text-xl font-bold mb-1">Need Help Right Away?</h3>
                <Link href="tel:201-522-2834" className="group flex items-center">
                  <PhoneCall className="mr-2 h-6 w-6 group-hover:animate-bounce" />
                  <span className="text-2xl md:text-3xl font-bold tracking-wide group-hover:underline">
                    Call Us Now: 201-522-2834
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Call Section */}
        <section className="bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0 ml-2">
              <PhoneCall className="h-6 w-6" />
              <div>
                <h3 className="font-medium">24/7 Emergency Service</h3>
                <p className="text-sm text-blue-100">We're available when you need us most</p>
              </div>
            </div>
            <Button variant="secondary" size="lg" className="px-6 mr-2" asChild>
              <Link href="tel:201-522-2834">201-522-2834</Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Plumbing Services</h2>
              <p className="text-muted-foreground px-4">
                From minor repairs to major installations, our licensed plumbers provide comprehensive services for
                residential and commercial properties.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Repairs & Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Fixing leaky faucets, clogged drains, running toilets, and other common plumbing issues.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/services#repairs" className="text-blue-600 hover:underline text-sm">
                    Learn more →
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <ShowerHead className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Bathroom Remodeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Complete bathroom renovations, fixture installations, and upgrades to enhance your space.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/services#bathroom" className="text-blue-600 hover:underline text-sm">
                    Learn more →
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <Droplet className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Water Heater Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Installation, repair, and maintenance of traditional and tankless water heaters.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/services#water-heaters" className="text-blue-600 hover:underline text-sm">
                    Learn more →
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <Hammer className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>New Installations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Expert installation of pipes, fixtures, appliances, and complete plumbing systems.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/services#installations" className="text-blue-600 hover:underline text-sm">
                    Learn more →
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Sewer & Drain Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Clearing blockages, line repairs, and camera inspections to keep your drains flowing.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/services#sewer-drain" className="text-blue-600 hover:underline text-sm">
                    Learn more →
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>24/7 emergency response for burst pipes, major leaks, and other urgent plumbing issues.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/services#emergency" className="text-blue-600 hover:underline text-sm">
                    Learn more →
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="px-6" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Summary Section - Condensed version of the About page content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="R&M Plumbing & Heating team"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">R&M Plumbing & Heating</h2>
                <div className="space-y-4">
                  <p>
                    Founded in 2005, R&M Plumbing & Heating provides honest, reliable plumbing and heating services to the communities of New Jersey.
                    Our experienced team of licensed professionals is dedicated to delivering exceptional workmanship and customer service.
                  </p>
                  <p>
                    With over 20 years of experience serving residential and commercial clients, we've built our reputation on integrity, excellence, and community involvement.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800">Family Owned</Badge>
                    <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800">20+ Years Experience</Badge>
                    <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800">NJ Licensed</Badge>
                    <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800">Fully Insured</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                Get in touch with our team for plumbing services, free estimates, or emergency assistance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Phone</h3>
                    <p className="text-lg font-semibold mb-1">201-522-2834</p>
                    <p className="text-muted-foreground">Available 24/7 for emergency services</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <p className="text-lg font-semibold mb-1">info@randmplumbingheating.com</p>
                    <p className="text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Office Address</h3>
                    <p className="text-lg font-semibold mb-1">147 Sylvan St</p>
                    <p className="mb-1">Rutherford, NJ 07070</p>
                    <p className="text-muted-foreground">Serving all of New Jersey</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Business Hours</h3>
                    <p className="mb-1"><span className="font-medium">Monday-Friday:</span> 7am - 7pm</p>
                    <p className="mb-1"><span className="font-medium">Saturday:</span> 8am - 5pm</p>
                    <p className="mb-1"><span className="font-medium">Sunday:</span> Emergency Only</p>
                    <p className="text-blue-600 font-medium">24/7 Emergency Services Available</p>
                  </div>
                </div>
              </div>
              
              {/* Map or Additional Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Request Service or Quote</h3>
                <p className="mb-6">Call us directly at <Link href="tel:201-522-2834" className="text-blue-600 font-semibold hover:underline">201-522-2834</Link> or fill out our service request form online.</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Our Services Include:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span>Emergency Repairs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span>Drain Cleaning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span>Water Heaters</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span>Fixture Installations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span>Pipe Repairs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span>Bathroom Remodels</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button size="lg" className="w-full mt-4" asChild>
                    <Link href="tel:201-522-2834">
                      <PhoneCall className="mr-2 h-5 w-5" />
                      Call For Service
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to Solve Your Plumbing Problems?
              </h2>
              <p className="text-blue-100 mb-8">
                Whether it's a minor repair or a major installation, our team of licensed plumbers is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#contact">Schedule Service</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="tel:201-522-2834">
                    <PhoneCall className="mr-2 h-4 w-4" /> 201-522-2834
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
