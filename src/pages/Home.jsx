import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedsAPI } from "../store/feed/feed.actions";

const Home = () => {
  const dispatch = useDispatch();
  const { data, getFeeds } = useSelector((state) => state.feed);

  // localStorage, check if data
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getFeedsAPI());
    }
  }, [dispatch]);
let cart=[];
const addtocart=(id)=>{

  cart.push()
}
  return (
    <div>
      <h1>Home</h1>
      <br />
      {getFeeds.loading && <div>Loading...</div>}
      {getFeeds.error && <div>Error...</div>}
      {!getFeeds.loading &&
        data.map((feed) => (
          <div
            key={feed.id}
            style={{
              display:"grid",
              gridTemplate:"1fr 1fr",
              padding: "10px",
              margin: "auto",
              marginTop: "10px",
              border: "1px solid grey",
              maxWidth: "400px",
            }}
          >
            <div><img src={feed.thumbImg} alt=""/></div>
            <div>{feed.description}</div> 
            <div><h2>{feed.title}</h2></div>
            <div>{feed.detail}</div>
            <div><button onClick={addtocart}>Add to Cart</button></div>
          </div>
        ))}
    </div>
  );
};

export default Home;
