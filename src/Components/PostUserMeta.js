const PostUserMeta = ({Fullname, Avatar, ProfileURL, Location, DateTime}) => {
  return (
    <div className="PostUserMeta">
      <pre className="bg-light border rounded p-2">
        {JSON.stringify({Fullname,Avatar,ProfileURL,Location,DateTime}, null, 2)}
      </pre>
    </div>
  )
}

export default PostUserMeta
