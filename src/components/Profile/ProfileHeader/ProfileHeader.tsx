import "./profileHeader.scss";
import {useSelector} from "react-redux";
import React, {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {userUpdate} from "../../../actions/user.action.ts";

const ProfileHeader: React.FC = () => {
    const [editName, setEditName] = useState<boolean>(false)
    const firstNameIpt = useRef<HTMLInputElement>(null);
    const lastNameIpt = useRef<HTMLInputElement>(null);

    const user = useSelector(state => state.userReducer.user)


    const dispatch = useDispatch()

    const handleChangeName = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        setEditName(false)

        const data = {
            firstName: firstNameIpt.current?.value !== "" ? firstNameIpt.current?.value : user?.firstName,
            lastName: lastNameIpt.current?.value !== "" ? lastNameIpt.current?.value : user?.lastName
        }

        if (firstNameIpt.current?.value !== "" || lastNameIpt.current?.value !== "") {
            dispatch(userUpdate(data))
        }
    }
    return (
        <section className="profile__header">
            <h1 className="profile__header__title">Welcome back <br/> {user?.firstName} {user?.lastName} !</h1>
            {!editName ?
                <button className="profile__header__button" onClick={() => setEditName(true)}>Edit Name</button>
                :
                <form className="profile__header__form" onSubmit={(e) => handleChangeName(e)}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" placeholder={user?.firstName}
                               ref={firstNameIpt}/>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" placeholder={user?.lastName}
                               ref={lastNameIpt}/>
                    </div>
                    <div>
                        <button className="profile__header__button" type="submit">Save</button>
                        <button className="profile__header__button" onClick={() => setEditName(false)}>Cancel</button>
                    </div>
                </form>
            }
        </section>
    );
};

export default ProfileHeader;
