import GallerySection from "./GallerySection"
import Image from "next/image"
const Page3 = () => {
  return (
    <div id="shows">
        <div style={{
            backgroundImage: 'url("images/gallery/performedatCU.jpg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%'
        }}>
           <div className="bg-transparent bg-opacity-50 py-16 px-4">
             <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-black text-2xl md:text-3xl font-bold mb-4">
                 Shows Near You!
               </h2>
               <p className="text-black font-bold text-sm md:text-base mb-8 max-w-2xl mx-auto">
                 Tour Date to be announced soon
               </p>
             </div>
           </div>
            <GallerySection/>
          
        </div>
    </div>
  )
}

export default Page3