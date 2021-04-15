import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Create } from "@material-ui/icons";
import ProfileInfo from "./ProfileInfo";
import "./scss/sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__listitem">
          <TwitterIcon className="nav__logo" />
        </li>

        <li className="nav__listitem nav__listitem-active">
          <HomeOutlinedIcon />
          <h2>Home</h2>
        </li>
        <li className="nav__listitem">
          <ExploreOutlinedIcon />
          <h2>Explore</h2>
        </li>
        <li className="nav__listitem">
          <NotificationsNoneIcon />
          <h2>Notifications</h2>
        </li>
        <li className="nav__listitem">
          <MailOutlineIcon />
          <h2>Messages</h2>
        </li>
        <li className="nav__listitem">
          <BookmarkBorderIcon />
          <h2>Bookmarks</h2>
        </li>
        <li className="nav__listitem">
          <ListAltOutlinedIcon />
          <h2>Lists</h2>
        </li>
        <li className="nav__listitem">
          <AccountCircleOutlinedIcon />
          <h2>Profile</h2>
        </li>
        <li className="nav__listitem">
          <MoreHorizOutlinedIcon />
          <h2>More</h2>
        </li>
      </ul>
      <div>
        <button type="button" className="nav__tweet-btn-mobile">
          <Create />
        </button>
        <button type="button" className="nav__tweet-btn">
          Tweet
        </button>
      </div>
      <div className="nav__profile">
        <ProfileInfo />
      </div>
    </nav>
  );
};

export default Sidebar;
