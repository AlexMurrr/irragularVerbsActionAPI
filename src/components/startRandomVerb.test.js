import { render} from '@testing-library/vue';
import startRandomVerb from "./startRandomVerb.vue"

test ('render startRandomVerb', ()=> {
   const {debug} = render(startRandomVerb)
   debug()  
})