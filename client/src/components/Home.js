import React, { Component } from 'react';
import {
  Grid,
  Responsive,
} from 'semantic-ui-react';
import styled from 'styled-components';
import Slider from "react-slick";



class Home extends Component {
  render() {
    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column computer={16}>
              <Responsive minWidth={768}>

                <HeaderImage>
                  <HeaderText>Jenny Hardy Media</HeaderText>
                  <Hat stackable>
                  </Hat>
                  <Text>The main focus of everything I make is story 
                    <br/>- I believe everyone has a story to tell.</Text>
                </HeaderImage>
              </Responsive>
            </Grid.Column>

            <Grid.Column class='mobile only'>
              <Responsive maxWidth={767}>
                <HeaderImage>
                  <HeaderText>Jenny Hardy Media</HeaderText>
                  <HatM stackable>
                  </HatM>
                </HeaderImage>
                <Text class="ui image full gird ">The main focus of everything I make is story 
                    <br/>- I believe everyone has a story to tell.</Text>
              </Responsive>
            </Grid.Column>
          </Grid.Row>
        </Grid >
      </div>
    );
  }
}




{/* <div id="cf">
  <img class="bottom" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/28379690_10155340594975949_7286515944019642880_n.jpg?_nc_cat=0&oh=e51b0af76400ad38074ee9a05a12770a&oe=5C140FF0" />
  <img class="top" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/13934611_10153806540045949_6970624363176560186_n.jpg?_nc_cat=0&oh=0db35f1836461b7a02698736e09adea8&oe=5C121836" />
</div>



@keyframes cfFadeInOut {
  0% {
  opacity:1;
}
45% {
opacity:1;
}
55% {
opacity:0;
}
100% {
opacity:0;
}
}

#cf img.top {
animation-name: cfFadeInOut;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
animation-duration: 10s;
animation-direction: alternate;
} */}






const HeaderImage = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), 
    url('https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/13934611_10153806540045949_6970624363176560186_n.jpg?_nc_cat=0&oh=0db35f1836461b7a02698736e09adea8&oe=5C121836');
  background-size: cover;
  background-position: center ;
  background-repeat: no-repeat; 
  text-align: center;
  width: 100wv;
  height: 100vh;
`
const HeaderText = styled.h1`  
  color: white;
  text-shadow: 2px 2px 8px black;
  font-size: 50px;
`

const WordBox = styled.div`
  display: flex;
  justify-content: space-around;
  paddint-top: 35px;
  paddint-left: 240px;
  width: 85%;
  heigth: 500px;
  text-color: white;
`

const Hat = styled.div`
  background-image: url('https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/28379690_10155340594975949_7286515944019642880_n.jpg?_nc_cat=0&oh=e51b0af76400ad38074ee9a05a12770a&oe=5C140FF0');
  background-repeat: no-repeat;
  background-size: cover;
  background-size: contian;
  border-radius: 100%;
  margin: 10px;
  width: 23%;
  height: 35%;
`

const HatM = styled.div`
  background-image: url('https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/28379690_10155340594975949_7286515944019642880_n.jpg?_nc_cat=0&oh=e51b0af76400ad38074ee9a05a12770a&oe=5C140FF0');
  background-repeat: no-repeat;
  background-size: cover;
  background-size: contian;
  background-height: 100px;
  border-radius: 100%;
  margin: 10px;
  width: 35%;
  height: 20%;
`

const Text = styled.h3`
  color: #e8e1e1;
  margin: 0% 15%;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
`




export default Home;
