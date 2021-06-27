import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      width: 300 + theme.spacing(3) * 2,
    },
    margin: {
      height: theme.spacing(3),
    },
    volumeSlider: {
        width: 100,
        color: "#b1b0b0", 
        // "&:hover" : {
        // color: "purple"
        // },
    },
    typography: {
        padding: theme.spacing(2),
      },
    playbackRate: {
        fontSize: "13px",
    },
    playbackRateButton: {
        minWidth: "40px",
    }
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  
const PrettoSlider = withStyles({
    root: {
      color: '#b1b0b0',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

export  const CustomPrettoSlider = () => {
    return (
        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" min={0} max={100} defaultValue={20} ValueLabelComponent={ValueLabelComponent}/>
    )
}


export const VolumeSlider = () => {
    const classes = useStyles();
    return (
        <Slider min={0} max={100} defaultValue={75} className={classes.volumeSlider} />
    )
}

export const CustomPopOver = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    useEffect(() => {
        props.setHandlePopOverFn((target) => (target) => setAnchorEl(target))
    }, [props.setHandlePopOverFn, setAnchorEl])
    
    return (
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Grid container direction="column-reverse">
            {[0.5, 1, 1.5, 2].map(rate => (
            <Button variant="text" className={classes.playbackRateButton}>
                <Typography color="secondary" className={classes.playbackRate}>{rate}</Typography>
            </Button>
            ))}


        </Grid>
      </Popover>
    )
}