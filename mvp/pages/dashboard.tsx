import Nav from "../src/components/Navbar/Navbar";
import { GetServerSideProps } from "next";
import { getSession } from 'next-auth/react'
import Footer from "../src/components/Footer/Footer";
import ProductForm from "../src/components/Forms/ProductForm";
import connect from "../src/utils/mongo";
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

    const  { db } = await connect()

    const FindUser = await db.collection('users').findOne({
        email:session.user.email
    })

    if(!FindUser){
        return{
            redirect:{
                destination:'/401/',
                permanent:false
            }
        }
    }
    
    const FindUsers = await db.collection('users').find({}).toArray()
    const users = JSON.stringify(FindUsers)
    return{
        props:{
            users:JSON.parse(users)
        }
    }
}

  export default function Dashboard({ users }) {
    
    return (
        <div>
            <NextHead title={'dashboard'} canonical={undefined} description='...' googleBot={undefined} robots={undefined} />
            <header>
                <Nav/>
            </header>
            <main>
                <ProductForm users={users}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}