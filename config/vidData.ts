// config/vidData.ts

export interface VideoItem {
  id: number;
  title: string;
  subtitle: string;
  location?: string;
  thumbnail: string;
  videoUrl: string;
}

export const videoData: VideoItem[] = [
  {
    id: 1,
    title: "TAMANNA&DAN",
    subtitle: "HOUSE ON THE CLOUDS",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    videoUrl:
      "https://res.cloudinary.com/dtrrsp1ll/video/upload/v1748237060/r8wnchcskyfocqv5f0pt.mp4",
  },
  {
    id: 2,
    title: "ALISHA&RAHUL",
    subtitle: "Amalfi Coast, Italy",
    location: "HOUSE ON THE CLOUDS",
    thumbnail:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop",
    videoUrl:
      "https://res.cloudinary.com/dtrrsp1ll/video/upload/v1748237060/r8wnchcskyfocqv5f0pt.mp4",
  },
  {
    id: 3,
    title: "SID SALONI",
    subtitle: "Trailer // Bangkok",
    location: "House on the Clouds",
    thumbnail:
      "https://images.unsplash.com/photo-1516475080664-ed2fc6a32937?w=800&h=600&fit=crop",
    videoUrl:
      "https://res.cloudinary.com/dtrrsp1ll/video/upload/v1748237060/r8wnchcskyfocqv5f0pt.mp4",
  },
  {
    id: 4,
    title: "ZINA&ZAIN",
    subtitle: "",
    location: "HOUSE ON THE CLOUDS",
    thumbnail:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
    videoUrl:
      "https://res.cloudinary.com/dtrrsp1ll/video/upload/v1748237060/r8wnchcskyfocqv5f0pt.mp4",
  },
];
