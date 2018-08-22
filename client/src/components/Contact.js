import React, { Component } from 'react';
import {
  Grid,
  Responsive,
  Form,
  Input,
  TextArea,
  Button,
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

                  <AboutMe>
                    <h1>A Little About ME</h1>
                    <br/>
                    <h3>i like to make pictors</h3>
                  </AboutMe>
                  <EmailForm>
                    <Form>
                      <Form.Group widths='equal'>
                        <Form.Field
                          id='form-input-control-first-name'
                          control={Input}
                          label='Your Name'
                          placeholder='Your Name'
                        />
                        <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Your Em@il'
                        placeholder='Your Em@il'
                      />
                      </Form.Group>
                      <Form.Field
                        id='form-textarea-control-opinion'
                        style={{ height: '200px' }}
                        control={TextArea}
                        label='What do can we do for you?'
                      // placeholder='Opinion'
                      />
                      <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Send'
                      // label='Label with htmlFor'
                      />
                    </Form>
                  </EmailForm>



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
  display: flex;
  background-color: slategray;
  height: 500px;
`

const EmailForm = styled.div`
  flex: 2;
  margin: 25px;
  `

const AboutMe = styled.div`
  flex: 2;
  margin: 25px;
`




export default Contact;
