import { GetStaticProps } from "next";
import {
  Flex
} from '@chakra-ui/react';
import Nav from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import ServiceCard from "../src/components/Cards/ServiceCard";
import connect from "../src/utils/mongo";
import ProductCard from "../src/components/Cards/ProductCard";


export const getStaticProps: GetStaticProps = async () => {

    const { db } = await connect()
    const Findproducts = await db.collection('products').find({}).toArray()
    const products = JSON.stringify(Findproducts)

    return{
        props:{
            products:JSON.parse(products)
        }
    }
}

export default function Products({ products }) {

    return(
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <ServiceCard/>
                <Flex flexWrap={'wrap'}>
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        productName={product.productName} 
                        productPrice={product.price}
                        productCategory={product.category}
                        productImage={product.productImage}
                    />
                ))}
                </Flex>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}