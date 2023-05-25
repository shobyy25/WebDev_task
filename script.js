fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then(response => response.json())
  .then(data => {
    console.log(data);


    data.sort((a, b) => {
      if (a.points < b.points) {
        return 1;
      }
      if (a.points > b.points) {
        return -1;
      }
      return 0;
    });
    console.log(data);
    const length = Object.keys(data).length;
    console.log(length);
    
    const dataContainer = document.getElementById('data-container');

    for(let i=3; i<length; i++){
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('data[i]');

      itemDiv.innerHTML = `
      <div class="flex-container2">
      <div class="flex-item2" id="flex-item-2-1">${i+1}</div>
      <div class="flex-item2" id="flex-item-2-2">
          <div style="text-align:center"> 
           <div class="image-container">
            <img src="${data[i].avatar}" alt="Circle Image">
          </div></div>
      </div>
      <div class="flex-item2" id="flex-item-2-3">
          <span class="name">${data[i].name}</span>
      </div>
      <div class="flex-item2" id="flex-item-2-4">${data[i].points}</div>
      </div>
      <br> 
      `;

      dataContainer.appendChild(itemDiv);

    }



    var first = document.getElementById('firstplayer');
    var firstImage = document.getElementById('firstimage');
    firstImage.src = data[0].avatar;
    
    
    first.innerHTML = data[0].name + ' • ' + data[0].points;
    first.style.color = 'white';
    first.style.whiteSpace = 'nowrap';


    var second = document.getElementById('secondplayer');
    var secondImage = document.getElementById('secondimage');
    secondImage.src = data[1].avatar;
    
    
    second.innerHTML = data[1].name + ' • ' + data[1].points;
    second.style.color = 'white';
    second.style.whiteSpace = 'nowrap';

    var third = document.getElementById('thirdplayer');
    var thirdImage = document.getElementById('thirdimage');
    thirdImage.src = data[2].avatar;
    
    
    third.innerHTML = data[2].name + ' • ' + data[2].points;
    third.style.color = 'white';
    third.style.whiteSpace = 'nowrap';
    
 




  })
  .catch(error => {
    console.log('Error:', error);
  });


  