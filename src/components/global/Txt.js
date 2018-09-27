import React, { Component } from 'react';
// import { button , Form , FormControl } from 'react-bootstrap';
import './css/Txt.css'

class Txt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Agrego el titulo para jalarlo en el render
            title: '¿Qué te dio luz este día?',
            act: 0,
            index: '',
            datas: [],
        }
    }

    fCompartir = (e) => {
        e.preventDefault();
        // recibe datas del objeto del estado
        let datas = this.state.datas;
        // recibe el valor del textarea
        let post = this.refs.post.value;
        
        // si no hay cambio en el act se agrega algo al array
        if (this.state.act === 0) {
               // El valor de post entra en un objeto para guardarlo en datas del estado
            let data = {
                post
            }
            datas.push(data);
            console.log(this.state)
        } else {     
            //                  
            let index = this.state.index;
            datas[index].post = post;
            console.log(this.state)
        }

        // Se realiza el cambio del estado en cada 'push'
        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myPost.reset(); // Restaura los valores del formulario
        
    }

    fnDelete = (i) => {
        // 'Borrar ' es un splice dentro del array
        let datas = this.state.datas;
        datas.splice(i, 1);
        // Actualizacion del estado
        this.setState({
            datas: datas
        });

        this.refs.myPost.reset(); //método restaura los valores predeterminados de un elemento de formulario.
        
    }

    fnEdit = (i) => {
        let data = this.state.datas[i];
        // El campo se iguala al campo de entrada para que se actualice al compartir
        this.refs.post.value = data.post;
        this.setState({
            act: 1,
            index: i
        });
    }

    render() {
        let datas = this.state.datas;
        return (
            <div>
                <h2>{this.state.title}</h2>
                <form ref="myPost" className="myPost">
                    <input type="text" ref="post" placeholder="Escribelo aquí" className="myInput" />

                    <button onClick={(e) => this.fCompartir(e)} className="mybutton">Compartir</button>
                </form>
                <div>
                {/* Funcion para iterar los post */}
                    {datas.map((data, i) =>
                        <li key={i} className="myList">
                            {i + 1}. {data.post}
                            <button onClick={() => this.fnDelete(i)} className="myListButton">Borrar </button>
                            <button onClick={() => this.fnEdit(i)} className="myListButton">Editar </button>
                        </li>
                    )}
                </div>
            </div>
        );
    }
}




export default Txt;