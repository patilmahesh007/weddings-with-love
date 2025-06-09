import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react"

interface ContactSectionProps {
  data: {
    title: string
    subtitle: string
    email: string
    phone: string
    social: {
      instagram: string
      facebook: string
      twitter: string
    }
  }
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-light mb-4">{data.title}</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-amber-400" />
            <h3 className="font-medium mb-2">Email</h3>
            <a href={`mailto:${data.email}`} className="text-gray-300 hover:text-white transition-colors">
              {data.email}
            </a>
          </div>

          <div className="text-center">
            <Phone className="h-8 w-8 mx-auto mb-4 text-amber-400" />
            <h3 className="font-medium mb-2">Phone</h3>
            <a href={`tel:${data.phone}`} className="text-gray-300 hover:text-white transition-colors">
              {data.phone}
            </a>
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-4 mb-4">
              <a href={data.social.instagram} className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={data.social.facebook} className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={data.social.twitter} className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <h3 className="font-medium">Follow Us</h3>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
            <Link href="/contact">Contact Us</Link>
          </Button>

          <div className="mt-8 text-sm text-gray-400">
            © Copyright reserved by{" "}
            <a
              href="https://www.shrishtiwebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              ShrishtiWebSolutions.com
            </a>{" "}
            {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </section>
  )
}
