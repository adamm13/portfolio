import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";


function MyApp({ Component, pageProps, router }) {
  return ( 
    <ThemeProvider attribute="class">
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:pc-32">
      <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
        <Sidebar/>
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 ">
        <Navbar/>
        <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      </div>
    </div>
    </ThemeProvider>
  )
}


export default MyApp
