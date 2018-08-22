import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import styled from 'styled-components';
import InstaGram from '../components/InstaGram.png'

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <a target="_blank" href='https://www.facebook.com/jhard11'>
          <Menu.Item>
            <img src="https://png.icons8.com/color/50/000000/facebook.png" />
          </Menu.Item>
        </a>
        <Insta>
          <a target="_blank" href='https://www.instagram.com/jennyhardymedia/'>
            <img
              src={InstaGram}
              height='30px'
              name="instagram"
              alt="link to instagram"
            />
          </a>
        </Insta>

        {/* <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link> */}
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <HomeRow>
            <Link to='/'>
              <Menu.Item name='home' />
            </Link>
            <Link to="/gallery">
              <Menu.Item name="Photo Portfolio " />
            </Link>
            <Link to="/contact">
              <Menu.Item name='Contact Us' />
            </Link>
          </HomeRow>
          {this.rightNavs()}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

const HomeRow = styled.nav`
  display: flex;
  align-items: center;
`

const Insta = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;


`



export default withRouter(connect(mapStateToProps)(NavBar));
