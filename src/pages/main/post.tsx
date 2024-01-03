import { Post as IPost } from "./main";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {
    post: IPost;
}

export const Post = (props: Props) => {
    const [user] = useAuthState(auth);
    const { post } = props;
    return (
        <div className="Post">
            <div className="title">{post.title}</div>
            <div className="body">
                <p>{post.description}</p>
            </div>
            <div className="footer">
                by <span> {post.username}</span>
            </div>
        </div>
    );
};
