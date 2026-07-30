import { connect } from 'mongoose';

main().catch(err => console.log(err));

export async function main() {
  await connect('mongodb://localhost:27017/2403C2');
  console.log("Mongodb connected successfully!");
}