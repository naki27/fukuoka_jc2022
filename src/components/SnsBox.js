import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "8px 0",
    textAlign: "right"
  },
  iconBox: {
    margin: "0 8px",
    color: "#C7243A"
  }
}));

export default function SnsBox() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} color="textSecondary">
      <Link className={classes.iconBox} href="https://www.instagram.com/fukuoka.beach/">
          <InstagramIcon fontSize="large"/>
      </Link>
      <Link className={classes.iconBox} href="https://twitter.com/fukuokabeach/">
          <TwitterIcon fontSize="large"/>
      </Link>
      <Link className={classes.iconBox} href="https://www.facebook.com/fukuoka.beach/">
          <FacebookIcon fontSize="large"/>
      </Link>
    </Typography>
  );
}
