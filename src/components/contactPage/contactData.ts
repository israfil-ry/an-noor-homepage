
import {
  Globe,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";

export interface ContactInformationItem {
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

export const contactInformation: ContactInformationItem[] = [
  {
    title: "Website",
    value: "AnNoor.app",
    href: "https://annoor.app",
    icon: Globe,
  },
  {
    title: "Email Address",
    value: "annoor@annoor.app",
    href: "mailto:annoor@annoor.app",
    icon: Mail,
  },
  {
    title: "Contact Number",
    value: "9452674223",
    href: "tel:9452674223",
    icon: Phone,
  },
];
