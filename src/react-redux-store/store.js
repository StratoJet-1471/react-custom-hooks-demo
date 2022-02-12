import { combineReducers, configureStore } from '@reduxjs/toolkit';

function createPreloadedState() {
    return {
        cruiserState: {
            isReadyToSail: true
        },
        destroyerState: {
            isReadyToSail: false
        }
    };
}

export default configureStore({
    reducer: () => createPreloadedState(), //reducer является обязательным св-вом объекта, принимаемого configureStore(). Но мы в данном проекте не собираемся менять состояние - только читать его - поэтому нам редьюсеры не нужны. Так что делаем вот такую ф-ю, требуемую св-вом reducer - она просто возвращает начальное состояние (пробовал сделать вообще пустую ф-ю, но начинаются ошибки). 
    preloadedState: createPreloadedState()
  });