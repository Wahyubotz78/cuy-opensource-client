import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { UserContainer, RowUser, ColUser, TextUser, ImageUser  } from '../../styled/profileStyle';
import Avatar from 'react-avatar';
import { thunk_getUser } from '../../redux/middleware/user/userMiddleware';
import { decryptRequest } from '../../libs/secret';

const Profile = (props) => {
    const [dataUser, setDataUser] = useState(null);
    
    useEffect(() => {
        if(props.userReducer.data != null){
            setDataUser(decryptRequest(props.userReducer.data))
        }
    }, [props.userReducer.data])

    return (
        <UserContainer>
            <RowUser>
                <ColUser size={2}>
                    <ImageUser>
                        <Avatar name={ dataUser == null ? '' : dataUser.name } round={true} />
                    </ImageUser>
                </ColUser>
                <ColUser size={10}>
                    <TextUser></TextUser>
                    <TextUser>Nama : { dataUser == null ? '-' : dataUser.name }</TextUser>
                    <TextUser>Email : { dataUser == null ? '-' : dataUser.email }</TextUser>
                    <TextUser>No Telepon : { dataUser == null ? '-' : `+${dataUser.phone}` }</TextUser>
                    <TextUser>Alamat : { dataUser == null ? '-' : dataUser.address }</TextUser>
                </ColUser>
            </RowUser>
        </UserContainer>
    )
}

export default connect((state) => state)(Profile);