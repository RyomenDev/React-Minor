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
            {state?.results?.map(
              (
                e // ? =>incase there is no data/Null
                console.log(e);
              ) => (
                <div className="item" onClick={() => openDetail(e.imdbID)}>
                  {e.Poster ? (
                    <img
                      style={{ width: "200px" }}
                      src={e.Poster}
                      alt="NOT FOUND"
                    />
                  ) : (
                    <img
                      style={{ width: "200px" }}
                      src={noImg}
                      alt="NOT FOUND"
                    />
                  )}
                  <h3 style={{ color: "white" }}>{e.Title}</h3>
                </div>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Container;
