'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { portfolioData } from '@/config/portfolios'
import { FaPlay, FaPause } from 'react-icons/fa'

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

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
    const handleEnded = () => setIsPlaying(false)
    audioElement.addEventListener('ended', handleEnded)

    return () => {
      audioElement.pause()
      audioElement.removeEventListener('ended', handleEnded)
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
    <div className="fixed top-24 right-4 sm:right-10 z-50">
      <button
        onClick={togglePlay}
        className="bg-white/80 backdrop-blur rounded-full p-2 shadow hover:bg-white transition"
        aria-label={isPlaying ? 'Pause Audio' : 'Play Audio'}
      >
        {isPlaying ? (
          <FaPause className="text-stone-800" size={16} />
        ) : (
          <FaPlay className="text-stone-800" size={16} />
        )}
      </button>
    </div>
  )
}

export default function WeddingPortfolioPage() {
  const { slug } = useParams()
  const portfolio = portfolioData.portfolios.find((p) => p.slug === slug)

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-light text-stone-800 mb-2">
            Wedding Not Found
          </h1>
          <p className="text-stone-600 text-sm sm:text-base">
            The wedding portfolio you're looking for doesn’t exist.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 relative">
      {/* Global Styles */}
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

      {/* Audio Button */}
      <AudioPlayer audioSrc={portfolio.audio} />

      <div className="max-w-5xl mx-auto px-4 py-16 sm:py-20">
        {/* Couple Info */}
        {/* <div className="text-center mb-12 sm:mb-16">
          <h1 className="couple-name text-4xl sm:text-5xl text-stone-700 mb-2 tracking-wide">
            {portfolio.title}
          </h1>
          <div className="text-stone-600 elegant-text text-sm sm:text-lg">
            <p className="font-medium">{portfolio.location}</p>
            <p className="font-light">{portfolio.weddingDate}</p>
          </div>
        </div> */}

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolio.images.map((img, index) => {
            const src = typeof img === 'string' ? img : img.src
            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow border border-stone-200"
              >
                <Image
                  src={src}
                  alt={`Wedding photo ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  priority={index < 2}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>
            )
          })}
        </div>

        {/* Credits (Optional) */}
        {/* {portfolio.credits && (
          <div className="mt-12 text-stone-600 elegant-text text-sm sm:text-base max-w-2xl mx-auto">
            {Object.entries(portfolio.credits).map(([role, name]) => (
              <p key={role} className="leading-relaxed mb-1">
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
                <span className="underline cursor-pointer hover:text-stone-800 transition-colors">
                  {name}
                </span>
              </p>
            ))}
          </div>
        )} */}
      </div>
    </div>
  )
}
