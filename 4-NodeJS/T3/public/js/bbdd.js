function existeDNI(dni) {
    return new Promise((resolve, reject) => {
        if (dni !== '12.345.678-Z') {
            resolve('OK');
        } else {
            reject('Error');
        }
    })
}

module.exports = existeDNI;