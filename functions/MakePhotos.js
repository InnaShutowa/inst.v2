function MakePhotos(photos){
    let arr = [];
    let littleArr = [];
    let i = 0;
    photos.map(ph=>{
        if (i<3){
            littleArr.push(ph);
            i++;
            console.log(i);
            console.log("cell");
        } else{
            i=0;
            arr.push(littleArr);

            littleArr = [];
            littleArr.push(ph);
            i++;
            console.log("row");
        }
    });
    if (littleArr.length!==0){
        arr.push(littleArr);
    }
    return arr;
}

export default MakePhotos;