import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { UserContainer, RowUser, ColUser, TextUser, ImageUser  } from '../../styled/profileStyle';
import Avatar from 'react-avatar';
import { thunk_getUser } from '../../redux/middleware/user/userMiddleware';
import { encryptRequest, decryptRequest } from '../Helper/secret';
import Loading from '../Helper/loading';

const Profile = (props) => {

    const [dataUser, setDataUser] = useState(null);
    
    useEffect(() => {
        if(props.userReducer.data == null){
            let userLogin = decryptRequest(sessionStorage.getItem('r'))
            let ecryptID = encryptRequest({"id": userLogin.id})
            thunk_getUser(ecryptID)
        }else{
            setDataUser(decryptRequest(props.userReducer.data))
        }
    }, [props.userReducer.data])

    return (
        <UserContainer>
            <RowUser>
                <ColUser size={2}>
                    <ImageUser>
                        <Avatar name={ dataUser != null ? dataUser.name : null } round={true} />
                    </ImageUser>
                </ColUser>
                <ColUser size={10}>
                    <TextUser></TextUser>
                    <TextUser>Nama : { dataUser != null ? dataUser.name : <Loading /> }</TextUser>
                    <TextUser>Email : { dataUser != null ? dataUser.email : <Loading /> }</TextUser>
                    <TextUser>No Telepon : { dataUser != null ? `+${dataUser.phone}` : <Loading /> }</TextUser>
                    <TextUser>Alamat : { dataUser != null ? dataUser.address : <Loading /> }</TextUser>
                </ColUser>
            </RowUser>
        </UserContainer>
    )
}

export default connect((state) => state)(Profile);