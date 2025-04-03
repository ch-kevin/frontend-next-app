const sleep = async function (time: number){
    return new Promise((resolve,rejects)=>{
        setTimeout(resolve,time)
    })
}

export default sleep;