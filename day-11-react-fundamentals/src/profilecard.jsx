// ProfileCard — name, role, avatar, bio passed as props.
import React from 'react';
function ProfileCard({ name, role, avatar, bio }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <h3 className="profile-role">{role}</h3>
      <p className="profile-bio">{bio}</p>
    </div>
  );
}
export default ProfileCard;