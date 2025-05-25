import VideoGallery from "@/components/VideoGallery"
import { videos } from "@/config/videos"

export default function FilmsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-playfair text-4xl md:text-6xl text-center mb-12">Films</h1>
        <VideoGallery videos={videos.featured} />
      </div>
    </div>
  )
}
