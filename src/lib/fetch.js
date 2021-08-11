import React from 'react';

export const getDataByPost = async(url, obj) => {
    const data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(r => r.json())
    .catch(e => console.error(e))
    return await data;
}

export const getData = async(url) => {
    const data = await fetch(url)
    .then(r => r.json())
    .catch(e => console.error(e))
    return await data;
}