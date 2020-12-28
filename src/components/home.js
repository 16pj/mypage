import React from 'react';
// import ReactDOM from 'react-dom';

export default class Home extends React.Component{

    constructor(props){
      super(props);
      this.state = {
          color: "Marange",
          name: "Tiago",
          model: "tata"
        };
    }

    changeColor = () => {
        this.setState({color: "Purple"});
    }

    shouldComponentUpdate() {
        return true
    }



    componentDidMount(){
        setTimeout(()=>{
            this.setState({color: "Violet"})
        }, 3000)
    }
  
    render(){
        return <div><h3> Hi! I am a {this.state.color} colored {this.state.model} {this.state.name} HOME!</h3>
        <button type="button" onClick={this.changeColor}>
            Change Color
            </button>
        </div>;
    }
  }


// export default class Home extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h3>Home</h3>
//             </div>
//         );
//     }
// }