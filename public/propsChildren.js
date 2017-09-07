//Get children values from props
var Component1 = React.createClass({   //declareComponent //khai bao doi tuong
  render: function(){   //declate status //cac trang thai
    return(
      <div>
      <h1 > {this.props.ten} - {this.props.teacher} </h1>
        {this.props.children}


      </div>
    );
  }
});

ReactDOM.render(
  <div>
      <Component1 ten="React_course" teacher="Mr.Phu"> Stream 1</Component1>
      <Component1 ten="NodeJS_course" teacher="Mr.Nam"> Stream 2 </Component1>

  </div>

    , document.getElementById("root1") );
