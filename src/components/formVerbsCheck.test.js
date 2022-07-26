import { render} from '@testing-library/vue';
import formVerbsCheck from "./formVerbsCheck.vue"

test ('render formVerbsCheck', ()=> {
   const {debug} = render(formVerbsCheck)
   debug()
  // console.log(prettyDOM());
})