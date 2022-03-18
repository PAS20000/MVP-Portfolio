import { GetStaticProps } from "next";
import {
  Box,
  Flex, 
  useBreakpointValue
} from '@chakra-ui/react';
import Nav from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import ServiceCard from "../src/components/Cards/ServiceCard";
import connect from "../src/utils/mongo";
import ProductCard from "../src/components/Cards/ProductCard";
import { useEffect, useState } from "react";
import NextHead from "../src/components/Contracts/NextHead/NextHead";


export const getStaticProps: GetStaticProps = async () => {

    const { db } = await connect()
    const Findproducts = await db.collection('products').find({}).toArray()
    const products = JSON.stringify(Findproducts)

    return{
        props:{
            products:JSON.parse(products)
        },
        revalidate: 10
    }
}

export default function Products({ products }) {
    const [width, setWidth] = useState(Number)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    return(
        <div>
            <NextHead title={'products'} canonical={undefined} description='...' googleBot={undefined} robots={undefined} />
            <header>
                <Nav/>
            </header>
            <main>
                <Box as={'section'}>
                    <ServiceCard/>
                    <Flex flexWrap={'wrap'} flexDirection={width > 777 ? 'row':'column'}>
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product_id={product._id}
                            productName={product.productName} 
                            productPrice={product.price}
                            productCategory={product.category}
                            productImage={product.productImage}
                        />
                    ))}
                    </Flex>
                </Box>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}