import mongoose from 'mongoose';

await mongoose
       .connect("mongodb+srv://jpnc1695:kaxoro1989@cluster0.r8ttbrk.mongodb.net/teste_fadami")

let db = mongoose.connection;

export default db;