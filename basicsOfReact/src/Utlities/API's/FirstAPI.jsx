import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const FirstAPI = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(response.data);
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            <h1 className='text-4xl font-medium text-center'>My Posts</h1>
            {posts.map(({title,body,id}) => (
                <a key={id} href="#" className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium m-4">
                    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{title}</h5>
                    <p className="text-body">{body}</p>
                </a>
            ))}
        </div>
    )
}
