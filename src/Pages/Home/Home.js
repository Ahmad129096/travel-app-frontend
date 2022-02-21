import React,{useState, useEffect} from "react";
import NavbarComponent from "../../Components/Navebar/NavbarComponent";

const Home = ()=>{

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:4000/api/travel')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        console.log(data)
        setBlogs(data)
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      {blogs && blogs.display.map(blog => (
        <div className="blog-preview" key={blog._id} >
          <h1>{ blog.location }</h1>
          <p>Cost of travel { blog.costOfTravel }</p>
          <p>heritages { blog.heritages }</p>
          {/* <img>images: {blog.images} </img> */}
          <img src={blog.images[0]} style={{width: 500, height: 500}}/>
          

        </div>
      ))}
    </div>
  );
}

export default Home