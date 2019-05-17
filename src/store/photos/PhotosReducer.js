import {CHANGE_RATING_CONSTANT, ORDER_BY_CONSTANT, ORDER_BY_DESC_CONSTANT} from "./constants/ActionTypes";

import {HEADER_CONST, LANDSCAPE_CONST, MY_LIFE_CONST, NO_HEADER_CONST, SOVA_CONST} from "./constants/PhotosUrls";


let initialState = {
    sort: 0,
    photos: [
        {
            id: 1,
            name: 'Сова',
            url: SOVA_CONST,
            likes: 5,
            currentUserRating: 0,
            date:1557781012,
            user: 'Inna'
        },
        {
            id: 2,
            name: 'Пейзажик',
            url: LANDSCAPE_CONST,
            likes: 4,
            currentUserRating: 0,
            date:1557700099,
            user: 'NewUser'
        },
        {
            id: 3,
            name: 'Жизнь моими глазами',
            url: MY_LIFE_CONST,
            likes: 3,
            currentUserRating: 0,
            date:1557780011,
            user: 'NewUser1'
        },
        {
            id: 4,
            name: 'Несбывшийся хедер сайта',
            url: NO_HEADER_CONST,
            likes: 8,
            currentUserRating: 0,
            date:1557780000,
            user: 'Inna'
        },
        {
            id: 5,
            name: 'Сбывшийся хедер сайта',
            url: HEADER_CONST,
            likes: 8,
            currentUserRating: 0,
            date:1557781068,
            user: 'NewUser'
        }
    ]
};

let sortedPhotos = [];

let sortedPhotosByDate = [];

function orderByWithSameLikesCount(){
    let array = [];
    let aaa = [];
    sortedPhotos.map(photo=>{
        let buff = 0;
        array.map(elems=>{
            if (elems.id===photo.id){
                buff = 1;
            }
        });
        if (buff === 0){
            array = [];
            array.push(photo);
            sortedPhotos.map(ph=>{
                if (ph.id !== photo.id){
                    if (ph.likes === photo.likes){
                        array.push(ph);
                    }
                }
            });
            sortedPhotosByDate = [];
            SortingByDate(array);
            aaa = aaa.concat(sortedPhotosByDate);
        }
    });
    sortedPhotos = aaa;
}


function SortingByDate(array){
    let newArray = [];
    let max = 0;
    let elementSortedArray = {};
    array.map(photo=>{
        if (photo.date > max) {
            max = photo.date;
            elementSortedArray = photo;
        }
    });
    sortedPhotosByDate.push(elementSortedArray);
    array.map(photo=>{
        if (photo.id !== elementSortedArray.id){
            newArray.push(photo);
        }
    });
    if (newArray.length!==0){
        SortingByDate(newArray);
    }
    sortedPhotosByDate = sortedPhotosByDate.reverse();
}



function orderByDesc(array) {
    let elementSortedArray = {};
    let max = 0;
    let newArr = [];
    array.map(photo => {
        if (photo.likes > max) {
            max = photo.likes;
            elementSortedArray = photo;
        }
    });

    sortedPhotos.push(elementSortedArray);

    array.map(photo => {
        if (photo.id !== elementSortedArray.id) {
            newArr.push(photo);
        }
    });

    if (newArr.length > 0) {
        orderByDesc(newArr);
    }
}

function Reducer(state = initialState, action) {
    switch (action.type) {
        // изменяем рейтинг (лайк/дизлайк)
        case CHANGE_RATING_CONSTANT: {
            let inState = [];
            state.photos.map(photo => {
                if (photo.id !== action.id) {
                    inState.push(photo);
                } else {
                    if (action.rating + photo.likes >= 0) {
                        photo.likes += action.rating;

                        if (photo.currentUserRating+action.rating === 0) {
                            photo.currentUserRating = 0;
                        } else {
                            photo.currentUserRating = action.rating;
                        }
                    }
                    inState.push(photo);
                }
            });
            // по убыванию
            if (state.sort === -1) {
                sortedPhotos = [];
                orderByDesc(inState);
                orderByWithSameLikesCount();
                state = {
                    photos: sortedPhotos.slice(0, action.count),
                    sort: -1
                };
                return state;
            }
            // по возрастанию
            if (state.sort === 1) {
                sortedPhotos = [];
                orderByDesc(inState);
                orderByWithSameLikesCount();
                state = {
                    photos: sortedPhotos.reverse().slice(0, action.count),
                    sort: 1
                };
                return state;
            }
            // забили
            state = {
                photos: inState,
                sort: 0
            };
            return state;
        }

        case ORDER_BY_CONSTANT: {
            sortedPhotos = [];
            orderByDesc(state.photos);
            orderByWithSameLikesCount()
            if (sortedPhotos.length !== 0) {
                state = {
                    sort: 1,
                    photos: sortedPhotos.reverse().slice(0, action.count)
                };
                return state;
            }
            return state;
        }

        case ORDER_BY_DESC_CONSTANT: {
            sortedPhotos = [];
            orderByDesc(state.photos);
            orderByWithSameLikesCount();
            if (sortedPhotos.length !== 0) {
                state = {
                    sort: -1,
                    photos: sortedPhotos.slice(0, action.count)
                };
                return state;
            }
            return state;
        }
        default: {
            return state;
        }
    }
}

export default Reducer;