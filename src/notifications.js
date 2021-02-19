import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

export default function BadgeVisibility() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Badge color="secondary" badgeContent={this.props.count} className={classes.margin}>
          <ShoppingCartOutlinedIcon fontSize='small'/>
        </Badge>
    </div>
  );
}