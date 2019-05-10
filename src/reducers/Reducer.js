import {
    ADD_PHOTO_CONSTANT, CHANGE_RATING_CONSTANT,
    MAKE_ONE_PHOTO_FOR_TEST,
    MAKE_ONE_PHOTO_FOR_TEST_CONSTANT
} from "../constants/ActionTypes";

let initialState = {
            photos:[
                {
                        id:1,
                        name: 'Сова',
                        url:"/src/assets/sova.jpg",
                        likes: 5
                },
                {
                        id:2,
                        name: 'Пейзажик',
                        url:"/src/assets/pict.jpg",
                        likes: 4
                },
                {
                        id:3,
                        name: 'Жизнь моими глазами',
                        url:"/src/assets/pictt.jpg",
                        likes:3,
                },
                {
                        id:4,
                        name: 'Несбывшийся хедер сайта',
                        url:"/src/assets/fon.jpg",
                        likes:8
                },
                {
                        id:5,
                        name: 'Сбывшийся хедер сайта',
                        url:"/src/assets/fon1.jpg",
                        likes:8
                }
            ]
        };

function Reducer (state = initialState, action) {
    if (state===undefined){
        state=[];
        console.log("мяу");
    }


    const obj = {
        name: action.name,
        url: action.url,
        likes: action.likes
    };

    switch(action.type){
        case MAKE_ONE_PHOTO_FOR_TEST_CONSTANT:{
            state = {
                photos: {
                    1: {
                        name: 'Сова',
                        url: "/src/assets/sova.jpg",
                        likes: 5
                    }
                }
            };
            //Object.assign({}, state);

            console.log(state);
            return state;
        }
        // добавляем фотку
        case ADD_PHOTO_CONSTANT:{
             state = {
                photos:{
                    1: {
                        name: 'Сова',
                        url: "/src/assets/sova.jpg",
                        likes: 5
                    }
                }
            };
            console.log(state);
            return state;
        }
        // изменяем рейтинг (лайк/дизлайк)
        case CHANGE_RATING_CONSTANT:{
            console.log("изменилось что ли");
            let inState =  [];
            state.photos.map(photo=>{
                if (photo.id !== action.id){
                    inState.push(photo);
                } else{
                    if (action.rating+photo.likes>=0){
                        photo.likes+=action.rating;
                    }
                    inState.push(photo);
                }
            });
            state = {
                photos: inState
            };

            console.log(state);

            return state;
        }
        default:{
            return state;
        }
    }
}

export default Reducer;