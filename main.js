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
        $(`<button id = ${value} class='parentBtn'>${key}</button>`).on('click', function (e){
          $('#results').empty()
          $.get(value, (data) => {
            if (data.results){
              $.each(data.results, function(index, value){
                $('#results').append(
                  $(`<span class = "result-card"></span>`).append(
                    $('<ul id = "link-list"></ul>').append(
                      $(`<li><a href = "${value.url}" class = "name">${value.name || value.title}</a></li>`)
                    )
                  )
                );
              });
            }
          })
        })
      )
    });
  });
}
searchBtns()

    
  // $('#submit').on('click', function(e) {
  //   getData()
  //   });
    
  //   $('input').keyup(function(e) {
  //     if(e.which === 13){
  //       getData()
  //     }
  //   });