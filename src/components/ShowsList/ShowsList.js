import React from 'react';
import CharacterList from '../CharacterList/CharacterList'
import styled from 'styled-components';


const Container = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex: wrap;
  flex 1 0 30%;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: rgb(61, 61, 61);
`
class ShowsList extends React.Component {
  render() {
    return(
      this.props.showsOrder.map((showId, index)=> {
      const show = this.props.shows[showId];
      const characters = show.characterIds.map(characterId => this.props.characters[characterId]);
      const isDropDisabled = index !== 1;
      return (
          <Container>
            <CharacterList key={show.id} show={show} characters={characters} isDropDisabled={isDropDisabled} />
          </Container>
      )})
    )
  }
};

export default ShowsList;