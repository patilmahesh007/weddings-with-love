'use client';

import Image from 'next/image';


const images = [
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg?format=500w',
];

export default function WeddingGallery() {
  return (
    <div className="p-4 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold italic">
          some of the most <span className="text-black">“ICONIC”</span> wedding images
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-[4/3]">
            <Image
              src={src}
              alt={`Wedding image ${index + 1}`}
              fill
              className="object-cover rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
