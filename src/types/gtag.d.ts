type GtagCommand = "config" | "event" | "js" | "consent";

interface Window {
  dataLayer?: unknown[];
  gtag?: (command: GtagCommand, target: string | Date, config?: Record<string, unknown>) => void;
}
