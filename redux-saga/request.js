import React,{useState,useEffect} from 'react'
import {API_URL} from '../../config/baseUrl';

import {AppConstant} from '../../assets/globalstyleconstants';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../../config/storage';

export default function API(variable,method,info,formData){
    // const [token, setToken] = useState('')
    // AsyncStorage.getItem('userToken').then((value)=>{setToken(value)})
    // const token = await getData('userToken')

    console.log('formdataapi',formData)
    console.log('info PUSH',info)
    if(formData){
        var headers = {
            'Authorization': `Bearer ${AppConstant.token}`,
            "Content-Type": "multipart/form-data",
            // 'Content-Type': 'application/json',
            "Accept": "application/json"
        }
    }else{

        var headers = {
            'Authorization': `Bearer ${AppConstant.token}`,
            // "Content-Type": "multipart/form-data",
            'Content-Type': 'application/json',
            "Accept": "application/json"
        }
    }

    var params = (method === 'GET') ?
        {
            method: method,
            headers: headers
        } :
        {
            method: method,
            headers: headers,
            body: formData ? info : JSON.stringify(info)   // make sure it's JSON
        }
    console.log('APIrequest : ', API_URL + variable, params)
    return fetch(`${API_URL + variable}`, params).then(resp => resp.json()
        .then((res) => {
            var data = {
                status: 200,
                body: res
            }
            console.log('APIresponse : ', JSON.stringify(data))

            return data

        }))
        .catch((e) => {
            console.log(e)
            return { body: { status: 400, Message: 'Sorry, something went wrong, please try again in sometime.' } }
        });
}