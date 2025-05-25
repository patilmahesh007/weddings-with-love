import Gallery from "@/components/Gallery"
import { images } from "@/config/images"

export default function PhotographyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-playfair text-4xl md:text-6xl text-center mb-12">Photography</h1>
        <Gallery images={images.photography.gallery} />
      </div>
    </div>
  )
}
