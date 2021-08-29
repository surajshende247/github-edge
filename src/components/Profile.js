import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Paper";
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
     
  },
}));



export default function Profile() {
  const classes = useStyles();
  const params = useParams();
  
  console.log(params);
  return (

    <div className={classes.root}>
      <Box component="span" m={1}>
       <h1>Profile Page</h1>
       <h2>Hello, {params.id}</h2>
      </Box>
    </div>
  );
}
