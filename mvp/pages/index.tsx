import Footer from "../src/components/Footer/Footer";
import Home from "../src/components/Home/Home";
import Nav from "../src/components/Navbar/Navbar";

export default function Root(){
    return(
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <Home/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}