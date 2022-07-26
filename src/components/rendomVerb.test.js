import { render} from '@testing-library/vue';
import rendomVerb from "./rendomVerb.vue"

test ('render formVerbsCheck', ()=> {
   const {debug} = render(rendomVerb)
   debug()  
})