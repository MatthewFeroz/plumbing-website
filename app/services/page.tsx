import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Wrench,
  ShowerHead,
  Droplet,
  Hammer,
  MapPin,
  Clock,
  CheckCircle2,
  Home,
  Building2,
  Factory,
  PhoneCall,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Our Plumbing Services</h1>
              <p className="text-xl text-blue-100">
                Comprehensive plumbing solutions for residential and commercial properties throughout New Jersey.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Tabs defaultValue="residential" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="residential" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span className="hidden sm:inline">Residential</span>
                  </TabsTrigger>
                  <TabsTrigger value="commercial" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Commercial</span>
                  </TabsTrigger>
                  <TabsTrigger value="industrial" className="flex items-center gap-2">
                    <Factory className="h-4 w-4" />
                    <span className="hidden sm:inline">Industrial</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="residential">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Residential Plumbing Services</h2>
                  <p className="text-muted-foreground">
                    From routine maintenance to emergency repairs, we provide comprehensive plumbing services for
                    homeowners throughout New Jersey.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <Card id="repairs">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <Wrench className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Repairs & Maintenance</CardTitle>
                      <CardDescription>Fixing common household plumbing issues</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Leaky faucets and fixtures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Clogged drains and toilets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Running toilets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Pipe repairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Preventative maintenance</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact">Schedule Service</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card id="bathroom">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <ShowerHead className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Bathroom Remodeling</CardTitle>
                      <CardDescription>Upgrading your bathroom fixtures and plumbing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Shower and tub installation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Toilet installation and upgrades</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Sink and vanity installation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Bathroom fixture upgrades</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Complete bathroom remodels</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact">Get a Quote</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card id="water-heaters">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <Droplet className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Water Heater Services</CardTitle>
                      <CardDescription>Installation, repair, and maintenance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Traditional water heater repair</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Tankless water heater installation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Water heater maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Energy-efficient upgrades</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Water heater replacement</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact">Schedule Service</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-blue-600"
                        >
                          <path d="M8 10a3.5 3.5 0 0 0 7 0" />
                          <path d="M8 14a3.5 3.5 0 0 0 7 0" />
                          <path d="M8 18a3.5 3.5 0 0 0 7 0" />
                          <path d="M17 18a3.5 3.5 0 0 0 7 0" />
                          <path d="M17 14a3.5 3.5 0 0 0 7 0" />
                          <path d="M17 10a3.5 3.5 0 0 0 7 0" />
                          <path d="M2 8h20" />
                          <path d="M2 14h20" />
                          <path d="M2 20h20" />
                          <path d="M2 2h20" />
                        </svg>
                      </div>
                      <CardTitle>Heating Services</CardTitle>
                      <CardDescription>Installation, repair, and maintenance of heating systems</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Furnace installation and repair</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Boiler services</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Heating system maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Radiator repairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Heating efficiency upgrades</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact">Schedule Service</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card id="installations">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <Hammer className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>New Installations</CardTitle>
                      <CardDescription>Installing new plumbing fixtures and systems</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Faucet and fixture installation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Garbage disposal installation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Dishwasher installation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Water filtration systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>New construction plumbing</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact">Get a Quote</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card id="sewer-drain">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Sewer & Drain Services</CardTitle>
                      <CardDescription>Keeping your drains flowing smoothly</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Drain cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Sewer line repair</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Sewer camera inspection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Hydro jetting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Trenchless sewer repair</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact">Schedule Service</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card id="emergency">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Emergency Services</CardTitle>
                      <CardDescription>24/7 response for urgent plumbing issues</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Burst pipe repair</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Major water leaks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Sewer backups</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>No hot water emergencies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>24/7 emergency response</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="tel:+12015222834">Call Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="commercial">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Commercial Plumbing Services</h2>
                  <p className="text-muted-foreground">
                    Specialized plumbing solutions for businesses, offices, retail spaces, and multi-unit properties.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Wrench className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Commercial Repairs & Maintenance</h3>
                      <p className="text-muted-foreground">
                        We provide prompt, reliable repair and maintenance services for commercial properties,
                        minimizing downtime and disruption to your business operations.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Fixture repairs and replacements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Commercial drain cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Preventative maintenance programs</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Droplet className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Commercial Water Systems</h3>
                      <p className="text-muted-foreground">
                        We install and maintain commercial water heaters, boilers, and water treatment systems for
                        businesses of all sizes.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Commercial water heater installation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Boiler repair and maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Water filtration systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Commercial Sewer & Drain</h3>
                      <p className="text-muted-foreground">
                        Our specialized equipment and expertise allow us to handle even the most challenging commercial
                        drain and sewer issues.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>High-pressure hydro jetting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Video camera inspections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Commercial sewer line repair</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Hammer className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Commercial Installations</h3>
                      <p className="text-muted-foreground">
                        From new construction to renovations, we provide expert installation services for commercial
                        plumbing systems.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Commercial bathroom installations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Kitchen and food service plumbing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>ADA-compliant fixture installation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Industries We Serve</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      "Restaurants & Food Service",
                      "Office Buildings",
                      "Retail Spaces",
                      "Hotels & Hospitality",
                      "Healthcare Facilities",
                      "Educational Institutions",
                      "Multi-Unit Housing",
                      "Industrial Facilities",
                    ].map((industry) => (
                      <div key={industry} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span>{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="industrial">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industrial Plumbing Services</h2>
                  <p className="text-muted-foreground">
                    Heavy-duty plumbing solutions for manufacturing facilities, warehouses, and industrial complexes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Wrench className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2">Industrial Piping Systems</h3>
                          <p className="text-muted-foreground">
                            We design, install, and maintain industrial-grade piping systems for various applications.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>High-pressure piping systems</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Chemical-resistant piping</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Process piping installation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Droplet className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2">Water Treatment Systems</h3>
                          <p className="text-muted-foreground">
                            Custom water treatment solutions for industrial applications and processes.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Industrial water filtration</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Wastewater management systems</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Water recycling solutions</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Hammer className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2">Equipment Installation</h3>
                          <p className="text-muted-foreground">
                            Expert installation of industrial plumbing equipment and machinery.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Pump installation and repair</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Boiler and water heater systems</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Backflow prevention devices</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2">Maintenance Programs</h3>
                          <p className="text-muted-foreground">
                            Preventative maintenance plans to minimize downtime and ensure operational efficiency.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Scheduled maintenance visits</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>System inspections and testing</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>24/7 emergency response</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Industrial Compliance</h3>
                  <p className="mb-4">
                    Our industrial plumbing services comply with all relevant regulations and standards, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "OSHA safety standards",
                      "EPA environmental regulations",
                      "Local building codes",
                      "Industry-specific requirements",
                    ].map((standard) => (
                      <div key={standard} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span>{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Service Process</h2>
              <p className="text-muted-foreground">
                We follow a streamlined process to ensure efficient, high-quality service for every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Contact Us</h3>
                <p className="text-muted-foreground">
                  Reach out via phone, email, or our online form to describe your plumbing needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Consultation</h3>
                <p className="text-muted-foreground">
                  We'll discuss your needs, schedule an on-site assessment if necessary, and provide a detailed quote.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Service Delivery</h3>
                <p className="text-muted-foreground">
                  Our licensed plumbers will arrive on time and complete the work efficiently and professionally.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Follow-Up</h3>
                <p className="text-muted-foreground">
                  We'll ensure you're completely satisfied with our work and provide any necessary maintenance advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Transparent Pricing</h2>
              <p className="text-muted-foreground">
                We believe in honest, upfront pricing with no hidden fees or surprise charges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Service Call</CardTitle>
                  <div className="text-3xl font-bold">$89</div>
                  <CardDescription>Diagnostic fee applied to repairs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Professional diagnosis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Upfront repair quote</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Expert recommendations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Schedule Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle>Maintenance Plan</CardTitle>
                  <div className="text-3xl font-bold">$199/year</div>
                  <CardDescription>Our most popular option</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Annual plumbing inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Priority scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>10% discount on all services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>No service call fees</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Sign Up</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Commercial Services</CardTitle>
                  <div className="text-3xl font-bold">Custom</div>
                  <CardDescription>Tailored to your business needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Customized maintenance plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>24/7 emergency support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Need a quote for a specific service? Contact us for a detailed estimate tailored to your needs.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us for a Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Find answers to common questions about our plumbing services.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "Are your plumbers licensed and insured?",
                  answer:
                    "Yes, all our plumbers are fully licensed by the state of New Jersey and are covered by comprehensive insurance, including liability and workers' compensation.",
                },
                {
                  question: "Do you offer emergency plumbing services?",
                  answer:
                    "Yes, we provide 24/7 emergency plumbing services throughout New Jersey. Our emergency response team is available nights, weekends, and holidays to address urgent plumbing issues.",
                },
                {
                  question: "How do you determine your pricing?",
                  answer:
                    "We provide upfront, transparent pricing based on the scope of work required. For most services, we can provide a quote before beginning work. For more complex jobs, we may need to perform a diagnostic assessment first.",
                },
                {
                  question: "Do you offer warranties on your work?",
                  answer:
                    "Yes, we stand behind our work with a 100% satisfaction guarantee. We offer a 1-year warranty on most repairs and up to 5-year warranties on new installations, depending on the manufacturer's warranty.",
                },
                {
                  question: "How quickly can you respond to service requests?",
                  answer:
                    "For emergency situations, we typically respond within 1-2 hours. For non-emergency service requests, we can usually schedule an appointment within 24-48 hours, often same-day service depending on our schedule and your location.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/faq" className="text-blue-600 hover:underline">
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Schedule Your Service?</h2>
              <p className="text-blue-100 mb-8">
                Contact R&M Plumbing & Heating today to schedule a service appointment or request a free estimate for
                your plumbing project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Schedule Service</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="tel:+12015222834">
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
