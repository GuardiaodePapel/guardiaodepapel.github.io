// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyB0Gv9aWWZpM0OvJuYZXWnKuGlP-rkeiJ4",
  authDomain: "guardiao-de-papel.firebaseapp.com",
  databaseURL: "https://guardiao-de-papel-default-rtdb.firebaseio.com",
  projectId: "guardiao-de-papel",
  storageBucket: "guardiao-de-papel.appspot.com",
  messagingSenderId: "336510528973",
  appId: "1:336510528973:web:ed4ab16cd1a4e379a1e884",
  measurementId: "G-VJTE0MR0T1"
};
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  let messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var nome = getInputVal('nome');
    var email = getInputVal('email');
    var assunto = getInputVal('assunto');
    var mensagem = getInputVal('mensagem');
	
	console.log("enviado");
  
    // Save message
    saveMessage(nome, email, assunto, mensagem);
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(nome ,assunto, email, mensagem, ){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: nome,
      email: email,
      assunto: assunto,
      mensagem: mensagem
    });
  }