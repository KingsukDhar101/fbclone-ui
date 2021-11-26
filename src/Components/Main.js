import FBBox from "./FBBox";
import PostUserMeta from "./PostUserMeta";
const Main = ({ WallData }) => {
  return (
    <div className="col-7">
      <FBBox heading="Create a post"></FBBox>
      {WallData.map((item, key) => (
        <FBBox key={key}>
          <PostUserMeta {...item.UserMeta}/>
          {item.Text}
        </FBBox>
      ))}
    </div>
  );
};

export default Main;
