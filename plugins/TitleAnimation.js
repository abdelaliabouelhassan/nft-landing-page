const specialChars = [...'!@£$%&}{":;?><][+=-_qwertyuiopasdfghjklzxcvbnm'.split('')]
class Title{
    constructor(id, element){
        this.id = id;
        this.idx = 0;
        this.frame = 0;
        this.element = element;
        this.element.className = `${id}`;
        this.originalString = element.innerText;
        this.innerHtml = '';
        this.intersecting = false;
        this.createSpans();
    }

    createSpans(){
        for(let i = 0; i < this.originalString.length; i++){
            this.innerHtml += `<span>${this.originalString[i]}</span>`;
        }
        this.element.innerHTML = this.innerHtml;
        this.spans = [...this.element.querySelectorAll('span')]
    
    }

    animate(){
        if(this.idx !== this.originalString.length && this.intersecting){
            this.spans[this.idx].style.opacity = 1;
            this.spans[this.idx].style.transform = `translateX(0)`
            if(this.frame % 3 === 0 && this.spans[this.idx].innerText !== ' '){
                this.spans[this.idx].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            }
            if(this.frame % 2 == 0 && this.frame !== 0){
                this.spans[this.idx].innerText = this.originalString[this.idx]
                this.idx++
            }
            this.frame++;
            requestAnimationFrame(this.animate.bind(this))
        }else{
            //console.log('done')
            //this.element.innerHTML = this.originalString;
        }
    }

    reset(){
        this.idx = 0;
        this.frame = 0;
        this.intersecting = false;
        [...this.element.querySelectorAll('span')].forEach(span => {
            span.style.opacity = 0;
            span.style.transform = `translateX(-10px)`
        })
    }
}
export default defineNuxtPlugin({
    enforce: 'pre', 
    hooks: {
      // You can directly register Nuxt app hooks here
      'app:mounted'() {
        // let h1Elements = [];
        // const h1Array = [...document.querySelectorAll('.randomtext')];
    
      
        // setTimeout(() => {
        //     h1Array.forEach((header,idx) => {
        //         h1Elements[idx] = new Title(idx, header)
        //     })
        
        //     let options = {
        //         rootMargin: '0px',
        //         threshold: 0.0
        //       }
              
        //       let callback = (entries) => {
        //         entries.forEach((entry) => {
        //             if(entry.isIntersecting){
        //                 h1Elements[+entry.target.className].intersecting = true;
        //                 h1Elements[+entry.target.className].animate()
                      
        //             }else{
        //                 h1Elements[+entry.target.className].reset()
        //             }
        //         });
        //       };
            
        //       let observer = new IntersectionObserver(callback, options);
        
        //       h1Elements.forEach(instance => {
        //         observer.observe(instance.element)
        //         instance.element.style.opacity = 1
        //       });
    
        // }, 0)
      
      }
    }
})
