import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-around;
`
Container.displayName = "Container"

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
Column.displayName = "Column"


const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`
Row.displayName = "Row"

export const RuleInput = styled.input`
  padding: 5px;
`

export const RuleLabel = styled.label`
`

export const StyleInput = styled.textarea`
  margin: 0;
  border: 0;
  padding: 5px;
`

export const Button = styled.button`

`

export const Document = styled.div`
  display: flex;
  width: 550px;
  height: 800px;
  padding: 10px;
  border: 1px solid black;
`


const Markup = styled.div`
  height: 100%;
  width: 100%;
  color: blue;
  font-size: 18px;
  line-height: 18px;
  font-family: monospace;
  white-space: pre-wrap;
  ${({customStyles}) => customStyles}
`
Markup.displayName = "Markup"

const Editor = styled.textarea`
  position: absolute;
  margin: 0;
  border: 0;
  padding: 0;
  width: 550px;
  height: 800px;
  color: transparent;
  z-index: 1;
  outline: 0;
  background-color: transparent;
  font-size: 18px;
  line-height: 18px;
  font-family: monospace;
  caret-color: black;
`
Editor.displayName = "Editor"

export {Markup, Editor, Container, Column, Row}
