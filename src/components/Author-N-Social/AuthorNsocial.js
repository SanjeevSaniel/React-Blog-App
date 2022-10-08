import Avatar from "@mui/material/Avatar";
// import Avatar from "../Author-N-Social/Mask-Group-16.png";
import "../Author-N-Social/AuthorNsocial.css";
import SocialFollow from "../SocialFollow/SocialFollow";

const AuthorNsocial = () => {
  return (
    <div className="avatar-n-social">
      <div className="avatar">
        {/* <img className="avatar-image" alt="Daniel Shi" src={Avatar} /> */}
        <Avatar
          className="avatar-image"
          alt="Daniel Shi"
          src="https://www.pexels.com/@daniel-shi-556801/"
          sx={{ width: 52, height: 52 }}
        />
        <div className="avatar-info">
          <span className="author">Daniel Shi</span> <br />
          <span>Aug 17, 2019 - 10min read</span>
        </div>
      </div>
      <div className="social-links">
        <SocialFollow />
      </div>
    </div>
  );
};

export default AuthorNsocial;
