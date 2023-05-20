import "./profileHeader.scss";
import {useSelector} from "react-redux";
import React, {useState} from "react";

const ProfileHeader: React.FC = () => {
    const [editName, setEditName] = useState<boolean>(false)

    const user = useSelector(state => state.userReducer.user)
    return (
        <section className="profile__header">
            <h1 className="profile__header__title">Welcome back <br/> {user?.firstName} {user?.lastName} !</h1>
            {!editName &&
                <button className="profile__header__button">Edit Name</button>
            }
        </section>
    );
};

export default ProfileHeader;
