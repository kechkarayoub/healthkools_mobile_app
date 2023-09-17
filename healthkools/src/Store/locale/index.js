// import Storage from 'react-native-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from "react-native-localize";
import {supported_languages} from 'src/config/global';
import EncryptedStorage from 'react-native-encrypted-storage';


// const locale_storage = new Storage({
//   // maximum capacity, default 1000 key-ids
//   size: 1000,

//   // Use AsyncStorage for RN apps, or window.localStorage for web apps.
//   // If storageBackend is not set, data will be lost after reload.
//   storageBackend: AsyncStorage, // for web: window.localStorage

//   // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
//   // can be null, which means never expire.
//   defaultExpires: null,

//   // cache data in the memory. default is true.
//   enableCache: true,

//   // if data was not found in storage or expired data was found,
//   // the corresponding sync method will be invoked returning
//   // the latest data.
//   sync: {
//     async current_language(/*params*/) {
//       var current_language = "fr";
//       let locale_language = getLocales()[0];
//       var locale_splited = locale_language && locale_language.languageTag && locale_language.languageTag.split("-")[0];
//       if(locale_splited && supported_languages.indexOf(locale_splited) !== -1){
//         current_language = locale_splited;
//       }
//       return current_language;
//       // let {
//       //   id,
//       //   syncParams: { extraFetchOptions, someFlag }
//       // } = params;
//       // const response = await fetch('user/?id=' + id, {
//       //   ...extraFetchOptions
//       // });
//       // const responseText = await response.text();
//       // console.log(`user${id} sync resp: `, responseText);
//       // const json = JSON.parse(responseText);
//       // if (json && json.user) {
//       //   storage.save({
//       //     key: 'user',
//       //     id,
//       //     data: json.user
//       //   });
//       //   if (someFlag) {
//       //     // do something for some custom flag
//       //   }
//       //   // return required data when succeed
//       //   return json.user;
//       // } else {
//       //   // throw error when failed
//       //   throw new Error(`error syncing user${id}`));
//       // }
//     }
//   }
// });

export const set = async (key, value) => {
  try {
      await EncryptedStorage.setItem(key, value);

      // Congrats! You've just stored your first value!
  } catch (error) {
      // There was an error on the native side
      console.log(error.code); 
  }
}

export const get = async (key, callback) => {
  try {   
      await EncryptedStorage.getItem(key).then(value => {
        if(!value && key == "locale_language"){
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
      console.log(error.code); 
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
export const clear = async () => {
  try {
    await EncryptedStorage.clear();

  } catch (error) {
      // There was an error on the native side
      console.log(error.code); 
  }
}

