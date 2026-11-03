import { Navbar } from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">{children}</main>
      <Footer />
    </div>
  );
}

