import CardProfile from "../src/components/Card/ProfileCard";
import Footer from "../src/components/Footer/Footer";
import Nav from "../src/components/Navbar/Navbar";
import { GetServerSideProps } from "next";
import { getSession } from 'next-auth/react'

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