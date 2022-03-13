import Nav from "../src/components/Navbar/Navbar";
import { GetServerSideProps } from "next";
import { getSession } from 'next-auth/react'
import Footer from "../src/components/Footer/Footer";
import ProductForm from "../src/components/Forms/ProductForm";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req })

    if(!session){
        return{
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }

    return{
        props:{}
    }
}


  export default function Dashboard() {
    
    return (
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <ProductForm/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}