function requestValidator (obj){
    let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^[\w.]+$/g;
    let supportedVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let specialCharacters = [`<`, `>`, `\\`, '&', `'` , `"`];
    if(!validMethod.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!obj.hasOwnProperty('uri')){
        throw new Error ('Invalid request header: Invalid URI');
    }

    if(obj.uri !== '*' && !obj.uri.match(uriPattern)){
        throw new Error ('Invalid request header: Invalid URI');
    }

    if(!supportedVersion.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version');
    }

    if(!obj.hasOwnProperty('message')){
        throw new Error('Invalid request header: Invalid Message');
    }
    for(let ch of obj.message){
        if(specialCharacters.includes(ch)){
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return obj
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}); /* This should return the unchanged input */

requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}); /* This should return Invalid request header: Invalid Method */

requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}); /* This should return Invalid request header: Invalid Version */
requestValidator();
requestValidator();