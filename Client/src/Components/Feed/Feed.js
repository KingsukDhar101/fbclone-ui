import FBBox from "../ServiceComponents/FBBox";
import Card from "../ServiceComponents/Card";

const Feed = ({ Birthdays, Pages, NewsFeed }) => {
  return (
    <div className="col-3 Feed">
      <FBBox>
        <div className="BirthdayContainer">
          <img src="/Icons/Gift.png" alt="Gift" />
          {Birthdays.map((user) => (
            <>
              <a href={user.ProfileURL}>{user.Fullname}</a>
              {", "}
            </>
          ))}
          and 3 others.
        </div>
      </FBBox>

      {Pages.length > 0 && (
        <FBBox>
          <div className="PagesContainer">
            <h4>
              Your Pages <span>({Pages.length})</span>
            </h4>
            <ul>
              {Pages.map((page) => (
                <li key={page.Avatar}>
                  <img src={page.Avatar} alt={page.Name} />
                  <div className="PageMeta">
                    <a href={page.PageURL} className="PageMeta-Heading">
                      <strong>{page.Name}</strong>
                    </a>
                    <a href="/">
                      <img src="/Icons/Messenger.png" alt="Messages" />
                      Messages ({page.MessageCount})
                    </a>
                    <a href="/">
                      <img src="/Icons/Notification.png" alt="Notification" />
                      Notifications ({page.NotificationCount})
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FBBox>
      )}

      {NewsFeed.length && (
        <FBBox>
          <div className="FeedsContainer">
            <h4>News Feed</h4>
            <ul>
              {NewsFeed.map((card, key) => (
                <li key={key}>
                  <Card Image={card.Image} ImgAlign="top">
                    <a href={card.NewsLink}>{card.Title}</a>
                    <p className="m-0 text-muted">
                      Posted
                      <abbr title={card.DatePosted}>today</abbr>
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </FBBox>
      )}
    </div>
  );
};

export default Feed;
