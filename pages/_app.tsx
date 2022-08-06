import {AppProps} from "next/app"
import {FC} from "react"
import "@assets/main.css"

// function MyApp({Component, pageProps}: AppProps) {
//   return (
//     <>
//     <Layout>
//     <Component {...pageProps} />
//     </Layout>
//     </>
//   )
// }

const Noop: FC<any> = ({children}) => <>{children} </>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC<any>}}) {
  const Layout = Component.Layout ?? Noop
  
  return (
   <Layout>
     <Component {...pageProps} />

   </Layout>
    
   
  )
}




export default MyApp