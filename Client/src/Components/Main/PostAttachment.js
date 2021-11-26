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
            <div class="embed-container">
              <iframe
                src="https://www.youtube.com/embed/MxY-D0Yu8CY"
                title={item.Text}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </>
    )
  );
};

export default PostAttachment;
