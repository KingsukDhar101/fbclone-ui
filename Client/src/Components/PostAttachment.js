const PostAttachment = ({ item }) => {
  return (
    item.Attachment && (
      <>
        {item.Type === "Picture" && (
          <img src={item.Attachment} alt={item.Text} />
        )}
        {item.Type === "Video" && (
          <div class="embed-container">
            <iframe
              src="https://www.youtube.com/embed/MxY-D0Yu8CY"
              title={item.Text}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </>
    )
  );
};

export default PostAttachment;
