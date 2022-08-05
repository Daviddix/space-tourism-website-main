let techImg = document.querySelector('.image-container')

let techName = document.getElementById('theTechnology')

let techDesc = document.getElementById('aboutTech')

let buttons = document.querySelectorAll('.buttons > div')

//change contents when clicked
buttons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        clearClass()
        e.currentTarget.classList.add('selected')
            //if on mobile or tab
        if (window.innerWidth <= 950) {
            if (e.currentTarget.id == 'firstBtn') {
                //fetch data for image
                fetch('data.json')
                .then((raw)=>{
                    return raw.json()
                })
                .then((data)=>{
                let src = data.technology[0].images.landscape;

                    techImg.style.backgroundImage = `url(${src})`
            });

                doForPcTooOne()
            }
            else if(e.currentTarget.id == 'secondBtn'){
                  //fetch data for image
                  fetch('data.json')
                  .then((raw)=>{
                      return raw.json()
                  })
                  .then((data)=>{
                  let src = data.technology[1].images.landscape;
  
                      techImg.style.backgroundImage = `url(${src})`
              });
  
                  doForPcTooTwo()
        }
            else if(e.currentTarget.id == 'thirdBtn'){
                //fetch data for image
                fetch('data.json')
                .then((raw)=>{
                    return raw.json()
                })
                .then((data)=>{
                let src = data.technology[2].images.landscape;

                    techImg.style.backgroundImage = `url(${src})`
            });

                doForPcTooThree()
            }
        }
       
        //if on pc
            else if(window.innerWidth  >= 950){
                if (e.currentTarget.id == 'firstBtn') {
                //fetch data for image
                fetch('data.json')
                .then((raw)=>{
                return raw.json()
                })
                .then((data)=>{
                let src = data.technology[0].images.portrait;

                techImg.style.backgroundImage = `url(${src})`
                });

                doForPcTooOne()

                }
                else if(e.currentTarget.id == 'secondBtn'){
                          //fetch data for image
                fetch('data.json')
                .then((raw)=>{
                return raw.json()
                })
                .then((data)=>{
                let src = data.technology[1].images.portrait;

                techImg.style.backgroundImage = `url(${src})`
                });

                doForPcTooTwo()
                }
                else if(e.currentTarget.id == 'thirdBtn'){
                //fetch data for image
                fetch('data.json')
                .then((raw)=>{
                return raw.json()
                })
                .then((data)=>{
                let src = data.technology[2].images.portrait;

                techImg.style.backgroundImage = `url(${src})`
                });

                doForPcTooThree()
                }
        }
    })
})


function doForPcTooOne(){
                //fetch data for technology name
                fetch('data.json')
                .then((raw)=>{
                    return raw.json()
                })
                .then((data)=>{
                let newName = data.technology[0].name
    
                    techName.innerHTML = newName
            });
    
                 //fetch data for technology DESCRIPTION
                 fetch('data.json')
                 .then((raw)=>{
                     return raw.json()
                 })
                 .then((data)=>{
                 let newName = data.technology[0].description
     
                     techDesc.innerHTML = newName
             });
}

function doForPcTooTwo(){
    //fetch data for technology name
    fetch('data.json')
    .then((raw)=>{
        return raw.json()
    })
    .then((data)=>{
    let newName = data.technology[1].name

        techName.innerHTML = newName
});

     //fetch data for technology DESCRIPTION
     fetch('data.json')
     .then((raw)=>{
         return raw.json()
     })
     .then((data)=>{
     let newName = data.technology[1].description

         techDesc.innerHTML = newName
 });
}

function doForPcTooThree(){
    //fetch data for technology name
    fetch('data.json')
    .then((raw)=>{
        return raw.json()
    })
    .then((data)=>{
    let newName = data.technology[2].name

        techName.innerHTML = newName
});

     //fetch data for technology DESCRIPTION
     fetch('data.json')
     .then((raw)=>{
         return raw.json()
     })
     .then((data)=>{
     let newName = data.technology[2].description

         techDesc.innerHTML = newName
 });
}

function clearClass(){
    buttons.forEach(selected=>{
        selected.classList.remove('selected')
    })
}