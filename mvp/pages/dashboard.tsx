import Card from "../src/components/Card/ProductCard";
import Nav from "../src/components/Navbar/Navbar";

  export default function Dashboard() {
    return (
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <Card/>
            </main>
            <footer>
                
            </footer>
        </div>
    )
}