var ai_chafaichon = ml5.imageClassifier ("https://teachablemachine.withgoogle.com/models/l5XH2hG8O/model.json",la_funcion)
Webcam.set({
    width: 300,
    height: 235,
    image_format: "png",
    png_quality: 20 
})
Webcam.attach("#camarena")
function photo() {
    Webcam.snap(function (t) {
       document.getElementById("photooo").innerHTML='<img id="1d" src="'+t+'" > '
    })
}

function analizar() {
    var  fotocoolbarataxdfullhd =document.getElementById("1d")
    ai_chafaichon.classify(fotocoolbarataxdfullhd,ubereats)
}

function ubereats(error,pizza) {
if(error){
    console.log(error)
}else {
    console.log(pizza)
    var linea25 = pizza [0].label
    document.getElementById ("seek").innerHTML = "veo... veo... veo..."+linea25+"😠🎈^_^"
}
}

function la_funcion() {
    console.log (ai_chafaichon)

}