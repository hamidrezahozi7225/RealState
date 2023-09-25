import { log } from 'console';
import mongoose from 'mongoose';

export default async function ConnectDB() {
  if (mongoose.connections[0].readyState) return;

  const url: any = process.env.BASE_DB;
  await mongoose.connect(url);
  console.log('connectedDB');
}
