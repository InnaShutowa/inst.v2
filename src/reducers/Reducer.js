import {CHANGE_RATING_CONSTANT, ORDER_BY_CONSTANT, ORDER_BY_DESC_CONSTANT} from "../constants/ActionTypes";

import {HEADER_CONST, LANDSCAPE_CONST, MY_LIFE_CONST, NO_HEADER_CONST, SOVA_CONST} from "../constants/PhotosUrls";


let initialState = {
    sort: 0,
    photos: [
        {
            id: 1,
            name: 'Сова',
            url: SOVA_CONST,
            likes: 5,
            currentUserRating: 0,
            date:155769987
        },
        {
            id: 2,
            name: 'Пейзажик',
            url: LANDSCAPE_CONST,
            likes: 4,
            currentUserRating: 0,
            date:1557695432
        },
        {
            id: 3,
            name: 'Жизнь моими глазами',
            url: MY_LIFE_CONST,
            likes: 3,
            currentUserRating: 0,
            date:1557696321
        },
        {
            id: 4,
            name: 'Несбывшийся хедер сайта',
            url: NO_HEADER_CONST,
            likes: 8,
            currentUserRating: 0,
            date:1557696445
        },
        {
            id: 5,
            name: 'Сбывшийся хедер сайта',
            url: HEADER_CONST,
            likes: 8,
            currentUserRating: 0,
            date:1557696411
        }
    ]
};

let sortedPhotos = [];


function orderBy(array) {
    let elementSortedArray = {};
    let max = 0;
    let newArr = [];
    array.map(photo => {
        if (photo.likes >= max) {
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
        orderBy(newArr);
    }
    console.log(sortedPhotos);
}

function Reducer(state = initialState, action) {
    if (state === undefined) {
        state = [];
        console.log("мяу");
    }


    const obj = {
        name: action.name,
        url: action.url,
        likes: action.likes
    };

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
                orderBy(inState);
                state = {
                    photos: sortedPhotos.reverse().slice(0, action.count),
                    sort: -1
                };
                return state;
            }
            // по возрастанию
            if (state.sort === 1) {
                sortedPhotos = [];
                orderBy(inState);
                state = {
                    photos: sortedPhotos.slice(0, action.count),
                    sort: 1
                };
                return state;
            }
            // забили
            state = {
                photos: inState
            };
            return state;
        }

        case ORDER_BY_CONSTANT: {
            sortedPhotos = [];
            orderBy(state.photos);
            if (sortedPhotos.length !== 0) {
                state = {
                    sort: 1,
                    photos: sortedPhotos.slice(0, action.count)
                };
                return state;
            }
            return state;
        }

        case ORDER_BY_DESC_CONSTANT: {
            sortedPhotos = [];
            orderBy(state.photos);
            if (sortedPhotos.length !== 0) {
                state = {
                    sort: -1,
                    photos: sortedPhotos.reverse().slice(0, action.count)
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