import { render} from '@testing-library/vue';
import numPoints from "./numPoints.vue"

test ('render numPoints', ()=> {
   const {debug} = render(numPoints)
   debug()  
})