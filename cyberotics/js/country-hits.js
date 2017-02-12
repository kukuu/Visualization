var cities = [
          { name: "Russia",
           population: 542
         },
          { name: "United States",
           population: 777
         },
          { name: "United Kingdom",
           population: 236
         },
          { name: "Japan",
           population: 436
         },
          { name: "France",
           population: 136
         },
          { name: "Canada",
           population: 36
         },
          { name: "Germany",
           population: 26
         }
        ];

        for(var i=0; i<cities.length;i++){
          document.getElementById("name"+i).innerHTML = cities[i].name;
          document.getElementById("bartext"+i).innerHTML = cities[i].population;
          document.getElementById("bar"+i).style.width = cities[i].population + "px";
        }