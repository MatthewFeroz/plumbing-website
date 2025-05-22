import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Users, Clock, ShieldCheck, Wrench } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                About R&M Plumbing & Heating
              </h1>
              <p className="text-xl text-blue-100">
                New Jersey's trusted plumbing experts with over 20 years of experience serving residential and
                commercial clients.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Story</h2>
                <div className="space-y-4">
                  <p>
                    Founded in 2005, R&M Plumbing & Heating began as a small family-owned business with a simple
                    mission: to provide honest, reliable plumbing and heating services to the communities of New Jersey.
                    What started with a single truck and a handful of loyal customers has grown into one of the region's
                    most trusted plumbing and heating companies.
                  </p>
                  <p>
                    Our founder, Ed Feroz, began his career as an apprentice plumber and worked his way up through
                    the industry. After years of working for other companies, he recognized a need for a plumbing
                    service that prioritized customer satisfaction, transparent pricing, and quality workmanship above
                    all else.
                  </p>
                  <p>
                    Today, R&M Plumbing & Heating serves thousands of customers across New Jersey. While we've grown
                    considerably, we've never lost sight of our core values and commitment to treating every
                    customer's home or business as if it were our own.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200">Family Owned</Badge>
                  <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200">
                    20+ Years Experience
                  </Badge>
                  <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200">NJ Licensed</Badge>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="RM Plumbing & Heating team"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Values</h2>
              <p className="text-muted-foreground">
                These principles guide everything we do, from how we train our team to how we interact with our
                customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Integrity</h3>
                  <p className="text-muted-foreground">
                    We believe in honest communication, transparent pricing, and always doing what's right for our
                    customers, even when it's not the most profitable option.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    We're committed to delivering the highest quality workmanship on every job, no matter how big or
                    small. Our team undergoes continuous training to stay at the forefront of industry best practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Community</h3>
                  <p className="text-muted-foreground">
                    As a local New Jersey business, we're deeply invested in the communities we serve. We actively
                    participate in community events and support local charities throughout the state.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet Our Leadership Team</h2>
              <p className="text-muted-foreground">
                Our experienced leadership team brings decades of plumbing expertise and business excellence to every
                project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Mike Johnson" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-medium">Mike Johnson</h3>
                <p className="text-blue-600 mb-2">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Master plumber with over 30 years of experience in residential and commercial plumbing.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Sarah Martinez"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Sarah Martinez</h3>
                <p className="text-blue-600 mb-2">Operations Director</p>
                <p className="text-sm text-muted-foreground">
                  Manages our day-to-day operations and ensures every customer receives exceptional service.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=200&width=200" alt="David Chen" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-medium">David Chen</h3>
                <p className="text-blue-600 mb-2">Technical Director</p>
                <p className="text-sm text-muted-foreground">
                  Oversees our technical team and ensures we stay current with the latest plumbing technologies and
                  techniques.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/team" className="text-blue-600 hover:underline">
                Meet Our Full Team →
              </Link>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Credentials</h2>
              <p className="text-muted-foreground">
                We maintain the highest standards of professionalism and expertise in the plumbing industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Licensed & Insured</h3>
                  <p className="text-muted-foreground">
                    All our plumbers are fully licensed by the state of New Jersey. We maintain comprehensive insurance
                    coverage, including liability and workers' compensation, for your protection and peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Industry Certifications</h3>
                  <p className="text-muted-foreground">
                    Our team holds certifications from leading industry organizations, including the
                    Plumbing-Heating-Cooling Contractors Association (PHCC) and the National Association of
                    Plumbing-Heating-Cooling Contractors.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Ongoing Training</h3>
                  <p className="text-muted-foreground">
                    We invest in continuous education for our team to stay current with the latest plumbing
                    technologies, techniques, and safety protocols. This ensures we deliver the most effective solutions
                    for your plumbing needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    With over 20 years in business and thousands of satisfied customers, our experience speaks for
                    itself. We've built our reputation on reliability, quality workmanship, and exceptional customer
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Community involvement"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Community Involvement</h2>
                <div className="space-y-4">
                  <p>
                    At R&M Plumbing & Heating, we believe in giving back to the communities that have supported our
                    business over the years. We're proud to be active participants in various community initiatives
                    throughout New Jersey.
                  </p>
                  <p>
                    Our team regularly volunteers with Habitat for Humanity, providing plumbing services for new homes
                    built for families in need. We also partner with local vocational schools to offer apprenticeship
                    opportunities for students interested in pursuing careers in the plumbing industry.
                  </p>
                  <p>
                    Additionally, we support various local charities and community organizations, including food banks,
                    youth sports teams, and environmental cleanup efforts. We believe that strong communities make for a
                    stronger New Jersey, and we're committed to doing our part.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/community">Learn About Our Community Efforts</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-blue-100 mb-8">
                Contact R&M Plumbing & Heating today to schedule a service appointment or request a free estimate for
                your plumbing project. Call us at 201-522-2834.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
