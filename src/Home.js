import React, { useState ,useEffect} from 'react'
import Blogslist from './Blogslist';

function Home() {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newblogs);
    }
    useEffect(() => {
        console.log('show only non deleted blog');
        console.log(blogs);
    });
     
    return (
        <div className='home'>
            <Blogslist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />  
            
        </div>
    );
}
export default Home;