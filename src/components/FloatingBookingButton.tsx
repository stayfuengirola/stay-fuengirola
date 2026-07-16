import { ArrowUpRight } from "lucide-react";
import { bookingUrl } from "@/config/booking";

export function FloatingBookingButton({ label }: { label: string }) {
  return (
    <a className="booking-float" href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <span>{label}</span>
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}
