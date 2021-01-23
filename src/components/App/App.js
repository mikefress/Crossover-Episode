import React from 'react';
import {initialData} from '../../util/S_U_data';
import styled from 'styled-components';
import ShowsList from '../ShowsList/ShowsList';
import { DragDropContext } from 'react-beautiful-dnd';

const Container = styled.div`
  text-align: center;
  background-color: rgb(152, 235, 157);
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: rgb(61, 61, 61);
`
const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  padding: 2rem;
  margin: 0;
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`
const Button = styled.button`
  margin: 2 rem;
  padding: 1rem;
  width: 20%;
  background-color: rgb(93, 225, 243);
  border-radius: 12px;
  font-size: 2rem;
  font-weight: bold;
  color: rgb(61, 61, 61);
`

const Link = styled.a`
  color: #11637a;
  margin: 3rem;
`

const Footer = styled.div`
  width: 100%;
  padding: 3rem 0rem;
  background-color: rgb(93, 225, 243);
  border-top: solid 2px rgb(61, 61, 61);
  margin-top: 4rem;
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = initialData;
    this.state = this.initialState;
  }

  onReset(e) {
    e.preventDefault();
    this.setState(this.initialState);
  }

  onDragStart = start => {
    const homeIndex = this.state.showsOrder.indexOf(start.source.droppableId);
    console.log(homeIndex)

    this.setState({
      homeIndex,
    });
  }

  onDragEnd = result => {
    const {destination, source, draggableId} = result;

    this.setState({
      homeIndex: null,
    });

    //console.log(result)

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = this.state.shows[source.droppableId]
    const finish = this.state.shows[destination.droppableId]

    // Moving in the same list
    if (start === finish) {
      const reorderedItems = Array.from(start.characterIds);
      reorderedItems.splice(source.index, 1);
      reorderedItems.splice(destination.index, 0, draggableId);

      const newItems = {
        ...start,
        characterIds: reorderedItems
      }

      const newState = {
        ...this.state,
        shows: {
          ...this.state.shows,
          [newItems.id]: newItems
        }
      }

      this.setState(newState)
      return;
    }

    // Moving between different lists
    const startCharacterIds = Array.from(start.characterIds);
    startCharacterIds.splice(source.index, 1);
    const newStart = {
      ...start,
      characterIds: startCharacterIds,
    }

    const finishCharacterIds = Array.from(finish.characterIds);
    finishCharacterIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      characterIds: finishCharacterIds,
    }

    const newState = {
      ...this.state,
      shows: {
        ...this.state.shows,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      }
    }

    this.setState(newState)
    return;
  }

  render() {
    return(
        <Container className="App">
          <header className="App-header">
            <Title>
              Crossover Episode!
            </Title>
          </header>
          <Wrapper>
            <DragDropContext
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
            >
              <ShowsList showsOrder={this.state.showsOrder} shows={this.state.shows} characters={this.state.characters} homeIndex={this.state.homeIndex} />
            </DragDropContext>
          </Wrapper>
          <Button
            type="button"
            onClick={this.onReset.bind(this)}  >
              Start Over!
          </Button>
          <Footer className="App-footer">
              <Link
                className="App-link"
                href="https://steven-universe.fandom.com/wiki/Category:Characters"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about these characters here.
              </Link>
          </Footer>

        </Container>
    )
  }

}

export default App;
