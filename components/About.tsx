import Image from "next/image"

interface AboutProps {
  data: {
    title: string
    subtitle: string
    description: string[]
    leftImage: string
    rightImage: string
  }
}

export default function About({ data }: AboutProps) {
  return (
    <section className="py-16 md:py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header - positioned higher and more centered */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-wider text-gray-900">
              𝓌𝑒𝓇𝑒 𝑀𝑜𝒹𝑒𝓇𝓃 𝒜𝓈𝓉𝒽𝑒𝓉𝒾𝒸𝓈        </h2>
            <p className="font-playfair text-xl md:text-2xl lg:text-3xl xl:text-3xl font-light italic mt-1 tracking-wider text-gray-900">
              𝔪𝔢𝔢𝔱𝔰  𝒯𝒾𝓂𝑒𝓁𝑒𝓈𝓈 𝒯𝓇𝒶𝒹𝒾𝓉𝒾𝑜𝓃𝓈
            </p>
          </div>

          {/* Main content layout - adjusted positioning */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Image - positioned slightly higher */}
              <div className="lg:col-span-4 lg:col-start-1" style={{ marginTop: "50px" }}>
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                  <Image
                    src={data.leftImage || "/placeholder.svg"}
                    alt="Bride in traditional attire"
                    fill
                    className="object-cover object-center"
                    quality={95}
                  />
                </div>
              </div>

              {/* Center Text Content - better vertical centering */}
              <div className="lg:col-span-4 lg:col-start-5 flex items-center">
                <div className="w-full px-4 lg:px-2 xl:px-8 py-8 lg:py-12">
                  <div className="space-y-5 md:space-y-6">
                    {data.description.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed font-normal tracking-wide text-justify"
                        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Image - positioned slightly lower to match reference */}
              <div className="lg:col-span-4 lg:col-start-9" style={{ marginTop: "-100px" }}>
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                  <Image
                    src={data.rightImage || "/placeholder.svg"}
                    alt="Bride in wedding dress at heritage location"
                    fill
                    className="object-cover object-center"
                    quality={95}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
