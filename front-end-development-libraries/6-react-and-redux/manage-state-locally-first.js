class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    const input = e.target.value; // must be assigned outside of setstate due to event pooling
    this.setState(prev => ({
      input,
      messages: [...prev.messages]
    }));
  }

  submitMessage() {
    this.setState(prev => ({
      input: '',
      messages: [...prev.messages, prev.input]
    }));
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.submitMessage}>Add message</button>
        <ul>{this.state.messages.map((message,index) => <li key={index}>{message}</li>)}</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};