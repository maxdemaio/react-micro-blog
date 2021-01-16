import { useState } from 'react';
import BlogList from './BlogList';

// Parent component
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Max', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Alice', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Scout', id: 3 }
    ]);

    return (  
        <div className="home">
            {/* Child component */}
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
    );
}
 
export default Home;