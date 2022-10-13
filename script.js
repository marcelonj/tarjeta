simplyCountdown('#contador', {
    year: 2022, // required
    month: 11, // required
    day: 26, // required
    hours: 21, // Default is 0 [0-23] integer
    minutes: 30, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'DÍAS', plural: 'DÍAS' },
        hours: { singular: 'HS', plural: 'HS' },
        minutes: { singular: 'MIN', plural: 'Minutos' },
        seconds: { singular: 'SEG', plural: 'Segundos' }
    },
    plural: false, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});
var boton = document.getElementById("boton");
var v = document.getElementsByTagName("audio")[0];
var sound = false;
boton.addEventListener("click", function(){
    if (!sound) {
      v.play();
      sound = true;
      boton.style.backgroundColor = '#0e860e7e';
     } else {
      v.pause();
      sound = false;
      boton.style.backgroundColor = null;
     } 
   });
  
function asistencia(){
    var invitado = document.getElementById("nombre").value; 
    if(invitado != ""){
        var invitado_arr = invitado.split(' ');
        invitado = invitado_arr.toString();
        invitado = invitado.replace(/,/,"%20")
        var url = "https://wa.me/543875992360?text=Hola,%20soy%20"+invitado+"%20y%20quiero%20confirmar%20mi%20asistencia%20a%20la%20fiesta."
        window.location.href = url;
    //https://wa.me/543875992360?text=Hola,%20soy%20**%20y%20quiero%20confirmar%20mi%20asistencia%20a%20la%20fiesta./
    }
    else{
        alert("Por favor ingrese el nombre del invitado.")
    }
}
function eliminar_mensaje(){
    
    var padre = document.getElementById("boton");
    var hijo = document.getElementById("eliminar");
    var aux = padre.removeChild(hijo);
}
setTimeout(eliminar_mensaje, 5000);