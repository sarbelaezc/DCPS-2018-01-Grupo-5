import { helper } from '@ember/component/helper';

export function searchHelper(var1, var2, params) {
  if(var1!=var2) {
        return params.inverse(this);
    } else {
        return params.fn(this);
    }
}

export default helper(searchHelper);