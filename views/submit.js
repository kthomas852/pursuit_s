/* This is the submission JS that takes care of uploads to FireBase */
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnmHqTk9X8HD_T852mvO29QN370QKmeA0",
    authDomain: "pursuit-19db7.firebaseapp.com",
    databaseURL: "https://pursuit-19db7.firebaseio.com",
    projectId: "pursuit-19db7",
    storageBucket: "pursuit-19db7.appspot.com",
    messagingSenderId: "61950672392"
  };
  firebase.initializeApp(config);

  var sdb = firebase.database();
  var article = document.getElementById('category');
  var inputCheck = function(input){if(input){ return input;}else{return "";}};

  //Button Listener to submit story
  $('#send-up').click(function(){
      let title = $('#title').val();
      let email = inputCheck($('#email').val());
      let myRole = inputCheck($('#myRole').val());
      let message = $('#message').val();
      let biz = inputCheck($('#biz').val());
      let category = article.dataset.category;
      let link = inputCheck($('#link').val());
      let FunFact = inputCheck($('#FunFact').val());
      let topics = inputCheck($('#topics').val());
      let bp = inputCheck($('#bulletPoints').val());
      let summary = inputCheck($('#summary').val());
      let eventDate = inputCheck($('#eventDate').val());
      let rStat = inputCheck($('#rStat').val());
      let date = moment().format('X');
                    //Completeion confirmation after submission
      $('.main').html('<div class="spacer"></div>'+
                    '<h1>Thank you for your submission!</h1><br>'+
                    '<h2>Your story is now under approval</h2><br>'+
                    '<h2>You will be notified once it has been reviewed.</h2><br>');

    //Loads changes and pushes them to firebase.database
      var auth = firebase.auth();
      auth.onAuthStateChanged(firebaseUser => { 
      sdb.ref('/submissions').push({
          reviewed: false,
          title: title,
          PursuitersEmail: firebaseUser.email,
          email: email,
          myRole: myRole,
          biz: biz,
          link: link,
          topics: topics,
          message: message,
          category: category,
          funfact: FunFact,
          summary: summary,
          bulletPoints: bp,
          rStat: rStat,
          eventDate: eventDate,
          subDate: date
      });
    });
  })