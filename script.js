const myLibrary = [];
const form = document.querySelector('#input-form')
const textArea = document.querySelector('.bookshelf')


function Book(title, author, pages , read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `
         <table>
              
                <tr>
                    <td> Book Title  </td>
                    <td>:  ${title}</td>
                </tr>
                <tr>
                    <td>Author Name </td>
                    <td>:  ${author}</td>
                </tr>
                <tr>
                    <td>Number of pages</td>
                    <td>:  ${pages}</td>

                </tr>
                <tr>
                    <td>Read Status</td>
                    <td>: ${read}</td>
                </tr>

               
               </table>
        
        `;
    }
    

}


form.addEventListener('submit', event =>{

   
   
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;
    const newBook = new Book(title, author, pages, read);
   

    
   
   addBooktoLibrary(newBook)
   modal_container.classList.remove('show');

  

})


function addBooktoLibrary(newBook){

    myLibrary.push(newBook)
    displayBooks()

}


function displayBooks(){

    textArea.innerHTML ='';
   



    for (let i = 0; i < myLibrary.length; i++) {

        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container')


        
        const bookInfo = document.createElement('p');
        bookInfo.innerHTML = myLibrary[i].info();
        bookContainer.appendChild(bookInfo); 

        textArea.appendChild(bookContainer);
        
       
        const removeBtn = document.createElement('button')
        removeBtn.innerText = "remove";
        removeBtn.classList.add ('remove-btn');
        bookContainer.appendChild(removeBtn)
        bookContainer.classList.add('book-card')
        removeBtn.addEventListener('click', () => {

            myLibrary.splice(i, 1);
            displayBooks();

        });
        textArea.appendChild(bookContainer);
    }

    title.value = '';
   author.value = '';
   pages.value = '';
   read.value = '';

}



 const open = document.querySelector('#open-modal')   ;
 const modal_container = document.querySelector('#modal_container')
 const close = document.querySelector('#close-btn')



 open.addEventListener('click', ()=>{

    modal_container.classList.add('show')

 })

 close.addEventListener('click', ()=>{

    modal_container.classList.remove('show')

 })


 