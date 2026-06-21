import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <Navbar />
        {page}
      </>
    ));

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}