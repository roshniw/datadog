import React from 'react';
import Iframe from 'react-iframe';
import Card from '@material-ui/core/Card';

const Feeds = () => {
  return (
    <Card>
    <center>
    <Iframe url="https://fr.wikipedia.org/wiki/Main_Page"
            width="95%"
            height="480px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
  </center>
  </Card>
  );
}

export default Feeds;
