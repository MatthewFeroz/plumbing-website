"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { PhoneCall, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    urgency: "standard",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleRadioChange = (value) => {
    setFormState((prev) => ({ ...prev, urgency: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log(formState)
    toast({
      title: "Form submitted",
      description: "We'll get back to you as soon as possible!",
    })
    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      urgency: "standard",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Contact Us</h1>
              <p className="text-xl text-blue-100">
                Get in touch with our team for all your plumbing needs. We're here to help!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have a plumbing emergency or need to schedule a service? Our team is ready to assist you. Fill out the
                  form or contact us directly using the information below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <PhoneCall className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground mb-1">Call us for immediate assistance</p>
                      <Link href="tel:+18005551234" className="text-blue-600 hover:underline">
                        201-522-2834
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground mb-1">Send us an email anytime</p>
                      <Link href="mailto:info@njplumbingpros.com" className="text-blue-600 hover:underline">
                        info@randmplumbingheating.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office Location</h3>
                      <p className="text-muted-foreground mb-1">Visit our main office</p>
                      <address className="not-italic">
                        147 Sylvan St
                        <br />
                        Rutherford, NJ 07070
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground mb-1">When we're available</p>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>7:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>8:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed (Emergency Only)</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Emergency Service:</span>
                          <span>24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Request Service</CardTitle>
                    <CardDescription>Fill out the form below to schedule a service or request a quote.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formState.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Service Address</Label>
                        <Input
                          id="address"
                          name="address"
                          placeholder="123 Main St, Newark, NJ"
                          value={formState.address}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Select value={formState.service} onValueChange={handleSelectChange} required>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="repairs">Repairs & Maintenance</SelectItem>
                            <SelectItem value="bathroom">Bathroom Remodeling</SelectItem>
                            <SelectItem value="water-heater">Water Heater Services</SelectItem>
                            <SelectItem value="heating">Heating Services</SelectItem>
                            <SelectItem value="installations">New Installations</SelectItem>
                            <SelectItem value="sewer-drain">Sewer & Drain Services</SelectItem>
                            <SelectItem value="emergency">Emergency Service</SelectItem>
                            <SelectItem value="other">Other (Please specify)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Service Urgency</Label>
                        <RadioGroup
                          value={formState.urgency}
                          onValueChange={handleRadioChange}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="emergency" id="emergency" />
                            <Label htmlFor="emergency" className="font-normal">
                              Emergency (Need service ASAP)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="urgent" id="urgent" />
                            <Label htmlFor="urgent" className="font-normal">
                              Urgent (Within 24 hours)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="standard" id="standard" />
                            <Label htmlFor="standard" className="font-normal">
                              Standard (Schedule in the next few days)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="flexible" id="flexible" />
                            <Label htmlFor="flexible" className="font-normal">
                              Flexible (Just getting a quote)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Please provide details about your plumbing issue or project..."
                          rows={4}
                          value={formState.message}
                          onChange={handleChange}
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Map */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Service Areas</h2>
              <p className="text-muted-foreground">
                We provide professional plumbing services throughout New Jersey, with quick response times to these
                areas:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square md:aspect-auto relative h-[400px] rounded-lg overflow-hidden">
                {/* This would be replaced with an actual map in a real implementation */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive Map Would Be Here</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">Counties We Serve</h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {[
                    "Bergen County",
                    "Essex County",
                    "Hudson County",
                    "Middlesex County",
                    "Morris County",
                    "Passaic County",
                    "Somerset County",
                    "Union County",
                    "Monmouth County",
                    "Ocean County",
                    "Mercer County",
                    "Burlington County",
                  ].map((county) => (
                    <div key={county} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>{county}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-muted-foreground">
                  Don't see your area listed? Contact us to confirm service availability in your location.
                </p>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="tel:+18005551234">Call to Confirm Service Area</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
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
                  <div className="font-medium">Sarah T. in Montclair</div>
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
                  <div className="font-medium">Michael R. in Princeton</div>
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
                  <div className="font-medium">Jennifer L. in Hoboken</div>
                </CardContent>
              </Card>
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
                  <Link href="tel:+18005551234">
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
