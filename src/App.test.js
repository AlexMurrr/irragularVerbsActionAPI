import { render} from '@testing-library/vue';
import App from "./App.vue"

test ('render formVerbsCheck', ()=> {
   const {debug} = render(App)
   debug()  
})