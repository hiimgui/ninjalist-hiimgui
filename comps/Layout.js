import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'


const Layout = ({ children }) => {
    return ( 
      <>
      <Navbar />
      { children }
      <Footer />
      </>  
     );
}
 
export default Layout;
