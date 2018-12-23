import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Image,Transformation} from 'cloudinary-react'


const GalleryContainer = styled.div`
background-color: rgba(246,255,254,0);
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    width: 100%;
    height: 80vh;
    margin: 2%;
@media only screen and (min-width: 1280px){
    flex-direction: row;
    overflow-x: auto;
    width: 100%;
    height: 100vw;
}
    
`
const NewImage = styled(Image)`
    width: 100%;
    padding: 1%;
    @media only screen and (min-width: 1280px){
    height: 100%;
    width: auto;
    }
`

const Galery = (props) => {
    return (
        <GalleryContainer>
            {props.UserSelect === 'Catalogue' &&
            props.GaleryImages.Catalogue.map((image, key)=>{
                return <NewImage
                    cloudName="monchan"
                    secure="true"
                    publicId={image.public_id}
                    key={key}
                />
            })
            }
            {props.UserSelect === 'Magazine' &&
            props.GaleryImages.Magazine.map((image , key)=>{
                return <NewImage
                    cloudName="monchan"
                    secure="true"
                    publicId={image.public_id}
                    key={key}
                />
            })
            }
            {props.UserSelect === 'Promotion' &&
            props.GaleryImages.Promotion.map((image, key)=>{
                return <NewImage
                    cloudName="monchan"
                    secure="true"
                    publicId={image.public_id}
                    key={key}
                />
            })
            }

        </GalleryContainer>
    );
};


const mapStateToProps = (state)=>{
    return{
        UserSelect : state.ModelSelectionReducer.select,
        GaleryImages : state.ModelImageReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps , mapDispatchToProps) (Galery);
