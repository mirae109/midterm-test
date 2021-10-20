import React from 'react';

class App extends React.Component{
  state = {
    result : "과일"
   };

ap = () => {
  this.setStat( apre => ({
    result: "사과"
  }));
};

or = () => {
  this.setStat( orre => ({
    result: orre.or
  }));
};

ba = () => {
  this.setStat( bare => ({
    result: bare.ba
  }));
};

render(){
  return(
    <div>
      <h1>어떤 과일을 좋아하나요? {this.state.result}</h1>
      <button onClick={this.ap}> 사과 </button>
      <button onClick={this.or}> 오렌지 </button>
      <button onClick={this.ba}> 바나나 </button>
    </div>);
  }
}

export default App;
