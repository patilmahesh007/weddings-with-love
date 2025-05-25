import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl text-center mb-12">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
