import { combineReducers } from "redux";

const songReducer = () => {
    return [
        {title: "Macarena", duration: "4:05"},
        {title: "Ahora dice", duration: "3:49"},
        {title: "La vuelta al mundo", duration: "2:17"},
        {title: "Atrevete", duration: "1:58"}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED"){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songReducer: songReducer,
    selectedSongReducer: selectedSongReducer
});