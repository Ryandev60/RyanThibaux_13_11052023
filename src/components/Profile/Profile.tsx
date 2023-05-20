import ProfileHeader from "./ProfileHeader/ProfileHeader.tsx";
import "./profile.scss";
import ProfileAccount from "./ProfileAccount/ProfileAccount.tsx";

const Profile = () => {
    return (
        <main className="profile">
            <ProfileHeader/>
            <ProfileAccount/>
        </main>
    );
};

export default Profile;
