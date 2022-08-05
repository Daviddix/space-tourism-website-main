let selectBtn = document.querySelectorAll('.buttons > div')
let rankOfCrewMember = document.getElementById('rank')
let nameOfCrewMember = document.getElementById('name')
let descriptionOfCrewMember = document.getElementById('description')
let image = document.getElementById('person-img')

selectBtn.forEach(button =>{
   
    button.addEventListener('click', (e)=>{
        removeBg()
        e.currentTarget.classList.add('picked')
        
        if (e.target.id == 'btn1') {
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newRank = data.crew[0].role
                rankOfCrewMember.innerHTML = newRank
            });

            //fetch data for name
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newName = data.crew[0].name
                nameOfCrewMember.innerHTML = newName
            });

            //fetch data for description
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newBio = data.crew[0].bio
                descriptionOfCrewMember.innerHTML = newBio
            });

              //fetch data for image
              fetch('data.json')
              .then((raw)=>{
                 return raw.json()
              }).then((data)=>{
                  let newImg = data.crew[0].images.png
                  image.src = newImg
              });
        }
        
        else if(e.target.id == 'btn2'){
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newRank = data.crew[1].role
                rankOfCrewMember.innerHTML = newRank
            });

            //fetch data for name
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newName = data.crew[1].name
                nameOfCrewMember.innerHTML = newName
            });

            //fetch data for description
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newBio = data.crew[1].bio
                descriptionOfCrewMember.innerHTML = newBio
            });

            //fetch data for image
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newImg = data.crew[1].images.png
                image.src = newImg
            });
        }

        else if(e.target.id == 'btn3'){
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newRank = data.crew[2].role
                rankOfCrewMember.innerHTML = newRank
            });

            //fetch data for name
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newName = data.crew[2].name
                nameOfCrewMember.innerHTML = newName
            });

            //fetch data for description
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newBio = data.crew[2].bio
                descriptionOfCrewMember.innerHTML = newBio
            });

            //fetch data for image
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newImg = data.crew[2].images.png
                image.src = newImg
            });
        }

        else if(e.target.id == 'btn4'){
            //data for name
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newRank = data.crew[3].role
                rankOfCrewMember.innerHTML = newRank
            });

            //fetch data for name
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newName = data.crew[3].name
                nameOfCrewMember.innerHTML = newName
            });

            //fetch data for description
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newBio = data.crew[3].bio
                descriptionOfCrewMember.innerHTML = newBio
            });

            //fetch data for image
            fetch('data.json')
            .then((raw)=>{
               return raw.json()
            }).then((data)=>{
                let newImg = data.crew[3].images.png
                image.src = newImg
            });
        }

        else{
            console.log('error');
        }
    })
})

//function to add bg colors when the buttons are clicked
function removeBg(){
    selectBtn.forEach(clicked=>{
        clicked.classList.remove('picked')
    })
}