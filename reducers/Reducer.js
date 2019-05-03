import {AddPhotoConstant} from "../constants/ActionTypes";

const initialState = {
    photos: [1, 2, 3, 4, 5],
    photosById: [
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
            id: 4,
            name: 'Сбывшийся хедер сайта',
            url:"http://localhost:9000/materials/fon1.jpg",
            likes:8
        }
    ]
};

function Reducer (state = initialState, action) {
    switch(action.type){
        case AddPhotoConstant:{

            const newId = state.photos[state.photos.length-1]+1;

            return {
                photos:state.photos.concat(newId),
                photosById: state.photosById.concat({
                    id: newId,
                    name: action.name,
                    url: action.url,
                    likes: action.likes
                })
            };

        }
        default:{
            return state;
        }
    }
};

export default Reducer;