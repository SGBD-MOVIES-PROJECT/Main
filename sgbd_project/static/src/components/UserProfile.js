import React from "react";
import "./UserProfile.css";
import ReviewsProfile from "../pages/ReviewsProfile"

const UserProfile = () => {
  return (
    <div className="full-cont">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card">
        <img src="team-male.jpg" alt="John" style={{ width: "100%" }} />
        <h1>John Doe</h1>
        <p className="title8">CEO &amp; Founder, Example</p>
        <p>Harvard University</p>
        <a href="#">
          <i className="fa fa-dribbble" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <p>
          <button className="button6">EDIT PROFILE</button>
        </p>
      </div>
      <div>
        <h1 className="h1">________________________________________________________________________________________________________________________________</h1>
      </div>
      <ReviewsProfile/>
    </div>
  );
};
export default UserProfile;
