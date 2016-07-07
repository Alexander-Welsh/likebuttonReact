import React from 'react';

export default React.createClass({
  getDefaultProps: function () {
    return {
      count: 0, 
      like: "likes"
    }
  },
  getInitialState: function () {
    return {
      count: this.props.count,
      like: this.props.like
    }
  },
  doThis: function() {
    this.setState({
      count: this.state.count + 1 

     });


    if (this.state.count === 0){
      this.setState({
        like: "like"
      })
    }else{
      this.setState({
        like:"likes"
      })
    }
    
    
  },
    render: function () {
    return (
      <div id="bla">
        <button onClick={this.doThis}>{this.state.count} {this.state.like} </button>
      </div>
    )
  }
})