import { getLocales } from "react-native-localize";
import { supported_languages } from 'src/config/global';

let locale_language = getLocales()[0];
var current_language = "fr";
var locale_splited = locale_language && locale_language.languageTag && locale_language.languageTag.split("-")[0];
if(locale_splited && supported_languages.indexOf(locale_splited) !== -1){
  current_language = locale_splited;
}

const initialState = { current_language: current_language }

function gloabalReducer(state, action) {
  state = state || initialState;
  let nextState
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      nextState = {
        ...state,
        current_language: action.value
      }
      return nextState
  default:
    return state
  }
}

export default gloabalReducer;
