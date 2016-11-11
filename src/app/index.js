var React = require('react');
var ReactDOM = require('react-dom');

//create component
var TodoComponent = React.createClass({
  getInitialState: function () {
    return {
      todos: ['wash up', 'eat some beans', 'take a nap','buy flowers'],
      }
  },
  
  render: function() {
    var todos = this.state.todos;
    todos = todos.map(function(item,index){
      return (
        <li>{item}!</li>
       );
    });

    return (
      <div>
        <p>The busiest people have the most liesure...</p>
	<p>{this.state.age}</p>
	<ul>
	  {todos}
	</ul>
      </div>
    );
  }//render
});



var myBeans = {
  name: "great northern",
  smellFactor: "Extreme pong",
  price: "3.50"
  };

//put component into html page
ReactDOM.render(
  <TodoComponent mssg="I like beans" beans={myBeans} />,
  document.getElementById('todo-wrapper')
);
