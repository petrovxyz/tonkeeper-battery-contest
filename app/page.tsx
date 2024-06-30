import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";
import Use from "@/components/Use";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Use />
        <Steps />
        <Footer />
      </div>
    </main>
  );
}
