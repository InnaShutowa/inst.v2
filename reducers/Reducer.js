import {AddPhotoConstant, ChangeRatingConstant} from "../constants/ActionTypes";

const initialState = {
    photos:[
            {
                id: 1,
                name: 'Сова',
                url:"http://localhost:9000/materials/sova.jpg",
                likes: 5
            },
            {
                id: 2,
                name: 'Пейзажик',
                url:"http://localhost:9000/materials/pict.jpg",
                likes: 4
            },
            {
                id: 3,
                name: 'Жизнь моими глазами',
                url:"http://localhost:9000/materials/pictt.jpg",
                likes:3,
            },
            {
                id: 4,
                name: 'Несбывшийся хедер сайта',
                url:"http://localhost:9000/materials/fon.jpg",
                likes:8
            },
            {
                id: 5,
                name: 'Сбывшийся хедер сайта',
                url:"http://localhost:9000/materials/fon1.jpg",
                likes:8
            }
        ]
};

function Reducer (state = initialState, action) {
    if (state===undefined){
        state=[];
        console.log("мяу");
    }
    switch(action.type){
        // добавляем фотку
        case AddPhotoConstant:{
            const newId = state.length+1;
            const newObj =  {
                    id: newId,
                    name: action.name,
                    url: action.url,
                    likes: action.likes
            };
            state.photos = state.photos.concat(newObj);

            console.log(state);
            return state;
        }
        // изменяем рейтинг (лайк/дизлайк)
        case ChangeRatingConstant:{
            state.map(photo=>{
                if (photo.id === action.id){
                    photo.likes+=action.rating;
                }
            });
            return state;
        }
        default:{
            return state;
        }
    }
}

export default Reducer;