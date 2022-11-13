import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ Stars, reviews }) => {
  // console.log(Stars);
  return (
    <Wrapper>
      <div className="Stars">
        {/* stars */}

        <span>
          {Stars >= 1 ? (
            <BsStarFill />
          ) : Stars >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of stars */}
        {/* stars */}

        <span>
          {Stars >= 2 ? (
            <BsStarFill />
          ) : Stars >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of stars */}

        {/* stars */}

        <span>
          {Stars >= 3 ? (
            <BsStarFill />
          ) : Stars >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of stars */}
        {/* stars */}

        <span>
          {Stars >= 4 ? (
            <BsStarFill />
          ) : Stars >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of stars */}
        {/* stars */}

        <span>
          {Stars === 5 ? (
            <BsStarFill />
          ) : Stars >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of stars */}
      </div>
      <p className="reviews">({reviews} customers reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
