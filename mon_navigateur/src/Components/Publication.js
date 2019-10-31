import React from "react";

class Publication extends React.Component{
    render() {
        return(
            <div id={"publication"}>
                <article>
                    <p>Lorem ipsum</p>
                </article>

                <aside>
                    <div>
                        <img src={"ghj"}/>
                        <p>C'est super !</p>
                    </div>
                </aside>
            </div>
        );
    }


}
export default Publication;