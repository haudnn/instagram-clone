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
        body: JSON.stringify(payload),  
        headers: {'Authorization': token},
      };
    const data = await axios(option);
    return data
}

export const putData = async (url:string, payload:any, token:string) => {
    const option = {
        method: "PUT",
        url: `${baseURI}/${url}`,
        body: JSON.stringify(payload),
        headers: {'Authorization': token},
      };
    const data = await axios(option);
    return data
}

export const patchData = async (url:string, payload:any, token:string) => {
    const option = {
        method: "PATCH",
        url: `${baseURI}/${url}`,
        body: JSON.stringify(payload),
        headers: {'Authorization': token},
      };
    const data = await axios(option);
    return data
}

export const deleteData = async (url:string, payload:any,token:string) => {
    const option = {
        method: "DELETE",
        url: `${baseURI}/${url}`,
        body: JSON.stringify(payload),
        headers: {'Authorization': token},
      };
    const data = await axios(option);
    return data
}