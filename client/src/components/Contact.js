import React, { Component } from 'react';
import {
  Grid,
  Responsive,
} from 'semantic-ui-react';
import styled from 'styled-components';

class Contact extends Component {
  render() {
    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column computer={16}>
              <Responsive minWidth={768}>

                <HeaderImage>
                  <HeaderText>Jenny Hardy Media 
                  <ConUs> contact us</ConUs></HeaderText>
                </HeaderImage>
                <BG>


                </BG>
              </Responsive>
            </Grid.Column>

            <Grid.Column class='mobile only'>
              <Responsive maxWidth={767}>

              </Responsive>
            </Grid.Column>
          </Grid.Row>
        </Grid >
      </div>
    );
  }
}

const HeaderImage = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), 
    url('https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/322425_10150571348975949_1956186002_o.jpg?_nc_cat=0&oh=85edca509d2ac9159eed7e42e6522e74&oe=5BFD2154');
  display: flex;
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
  justify-content: center;
  align-items: center;
  width: 100wv;
  height: 300px;
  color: white;
  text-shadow: 2px 2px 8px black;
`
const HeaderText = styled.h1`
  font-size: 50px;
`

const ConUs = styled.h2`
  padding-left: 150px;
`
const BG = styled.div`
  background-color: slategray;
  height: 500px;
`




export default Contact;
