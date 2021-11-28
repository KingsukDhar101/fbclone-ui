import Timeago from "react-timeago";

const PostUserMeta = ({ Fullname, Avatar, ProfileURL, Location, DateTime }) => {
  return (
    <div className="PostUserMeta">
      <a href={ProfileURL}>
        <img src={Avatar} alt={Fullname} />
      </a>
      <div className="PostUserMeta-Meta">
        <p className="m-0">
          <a href={ProfileURL}>
            <strong>{Fullname}</strong>
          </a>
        </p>
        <p className="m-0 text-muted">
          <Timeago date={DateTime} /><br/>
          {Location}
        </p>
      </div>
    </div>
  );
};

export default PostUserMeta;
