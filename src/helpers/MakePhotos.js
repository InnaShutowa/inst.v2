function MakePhotos(photos){
    let arr = [];
    let littleArr = [];
    let i = 0;
    let obj = photos.photos;

    Object.values(obj).map(ph=>{
        console.log(ph);
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

export default MakePhotos;