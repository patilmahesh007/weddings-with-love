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
        image: "https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749372524/MORU4874_payg8a.jpg",
        slug: "Aachal-and-Vedant",
      },
      {
        id: "2",
        title: "Ayush & Meera",
        category: "Sep 15, 2024",
        image: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1728985824718-ASSAMHEN4GRU7U6EE26K/AYUS2602+last.jpg?format=1000w",
        slug: "ayush-and-meera",
      },
      {
        id: "3",
        title: "Aisha & Kabir",
        category: "May 19, 2024",
        image: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1670478908751-2XMF94Y8YGB1BMS4VIIP/SHOW647.JPG?format=750w",
        slug: "aisha-and-kabir",
      },
      {
        id: "4",
        title: "Sana & Arjun",
        category: "Jan 2, 2024",
        image: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1713905479101-NIWTKQZ1SS3GP47ZYF0Y/001+copy+2.jpg?format=750w",
        slug: "sana-and-arjun",
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
                <h3 className="font-playfair text-lg font-medium mb-1">{portfolio.title}</h3>
                <p className="text-sm text-gray-600">{portfolio.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/photography">Photography Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
