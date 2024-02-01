import { useState } from "react";
import img18 from "../Images/img18.jpeg";
import img19 from "../Images/img19.jpeg";
import img13 from "../Images/img13.jpg";
import img5 from "../Images/img5.jpg";

const TravelCommunity = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Abena Frimpong",
      content: "Had an amazing trip to Paris! #travel #adventure",
      Image: img18,
    },
    {
      id: 2,
      user: "vennita",
      content: "Exploring the beautiful places in Bali. 🏖️",
      Image: img19,
    },
    {
      id: 3,
      user: "Micheal",
      content: "Borabora is a beautiful place and had an amazing time there",
      Image: img13,
    },
    {
      id: 4,
      user: "Ini",
      content:
        "The view of my hotel in iceland is everything.so theraputic.#love&light",
      Image: img5,
    },
  ]);

  return (
    <div className="container mt-5">
      <h2 className=" text-primary fw-bold fst-italic mb-4">
        Travel Community
      </h2>
      {posts.map((post) => (
        <div key={post.id} className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={post.Image} alt="Travel Post" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{post.user}</h5>
                <p className="card-text">{post.content}</p>
                {/* Add like, comment, and share functionality here */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelCommunity;
