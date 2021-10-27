export const userLogin = async ({ email, password }) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            if (email === 't@t.com' && password === 't') {
                resolve()
            }else{
                reject()
            }
        }, 3000)
    })
}