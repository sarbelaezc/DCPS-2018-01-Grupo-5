import { helper } from '@ember/component/helper';

export function ifEqual(string1, string2) {
  if(string1 == string2){
    return true;
  }else{
    return false;
  }
}

export default helper(ifEqual);
