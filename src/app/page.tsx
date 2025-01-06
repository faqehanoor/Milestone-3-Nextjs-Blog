import Image from "next/image";
import Blog from '@/app/blog/page'
import ContactUs from "./contactus/page";
import Offer from "./Offer/page";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <Blog />
      <Offer />
    <ContactUs />
    </div>
  );
}
