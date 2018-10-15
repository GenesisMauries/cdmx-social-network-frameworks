
    <div  className="card">
    {this.props.datas.map((data, i) =>
        <div key={i} className="card-body">
        {i + 1}. {data.post}
        <button onClick={() => this.props.fnDelete(i)} className="myListButton">Borrar </button>
        <button onClick={() => this.props.fnEdit(i)} className="myListButton">Editar </button>
        </div>
        )}
    </div>

    <div className="card bg-light mb-3" style="max-width: 18rem;">
    {this.props.datas.map((data, i) =>
  <div key={i} className="card-body">
    <p className="card-text">
    {data.post}
    </p>
  </div>
  )}
</div>