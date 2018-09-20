import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth' // Da directamente los botenes y el acceso a la utenticacion

firebase.initializeApp ({
  apiKey: "AIzaSyBCu6E1u8eLveoO4RNeXkBdEbKVQfy8KXw",
  authDomain: "ejerciciocrud.firebaseapp.com",
  databaseURL: "https://ejerciciocrud.firebaseio.com",
  projectId: "ejerciciocrud",
  storageBucket: "ejerciciocrud.appspot.com",
  messagingSenderId: "430144992013"
});


class App extends Component {
  state={ isSingedIn : false}
  uiConfig = {
    signInFlow : 'popup',
    signInOptions : [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks : {
      signInSucess : () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSingedIn: !!user})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Aqui debe ir Lux</h1>
        </header>
        {this.state.isSingedIn ? (
        <span>
           <div>Hola</div>
           <h3>{firebase.auth().currentUser.displayName} Bienvenidx a Lux</h3>
           <img alt = "Foto de perfil" src = {firebase.auth().currentUser.photoURL}width = "10%" height = "10%"/>
           
           <button onClick = {() => firebase.auth().signOut()}>Salir</button> 
        </span>
           ):(
             <StyledFirebaseAuth
             uiConfig = {this.uiConfig}
             firebaseAuth={firebase.auth()}
             />
           )}
      </div>
    )
  }
}

export default App;
