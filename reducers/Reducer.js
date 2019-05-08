import {AddPhotoConstant, ChangeRatingConstant} from "../constants/ActionTypes";

let initialState = {
            photos:{
                1:{
                        name: 'Сова',
                        url:"http://localhost:9000/materials/sova.jpg",
                        likes: 5
                },
                2:{
                        name: 'Пейзажик',
                        url:"http://localhost:9000/materials/pict.jpg",
                        likes: 4
                },
                3:{
                        name: 'Жизнь моими глазами',
                        url:"http://localhost:9000/materials/pictt.jpg",
                        likes:3,
                },
                4:{
                        name: 'Несбывшийся хедер сайта',
                        url:"http://localhost:9000/materials/fon.jpg",
                        likes:8
                },
                5:{
                        name: 'Сбывшийся хедер сайта',
                        url:"http://localhost:9000/materials/fon1.jpg",
                        likes:8
                }
            }

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
        // добавляем фотку
        case AddPhotoConstant:{
            console.log("11111 ");
            let stateCopy = {
                photos: {
                    1: {
                        name: 'Сова',
                        url: "http://localhost:9000/materials/sova.jpg",
                        likes: 5
                    }
                }
            };
            state = stateCopy;
                //Object.assign({}, state);

            console.log(state);
            return state;
        }
        // изменяем рейтинг (лайк/дизлайк)
        case ChangeRatingConstant:{
            console.log("изменилось что ли");

            //initialState = state;
            //initialState.map(ph=>{
              //  if (ph.id === action.id){
              //      console.log(action.id);
              //      ph.likes+=action.rating;
              //      state = initialState.filter(item, ind=>ind!==1);
              //      state = initialState.concat(ph);
            //    }
            //});

            let stateCopy = {
                photos: {
                    1: {
                        name: 'Сова',
                        url: "http://localhost:9000/materials/sova.jpg",
                        likes: 5
                    }
                }
            };

            console.log(initialState);
            state = stateCopy;
            return state;
        }
        default:{
            return state;
        }
    }
}

export default Reducer;