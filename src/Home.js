import { useState, useEffect } from 'react';
import BlogList from './BlogList';

// Parent component
const Home = () => {
    // Start out blogs as null, fetch from useEffect
    const [blogs, setBlogs] = useState(null);
    
    // Function to run every re-render
    // Or run function whenever specific state changes
    // Empty array just means on initial load
    useEffect(() => {
        // response object
        // use json method on it
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            }).then((data) => {
                // Update blog state
                setBlogs(data)
            })
    }, []);

    return (  
        <div className="home">
            {/* Child component */}
            {/* Make sure blogs is not null */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;