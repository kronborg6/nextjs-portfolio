import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "KronborgCode",
  description: "Kronborg's portfolio website",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

// return (
//   <html>
//     <body className={inter.className}>
//       <header className="bg-gray-900 text-white py-2">
//         <div className="container mx-auto flex  items-center">
//           <Link href="/">
//             <h1 className="px-5 border-r-2 font-bold text-lg">
//               KronborgCode
//             </h1>
//           </Link>
//           <nav className="md:flex space-x-4 mx-10">
//             <Link href="/projects">
//               <span className="transition-colors hover:rounded-md hover:pr-0  hover:border-transparent hover:bg-white hover:bg-opacity-[15%]">
//                 Projects
//               </span>
//             </Link>
//             {/*
//             <Link href="/" locale="en-US">
//               <span className="transition-colors hover:rounded-md hover:pr-0  hover:border-transparent hover:bg-white hover:bg-opacity-[15%]">
//                 English
//               </span>
//             </Link>
//                           <Link href="/home">
//               <span className="transition-colors hover:rounded-md hover:pr-0  hover:border-transparent hover:bg-white hover:bg-opacity-[15%]">
//                 Home
//               </span>
//             </Link>
//             <Link href="/test">
//               <span className=" transition-colors hover:rounded-md hover:pr-0  hover:border-transparent hover:bg-white hover:bg-opacity-[15%]">
//                 Test
//               </span>
//             </Link>
//             */}
//           </nav>
//           <nav className="flex space-x-4 ml-auto">
//             <Link
//               target="_blank"
//               className="flex items-center rounded-md p-2 text-white transition-colors hover:bg-white hover:bg-opacity-[15%]"
//               href="https://github.com/kronborg6"
//             >
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 role="img"
//                 viewBox="0 0 24 24"
//                 height="20"
//                 width="20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
//               </svg>
//             </Link>
//           </nav>
//         </div>
//       </header>
//       {children}
//       <Analytics />
//     </body>
//   </html>
// );
