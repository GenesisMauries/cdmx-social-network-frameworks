import React, { Component } from 'react';
import './css/Post.css'

class Post extends Component {
    render() {
        console.log(this.props);
        return (
            <div  className="card">
    {this.props.datas.map((data, i) =>
        <div key={i} className="card-body">
        {i + 1}. {data.post}
        <button onClick={() => this.props.fnDelete(i)} className="myListButton">Borrar </button>
        <button onClick={() => this.props.fnEdit(i)} className="myListButton">Editar </button>
        </div>
        )}
    </div>
        )
    }
}

export default Post;