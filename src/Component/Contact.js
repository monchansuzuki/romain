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
                <div className='title'>
                <Tittle>Contact me</Tittle>
                <Composite src={CompositeImage} onClick={props.HandleOpen} isOpen={props.Contact.open}/>
                </div>
                <Form action="mailto:romainpro.danna@gmail.com" method="post" enctype="text/plain">
                    <Input
                    type="email"
                    name='MAIL'
                    placeholder="Email"
                    margin="dense"
                    fullWidth={true}/>
                    <textarea
                        name='MESSAGE'
                        className='text-area'
                        placeholder='Write your message'

                    />
                    <Btn
                        color="primary"
                        variant="contained"
                        type='submit'
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