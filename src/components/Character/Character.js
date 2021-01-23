import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  color: rgb(61, 61, 61);
  margin: 1rem;
  height: auto;
  display: flex;
  align-items: center;
  padding: .5rem;
  border: solid 2px rgb(61, 61, 61);
  border-radius: 4px;
  transition: box-shadow .2s;
  font-weight: bold;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDragging? `rgb(124, 236, 201)` : `rgb(230, 231, 138)` };
`
const ImageContainer = styled.div`
  overflow: hidden;
  display: block;
  padding: .5rem;
  margin-right: 2rem;
  height: auto;
  width: auto;
`
const Image = styled.img`
  height: 5rem;
  width: 5rem;
  border: solid 2px rgb(61, 61, 61);
  background-color: white;
`

class Character extends React.Component {

  render() {
    return(
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            className="character"
          >
            <ImageContainer className="character-picture">
              <Image
                src={this.props.picture}
                alt={`${this.props.name} thumbnail`}
              />
            </ImageContainer>
            <p>
              {this.props.name}
            </p>
          </Container>
        )}
      </Draggable>
    )
  }
}

/*const componentStyle = document.getElementsByClassName("character")
componentStyle.isDragging? componentStyle.style = "background-color : lightgreen" : componentStyle.style = "background-color : lightgreen" ; */


export default Character;