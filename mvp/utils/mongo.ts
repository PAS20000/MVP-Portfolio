import { MongoClient } from 'mongodb'
import {} from 'colors'

const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
console.log(`[ Connecting to database ${process.env.DB_NAME} ]...`.cyan)
export default async function connect(){
   if(!client.isConnected) await client.connect()
  
   const db = client.db(process.env.DB_NAME)

   if(!!db){
    console.log(`[ Well done! database ${process.env.DB_NAME} is connected ]`.green)
   } else {
    console.log(`[ Error database ${process.env.DB_NAME} is not connected ]`.red)
   }

   return {db, client}
}