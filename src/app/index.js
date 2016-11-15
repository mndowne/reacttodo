var React = require('react');
var ReactDOM = require('react-dom');
var TodoItem = require('./todoitem');
var AddItem = require('./additem');

require('./css/index.css');

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
        <TodoItem item={item} key={index} onDelete={this.onDelete} />
       );

    }.bind(this));

    return (
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
	<ul>{todos}</ul>
	<AddItem onAdd={this.onAdd}/>
      </div>
    );
  }, //render

  // FUNCTIONS
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !==val;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }

});





//put component into html page
ReactDOM.render(
  <TodoComponent />,
  document.getElementById('todo-wrapper')
);
