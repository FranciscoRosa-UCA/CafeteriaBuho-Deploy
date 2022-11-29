const cloudinary = require('cloudinary');
const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = {
    isArrayFormat : (element) => {
        let res = true;
        try {
            if (
                element.indexOf("[") !== -1 &&
                element.indexOf("]") !== -1
            )
                JSON.parse(element);
            else
                res = false;
        } catch(e) {
            debug({e});
            res = false;
        }
        return res;
    },
    message: (ok, message) => {
        return {
            ok,
            message
        }
    },
    getWalletID: (email) => {
        return email.split('@')[0];
    },
    uploadPhoto: async (url, name) => {
        let uri = "";
        try {
            let res = await cloudinary.v2.uploader.upload(`${url}`, {public_id: name});
            uri = res.url;
        } catch (error) {
            uri = "";
        }
        return uri;
    },
    removePhoto: (path, res) => {
        let response = true;
        fs.rm(path, (err)=>{
            if (err) {
                debug(err);
                response = false;
            }
        });
        return response;
    },
    getToken: (user) => {
        const token = jwt.sign({
            data: {id:user._id ,email: user.email, username: user.username, role: user.rol}
        }, process.env.TOKEN)
        return token;
    },
    
    validateToken: (token) => {
        let payload = null;
        try {
            payload = jwt.verify(token, process.env.TOKEN);
        } catch(e) {
        }
        return payload;
    }
}