import React from "react";

class Profile extends React.Component{
    render() {
        return(
            <div id={"profile"}>
                <img src={"./img/profile_picture.png"}/>

                <article>
                    <div id={"nameAndFirstName"} >
                        <p>prénom</p>
                        <p>nom</p>
                    </div>

                    <div >
                        <p>date de naissance</p>
                    </div>
                </article>

                <aside>
                    <button>change style !</button>
                </aside>
            </div>
        );
    }


}
export default Profile;