import Hero from "@/components/hero";
import Blog from "./blog/page";
import Destination from "@/components/destination";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Destination/>
      <Blog/>
      <Banner/>
    </div>
  )
}