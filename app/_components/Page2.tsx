import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { archivo, dafoe } from '../lib/fonts';
import Image from 'next/image';
export default function BeccaBartlettPage() {

  return (
    <div className="bg-black min-h-screen lg:h-5/6 flex flex-col lg:flex-row" >
      <div className="w-full lg:w-1/2 relative order-1 lg:order-1">
         <Image 
          src="/images/artist/shudhita_home2.jpeg"
          alt="Shudhita"
          width={800}
          height={600}
          className="w-full h-64 sm:h-80 md:h-96 lg:w-5/6 lg:h-5/6 object-cover mx-auto lg:mt-10"
          quality={90}
        />
      </div>

      <div className="w-full lg:w-1/2 bg-black text-white p-4 sm:p-6 lg:p-5 flex flex-col justify-center relative order-2 lg:order-2">
        <div className={`max-w-full lg:max-w-2lg font-semibold ${archivo.className}`}>
          <p className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg">
            Shudhita is a passionate and versatile singer whose soul-stirring voice has been capturing hearts across genres and platforms. Seamlessly weaving house, folk, Punjabi, and spiritual music, her performances carry a rare depth and emotional resonance that linger with listeners long after the music stops.

With an impressive and diverse discography, Shudhita has collaborated with  <span className='text-red-800'>renowned producers IKKY on two widely loved club hits in the house music scene.</span>  Her vocal presence has also graced the Punjabi film industry, lending her voice to <span className='text-red-800'>“Painter” </span> in a powerful duet with the legendary <span className='text-red-800'>Kamal Khan </span>, as well as an English track featured in the film <span className='text-red-800'> “Jalwayu Enclave.”</span>
          </p>

          <p className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg">
           A prolific duet artist, Shudhita has worked with acclaimed names such as <span className='text-red-800'>NIKK, Sunny Kahlon, and Balvir Boparai, with tracks like “Achi Hai” and “De Lai Geda” </span>garnering millions of streams and views. Her original releases like <span className='text-red-800'>“Rabb Manneya,” “Baarish,” “Tum,”</span> and the recent favorite <span className='text-red-800'>“Nazraan”</span> showcase her ability to craft melodies that are both deeply personal and widely relatable.
          </p>

          <p className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg">
          Beyond mainstream music, Shudhita brings her devotion to life through spiritual compositions such as <span className='text-red-800'>“Guru Charna Vich Ho Arpan,” “Kar Tera Deedar,” and “Antallah,”</span> the latter of which she composed and performed in Arabic. Her rendition of the Mool Mantar and the deeply moving shabad dedicated to the Chaar Sahibzaade reflect her spiritual grounding and artistic sincerity.
          </p>

          <p className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg">
          Shudhita has also contributed her voice to impactful causes through the <span className='text-red-800'>Sant Nirankari Charitable Foundation </span>, including the anthem <span className='text-red-800'>“Swach Jal Swach Mann”</span> under Project Amrit, and songs dedicated to World Environment Day and the Oneness Vann initiative.

You can explore her growing musical journey on all major streaming platforms and social media. With every performance, Shudhita invites listeners into a world of melody, meaning, and profound connection. ‎

          </p>

        </div>

       
      </div>
    </div>
  );
}