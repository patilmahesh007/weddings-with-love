'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { portfolioData } from '@/config/portfolios'

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(null)

  useEffect(() => {
    if (!audioSrc) return

    const audioElement = new Audio(audioSrc)
    audioElement.loop = false
    setAudio(audioElement)

    const playAudio = async () => {
      try {
        await audioElement.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    }

    playAudio()
    audioElement.addEventListener('ended', () => setIsPlaying(false))

    return () => {
      audioElement.pause()
      audioElement.removeEventListener('ended', () => {})
    }
  }, [audioSrc])

  const togglePlay = () => {
    if (!audio) return
    if (isPlaying) audio.pause()
    else audio.play()
    setIsPlaying(!isPlaying)
  }

  if (!audioSrc) return null

  return (
    <div className="flex items-center justify-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-stone-200/50">
      <button
        onClick={togglePlay}
        className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-all duration-300"
        aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
      >
        {isPlaying ? (
          <div className="flex space-x-1">
            <div className="w-1 h-4 bg-white" />
            <div className="w-1 h-4 bg-white" />
          </div>
        ) : (
          <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1" />
        )}
      </button>
      <div className="text-stone-700">
        <p className="text-sm font-medium">Ou tu ne m'attendais pas (feat. Christophe)</p>
        <p className="text-xs text-stone-500">Isabelle Adjani</p>
      </div>
    </div>
  )
}

export default function WeddingPortfolioPage() {
  const { slug } = useParams()
  const portfolio = portfolioData.portfolios.find((p) => p.slug === slug)

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-stone-800 mb-4">Wedding Not Found</h1>
          <p className="text-stone-600">The wedding portfolio you're looking for doesn’t exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

        .couple-name {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .elegant-text {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Couple Names */}
        <div className="text-center mb-16">
          <h1 className="couple-name text-6xl md:text-7xl text-stone-700 mb-4 tracking-wide">
            {portfolio.title}
          </h1>
          <div className="text-stone-600 elegant-text text-center">
            <p className="text-xl md:text-2xl font-medium mb-1">{portfolio.location}</p>
            <p className="text-lg md:text-xl font-light">{portfolio.weddingDate}</p>
          </div>
          <div className="text-stone-600 elegant-text text-lg max-w-md mx-auto mt-6">
            {Object.entries(portfolio.credits).map(([role, name]) => (
              <p key={role} className="leading-relaxed">
                <span className="font-medium capitalize">
                  {role === 'weddingPlanner'
                    ? 'Wedding Planned by'
                    : role === 'makeupArtist'
                    ? 'Makeup and Hair'
                    : role === 'stylist'
                    ? 'Stylist'
                    : role === 'bridalOutfit'
                    ? 'Bridal Outfit'
                    : role === 'creativeDirector'
                    ? 'Creative Director'
                    : role === 'production'
                    ? 'Production'
                    : role === 'flowers'
                    ? 'Flowers'
                    : role.replace(/([A-Z])/g, ' $1')}
                </span>{' '}
                <span className="underline cursor-pointer hover:text-stone-800 transition-colors">{name}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Audio Player */}
        <div className="flex justify-center mb-20">
          <AudioPlayer audioSrc={portfolio.audio} />
        </div>

        {/* Gallery (Structured Layout) */}
        {/* Gallery (Masonry-like layout) */}
<div className="columns-1 md:columns-2 gap-4 mb-16">
  {portfolio.images.map((img, index) => (
    <div key={index} className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md border border-stone-200">
      <img
        src={typeof img === 'string' ? img : img.src}
        alt={`Wedding photo ${index + 1}`}
        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  ))}
</div>

      </div>
    </div>
  )
}
