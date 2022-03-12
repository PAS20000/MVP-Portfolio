import CardProfile from "../src/components/Card/ProfileCard";
import Footer from "../src/components/Footer/Footer";
import Nav from "../src/components/Navbar/Navbar";

export default function Profile(){
    return(
        <div>
            <header>
                <Nav/>
            </header>
            <main>
               <CardProfile/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}