## 我现在有4个div，ref为page1,2,3,4，，我要根据curIndex值获得这真实DOM节点
![problem](problem1.png)    
### 解决办法    
使用箭头函数传参    
![answer](problem2.png)    
并使用字符串模板获得参数   
```
var curPage = ReactDOM.findDOMNode(this[`_page${curIndex}`]);
```
