import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListSubheader,
} from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import Avatar from '../Account/Avatar';
import RSVPItem from './RSVPItem';

const styles = () => ({
  card: {
    minWidth: '30%',
    margin: '8px'
  },
});

// const RsvpList = ({ classes, rsvps }) => (
//   <List
//     className={classes.list}
//     subheader={<ListSubheader className={classes.subheader} component="div">Event Attendees</ListSubheader>}
//   >
//     {rsvps.filter(d => d.response === 'yes').map(d => <RSVPItem key={d.id} {...d} />)}
//     {rsvps.filter(d => d.response === 'waitlist').map(d => <RSVPItem key={d.id} {...d} />)}
//     {rsvps.filter(d => d.response === 'no').map(d => <RSVPItem key={d.id} {...d} />)}
//   </List>
// );

const RsvpList = ({ classes, rsvps }) => (
  <div style={{
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'space-around',
    flexFlow: 'row wrap',
  }}
  >
    {
      rsvps.filter(d => d.response === 'yes').map(d => (
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent style={{ textAlign: 'center' }}>
              <Avatar src={d.member.photo ? d.member.photo.photo_link : ''} value={d.member.name} />
              <Typography gutterBottom variant="h5" component="h2">
                {d.member.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
  </div>
);

RsvpList.defaultProps = {
  rsvps: [],
};

RsvpList.propTypes = {
  classes: PropTypes.object.isRequired,
  rsvps: PropTypes.array,
};

export default withStyles(styles)(RsvpList);
