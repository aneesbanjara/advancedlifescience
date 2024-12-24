import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestUpdate from "@/components/home/LatestUpdate";
import Topics from "@/components/home/Topics";

export default function Home() {
  return (
    <div className="">
      <video preload="none" autoPlay muted loop>
        <source src="/videos/microscope.mp4" type="video/mp4" />
      </video>
      <LatestUpdate />
      {/* <Topics /> */}
      <FeaturedProducts />
    </div>
  );
}

{
  /* <Link
href="/"
className="flex justify-center items-center gap-8 no-underline text-[#ddd6cb] font-bold tracking-[0.15rem] uppercase font-['Montserrat',sans-serif]"
>
<Image
  src={logoImg}
  alt="A plate with food on it"
  className="w-[5rem] h-[5rem] object-contain drop-shadow-[0_0_0.75rem_rbga(0,0,0,0.5)]"
  priority
/>
NextLevel Food
</Link> */
}
