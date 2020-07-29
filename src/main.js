// jQuery('.test')
//     .find('.child')
//     .addClass('red')
//     .addClass('blue')
//     .addClass('green')
//     .end()
//     .addClass('yellow')
//const api1 = jQuery('.test')
//const api2  = api1.find('.child').addClass('red').addClass('blue').addClass('green')
//const oldApi = api2.end().addClass('yellow')


// const x = jQuery('.test').find('.child')
// x.each((div)=>console.log(div))//div为elements,appeared six dix is completed

const x = jQuery('.test')
x.parents().print()
