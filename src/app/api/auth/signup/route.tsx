import User from '@/components/models/User';
import ConnectDB from '@/components/utils/connectDB';
import { hashPassword } from '@/components/utils/helper';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await ConnectDB();
    const { email, password } = await req.json();

    if (!email && !password) {
      return NextResponse.json({ message: 'Invalid Data' }, { status: 422 });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return NextResponse.json(
        { message: 'This account exists' },
        { status: 422 }
      );
    }

    const hashpw = await hashPassword(password);
    const user = await User.create({ email, password: hashpw });

    return NextResponse.json(
      { message: 'user created', user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Server Done!' });
  }
}
