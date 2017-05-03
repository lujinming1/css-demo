import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './demo1.css'
class Demo1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      curIndex : 0
    };
    this.next = this.next.bind(this);
    this.previous = this.next.bind(this);
  }


  next(event){
    var curIndex = this.state.curIndex;

    var curPage = ReactDOM.findDOMNode(this[`_page${curIndex}`]);
    curPage.style.WebkitTransform = "rotateX(-90deg)";
    curIndex = (curIndex + 1)%4;
    this.setState({curIndex : curIndex });

    var nextPage = ReactDOM.findDOMNode(this[`_page${curIndex}`]);
    nextPage.style.WebkitTransform = "rotateX(0deg)";

    event.stopPropagation();
    event.preventDefault();
  }

  previous(){

  }
  render(){

    return (
      <div id="demo1">
      <div id="my3Dpages">
        <div className="page" id="page1" ref={(c) => this._page0 = c}>1</div>
        <div className="page" id="page2" ref={(c) => this._page1 = c}>2</div>
        <div className="page" id="page3" ref={(c) => this._page2 = c}>3</div>
        <div className="page" id="page4" ref={(c) => this._page3 = c}>4</div>
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
