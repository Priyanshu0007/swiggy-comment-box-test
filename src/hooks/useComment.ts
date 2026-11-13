import { useEffect, useState } from "react"

interface CommentType {
    title: string;
    id: string;
    isLiked: boolean;
}

let COMMENT_KEY = "comment-key";


export const useComment = () => {

    const [comments, setComment] = useState<CommentType[]>([]);
    const addNewComments = ({ title }: { title: string }) => {
        let newComment: CommentType = {
            id: Date.now().toString(),
            isLiked: false,
            title: title,
        }
        setComment((prev) => ([...prev, newComment]));
    }

    const handleLike = ({ id }: { id: string }) => {
        setComment((prev) => {
            return prev.map((it) => {
                if (it.id === id) {
                    return { ...it, isLiked: !it.isLiked }
                }
                else {
                    return it;
                }
            })
        })
    }

    const handleDelete = ({ id }: { id: string }) => {
        setComment((prev) => {
            return prev.filter((it) => it.id !== id);
        })
    }


    useEffect(() => {
        let data = JSON.parse(localStorage.getItem(COMMENT_KEY) ?? "[]");
        setComment(data)
    }, [])

    useEffect(() => {
        localStorage.setItem(COMMENT_KEY, JSON.stringify(comments));
    }, [comments])


    return { comments, addNewComments, handleLike, handleDelete }
}