import PressSection from "./Press"

const Page3 = () => {
  return (
    <div>
        <div style={{
            backgroundImage: 'url("https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/8b3613a199b530fa1899f2684d84b59efe5527c6/original/istockphoto-1283536454-612x612.jpg/!!/b%3AW1sicmVzaXplIiwzMjAwXSxbIm1heCJdLFsid2UiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100%'
        }}>
           <div className="bg-transparent bg-opacity-70 py-16 px-4">
             <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                 Join my mailing list to keep up to date!
               </h2>
               <p className="text-white text-sm md:text-base mb-8 max-w-2xl mx-auto">
                 No spam, I promise! Just an opportunity to join the inner circle, and be the first to know about new music, shows and exclusive offers.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                 <input
                   type="email"
                   placeholder="Your email"
                   className="w-full bg-white sm:flex-1 px-4 py-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                 />
                 <button className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300 rounded-md font-semibold">
                   SIGN UP
                 </button>
               </div>
             </div>
           </div>

           <PressSection/>
        </div>
    </div>
  )
}

export default Page3