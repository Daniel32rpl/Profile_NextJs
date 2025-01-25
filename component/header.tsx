import Link from 'next/link';

const Header = () => {
 return (
   <header className="sticky top-0">
     <nav className="container mx-auto flex justify-between text-mint items-center">
       <Link href="/" className="text-4xl mt-4 font-bold text-[#0FFCBE] text-shadow-custom-glow-mint">
         DANIEL
       </Link>
       <ul className="flex space-x-4">
         <li>
           <Link href="/" className="hover:text-white font-bold text-2xl text-[#0FFCBE]">
             Home
           </Link>
         </li>
         <li>
           <Link href="/portofolio" className="hover:text-white font-bold text-2xl text-[#0FFCBE]">
             Portfolio
           </Link>
         </li>

         <li>
           <Link href="/blog" className="hover:text-white font-bold text-2xl text-[#0FFCBE]">
             Blog
           </Link>
         </li>
        
       </ul>
     </nav>
   </header>
 );
};

export default Header;