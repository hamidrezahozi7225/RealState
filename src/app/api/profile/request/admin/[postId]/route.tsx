import Requests from '@/components/models/Requests';
import User from '@/components/models/User';
import ConnectDB from '@/components/utils/connectDB';
import { NextResponse } from 'next/server';

export async function PATCH(req, context) {
  try {
    await ConnectDB();
    const postID = context.params.postId;

    const post = await Requests.findOne({ _id: postID });

    const user = await User.findOne({ _id: post.userId });

    post.show = true;
    const index = user.post.findIndex((itm) => itm._id.equals(postID));
    await post.save();
    user.post[index] = post;

    await user.save();

    return NextResponse.json({ message: 'send success!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'server Done!' });
  }
}
