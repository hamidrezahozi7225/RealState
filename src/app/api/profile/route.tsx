import ConnectDB from '@/components/utils/connectDB';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import User from '@/components/models/User';

export async function GET({ req }) {
  try {
    await ConnectDB();
    const session: any = await getServerSession(req);

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { message: 'user does not exist!' },
        { status: 422 }
      );
    }

    return NextResponse.json({ post: user.post });
  } catch (error) {
    return NextResponse.json({ message: 'server Done!' });
  }
}
