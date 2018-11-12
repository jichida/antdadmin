import store from './store';
import { goBack  } from 'connected-react-router';//https://github.com/reactjs/connected-react-router
import * as xview from './xview/Common';
let handlerbackfn;

export const exitAndroidApp=()=>{
  console.log(`exit app`);

  window.setTimeout(()=>{
    try{
      //alert('exit app');
      xview.exitApp();
    }
    catch(e){

    }
  },0);

}

export const setbackhandler=(fn)=>{
  let oldhandlerbackfn = handlerbackfn;
  handlerbackfn = fn;
  return oldhandlerbackfn;
}


export const removebackhandler=()=>{
  handlerbackfn = undefined;
}

export const registerandroid=()=>{
  window.webBack=()=>{
    try{
      //alert("window.webBack");
      if(!!handlerbackfn){
        handlerbackfn();
      }
      else{
        store.dispatch(goBack());
      }
    }
    catch(e){

    }

  };
}
