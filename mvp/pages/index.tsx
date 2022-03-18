import CvCard from "../src/components/Cards/CvCard";
import NextHead from "../src/components/Contracts/NextHead/NextHead";
import Footer from "../src/components/Footer/Footer";
import Home from "../src/components/Home/Home";
import Nav from "../src/components/Navbar/Navbar";

export default function index(){

    return(
        <div>
            <NextHead title={'Home'} canonical={undefined} description='...' googleBot={undefined} robots={undefined} />
            <header>
                <Nav/>
            </header>
            <main>
                <section>
                    <CvCard/>
                    <Home/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}