import { GetServerSideProps } from "next";
import { getSession } from 'next-auth/react'
import {
  Wrap,
  Square,
  WrapItem,
} from '@chakra-ui/react';
import Nav from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import ProductCard from "../src/components/Cards/ProductCard";
import ServiceCard from "../src/components/Cards/ServiceCard";

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



export default function Products({}) {

    return(
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <ServiceCard/>
                <Wrap> 
                    <Square>
                        <WrapItem>
                            <ProductCard imgUrl={undefined}/>
                        </WrapItem>
                    </Square>
                </Wrap>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}