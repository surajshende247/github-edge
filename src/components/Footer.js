import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
     
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="span" m={1}>
        <h3>Source code is on <a href="https://github.com/surajshende247/github-edge">GitHub</a></h3>
      </Box>
    </div>
  );
}
