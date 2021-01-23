import React from 'react';
import Character from '../Character/Character';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`

const Container = styled.div`
  padding: 0rem 1rem 1rem 1rem;
  border: solid 2px rgb(61, 61, 61);
  min-height: 100px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver? `rgb(61, 113, 255);` : `rgb(93, 225, 243);` };
`

const ListTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0rem;
`


class CharacterList extends React.Component{
  render() {
    return(
      <Wrapper className="Character-list">
        <header>
        <ListTitle>{`${this.props.show.title} Characters`}</ListTitle>
        </header>
        <Droppable
        droppableId={this.props.show.id}
        isDropDisabled={this.props.isDropDisabled}
        >
          {(provided, snapshot) => (
            <Container
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.characters.map((character, index) => {
                return (
                  <Character key={character.id}
                            id={character.id}
                            name={character.name}
                            picture={character.picture}
                            index={index} />
                )}
              )}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </Wrapper>
    )
  }
}

export default CharacterList;