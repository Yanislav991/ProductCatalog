const hostname = 'http://localhost:3000';

async function request(url, options) {
    try {
        const response = await fetch(hostname + url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        try {
            return await response.json();
        } catch (err) {
            return response;
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    }
    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    // const userData = getUserData();
    // if (userData) {
    //     options.headers['X-Authorization'] = userData.token;
    // } Implement after
    return options;

}

export async function get(url) {
    return request(url, createOptions())
}

export async function post(url, data) {
    return request(url, createOptions('post', data))
}
export async function put(url, data) {
    return request(url, createOptions('put', data))
}
export async function del(url) {
    return request(url, createOptions('delete'))
}