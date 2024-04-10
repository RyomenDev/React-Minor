import React from "react";
import "./Container.css";

const Container = (props) => {
  const { state, openDetail } = props;

  return (
    <div>
      {" "}
      <div className="container">
        {!state?.results?.length ? (  // len==0 or null
          <h1 style={{ color: "white" }}>No Data Found</h1>
        ) : (
          <>
            {state?.results?.map(
              (
                e // ? =>incase there is no data/Null
              ) => (
                <div className="item" onClick={() => openDetail(e.imdbID)}>
                  <img style={{ width: "200px" }} src={e.Poster} alt="" />
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
