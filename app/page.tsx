import Image from "next/image";
import profilePic from '../public/image/profile.jpeg';
import { skillItem, skillItems } from "@/data/skill";


export default function Home() {
  return (
      <main className="container mx-auto ">
        <section className="flex items-center p-10 h-screen">
          <div className="w-3/4">
            <h1 className="text-4xl font-bold text-white mb-4 text-shadow-custom-glow-mint">Hi, I'm Daniel</h1>
            <p className="mb-4 text-[#0FFCBE] text-shadow-custom-glow-mint font-semibold text-2xl">A FrontEnd Developer</p>
            <p className="mb-4 text-white">I craft the digital experiences users see and interact with. From beautiful layouts to responsive designs, they turn ideas into engaging, user-friendly interfaces that work seamlessly across all devices.</p>
          <a href="" className="p-2 bg-[#0FFCBE] text-shadow-custom-glow-mint rounded-lg">Contact us</a>
          </div>
          <div className="w-1/4">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full w-64 h-64 object-cover shadow-lg"
              unoptimized
            />
          </div>
          </section>
          <section className="mt-16 md:mt-0" id="skills">
            <div className="text-center p-8">
              <h2 className="text-mint font-bold text-shadow-custom-glow-mint text-4xl">Skills</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {skillItems.map((skill, index) => (
                <div key={index} className="group relative flex gap-6 text-blue bg-[#0FFCBE] border-blue border-2 px-4 py-2 hover:shadow-custom-glow-blue hover: bg-blue hover:cursor-pointer transition 300s ease-in-out">
                  <div className="flex justify-center items-center">
                    <Image 
                      src={skill.image}
                      alt={skill.name}
                      width={60}
                      height={60}
                      unoptimized
                    />
                  </div>
                  <div className="flex items-start justify-center flex-col font-bold">
                    <h3 className="text-white">{skill.name}</h3>
                    <p className="text-yellow text-sm">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        <section className="flex items-center p-10 h-screen">
          <div className="w-3/4">
            <h2 className=" text-sm text-[#0FFCBE] font-semibold uppercase mb-2">A Bit of My Story</h2>
            <h3 className="text-3xl text-[#0FFCBE] font-bold mb-4">How it all began</h3>
            <p className="font-semibold mb-4 text-white">I grew up with a curious, analytical, and problem-solving spirit in a home where the digital world was always within reach.</p>
            <p className="mb-4 text-white">My fascination with technology started at an early age, experimenting with computers and simple code. After pursuing a degree in software engineering, I began my journey as a frontend developer, where I found my passion for creating beautiful and functional user interfaces. I immersed myself in learning JavaScript, CSS, and various frontend frameworks, refining my skills to build responsive and accessible websites.</p>
            <p className="mb-4 text-white">Over the years, I’ve worked with teams across the globe, honing my skills in modern development practices. Now, I take every opportunity to create engaging digital experiences, continuously learning and adapting to the ever-evolving world of frontend development.</p>
          </div>
          <div className="w-1/4 m-12">
            <Image
              alt="kucing"
              src="https://i.pinimg.com/736x/e1/7e/a1/e17ea10bc7c94a7183b1f65bfd11a425.jpg"
              width={50}
              height={50}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              unoptimized
            />
          </div>
        </section>
      </main>
  );
}