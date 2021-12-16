const CryptoJS = require("crypto-js");

exports.decryptRequest = (data) => {
    try {
        const decrypt = CryptoJS.AES.decrypt(data, 'd8dc2c5c7580a7wsfdh2f716e1f05aa351234d9c136bc124d404f8355db123');
        const result = JSON.parse(decrypt.toString(CryptoJS.enc.Utf8))
        return result
    } catch (e) {
        return { error : true }
    }
}

exports.encryptRequest = (data) => {
    try {
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), 'd8dc2c5c7580a7wsfdh2f716e1f05aa351234d9c136bc124d404f8355db123').toString();
        return encrypted 
    } catch (e) {
        return { error: true }
    }
}