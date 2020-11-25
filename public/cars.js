
const carList = document.querySelector('.carsList')


const carTempText = document.querySelector('.carsTemp').innerHTML;


const carsTemplet = Handlebars.compile(carTempText)


axios 
.get('http://api-tutor.herokuapp.com/v1/makes')
.then(function(results){

    carList.innerHTML = carsTemplet({

        cars : results.data
    })
})