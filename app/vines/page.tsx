import Gallery from "@/components/Gallery"
import { images } from "@/config/images"

export default function VinesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-playfair text-4xl md:text-6xl text-center mb-12">Vines</h1>
        <Gallery images={images.vines.gallery} />
      </div>
    </div>
  )
}
