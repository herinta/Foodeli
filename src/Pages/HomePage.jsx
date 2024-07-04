import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import Services from "../Components/Services";

export default function HomePage() {
  return (
   <>
       <Nav/>
       <Hero/>
       <div className="">
          <Services/>
       </div>
       
       
   </>
    
  )
}
