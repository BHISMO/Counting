import React, {Component} from 'react';  
import './App.css';

class App extends Component{
  constructor (){
    super();
    this.state = {
      number : null,
      isi : null
    }
  }
  changeisi = (event) => {  
    this.setState({isi: event.target.value});  
}  
    
  SubmitRs(e){//ketika button di kilik
    e.preventDefault();
      let number=parseInt(this.refs.number.value)
      let isi=parseInt(this.refs.isi.value)
      isi = 0
      this.setState({number,isi});
      this.refs.number.value=0;
  }

  render(){//output
    return(
      <div>
          <form className="box" onSubmit={this.SubmitRs.bind(this)}>
            <input ref="number" type="number" onChange={this.changeisi}></input>
            <button >Reset</button>
          </form>
          <div className="kotak">
            <span ref="isi" >Number = {this.state.isi}</span>
          </div>
    </div>
    );
  }
}
export default App;