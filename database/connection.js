const { MongoClient }=require("mongodb");
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
const insertToDB=async(data)=>{
    try {
        await client.connect();
        const database=client.db("Human_resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.insertMany(data);
        await client.close();
        console.log("successfully added");
        return dbResponse;
        
    } catch (error) {
       console.log("error occurred",error.message) ;
       return error.message;
    }
}


const updateSalaryInDB=async(data)=>{
    try {
        await client.connect();
        const database =client.db("Human_resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.updateMany(filter,updatedValue);
        await client.close();
        console.log("successfully updated");
        return dbResponse;
    } catch (error) {
        console.log("error occured",error.message)
        return error.message;
    }
}
const highPaidEmployee=async(query)=>{
    try {
        await client.connect();
        const database=client.db("Human_resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        console.log("error occurred",error.message);
        return error.message;
    }
}
const findExperiencedEmployee=async(query)=>{
    try {
        await client;
        const database=client.db("Human_resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        console.log("error occurred",error.message)
        return error.message;
    }
}

const graduatedAfter2015=async(query)=>{
    try {
        await client.connect();
        const database=client.db("Human_resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        console.log("error occurred",error.message);
        return error.message
    }
}
 const updateSalaryEmployee=async(filter,updatedValue)=>{
    try {
       await client.connect();
       const database=client.db("Human_resource");
       const collection=database.collection("employee");
       const dbResponse=await collection.updateMany(filter,updatedValue);
       await client.close();
       console.log("successfully updated");
       return dbResponse; 
    } catch (error) {
        console.log("error occurred",error.message);
        return error.message;
    }
 }
 const deleteEmployee=async(query)=>{
    try {
        await client.connect();
        const database=client.db("Human_resource");
        const collection=database.collection("employee");
        const dbResponse=await collection.deleteMany(query);
        await client.close;
        return dbResponse;
    } catch (error) {
       console.log("error occured",error.message) ;
       return error.message;
    }
 }
 module.exports={
    insertToDB,deleteEmployee,graduatedAfter2015,findExperiencedEmployee,highPaidEmployee,updateSalaryEmployee
 }