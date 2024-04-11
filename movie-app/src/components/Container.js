import React from "react";
import "./Container.css";
import noImg from "../assets/image.png";

const Container = (props) => {
  const { state, openDetail } = props;
  // console.log(noImg);

  return (
    <div>
      {" "}
      <div className="container">
        {!state?.results?.length ? ( // len==0 or null
          <h1 style={{ color: "white" }}>No Data Found</h1>
        ) : (
          <>
            {state.results.map((e) => (
              <div
                className="item"
                key={e.imdbID}
                onClick={() => openDetail(e.imdbID)}
              >
                {" "}
                {/* {console.log("Poster URL:", e.Poster)} Log the value */}
                {e.Poster && e.Poster !== "N/A" ? (
                  <img src={e.Poster} alt={e.Title} />
                ) : (
                  <img src={noImg} alt="NOT FOUND" />
                )}
                <h3 style={{ color: "white" }}>{e.Title}</h3>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Container;
