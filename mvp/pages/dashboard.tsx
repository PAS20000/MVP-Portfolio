import Card from "../src/components/Card/ProductCard";
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