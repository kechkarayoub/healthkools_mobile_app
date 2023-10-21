// import Storage from 'react-native-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import { getLocales } from "react-native-localize";
import { supported_languages } from 'src/config/global';

export const clear = async () => {
  try {
    await EncryptedStorage.clear();

  } catch (error) {
      // There was an error on the native side
      console.log(error.code); 
  }
}

export const get = async (key, callback) => {
  try {
      await EncryptedStorage.getItem(key).then(value => {
        if(!value && key == "current_language"){
          var value = "fr";
          let locale_language = getLocales()[0];
          var locale_splited = locale_language && locale_language.languageTag && locale_language.languageTag.split("-")[0];
          if(locale_splited && supported_languages.indexOf(locale_splited) !== -1){
            value = locale_splited;
          }
        }
        if(callback){
          callback(value);
        }
        return value;
      });
  
  } catch (error) {
      // There was an error on the native side
      console.log(error); 
  }
}

export const remove = async (key) => {
  try {
      await EncryptedStorage.removeItem(key, value);

      // Congrats! You've just stored your first value!
  } catch (error) {
      // There was an error on the native side
      console.log(error.code); 
  }
}

export const set = async (key, value) => {
  try {
      await EncryptedStorage.setItem(key, value);

      // Congrats! You've just stored your first value!
  } catch (error) {
      // There was an error on the native side
      console.log(error.code); 
  }
}
