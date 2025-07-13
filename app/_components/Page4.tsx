import GallerySection from "./GallerySection"
import PressSection from "./Press"

const Page3 = () => {
  return (
    <div>
        <div style={{
            backgroundImage: 'url("https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/eb22f6c87054b0401740963d8ec89a5797d701bd/original/img-4839-1.jpg/!!/b%3AW1sicmVzaXplIiwzMjAwXSxbIm1heCJdLFsid2UiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%'
        }}>
           <div className="bg-transparent bg-opacity-50 py-16 px-4">
             <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                 Shows Near You!
               </h2>
               <p className="text-white text-sm md:text-base mb-8 max-w-2xl mx-auto">
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