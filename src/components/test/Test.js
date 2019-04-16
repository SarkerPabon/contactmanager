import React, { Component } from 'react'

class Test extends Component {

  state = {
    title: '',
    body: ''
  }

  // sencond most use life cycle hook (fetching data, ajax)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }))
  }

  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }

  // it's run when only component update
  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate...');
  // }

  // when component will receive new properties, then this is run. It's usually used in Redux
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps...');
  // }

  // add new life cycle (provably) and must return null or state
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'something'
  //   }
  //   // return null;
  // }

  // add new life cycle (provably)
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {

    const {title, body} = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}


export default Test;
