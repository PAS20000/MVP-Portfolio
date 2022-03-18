import CardProfile from "../src/components/Cards/ProfileCard";
import Footer from "../src/components/Footer/Footer";
import Nav from "../src/components/Navbar/Navbar";
import { GetServerSideProps } from "next";
import { getSession } from 'next-auth/react'
import NextHead from "../src/components/Contracts/NextHead/NextHead";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req })
    
    if(!session){
        return{
            redirect:{
                destination:'/401/',
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
            <NextHead title={'profile'} canonical={undefined} description='...' googleBot={undefined} robots={undefined} />
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