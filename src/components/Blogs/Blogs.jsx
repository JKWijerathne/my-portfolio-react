import React from 'react';
import './Blogs.css';
import blog1Img from '../../assets/Blog 1.png';
import blog2Img from '../../assets/Blog 2.png';
import blog4Img from '../../assets/Blog 4.png';

const blogData = [
  {
    title: "Understanding Software Licensing: What Every Developer Should Know",
    url: "https://medium.com/@jkwijerathne7/understanding-software-licensing-what-every-developer-should-know-d6d6aa84cbf6",
    img: blog1Img
  },
  {
    title: "DevOps: Closing the Gap Between Development and Operations",
    url: "https://medium.com/@jkwijerathne7/devops-closing-the-gap-between-development-and-operations-d2ee2adcc865",
    img: blog2Img
  },
  {
    title: "CIA Triad in Cyber Security",
    url: "https://medium.com/@jkwijerathne7/cia-triad-in-cyber-security-8bba4711c746",
    img: blog4Img
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="blogsSection">
      <h2 className="sectionTitle">My Blogs</h2>
      <div className="blogsContainer">
        {blogData.map((blog, index) => (
          <a key={index} href={blog.url} target="_blank" rel="noreferrer" className="blogCard">
            <div className="blogImageWrapper">
              <img src={blog.img} alt={blog.title} className="blogImage" />
            </div>
            <h3 className="blogTitle">{blog.title}</h3>
            <span className="readArticleText">Read Article &rarr;</span>
          </a>
        ))}
      </div>
      <a href="https://medium.com/@jkwijerathne7" target="_blank" rel="noreferrer" className="readMoreBtn">
        Read More on Medium
      </a>
    </section>
  );
}

export default Blogs;
