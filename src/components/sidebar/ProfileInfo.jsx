import Avatar from "@material-ui/core/Avatar";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import "./scss/profileinfo.scss";

const ProfileInfo = () => {
  return (
    <div className="profile">
      <Avatar>VA</Avatar>
      <div className="profile__user">
        <p className="profile__user_name">Vivek Alhat</p>
        <p className="profile__user_username">@crypticmedusa</p>
      </div>
      <MoreHorizOutlinedIcon className="moreIcon" />
    </div>
  );
};

export default ProfileInfo;
