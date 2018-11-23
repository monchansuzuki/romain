import React from 'react';
import {ContactContainer , Box , Tittle , Composite , Form, Input , Btn , PlaceHolder, SocialContainer} from '../Style/ContactStyle'
import CompositeImage from '../img/Composite.jpg'
import {connect} from 'react-redux'
import Icon from '@material-ui/core/Icon';
import FB from '../img/fb-logo.png'
import SD from '../img/soundcloud-logo.png'
import Insta from '../img/insta-logo.png'


const Contact = (props) => {
    return (
        <ContactContainer>
            <Box>
                <Tittle>Contact me</Tittle>
                <Composite src={CompositeImage} onClick={props.HandleOpen} isOpen={props.Contact.open}/>
                <Form>
                    <Input
                    type="email"
                    placeholder="Email"
                    margin="dense"
                    fullWidth={true}/>
                    <Input
                        type="email"
                        placeholder="Write your message"
                        margin="dense"
                        label="Multiline"
                        multiline
                        fullWidth={true}
                        rows="4"
                        variant="outlined"
                        className="input"
                    />
                    <Btn
                        color="primary"
                        variant="contained"
                        >
                        <Icon >send</Icon>
                    </Btn>
                    <PlaceHolder>
                        You can follow me on :
                    </PlaceHolder>
                    <SocialContainer>
                        <a><img src={FB}/></a>
                        <a><img src={Insta}/></a>
                        <a><img src={SD}/></a>
                    </SocialContainer>

                </Form>

            </Box>


        </ContactContainer>
    );
};

const mapStateToProps = (state)=>{
    return{
        Contact : state.ContactReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        HandleOpen : ()=>{dispatch(
            {type: 'HANDLE_OPEN'}
        )},
        HandleClose : ()=>{dispatch(
            {type:  'HANDLE_CLOSE'}
        )}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);