let nameOfPlanet = document.querySelectorAll('.selectors > *')
let sha = document.getElementById('planet-name')
let descriptionOfPlanet = document.getElementById('planet-description')
let distanceOfPlanet = document.getElementById('distance')
let timeOfPlanet = document.getElementById('time')
let imgOfPlanet = document.getElementById('planet-img')

nameOfPlanet.forEach(name =>{
    name.addEventListener('click', (e)=>{
        removeClass()
        e.target.classList.add('selected')
        // if i tap on mars 
        if(e.target.id == 'mars'){
             fetch('data.json') //get json data
        .then((response )=>{
            return response.json() //change the format
        }).then((data)=>{
            return data.destinations[1].name // get the name
        }).then((output)=>{

            sha.innerHTML = output // change the planet name to mars
        })

        // get json file again
        fetch('data.json')
          .then((response )=>{
            return response.json()
        }).then((data)=>{
            return data.destinations[1].description // get the description
        }).then((output)=>{

            descriptionOfPlanet.innerHTML = output // change the planets description  
        })

        
        //fetch data again
        fetch('data.json')
        .then((response )=>{
            return response.json()
        }).then((data)=>{
            return data.destinations[1].images.png // get the new image
        }).then((output)=>{
            imgOfPlanet.setAttribute('src', output)// change the planets image to mars image  
        })

          //fetch data again
          fetch('data.json')
          .then((response )=>{
              return response.json()
          }).then((data)=>{
              return data.destinations[1].distance // get the new distance
          }).then((output)=>{
              distanceOfPlanet.innerHTML = output// change the planets distance  
          })


           //fetch data again
           fetch('data.json')
           .then((response )=>{
               return response.json()
           }).then((data)=>{
               return data.destinations[1].travel // get the new time
           }).then((output)=>{
               timeOfPlanet.innerHTML = output// change the planets time  
           })

        }
        //if i tap on europa
        else if(e.target.id == 'europa'){
            fetch('data.json')
            .then((response )=>{
                return response.json()
            }).then((data)=>{
                return data.destinations[2].name //gets the planets new name
            }).then((output)=>{
    
            sha.innerHTML = output //  changes the planets name

             // get json file again
            fetch('data.json')
            .then((response )=>{
            return response.json()
        }).then((data)=>{
            return data.destinations[2].description // get the description
        }).then((output)=>{

            descriptionOfPlanet.innerHTML = output // change the planets description
        })


        })

        //get json data again
        fetch('data.json')
        .then((response )=>{
            return response.json()
        }).then((data)=>{
            return data.destinations[2].images.png // get the new image
        }).then((output)=>{
            imgOfPlanet.setAttribute('src', output)// change the planets image  
        })

        //fetch data again
        fetch('data.json')
        .then((response )=>{
            return response.json()
        }).then((data)=>{
            return data.destinations[2].distance // get the new distance
        }).then((output)=>{
            distanceOfPlanet.innerHTML = output// change the planets distance  
        })


        //fetch data again
        fetch('data.json')
        .then((response )=>{
            return response.json()
        }).then((data)=>{
            return data.destinations[2].travel // get the new time
        }).then((output)=>{
            timeOfPlanet.innerHTML = output// change the planets time  
        })


        }
        //if i tap on titan
        else if(e.target.id == 'titan'){
            fetch('data.json')
            .then((response )=>{
                return response.json()
            }).then((data)=>{
                return data.destinations[3].name //gets the planets name
            }).then((output)=>{
    
                sha.innerHTML = output //changes the planets name 
            })

                // get json file again
            fetch('data.json')
            .then((response )=>{
            return response.json()
        }).then((data)=>{
            return data.destinations[3].description // get the description
        }).then((output)=>{

            descriptionOfPlanet.innerHTML = output // change the planets description
        })

         //fetch data again
         fetch('data.json')
         .then((response )=>{
             return response.json()
         }).then((data)=>{
             return data.destinations[3].images.png // get the new image
         }).then((output)=>{
             imgOfPlanet.setAttribute('src', output)// change the planets image  
         })

        //fetch data again
        fetch('data.json')
        .then((response )=>{
            return response.json()
        }).then((data)=>{
            return data.destinations[3].distance // get the new distance
        }).then((output)=>{
            distanceOfPlanet.innerHTML = output// change the planets distance  
        })


        //fetch data again
        fetch('data.json')
        .then((response )=>{
            return response.json()
        }).then((data)=>{
            return data.destinations[3].travel // get the new time
        }).then((output)=>{
            timeOfPlanet.innerHTML = output// change the planets time  
        })
        }
        //if i tap on moon
        else{
            fetch('data.json') //get json data
            .then((response )=>{
                return response.json() //change the format
            }).then((data)=>{
                return data.destinations[0].name // get the name
            }).then((output)=>{
    
                sha.innerHTML = output // change the planet name
            })
    
            // get json file again
            fetch('data.json')
              .then((response )=>{
                return response.json()
            }).then((data)=>{
                return data.destinations[0].description // get the description
            }).then((output)=>{
    
                descriptionOfPlanet.innerHTML = output // change the planets description  
            })
    
            
            //fetch data again
            fetch('data.json')
            .then((response )=>{
                return response.json()
            }).then((data)=>{
                return data.destinations[0].images.png // get the new image
            }).then((output)=>{
                imgOfPlanet.setAttribute('src', output)// change the planets image   
            })

                      //fetch data again
          fetch('data.json')
          .then((response )=>{
              return response.json()
          }).then((data)=>{
              return data.destinations[0].distance // get the new distance
          }).then((output)=>{
              distanceOfPlanet.innerHTML = output// change the planets distance  
          })


           //fetch data again
           fetch('data.json')
           .then((response )=>{
               return response.json()
           }).then((data)=>{
               return data.destinations[0].travel // get the new time
           }).then((output)=>{
               timeOfPlanet.innerHTML = output// change the planets time  
           })
        }
    })
})

function removeClass(){
    nameOfPlanet.forEach(tappedName=>{
        tappedName.classList.remove('selected')
    })
}