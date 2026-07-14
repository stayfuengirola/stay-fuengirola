export const excludedGalleryImages = ["logo.webp", "host.webp", "og-image.webp", "favicon.webp"];

export const galleryAltKeys: Record<string, string> = {
  "bedroom.webp": "gallery.bedroom",
  "closing-view.webp": "gallery.terrace",
  "fuengirola-beach.webp": "gallery.beach",
  "kitchen.webp": "gallery.kitchen",
  "living-room.webp": "gallery.living",
  "mijas-pueblo.webp": "gallery.mijas",
  "terrace.webp": "gallery.terrace"
};

export type GalleryImage = {
  id: string;
  src: string;
  filename: string;
  altKey?: string;
  fallbackAlt: string;
};
