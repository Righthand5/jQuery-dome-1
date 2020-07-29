const { type } = require("jquery")

window.jQuery = function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }
    return {
        oldApi : selectorOrArray.oldApi,
        find(selector){
            let array = []
            for(let i=0;i<elements.length;i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array =array.concat(elements2)
            }
            // let newApi = jQuery(array)
            // return newApi
            array.oldApi = this//this就是旧的Api
            return jQuery(array)
        },       
        //闭包：函数访问外部的变量elements
        each(fn){
            for(let i=0;i<elements.length;i++){
                fn.call(null,elements[i],i)
            }
            return this//this就是api对象
        },
        parents(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode)===-1){
                array.push(node.parentNode)
                }
            })
            return jQuery(array)//array没有什么操作性，所有要用jQuery来返回一个可操作的对象
        },
        children(){
            const array = []
            this.each((node)=>{
              // 上课的时候这段代码是复制的，复制错了，现已改正
              array.push(...node.children)
              
            })
            return jQuery(array)
          },
          print(){
            console.log(elements)
          },
        print(){
            console.log(elements)//elements就是对应得元素们
        },
        end(){
            return this.oldApi//this就是新的Api
        },
        addClass(className){
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add(className)
            }
            return this
            // let newApi = jQuery(array)
            // return newA
        }       
    }
}







