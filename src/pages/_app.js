import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page)=>(
    <>
    <Navbar/>
    {page}
    </>
  ))
  return getLayout(<Component {...pageProps} />);
}

