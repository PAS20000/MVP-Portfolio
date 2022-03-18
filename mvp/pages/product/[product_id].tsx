import ProductDetailsCard from '../../src/components/Cards/ProductDetailsCard'
import { GetStaticPaths, GetStaticProps } from "next";
import connect from '../../src/utils/mongo';
import { ObjectId } from 'mongodb';
import Nav from '../../src/components/Navbar/Navbar';
import Footer from '../../src/components/Footer/Footer';


export const getStaticPaths: GetStaticPaths = async () => {
    const { db } = await connect()
    const Findproducts = await db.collection('products').find({}).toArray()
    
    /*const paths = Findproducts.map(product => {
       return { params: { 
           product_id:product._id,
            
        } }
    })*/

    return{
        paths:[
           { params: { 
            product_id: '6233ca700e34d10fa6398580',
         }},
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { product_id } = ctx.params
    
    const { db } = await connect()
    const Findproduct = await db.collection('products').findOne({
        _id:new ObjectId(`${product_id}`)
    })
    const product = JSON.stringify(Findproduct)
    
    return{
        props:{
            product:JSON.parse(product)
        },
        revalidate: 10
    }
}



export default function Product({ product }){
   
    return(
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <ProductDetailsCard product={product}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}