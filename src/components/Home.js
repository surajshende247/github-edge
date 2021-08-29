import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import PageviewIcon from "@material-ui/icons/Pageview";
import AssignmentIcon from "@material-ui/icons/Assignment";

import Footer from "./../components/Footer";

//alert
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  social: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const postData = () => {
    if (userName && setUserName) {
      history.push("/profile/" + userName);
      console.log(userName);
    } else {
      handleClick()
    }
  };

  return (
    <Container maxWidth="md">
      <Box component="span" m={1}>
        <h1>GitHub Edge</h1>
      </Box>
      <Grid container spacing={1}>
        <Grid
          container
          item
          lg={12}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            component="form"
            className={classes.root}
            elevation={3}
            onSubmit={postData}
          >
            <IconButton className={classes.iconButton} aria-label="github-icon">
              <GitHubIcon />
            </IconButton>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                Enter a Username
              </Alert>
            </Snackbar>

            <InputBase
              className={classes.input}
              placeholder="Github Username"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              className={classes.iconButton}
              aria-label="exit-icon"
              onClick={postData}
            >
              <ExitToAppIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid
          container
          item
          lg={12}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {/*Social Links*/}
          <div className={classes.social}>
            <Avatar>
              <FolderIcon />
            </Avatar>
            <Avatar className={classes.pink}>
              <PageviewIcon />
            </Avatar>
            <Avatar className={classes.green}>
              <AssignmentIcon />
            </Avatar>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}
