const PostAttachment = ({ item }) => {
  return (
    item.Attachment && (
      <>
        {item.Type === "Picture" && (
          <div className="Image-post">
            <img src={item.Attachment} alt={item.Text} />
          </div>
        )}
        {item.Type === "Video" && (
          <div className="Embed-post">
            <div className="embed-container">
              <iframe
                src="https://www.youtube.com/embed/MxY-D0Yu8CY"
                title={item.Text}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </>
    )
  );
};

export default PostAttachment;
