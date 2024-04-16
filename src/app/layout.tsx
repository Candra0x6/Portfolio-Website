import { ReactNode } from "react";

function LandingPage({ children }: { children: ReactNode }) {
  return (
    <main className="bg-[#1B1B1B] relative overflow-hidden">
      <div className="container mx-auto px-2">{children}</div>
    </main>
  );
}

export default LandingPage;
