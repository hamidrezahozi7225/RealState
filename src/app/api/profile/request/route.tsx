import Requests from '@/components/models/Requests';
import User from '@/components/models/User';
import ConnectDB from '@/components/utils/connectDB';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { profileData } = await req.json();
    const {
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = profileData;
    await ConnectDB();
    const session: any = await getServerSession(req);

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { message: 'user does not exist!' },
        { status: 422 }
      );
    }

    if (
      !(
        title &&
        description &&
        location &&
        phone &&
        realState &&
        constructionDate &&
        category
      )
    ) {
      return NextResponse.json(
        { message: 'Your Data Is Not Correct!' },
        { status: 400 }
      );
    }
    const userId = user._id;
    let data = profileData;
    data.userId = userId;
    const requset = await Requests.create(data);
    user.post.push(requset);
    await user.save();

    return NextResponse.json({ message: 'Send Successful' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'server Done!' });
  }
}
