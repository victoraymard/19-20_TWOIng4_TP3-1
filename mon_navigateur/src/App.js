import React, { Component } from 'react';
import './App.css';
import Profile from'./Components/Profile.js'
import Publication from "./Components/Publication";
//import {Link} from "react-router-dom";

import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/*    import des photos    */
import profile_picture_0 from './img/profile_picture_0.jpg'
import profile_picture_1 from './img/profile_picture_1.jpg'
import profile_picture_2 from './img/profile_picture_2.PNG'



function App() {
    /*------------------------ const ----------------------------------*/
        /*         components          */
    const Accueil = () => <FUser/>
    const Profile_0 = () =>
        <FUser
            fUser_firstName={profils[0].prenom}
            fUser_familyName={profils[0].nom}
            fUser_birthdate={profils[0].date_de_naissance}
            fUser_profilePicture={profils[0].photo_de_profile}
        />;

    const Profile_1 = () =>
        <FUser
            fUser_firstName={profils[1].prenom}
            fUser_familyName={profils[1].nom}
            fUser_birthdate={profils[1].date_de_naissance}
            fUser_profilePicture={profils[1].photo_de_profile}
        />;

    const Profile_2 = () =>
        <FUser
            fUser_firstName={profils[2].prenom}
            fUser_familyName={profils[2].nom}
            fUser_birthdate={profils[2].date_de_naissance}
            fUser_profilePicture={profils[2].photo_de_profile}
        />;




    const Nav = () => (
        <div>
            <Link to="/profile_0"><DisplayUserName userName={profils[0].prenom}/></Link>
            <Link to="/profile_1"><DisplayUserName userName={profils[1].prenom}/></Link>
            <Link to="/profile_2"><DisplayUserName userName={profils[2].prenom}/></Link>
        </div>
    );

        /*            données des différents profils           */
    const profils = [
        {
            nom: 'Dupont',
            prenom: 'Jeanne',
            date_de_naissance: '02.03.1997',
            photo_de_profile: profile_picture_0,
            publication:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque lacus. Nulla porta ' +
                        'nunc at aliquam tristique. In ut varius odio. Aenean tellus dui, aliquet et leo et,' +
                        ' venenatis varius erat. Jeanne',
            compteur_c_est_super:0
        },
        {
            nom: 'Martin',
            prenom: 'Martine',
            date_de_naissance: '03.10.1902',
            photo_de_profile: profile_picture_1,
            publication:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque lacus. Nulla porta ' +
                'nunc at aliquam tristique. In ut varius odio. Aenean tellus dui, aliquet et leo et,' +
                ' venenatis varius erat. Martine',
            compteur_c_est_super:0
        },
        {
            nom: 'Palehun',
            prenom: 'Claude',
            date_de_naissance: '02.03.1997',
            photo_de_profile: profile_picture_2,
            publication:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque lacus. Nulla porta ' +
                'nunc at aliquam tristique. In ut varius odio. Aenean tellus dui, aliquet et leo et,' +
                ' venenatis varius erat. Claude',
            compteur_c_est_super:0
        }
    ];


    /*------------------------ return ----------------------------------*/
  return (
    <container className="App">

          <Router>

              <header>
                  <Nav />
              </header>

              <body>
                  <Route exact path="/" component={Accueil} />
                  <Route  path="/profile_0" component={Profile_0} />
                  <Route  path="/profile_1" component={Profile_1} />
                  <Route  path="/profile_2" component={Profile_2} />
              </body>


          </Router>
    </container>
  );





    /*------------------------ function component ----------------------------------*/

  function FUser({fUser_firstName = 'Prénom', fUser_familyName = 'nom',fUser_birthdate ='date de naissance',
                     fUser_profilePicture='./img/profile_picture.png' }){
      return <div>
          <FProfile
              firstName={fUser_firstName}
              familyName={fUser_familyName}
              birthdate={fUser_birthdate}
              profilePicture={fUser_profilePicture}
          />

          <FPublication/>
      </div>

  }

    function FProfile({firstName = 'Prénom', familyName = 'nom', birthdate ='date de naissance', profilePicture='./img/profile_picture_0.PNG' }) {
        return <div id={"profile"}>
            <img src={ (profilePicture)}/>

            <article>
                <div id={"nameAndFirstName"} >
                    <p>{firstName}</p>
                    <p>{familyName}</p>
                </div>

                <div >
                    <p>{birthdate}</p>
                </div>
            </article>

            <aside>
                <button>change style !</button>
            </aside>
        </div>
    }

    /* utiliser le compteur pour le bonus*/
    function FPublication({textPublication = "Lorem ipsum dolor sit amet", counter = 0}) {
        return <div id={"publication"}>
                    <article>
                        <p>{textPublication}</p>
                    </article>

                    <aside>
                        <button id={"cSuper"} onClick={() => console.log(`Bonjour !`)}>
                            <img id={"thumb"} src={require("./img/thumb.png")}/>
                            <p>C'est super !</p>
                        </button>
                    </aside>
                </div>
    }


  function User({ name = 'Cool' })
    {
        return <a href={'#'}>Youpi {name} !</a>
    }

    function DisplayUserName({userName = 'username'}) {
        return <p>{userName}</p>
    }



}

export default App;


/*<User name = {'Jeanne'}/>
          <User name={'Martine'}/>
          <User name={'Claude'}/>*/

/* TODO: automatiser l'affichage des profils via des boucles for*/