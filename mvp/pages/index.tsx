import CvCard from "../src/components/Card/CvCard";
import Footer from "../src/components/Footer/Footer";
import Home from "../src/components/Home/Home";
import Nav from "../src/components/Navbar/Navbar";


export default function index(){
    return(
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <CvCard/>
                <Home/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}