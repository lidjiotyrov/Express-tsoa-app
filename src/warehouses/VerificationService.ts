const fs = require('fs')
const jwt = require('jsonwebtoken')
const {createHash} = require('crypto')

const LICENSE = '1ad2f0a86119c7bdeccf0edc77e552299de90a5e676017fbf2b6a360198f359e'
const PRIVATE_KEY_PATH = 'C:\\Users\\huawei\\Desktop\\Affinidi\\Express-tsoa-app\\utils\\privateKeyFile'
const SECRET_PASSPHRASE = 'TestPassPhrase'
const sha256 = (data: any) => {
    return createHash('sha256').update(data).digest('hex')
}

const hashFromFile = (file:any) => {
    const data = fs.readFileSync(file.path, 'binary')
    const fileBinary = Buffer.from(data, 'binary')

    return sha256(fileBinary)
}

const signJwt = async (objectToSign:any) => {
    const privateKey = fs.readFileSync(PRIVATE_KEY_PATH)
    const token = jwt.sign(objectToSign, { key: privateKey, passphrase: SECRET_PASSPHRASE }, { algorithm: 'RS512' })

    return token
}

// NOTE: Expose this method as endpoint for the widget
//       requestId - from Header
export const verify = async (requestId: any, encryptedFile: any) => {
    const objectToSign = hashFromFile(encryptedFile)
    const jwt = await signJwt(objectToSign)

    const formData = new FormData()
    formData.append('file', encryptedFile)

    const options = {
        method: 'POST',
        body: formData,
        headers: {
            'Api-Key': LICENSE,
            'Authorization': jwt,
            'Request-ID': requestId
        },
        timeout: 15000
    }

    const response = await fetch(`https://common-check-api.prod.affinity-project.org/api/v1/verify`, options)

    return response.json()
}
