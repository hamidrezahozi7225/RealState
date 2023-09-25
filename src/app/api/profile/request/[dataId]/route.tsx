import Requests from '@/components/models/Requests';
import User from '@/components/models/User';
import ConnectDB from '@/components/utils/connectDB';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function PATCH(req) {
  try {
    await ConnectDB();
    const { profileData } = await req.json();

    const userExist: any = await getServerSession(req);
    const user = await User.findOne({ email: userExist.user.email });

    const data = await Requests.findOne({ _id: profileData._id });
    data.title = profileData.title;
    data.description = profileData.description;
    data.location = profileData.location;
    data.phone = profileData.phone;
    data.price = profileData.price;
    data.realState = profileData.realState;
    data.constructionDate = profileData.constructionDate;
    data.category = profileData.category;
    data.rules = profileData.rules;
    data.amenities = profileData.amenities;
    data.show = false;

    const index = user.post.findIndex((itm) => itm._id.equals(profileData._id));
    user.post[index] = data;
    await user.save();

    await data.save();
    return NextResponse.json({ message: 'success!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'server Done!' });
  }
}
