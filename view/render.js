
import {contentRehder} from './content.js'

export const render = () => {
    const root = document.getElementById('root');
    const tabl = contentRehder();
    root.innerHTML = tabl;    
}
