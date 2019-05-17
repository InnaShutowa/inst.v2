function makePhotos(photos){
    let arr = [];
    let littleArr = [];
    let i = 0;
    let obj = photos;
    console.log("Aaa");
console.log(photos);
    Object.values(obj).map(ph=>{
        if (i<3){
            littleArr.push(ph);
            i++;
        } else{
            i=0;
            arr.push(littleArr);

            littleArr = [];
            littleArr.push(ph);
            i++;
        }
    });
    if (littleArr.length!==0){
        arr.push(littleArr);
    }
    return arr;
}

export default makePhotos;