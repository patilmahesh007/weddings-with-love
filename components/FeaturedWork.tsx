import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FeaturedWork() {
  const data = {
    title: "Featured Weddings",
    subtitle: "A glimpse into some beautiful love stories I've been honored to capture.",
    portfolios: [
      {
        id: "1",
        title: "Aachal & Vedant",
        category: "Oct 7, 2024",
        image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749402574/MORU4874_pmk0au.jpg",
        slug: "Aachal-and-Vedant",
      },
      {
        id: "2",
        title: "Sakshi & Arjun",
        category: "Sep 15, 2024",
        image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749414064/GKP_6885_iscjod.jpg",
        slug: "Sakshi-and-Arjun",
      },
      {
        id: "3",
        title: "Sakshi & Ishaan",
        category: "May 19, 2024",
        image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749414011/ADTY7033_h59pid.jpg",
        slug: "Sakshi-and-Ishaan",
      },
      {
        id: "4",
        title: "Atharva & Krisha",
        category: "Jan 2, 2024",
        image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749414031/YCM_4228_bdm556.jpg",
        slug: "Atharva-and-Krisha",
      },
    ],
  };

  return (
    <section className="py-20 bg-[#fdf5ec]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-light mb-4">{data.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{data.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mb-12">
          {data.portfolios.map((portfolio) => (
            <Link
              key={portfolio.id}
              href={`/portfolio/${portfolio.slug}`}
              className="group w-full sm:w-[48%] lg:w-[22%]">
              <div className="relative h-[400px] overflow-hidden rounded-lg mb-4">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="text-left px-2">
                <h3 className="text-lg font-medium mb-1">{portfolio.title}</h3>
                {/* <p className="text-sm text-gray-600">{portfolio.category}</p> */}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">View Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
