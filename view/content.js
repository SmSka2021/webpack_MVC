 
 export const contentRehder = () => {       
   const arr = ['City', 'Country', 'Time', 'Temperature', 'Wind speed', 'Direction of the wind','Humidity']
   let srt = arr.map((i, ind) => `<tr><td>${i}</td><td class ="red item_${ind}"></td></tr>`).join('') 
    
    const tabl = `
    <section class="container">
    <div class="container__item">
        <table>
                 ${srt}          
        </table>
         </div>          
    </section>`
    return tabl 
}
