export const excludedGalleryImages = ["logo.webp", "host.webp", "og-image.webp", "favicon.webp"];

export const galleryAltKeys: Record<string, string> = {
  "08-winter-terrace.webp": "gallery.dining",
  "baño.webp": "gallery.bathroom",
  "bedroom.webp": "gallery.bedroom",
  "completo.webp": "gallery.panoramic",
  "fuengirola-beach.webp": "gallery.beach",
  "jardin.webp": "gallery.garden",
  "kitchen.webp": "gallery.kitchen",
  "living-room.webp": "gallery.living",
  "mijas-pueblo.webp": "gallery.mijas",
  "pool.webp": "gallery.pool",
  "sofa.webp": "gallery.sofa",
  "terrace.webp": "gallery.terrace"
};

export type GalleryImage = {
  id: string;
  src: string;
  filename: string;
  altKey?: string;
  fallbackAlt: string;
};
