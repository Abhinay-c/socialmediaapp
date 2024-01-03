import { Post as IPost } from "./main";

interface Props {
    post: IPost;
}

export const Post = (props: Props) => {
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
