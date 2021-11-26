import FBBox from "../ServiceComponents/FBBox";
import PostUserMeta from "./PostUserMeta";
import PostAttachment from "./PostAttachment";
import PostAction from "./PostAction";
const Main = ({ WallData }) => {
  return (
    <div className="col-7 Main">
      <FBBox heading="Create a post"></FBBox>
      {WallData.map((item, key) => (
        <FBBox key={key}>
          <PostUserMeta {...item.UserMeta} />
          <p id="post-heading">{item.Text}</p>
          <PostAttachment item={item} />
          <PostAction />
        </FBBox>
      ))}
    </div>
  );
};

export default Main;
