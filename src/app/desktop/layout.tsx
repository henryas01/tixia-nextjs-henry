import "server-only";
import { PropsWithChildren } from "react";
import LayoutComponent from "./LayoutComponent";
import Navbar from "@app/src/components/Navbar";
import Footer from "@app/src/components/Footer";

export default async function DesktopMainLayout({
  children,
}: PropsWithChildren) {
  return (
    <section className="desktop-section">
      <Navbar />
      <LayoutComponent>{children}</LayoutComponent>
      <Footer />
    </section>
  );
}
