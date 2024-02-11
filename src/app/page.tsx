import Image from "next/image";
import Hero from "./components/Hero";
import Product from "./components/Products"
export default function Home() {
  return (
    <main className="">
       <div className="banner">
        <Hero src="/image-banner-1.webp" width={1920} height={420}  alt="Banner Image" />
       </div>
       <div className="rich-text">
         <div className="container mx-auto p-3 text-center">
           <span>FIRST PURCHASE OFFER: TAKE 30% OFF SHOPWIDE.</span> CODE APPLIED AT CHECKOUT*
         </div>
       </div>
       <div className="adbaner">
        <Hero src="/image-banner-2.webp" width={1920} height={420}  alt="Banner Image" />
       </div> 
       <div className="mt-5 mb-5">
        <Product />        
      </div>      
    </main>
    
  );
}
