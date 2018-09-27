import React, { Component } from 'react';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth' // Da directamente los botenes y el acceso a la utenticacion y StyledFirebaseAuth redireccina al inicio de sesion y se liga directamente con css
import Txt from './Txt'
// import Post from './Post'
import logotipo from './img/logotipo-lux-login.png'
import '../App.css';


firebase.initializeApp({
  apiKey: "AIzaSyBCu6E1u8eLveoO4RNeXkBdEbKVQfy8KXw",
  authDomain: "ejerciciocrud.firebaseapp.com",
  databaseURL: "https://ejerciciocrud.firebaseio.com",
  projectId: "ejerciciocrud",
  storageBucket: "ejerciciocrud.appspot.com",
  messagingSenderId: "430144992013"
});


class Login extends Component {
  state = { isSingedIn: false }
  uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSucess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSingedIn: !!user })
    })
  }

  render() {
    return (
      <div className="App">
        <div >
          <img alt="Lux" src={logotipo} width="40%" height="50%" />
          <h3>"No hay logro pequeño, ni paso que no cuente."</h3>
          <p>Encuentra en LUX un espacio seguro y la motivación para atravesar esos momentos difíciles, al leer y compartir las pequeñas metas que iluminan tu día a día.</p>
        </div>
        {this.state.isSingedIn ? (
          <div>
            <div>Hola</div>
            <h3>{firebase.auth().currentUser.displayName} Bienvenidx a Lux</h3>
            <img alt="Foto de perfil" src={firebase.auth().currentUser.photoURL} width="10%" height="10%" />
            <button onClick={() => firebase.auth().signOut()}>Salir</button>
            <div>
              <Txt />
              {/* <Post /> */}
            </div>
          </div>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      </div>
    )
  }
}

export default Login;
