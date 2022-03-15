import { MongoClient, Db } from 'mongodb'
import {} from 'colors'


type ConnectType = {
    db: Db
    client:MongoClient
}

const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
console.log(`[ Connecting to database ${process.env.DB_NAME} ]...`.cyan)
export default async function connect() : Promise<ConnectType>{
   if(!client.isConnected) await client.connect()
  
   const db = client.db(process.env.DB_NAME)

   if(!!db){
    console.log(`[ Well done! database ${process.env.DB_NAME} is connected ]`.green)
   } else {
    console.log(`[ Error database ${process.env.DB_NAME} is not connected ]`.red)
   }

   return { db, client }
}