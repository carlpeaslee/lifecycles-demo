import React, {Component} from 'react'
import styled from 'styled-components'

export const logLifecycles = (Wrapped) => {

  let methods = ['constructor', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount']

  let oldMethods = {}

  methods.forEach( (method) => {
    if (Wrapped.prototype[method]) {
      oldMethods[method] = Wrapped.prototype[method]
    }
    Wrapped.prototype[method] = function () {
      console.groupCollapsed(`${Wrapped.displayName} ${method}`)
      let oldFunction = oldMethods[method]
      if (method === 'componentWillReceiveProps' || 'shouldComponentUpdate'|| 'componentWillUpdate') {
        console.log('nextProps', arguments[0])
      }
      if (method === 'shouldComponentUpdate'|| 'componentWillUpdate') {
        console.log('nextState', arguments[1])
      }
      if (method === 'componentDidUpdate') {
        console.log('prevProps', arguments[0])
        console.log('prevState', arguments[1])
      }
      console.groupEnd()
      if (oldFunction) {
        oldFunction = oldFunction.bind(this)
        oldFunction(...arguments)
      }
      if (method === 'shouldComponentUpdate' && typeof oldFunction === 'undefined') {
        return true
      }
    }
  })


  Wrapped.prototype.setState = function (partialState, callback) {
    console.groupCollapsed(`${Wrapped.displayName} setState`)
    console.log('partialState', partialState)
    console.log('callback', callback)
    console.groupEnd()
    this.updater.enqueueSetState(this, partialState, callback, 'setState')
  }


  return class extends Component {

    static displayName = "Logger"

    render() {
      return (
        <Wrapped
          {...this.props}
        />
      )
    }
  }

}


class ParentComponent extends Component {


  static displayName = "Parent"

  state = {
    random: Math.random(),
    showChild: true
  }

  newRandom = () => {
    this.setState({random: Math.random()})
  }

  toggleChild = () => {
    this.setState((prevState) => {
      return {
        showChild: !prevState.showChild
      }
    })
  }

  render() {
    let {showChild} = this.state
    return (
      <ParentContainer>
        <h2>Parent</h2>
        <button
          onClick={this.newRandom}
        >
          Pass New Props
        </button>

        <button
          onClick={this.toggleChild}
        >
           {(showChild) ? "Hide" : "Show"} child
        </button>

        <h3>this.state.random {this.state.random}</h3>

        {
          (showChild) ? (
            <WrappedChild
              random={this.state.random}
            />
          ):
          (
            null
          )
        }


      </ParentContainer>
    )
  }
}

class ChildComponent extends Component {

  static displayName = "Child"

  constructor(props) {
    super(props)
    this.timer = setInterval(
      ()=>{
        console.log("timer")
      },
      3000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <ChildContainer>
        <h3>Child</h3>
        <h4>this.props.random: {this.props.random}</h4>
      </ChildContainer>
    )
  }
}

const WrappedChild = logLifecycles(ChildComponent)

export const LoggerExample = logLifecycles(ParentComponent)


const ParentContainer = styled.div`
  width: 50%;
  height: 500px;
  margin: auto;
  background-color: salmon;
  display: flex;
  align-items: flex-start;
`

const ChildContainer = styled.div`
  width: 50%;
  height: 300px;
  margin: auto;
  background-color: lightgreen;
  align-self: center;
`
