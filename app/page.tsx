import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, Clock, MapPin, Wrench, Droplet, ShowerHead, Hammer } from "lucide-react"
import { Logo } from "@/app/components/logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="ml-2">
            <Logo />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4 mr-2">
            <Link href="tel:2015222834" className="hidden md:flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-blue-600" />
              <span className="font-medium">201-522-2834</span>
            </Link>
            <Link href="/contact">
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
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-6">
                  Schedule Service
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 px-6">
                  <PhoneCall className="mr-2 h-4 w-4" /> Emergency Service
                </Button>
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
        <section className="py-16 md:py-24 bg-gray-50">
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

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Professional plumber"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose R&M Plumbing & Heating?</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Licensed & Insured</h3>
                      <p className="text-muted-foreground">
                        All our plumbers are fully licensed, insured, and background-checked for your peace of mind.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Experienced Technicians</h3>
                      <p className="text-muted-foreground">
                        Our team has decades of combined experience solving complex plumbing problems across New Jersey.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Transparent Pricing</h3>
                      <p className="text-muted-foreground">
                        We provide upfront pricing with no hidden fees or surprise charges after the work is completed.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Satisfaction Guaranteed</h3>
                      <p className="text-muted-foreground">
                        We stand behind our work with a 100% satisfaction guarantee on all services we provide.
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic">
                    "R&M Plumbing & Heating saved the day when our water heater failed during a cold snap. They arrived
                    within an hour of our call and had a new unit installed the same day. Professional, courteous, and
                    fair pricing!"
                  </p>
                  <div className="font-medium">Sarah T. in Rutherford</div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic">
                    "We've used R&M Plumbing & Heating for several projects in our home, from fixing leaky faucets to a
                    complete bathroom remodel. Their team is always reliable, clean, and does exceptional work. Highly
                    recommend!"
                  </p>
                  <div className="font-medium">Michael R. in Lyndhurst</div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic">
                    "As a property manager, I need reliable contractors I can count on. R&M Plumbing & Heating has been
                    my go-to plumbing service for years. They're prompt, professional, and their work is always
                    top-notch."
                  </p>
                  <div className="font-medium">Jennifer L. in East Rutherford</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link href="/testimonials" className="text-blue-600 hover:underline">
                Read More Customer Reviews →
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Service Areas</h2>
              <p className="text-muted-foreground">
                We provide professional plumbing services throughout New Jersey, including these major areas:
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Newark",
                "Jersey City",
                "Paterson",
                "Elizabeth",
                "Trenton",
                "Camden",
                "Clifton",
                "Passaic",
                "East Orange",
                "Union City",
                "Hoboken",
                "West New York",
                "Bayonne",
                "Vineland",
                "New Brunswick",
                "Perth Amboy",
              ].map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Don't see your area listed? We likely serve your location too! Contact us to confirm.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to Solve Your Plumbing Problems?
              </h2>
              <p className="text-blue-100 mb-8">
                Whether it's a minor repair or a major installation, our team of licensed plumbers is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Schedule Service</Link>
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
