import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { archivo } from '../layout';

export default function BeccaBartlettPage() {

  return (
    <div className="bg-black min-h-screen lg:h-5/6 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative order-1 lg:order-1">
        <img 
          src="https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/44598e78edc5a7ad20de8533ec90146c6ecbc88e/original/dsf9681-1.jpg/!!/b%3AW1siZXh0cmFjdCIseyJsZWZ0IjowLCJ0b3AiOjMwMiwid2lkdGgiOjIzODQsImhlaWdodCI6MjM4NH1dLFsicmVzaXplIiwyMDAwXSxbIm1heCJdLFsid2UiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg"
          alt="Becca Bartlett"
          className="w-full h-64 sm:h-80 md:h-96 lg:w-5/6 lg:h-5/6 object-cover mx-auto lg:mt-10"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-black text-white p-4 sm:p-6 lg:p-5 flex flex-col justify-center relative order-2 lg:order-2">
        <div className={`max-w-full lg:max-w-2lg font-semibold ${archivo.className}`}>
          <p className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg">
            Becca Bartlett is a dynamic 21-year-old singer-songwriter and performer from Newfoundland 
            who enchants audiences with her compelling vocals and masterful lyrical storytelling. Her 
            unique voice seamlessly blends pop and folk, creating memorable melodies with profound 
            emotional depth. With a perfect mix of ethereal charm and down-to-earth warmth, Becca's 
            performances leave a lasting impression on her listeners.
          </p>

          <p className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg">
            A nominee for the 2024 MusicNL Pop Artist of the Year, Becca is a versatile performer who 
            accompanies her songs with guitar, piano, bass, or ukulele. Influenced by artists such as 
            Hozier, Joni Mitchell, The Beatles, and Kate Bush, she infuses her music with a rich tapestry 
            of sounds and styles.
          </p>

          <p className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg">
            Currently studying voice performance with Berklee College of Music, Becca is honing her 
            craft and collaborating with talented musicians from around the globe.
          </p>

          <p className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg">
            Becca has earned notable recognition, including the 2021 Focus on Youth Performing 
            Individual Award from the City of Mount Pearl for her contributions to the local entertainment 
            scene. Her 2024 ballad "Wrong" won an Arts and Letters Award, and her song "Calypso" was 
            recorded by NL musician Pete of the acclaimed band "With Violet."
          </p>

          <p className="text-white leading-relaxed mb-6 sm:mb-8 font-medium text-sm sm:text-base lg:text-lg">
            You can explore Becca's growing discography on all streaming platforms and local radio. 
            Experience the captivating artistry of Becca Bartlett, where each performance promises an 
            unforgettable journey through melody and emotion.
          </p>
        </div>

       
      </div>
    </div>
  );
}