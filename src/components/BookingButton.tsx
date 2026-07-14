import { ArrowUpRight } from "lucide-react";
import { bookingUrl } from "@/config/booking";

export function BookingButton({ label, className = "cta" }: { label: string; className?: string }) {
  return (
    <a className={className} href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {label}
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}
