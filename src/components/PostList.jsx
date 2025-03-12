import { List, AutoSizer } from "react-virtualized";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import PostItem from "./POstItem";

const PostList = () => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFetchPosts();
    const observerRef = useInfiniteScroll(() => {
        if (hasNextPage) fetchNextPage();
    });

    const posts = data?.pages.flat() || [];

    return (
        <div style={{ height: "80vh", width: "100%" }}>
            <AutoSizer>
                {({ height, width }) => (
                    <List
                        height={height}
                        width={width}
                        rowCount={posts.length}
                        rowHeight={100}
                        rowRenderer={({ key, index, style }) => (
                            <div key={key} style={style}>
                                <PostItem post={posts[index]} />
                            </div>
                        )}
                    />
                )}
            </AutoSizer>
            <div ref={observerRef} style={{ height: "20px" }} />
            {isFetchingNextPage && <p>Loading more...</p>}
        </div>
    );
};

export default PostList;
