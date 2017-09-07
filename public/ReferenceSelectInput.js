
var InputTag = React.createClass({
    show(){
      // var text = this.refs.txt.value;
      var text = this.refs.sl.value;
      alert(text);
    },

    render(){
      return (
        <div>
          <select ref="sl">
            <option value="a">AAA </option>
            <option value="b">BBB </option>
            <option value="c">CCC </option>
          </select>
          <input type="text" ref="txt"/>
          <button onClick={this.show}>Show value</button>
        </div>
      );
    }
});




ReactDOM.render(
  <div>
      <InputTag />

  </div>

    , document.getElementById("root1") );
