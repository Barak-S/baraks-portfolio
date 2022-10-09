import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import * as BsIcons from 'react-icons/bs';
import classNames from 'classnames';


const ContainedButton = ({ label, id, handleSubmit, children, className, ...props}) => {
    const classes = useStyles();

    return (
        <Button
            id={id}
            variant='outlined'
            color='primary'
            type='submit'
            className={classNames(classes.commonBtn, className)}
            onClick={handleSubmit}
            endIcon={<BsIcons.BsArrowRight/>}
            {...props}
            >
            <span className={classes.btnLabel}>{label}</span>
            {children}
        </Button>
    );
};

const useStyles = makeStyles((theme) => ({
    commonBtn:{
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        maxWidth: 165, 
        padding: '8px 0', 
        width: '100%',
        position: 'relative',
        borderRadius: 24,
        height: 40,
				backgroundColor: '#35c958',
				border: 'none',
				outline: 'none',
				backgroundAttachment: 'fixed',
				color: '#131313',
        '& .MuiButton-label': {
            marginRight: -24,
            transition: '0.3s ease-in-out all',
        },    
        '&:hover':{ 
            backgroundColor: '#131313',
            color: "#fff",
						border: 'none',
						outline: 'none',	
            "& > *:first-child": {
            transform: 'translateX(-10px)',
            opacity: 1,
            },
            '& [class*="-endIcon"]': {
							opacity: 1,
							color: '#35c958',
            },
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: 27,
        },
        '& [class*="-endIcon"]': {
            opacity: 0,
            color: '#309AD5',
            transition: '0.5s ease-out all',
        },
    },
  }));
  

export default ContainedButton;