import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import {
  Header,
} from 'semantic-ui-react';
import styled from 'styled-components';

class Portfolio extends Component {
  render() {
    const IMAGES = 
      [{
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/554282_10150813884685949_1035011314_n.jpg?_nc_cat=0&oh=a310f7dd5d28f8a9d33404a70845456b&oe=5C129A74",
        alt: "Girl in black and white",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/554282_10150813884685949_1035011314_n.jpg?_nc_cat=0&oh=a310f7dd5d28f8a9d33404a70845456b&oe=5C129A74",
        thumbnailWidth: '25%',
        thumbnailHeight: 212,
        caption: "Girl Sitting"
      },
      {
        src: "https://4.bp.blogspot.com/-fOqZot88aKI/WomMN45F7CI/AAAAAAAAAVc/zNd_I9lnMugJCFDdb8eRiGF91l2jiUcOQCLcBGAs/s1600/DSC_1456_1.jpg",
        alt: "India",
        thumbnail: "https://4.bp.blogspot.com/-fOqZot88aKI/WomMN45F7CI/AAAAAAAAAVc/zNd_I9lnMugJCFDdb8eRiGF91l2jiUcOQCLcBGAs/s1600/DSC_1456_1.jpg",
        thumbnailWidth: '25%',
        thumbnailHeight: 212,
        caption: "India"
      },

      {
        src: "https://4.bp.blogspot.com/-ACsQlQgyUTY/WomL1lZDK_I/AAAAAAAAAU0/OcZAcoJOQQMPVDmdnUyUaezA81ZcTaD2gCLcBGAs/s1600/DSC_1275_1.jpg",
        alt: "The Children",
        thumbnail: "https://4.bp.blogspot.com/-ACsQlQgyUTY/WomL1lZDK_I/AAAAAAAAAU0/OcZAcoJOQQMPVDmdnUyUaezA81ZcTaD2gCLcBGAs/s1600/DSC_1275_1.jpg",
        thumbnailWidth: '25%',
        thumbnailHeight: 212,
        caption: "Children"
      },
      {
        src: "https://4.bp.blogspot.com/-lEBh7eg_hHo/WomMao8Xz1I/AAAAAAAAAWE/8LXX18cTBa8M5e3DX8CepSxOnqYDJuHDgCLcBGAs/s1600/DSC_1787_1.jpg",
        alt: "Small Crowd",
        thumbnail: "https://4.bp.blogspot.com/-lEBh7eg_hHo/WomMao8Xz1I/AAAAAAAAAWE/8LXX18cTBa8M5e3DX8CepSxOnqYDJuHDgCLcBGAs/s1600/DSC_1787_1.jpg",
        thumbnailWidth: '25%',
        thumbnailHeight: 212,
        caption: "Small Crowd"
      },
      {
        src: "https://4.bp.blogspot.com/-QmP3JmTW1wY/WomNEjty1tI/AAAAAAAAAX0/IdSxk5wxIrs96uC7HpdWHx2mUSAt9ceMACLcBGAs/s1600/PS%2BDSC_5278%2BBW.jpg",
        alt: "Ladys",
        thumbnail: "https://4.bp.blogspot.com/-QmP3JmTW1wY/WomNEjty1tI/AAAAAAAAAX0/IdSxk5wxIrs96uC7HpdWHx2mUSAt9ceMACLcBGAs/s1600/PS%2BDSC_5278%2BBW.jpg",
        thumbnailWidth: '25%',
        thumbnailHeight: 212,
        caption: "Ladys"
      },

      {
        src: "https://1.bp.blogspot.com/-FZ1ciCqaixM/WomM1PxFwMI/AAAAAAAAAXY/hsMZuvOyebYq5592BCJyHw0BogqrGIeDgCLcBGAs/s1600/DSC_2442%2Bcrop%2Bfix.jpg",
        alt: "Family",
        thumbnail: "https://1.bp.blogspot.com/-FZ1ciCqaixM/WomM1PxFwMI/AAAAAAAAAXY/hsMZuvOyebYq5592BCJyHw0BogqrGIeDgCLcBGAs/s1600/DSC_2442%2Bcrop%2Bfix.jpg",
        thumbnailWidth: '25%',
        thumbnailHeight: 212,
        caption: "Family"
      },

      {

        src: "https://4.bp.blogspot.com/-lfxjUFQ4hGo/WomMwG9ln_I/AAAAAAAAAXQ/gqq6sCuyqpYMwqYtH2nAVwWh1TNuQLdawCLcBGAs/s1600/DSC_4298_1.jpg",
        alt: "Leaf",
        thumbnail: "https://4.bp.blogspot.com/-lfxjUFQ4hGo/WomMwG9ln_I/AAAAAAAAAXQ/gqq6sCuyqpYMwqYtH2nAVwWh1TNuQLdawCLcBGAs/s1600/DSC_4298_1.jpg",
        thumbnailWidth: '25%',
        thumbnailHeight: 212,
        caption: "Leaf"
      },
      {
        src: "https://1.bp.blogspot.com/-oTjEBI3hlqY/WomM-MRI3yI/AAAAAAAAAXo/mrSzHbzjtjsIcUqt0Jy7rQDK0Lw6OJN7gCLcBGAs/s1600/DSC_4979%2Bcopy.jpg",
        alt: "Boy",
        thumbnail: "https://1.bp.blogspot.com/-oTjEBI3hlqY/WomM-MRI3yI/AAAAAAAAAXo/mrSzHbzjtjsIcUqt0Jy7rQDK0Lw6OJN7gCLcBGAs/s1600/DSC_4979%2Bcopy.jpg",
        thumbnailWidth: '25%',
        thumbnailHeight: 212,
        caption: "Boy"
      },
      {
        src: "https://2.bp.blogspot.com/-vYwUqPJdjXw/WomMOjb_usI/AAAAAAAAAVg/rp33C83eFZE-8VuEbpr4FaS1-o5xPPeiwCLcBGAs/s1600/DSC_1466_1.jpg",
        alt: "Walk Way",
        thumbnail: "https://2.bp.blogspot.com/-vYwUqPJdjXw/WomMOjb_usI/AAAAAAAAAVg/rp33C83eFZE-8VuEbpr4FaS1-o5xPPeiwCLcBGAs/s1600/DSC_1466_1.jpg",
        thumbnailWidth: '25%',
        thumbnailHeight: 212,
        caption: "Walk Way"
      },

      {
        src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/20819607_10154864564950949_5361389227930222938_o.jpg?_nc_cat=0&oh=10358f3ba264ccc337dc109755357516&oe=5C11C213",
        alt: "Dogie",
        thumbnail: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/20819607_10154864564950949_5361389227930222938_o.jpg?_nc_cat=0&oh=10358f3ba264ccc337dc109755357516&oe=5C11C213",
        thumbnailWidth: '33%',
        thumbnailHeight: 212,
        caption: "Dogie"
      },
      ]

      

    return (
      <div>
          <MainHeader>
            <HeaderText>Portfolio</HeaderText>
          </MainHeader>
          <Space>
          {/* <ContainerGallery> */}
            <Gallery images={IMAGES} />
          {/* </ContainerGallery> */}
          </Space>
      </div>
    );
  }
}

const MainHeader = styled.div`
background-image: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), 
  url('https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/1234287_10151614923435949_1573810031_n.jpg?_nc_cat=0&oh=baabd5f8962acc01a6b9c0d6f171edf0&oe=5BCC2926');
display: flex;
background-repeat: no-repeat;
background-position: center; 
background-size: cover;
justify-content: center;
align-items: center;
width: 100wv;
height: 300px;
margin-bottom: 10px;
color: white;
text-shadow: 2px 2px 8px black;
font-size: 50px;
`

const HeaderText = styled.h1`
  color: white;
  text-shadow: 2px 2px 8px black;
  font-size: 50px;
`

const Space = styled.div`
  margin-left: 65px;
`

// const ContainerGallery = styled(Container)`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin: 10px;
// `

export default Portfolio;