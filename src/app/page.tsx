import { FancyAccordion } from "./components/fancy-accordion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-24">
      <FancyAccordion title="Accordion Title" />
    </main>
  );
}
