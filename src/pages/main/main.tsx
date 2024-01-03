import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";
import { Post } from "./post";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export interface Post {
    title: string;
    description: string;
    id: string;
    userId: string;
    username: string;
}

export const Main = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");
    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
        );
    };
    useEffect(() => {
        getPosts();
    }, []);
    const [user] = useAuthState(auth);
    if (!user) {
        return <div className="LoginRequest">PLEASE LOGIN TO CONTINUE...</div>;
    }
    return (
        <div>
            {postsList?.map((post) => (
                <Post post={post}/>
            ))}
        </div>
    );
};
