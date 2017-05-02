import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './demo1.css'
class Demo1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      curIndex : 1
    };
    this.next = this.next.bind(this);
    this.previous = this.next.bind(this);
  }


  next(){
    console.log(this.page);
  //  var curPage = ReactDOM.findDOMNode(this.refs.page3);
  var curPage = document.getElementById("page"+this.state.curIndex);
    curPage.style.WebkitTransform = "rotateX(-90deg)";
    var curIndex = this.state.curIndex + 1;
    this.setState({curIndex: curIndex });
    var nextPage = ReactDOM.findDOMNode(this.refs.page2);
    nextPage.style.WebkitTransform = "rotateX(0deg)";
  }

  previous(){

  }
  render(){

    return (
      <div id="demo1">
      <div id="my3Dpages">
        <div className="page" id="page1" ref="page1">1</div>
        <div className="page" id="page2" ref="page2">2</div>
        <div className="page" id="page3" ref="page3">3</div>
        <div className="page" id="page4" ref="page4">4</div>
      </div>
        <div id="op">
          <a onClick={this.next}>next</a>&nbsp;&nbsp;&nbsp;
          <a href={this.previous}>previous</a>
        </div>
      </div>

    );
  }

}

export default Demo1;
