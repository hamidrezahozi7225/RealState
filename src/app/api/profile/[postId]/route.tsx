import Requests from '@/components/models/Requests';
import User from '@/components/models/User';
import ConnectDB from '@/components/utils/connectDB';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function DELETE(req, context) {
  try {
    await ConnectDB();
    const postID = context.params.postId;

    const existPost = await Requests.findOne({ _id: postID });

    const userExist: any = await getServerSession(req);

    if (!userExist) {
      return NextResponse.json(
        { message: 'user does not exist!' },
        { status: 422 }
      );
    }

    let user = await User.findOne({ email: userExist.user.email });

    const data = await user.post.filter((item) => !item._id.equals(postID));
    user.post = data;
    await Requests.findOneAndDelete({ _id: postID });
    await user.save();

    return NextResponse.json({ message: 'Delete Success!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'server Done!' }, { status: 500 });
  }
}
