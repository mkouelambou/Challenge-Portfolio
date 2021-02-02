var bezoeker={
    naam : prompt("Wat is je naam?"),
   leeftijd : prompt("Wat is je leeftijd?"),
};
if (bezoeker.naam != null) {
   let koptekst = document.querySelector("h1");
koptekst.innerHTML = "Welcome , " + bezoeker.naam;

console.log(bezoeker);

if (bezoeker.leeftijd >= 18) {
  koptekst.style.color= 'lightgreen';
   }
    if (bezoeker.leeftijd < 18) {
       koptekst.style.color = 'red';
       }
         if (bezoeker.leeftijd ==0) {
           koptekst.style.color = 'white';
                   }
               }