// Add New Note  
async function saveBtn(event){
  var noteTitle1 = document.getElementById('noteTitle').value;        
  var noteText1 = document.getElementById('noteText').value;
  let saveNote = {
    noteTitle:noteTitle1,
    noteText:noteText1
  }  
  await fetch('/api/notes',{
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    credentials: 'omit',
    body: JSON.stringify(saveNote)
  }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      window.location.reload("http://localhost:8080/notes")
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// // Get All Note
// async function saveBtn(event){
//     await fetch('/api/notes',{
//       method:"GET"
//     }).then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//         window.location.reload("http://localhost:8080/notes")
        
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }
