const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb+srv://plp:plp%40%402025@plpbookstore.r3avjii.mongodb.net/?retryWrites=true&w=majority&appName=plpbookstore';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Create a new client
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB Atlas!");

    // Choose your database and collection
    const database = client.db("testdb");
    const collection = database.collection("users");

    //Insert a document
    const result = await collection.insertOne({ name: "Alice", age: 25 });
    console.log("Inserted document:", result.insertedId);

    //Find one document
    const user = await collection.findOne({ name: "Alice" });
    console.log("Found user:", user);

    //Update a document
    await collection.updateOne({ name: "Alice" }, { $set: { age: 26 } });
    console.log("User updated!");

    //Delete a document
    await collection.deleteOne({ name: "Alice" });
    console.log("User deleted!");

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run();

