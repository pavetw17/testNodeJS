function getName(){
  alert(123);
}

function getName1(name){
  alert(name);
}

var Component1 = React.createClass({   //declareComponent //khai bao doi tuong
  getInformation: function(){
    alert(this.props.children);
  },

  render: function(){   //declate status //cac trang thai
    return(
      <div>
      <h1 > {this.props.course} - {this.props.teacher} </h1>
        <p>{this.props.children}</p>
        <button onClick={getName}> Press Button 1 </button>
        <button onClick={()=>{getName1(this.props.course)}}> Press Button 2 </button>
        <button onClick={()=>{
          var str = this.props.course + ' ' + this.props.teacher;
          getName1(str)}}> Press Button 3 </button>

      </div>
    );
  }
});

ReactDOM.render(
  <div>
      <Component1 course="React_course" teacher="Mr.Phu"> Stream 1</Component1>
      <Component1 course="NodeJS_course" teacher="Mr.Nam"> Stream 2 </Component1>

  </div>

    , document.getElementById("root1") );
