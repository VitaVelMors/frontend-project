const stars = 400

for (let i =0; i < stars; i++) {
  let star = document.createElement("div")
  star.className = 'stars'
  var xy = randomPosition();
  star.style.top = xy[0] + 'px'
  star.style.left = xy[1] + 'px'
  document.body.append(star)
}

function randomPosition() {
  var y = window.innerWidth
  var x = window.innerHeight
  var randomX = Math.floor(Math.random() * x)
  var randomY = Math.floor(Math.random() * y)
  return [randomX, randomY]
}


function searchBtns(){ 
  $.get(`https://swapi.dev/api/`, (data) => {
    $.each(data, function(key, value){
      $('#search-links').append(
        $(`<button id = 'searchBtn'class='btn'>${key}</button>`).on('click', function (e){
          $(`#results`).empty()
          $(`#footer`).empty()
          $.get(value, (data) => {
            getData(data);
             if ($(`#results`) != ''){
              if(data.next){
              $(`#footer`).append(
                $(`<button id = 'prevNext' class='btn'> Next >> </button>`).on('click', function(e){
                  $(`#results`).empty()
                  $(`#footer`).empty()
                  $.get(data.next, (data) =>{
                    console.log(data)    
                    getData(data);
                  })
                })
              )
              }
            }
          })
        })
      )
    })
  })   
}
searchBtns()

function getData(data){
  if (data.results){
    $(`#results`).empty()
    $(`#footer`).empty()
    $.each(data.results, function(index, value){
      $(`#results`).append(
        $(`<button id = 'childBtn' class = 'btn'>${value.name || value.title}</button>`).on('click', function (e){
          $(`#results`).append(
            $(`<h2 class='header'>${value.name || value.title}</h2>`))
            $.each(value, function(key, value){
             $(`#results`).append(
              $(`<ul id = "link-list"></ul>`).append(
                $(`<li class = "key">${key}: ${value}</li>`)
              )
            )
          })
        })
      )
    })
  }
}





// const urls = {
//   base: 'https://swapi.dev/api/',
//   people: 'people/',
//   planets: 'planets/',
//   films: 'films/',
//   species: 'species/',
//   vehicles: 'vehicles/',
//   starships: 'starships/'
// }

// function nextData(){
  

//     if(data.previous){
//     $(`#footer`).append(
//       $(`<button class='prevNext'> << Previous </button>`).on('click', function(e){
//         $(`#results`).empty()
//         $(`#footer`).empty()
//         $.get(data.previous, (data) =>{
//           console.log(data)    
//           getData(data);
//         })
//       })
//     )
//     }
//   }


                  // <span class = "result-card"></span>`).append(
                  //   
    
  // $('#submit').on('click', function(e) {
  //   getData()
  //   });
    
  //   $('input').keyup(function(e) {
  //     if(e.which === 13){
  //       getData()
  //     }
  //   });