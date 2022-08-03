const baseURI = process.env.BASE_URL
import axios from "axios"

export const getData = async (url:string, token:string) => {
    const option = {
        method: "GET",
        url: `${baseURI}/${url}`,
        headers: {'Authorization': token},
      };
    const data = await axios(option);
    return data
}

export const postData = async (url:string, payload:any, token:string) => {
    const option = {
        method: "POST",
        url: `${baseURI}/${url}`,
        data: payload,
        headers: {'Authorization': token},
      };
    const response = await axios(option);
    return response
}

export const putData = async (url:string, payload:any, token:string) => {
    const res = await fetch(`${baseURI}/api/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(payload)
    })

    const data = await res.json()
    return data
}

export const patchData = async (url:string, payload:any, token:string) => {
    const res = await fetch(`${baseURI}/api/${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(payload)
    })

    const data = await res.json()
    return data
}


export const deleteData = async (url:string, token:string) => {
    const res = await fetch(`${baseURI}/api/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    const data = await res.json()
    return data
}