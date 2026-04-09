import { preinit } from "react-dom";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    date: "2026-04-01",
    category: "React",
    image: "https://i.ibb.co/3sQ1z0C/react-blog.jpg",
    description: "Learn the basics of React, components, props, and state management.",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Next.js 16 New Features",
    author: "Jane Smith",
    date: "2026-03-28",
    category: "Next.js",
    image: "https://i.ibb.co/ZYW3VTp/nextjs-blog.jpg",
    description: "Explore the latest features and improvements in Next.js 16.",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    author: "Alex Johnson",
    date: "2026-03-20",
    category: "CSS",
    image: "https://i.ibb.co/0jqHpnp/tailwind-blog.jpg",
    description: "A complete guide to building modern UI using Tailwind CSS.",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "JavaScript ES2025 Features",
    author: "Emily Brown",
    date: "2026-03-15",
    category: "JavaScript",
    image: "https://i.ibb.co/2kR7zQp/js-blog.jpg",
    description: "Discover new JavaScript features and how to use them effectively.",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Building UI with DaisyUI",
    author: "Michael Lee",
    date: "2026-03-10",
    category: "UI Library",
    image: "https://i.ibb.co/4f8pYbK/daisyui-blog.jpg",
    description: "Create beautiful components quickly using DaisyUI with Tailwind CSS.",
    readTime: "4 min read"
  }
];

const BlogDetails = async ({params}) => {
    const {blogid} = await (params);

    const blog = blogs.find(blog => blog.id === parseInt(blogid));
    
    console.log(blog);
    return (
        <div>
            <h1>blog details</h1>
            {blog && <div>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                </div>}
        </div>
    );
};

export default BlogDetails;