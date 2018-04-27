import { helper } from '@ember/component/helper';

export function searchHelper(var1, var2) {
  if(var1!=var2) {
        return null;
    } else {
        localStorage.setItem('query', var1);
        console.log(localStorage.getItem('query'));
        return true;
    }

}

export default helper(searchHelper);