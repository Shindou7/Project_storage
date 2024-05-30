import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../Blogpage1/AllBlogs/AllBlogs';
import Chip from '../Blogpage1/Chip/Chip';
import EmptyList from '../Blogpage1/EmptyList/EmptyList';
import './Blogpage1Id.css';
import { Link } from 'react-router-dom';

const Blogpage1Id = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Link className='blog-goBack' to='/blog'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <div
            className='blog-desc'
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blogpage1Id;