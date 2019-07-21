/*For displaying the link to the HomePage*/
import React from "react";
import "./css/display.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
    <a href="/#/dashboard">
    <Button variant="outlined" color="primary" className={classes.button} style={{float:'right'}}>
      Go To Dashboard
    </Button>
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 300">
      <a href="/#/dashboard">
        {/*Symbol*/}

        <symbol id="s-text">
          <text textAnchor="middle" x="55%" y="20%" dy="1em" dx="-1em">
            datadog
          </text>
        </symbol>

        {/* Duplicate Symbol*/}

        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
      </a>
    </svg>
    </div>
  );
};

export default HomePage;
