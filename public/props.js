var Component1 = React.createClass({   //declareComponent //khai bao doi tuong
  render: function(){   //declate status //cac trang thai
    return(
      <div>
      <h1 > {this.props.ten} - {this.props.teacher} </h1>
         <NestedComponent />

      </div>
    );
  }
});


var NestedComponent  = React.createClass({   //nestedComponent  //khai bao doi tuong
  render: function(){   //declate status //cac trang thai
    return(
      <div>
              <h3 > child component </h3>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
      <Component1 ten="React_course" teacher="Mr.Phu"/>
      <Component1 ten="NodeJS_course" teacher="Mr.Nam"/>

  </div>

    , document.getElementById("root1") );
