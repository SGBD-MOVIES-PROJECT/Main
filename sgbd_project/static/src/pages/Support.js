import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



// npm i @emailjs/browser


const Contact = () => {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2vsdzmv",
        "template_x6f9coq",
        form.current,
        "9SjcrG8VjcW7Co40d"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <div className="div1">
        <h1>Contact Us</h1>
      <div className="div2">
        			  
			  <h3>____________________________</h3>
	
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
	  <input onClick={handleClickOpen} type="submit" value="Send" />
    

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Contact with Us"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            El teu correu serà enviat correctament. Gràcies per contactar amb nosaltres.
          </DialogContentText>
        </DialogContent>
		<DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </form>  
      </div>
  </div>
    </StyledContactForm>
	
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  height: 60vh;
  align-items: center;
  margin-bottom: 150px;
  h1 {
	text-align: center;
	margin-top: 10px;
	  }
    .div1{
      min-height: 100vh;
    background-color: rgb(224,232,255);
    margin-top: 0px;
    padding-top: 35px;
    margin-bottom: -30px;
    }
    .div2{
      margin:auto;
      width:40%;
    }
	    h3 {
	text-align: center;
				  }
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;