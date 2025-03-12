import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostList from "./components/PostList";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <h1>Infinite Scroll List</h1>
            <PostList />
        </QueryClientProvider>
    );
}

export default App;
