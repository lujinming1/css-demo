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
    this.previous = this.previous.bind(this);
  }


  next(event){
    var curIndex = this.state.curIndex;

    var curPage = ReactDOM.findDOMNode(this[`_page${curIndex}`]);
    curPage.style.WebkitTransform = "rotateX(-91deg)";
    curPage.style.zIndex = 11;
    curIndex = (curIndex + 1)%4;

    var nextPage = ReactDOM.findDOMNode(this[`_page${curIndex}`]);
    nextPage.style.WebkitTransform = "rotateX(0deg)";
    nextPage.style.zIndex = 101;
    this.setState({curIndex : curIndex });
    event.stopPropagation();
    event.preventDefault();
  }

  previous(event){

    var curIndex = this.state.curIndex;
    var curPage = ReactDOM.findDOMNode(this[`_page${curIndex}`]);
    curPage.style.transform = "rotateX(90deg)";
    curPage.style.zIndex = 11;
    curIndex = (curIndex - 1 + 4) % 4;
    var nextPage = ReactDOM.findDOMNode(this[`_page${curIndex}`]);
    nextPage.style.transform = "rotateX(0deg)";
    nextPage.style.zIndex = 101;
    this.setState({curIndex : curIndex});

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
          <span onClick={this.next}>next</span>&nbsp;&nbsp;&nbsp;
          <span onClick={this.previous}>previous</span>
        </div>
      </div>

    );
  }

}

export default Demo1;
