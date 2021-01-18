import { useState, useEffect } from 'react';
import BlogList from './BlogList';

// Parent component
const Home = () => {
    // Start out blogs as null and loading true, fetch from useEffect
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // Function to run every re-render
    // Or we can run function whenever specific state changes
    // Empty array just means on initial load
    useEffect(() => {
        // response object
        // use json method on it
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json()
            }).then((data) => {
                // Update blog state
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch((e) => {
                // Log any errors to state
                setIsPending(false);
                setError(e.message);
            })
    }, []);

    return (  
        <div className="home">
            {/* Child component */}
            {/* Make sure blogs is not null */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;