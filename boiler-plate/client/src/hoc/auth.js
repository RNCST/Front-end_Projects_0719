import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute =null) {

    //option => null==>아무나 출입이 가능 true==>login한유저 false==>로그인 한 유저는 출입불가.
    //adminRoute => 공란이나 null , 그외 true 

    function AuthenticationCheck(props){

        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response)

                //로그인 하지 않은 상태
                if(!response.payload.isAuth){
                    if(option) {
                        props.history.push('/login')
                    }
                }else {
                //로그인한 상태
                    if(adminRoute && !response.paylog.isAdmin){
                        props.history.push('/')
                    }else{
                        if(option === false){
                            props.history.push('/')
                        }
                    }
                }
            })
            
        }, [])

        return (
            <SpecificComponent/>
        )
    }



    return AuthenticationCheck
} 