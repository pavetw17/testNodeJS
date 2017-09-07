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
  getInitialState(){
    return {totalStudents: this.props.totalStudents};
  },
  addStudent(){
    this.state.totalStudents = parseInt(this.state.totalStudents) + 1
    this.setState(this.state);
  },

  render: function(){   //declate status //cac trang thai // can rewrite render()
    return(
      <div>
      <h1 > {this.props.course} - {this.props.teacher} </h1>
        <p>{this.props.children}</p>

        <p>Total students:{this.state.totalStudents}</p>


        <button onClick={getName}> Alert </button>
        <button onClick={this.addStudent}> Add a student </button>
        <button onClick={()=>{getName1(this.props.course)}}> Press Button Course </button>
        <button onClick={()=>{
          var str = this.props.course + ' ' + this.props.teacher;
          getName1(str)}}> Press Button 3 </button>

      </div>
    );
  }
});

ReactDOM.render(
  <div>
      <Component1 course="React_course" teacher="Mr.Phu" totalStudents="10"> Stream 1</Component1>
      <Component1 course="NodeJS_course" teacher="Mr.Nam" totalStudents="20">> Stream 2 </Component1>

  </div>

    , document.getElementById("root1") );
