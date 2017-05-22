import React, {Component} from 'react'
import hljs from 'highlight.js'
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document} from './styled'
import {getRandomPoem, random} from './utils'
import Perf from 'react-addons-perf'


export default class PlotCool extends Component {


  componentDidUpdate() {
    Perf.stop()
    Perf.printWasted()
  }

  static displayName = 'PlotCool'

  state = {
    editor: '',
    rules: 1,
    name0: '',
    begin0: '',
    end0: '',
    style0: '',
  }

  componentWillUpdate(nextProps, nextState) {
    this.registerLanguage(nextState)
  }


  convertToMarkup = (value) => {
    let div = document.createElement("div")
    let text = document.createTextNode(value)
    div.appendChild(text)
    let {value: __html} = hljs.highlightAuto(div.innerHTML)
    return {
      __html
    }
  }

  tab = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault()
      let firstPart = e.target.value.substring(0, e.target.selectionStart).concat('\t')
      let secondPart = e.target.value.substring(e.target.selectionEnd)
      e.target.value = firstPart.concat(secondPart)
      this.handleChange(e)
    }
  }


  handleChange = (event) => {
    Perf.start()
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  language = (newRules) => {
    return () => ({
      contains: [
        ...newRules
      ]
    })
  }

  get rules() {
    let {rules} = this.state
    let array = []
    let fields = ['name', 'begin', 'end']
    for (let i = 0; i < rules; i++) {
      array.push(
        <Row
          key={i}
        >
          <Column>
            {fields.map( (field, index) => {
              return (
                <Column
                  key={`${field}${index}`}
                >
                  <RuleLabel>
                    {field}
                  </RuleLabel>
                  <RuleInput
                    value={this.state[`${field}${i}`]}
                    onChange={this.handleChange}
                    name={`${field}${i}`}
                  />
                </Column>
              )
            })}
          </Column>
          <StyleInput
            value={this.state[`style${i}`]}
            onChange={this.handleChange}
            name={`style${i}`}
          />
        </Row>
      )
    }


    return array
  }

  newField = () => {
    this.setState( (prevState) => {
      let {rules} = prevState
      let fields = ['name', 'begin', 'end', 'style']
      let inputValues = {}
      fields.forEach( (field) => {
        inputValues = {
          ...inputValues,
          [`${field}${rules}`]: ''
        }
      })
      rules++
      return {
        rules,
        ...inputValues
      }
    })
  }

  registerLanguage = (state) => {
    let {rules} = state
    let ruleObjects = []
    for (let i = 0; i < rules; i++) {
      let newRule = {
        className: state[`name${i}`],
        begin: state[`begin${i}`],
        end: state[`end${i}`]
      }
      let {className, begin, end} = newRule
      if (
        className.length > 1 &&
        begin.length > 1 &&
        end.length > 1
      ) {
        begin = new RegExp(begin)
        end = new RegExp(end)
        ruleObjects.push(newRule)
      }
    }
    hljs.registerLanguage('language' , this.language(ruleObjects))
    hljs.configure({
      languages: ['language'],
      useBr: true
    })
  }

  prepareStyles = () => {
    let {rules} = this.state
    let styles = []
    for (let i = 0; i < rules; i ++) {
      styles.push(`
        .hljs-${this.state['name'+i]} {
          ${this.state['style'+i]}
        }
      `)
    }

    let newStyles = "".concat(styles)

    while (newStyles.includes('random')) {
      newStyles = newStyles.replace('random', random.color())
    }


    return newStyles
  }

  getRandomText = async () => {
    try {
      let poem = await getRandomPoem()
      this.handleChange({
        target: {
          name: 'editor',
          value: poem
        }
      })
    } catch (e) {
      console.log("getRandomText error", e)
      this.handleChange({
        target: {
          name: 'editor',
          value: `Sorry! Our random text API isn't working right now!`
        }
      })
    }
  }


  render() {
    let {rules, newField, getRandomText, handleChange, tab, convertToMarkup, prepareStyles} = this
    let {editor} = this.state
    return (
      <Container>
        <Column>
          {rules}
          <Button
            onClick={newField}
          >
            New Rule
          </Button>
        </Column>
        <Column>
          <Button
            onClick={getRandomText}
          >
            Random Text
          </Button>
          <Document>
            <Editor
              name={"editor"}
              value={editor}
              onChange={handleChange}
              onKeyDown={tab}
            />
            <Markup
              dangerouslySetInnerHTML={convertToMarkup(editor)}
              customStyles={prepareStyles()}
            />
          </Document>
        </Column>
      </Container>
    )
  }
}
