import { useInfiniteQuery } from "@tanstack/react-query";
import axios from 'axios';

const fetchPosts=async({pageParam=1})=>{
const {data}=await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`

);

return data;
};

export const useFetchPosts=()=>{
    return useInfiniteQuery({
        queryKey:["posts"],
        queryFn:fetchPosts,
        getNextPageParam:(lastPage,pages)=> pages.length + 1,
    });
}

