function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
  }
  Webcam.set({
    width:400,
    height:400,
    image_format: 'png',
    png_quality:80
    });
    
    camera = document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot() {
        Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src='+data_uri+'"/>';
    
        });
    }
    
    console.log('ml5 ver', ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rKNpALkOW/');
    function modelLoaded() {
        console.log('model loaded');
    }
    function check() {
        img = document.getElementById('captured_image');
        classifier.classify(img, gotResult);
    }
  
    function gotResult(error, results) {
        if(error) {
            console.log(error);
        } else {
            console.log(results);
            document.getElementById("result_object_name").innerHTML = results[0].label;
            document.getElementById("result_object_accuracy").innerHTML = results[0].confidence;
        }
    }
  