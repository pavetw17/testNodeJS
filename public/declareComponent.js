var Component1 = React.createClass({   //declareComponent //khai bao doi tuong
  render: function(){   //declate status //cac trang thai
    return(
      <div>
      <h1 > Test component 1 </h1>
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
      <Component1 />

  </div>

    , document.getElementById("root1") );
