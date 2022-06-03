import React from 'react';
import ReactDOM from 'react-dom'; 

import './index.css';
const book = [

    { id :1,
    "title" :" The Psychology",
    "seller" : "Morgan House1", 
    "price" : 10,
    "img": "https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1/v1488478136/pro_pbid_515516.jpg"

    },
    { id :2,
        "title" : " the life",
     "seller" : "raj",
     "price" : 12,
     "img": "https://m.media-amazon.com/images/I/51fcXmG6g9L.jpg"
    }
]

function BookList() {
    
    return (
        <>
           <h1>Bestseller Books</h1>

           {book.map(book => {
               return <Books id = {book.id} title = {book.title} seller = {book.seller} price = {book.price} img = {book.img}/>

        })} 
        
        </>
       
    );
      
}


 function Books ({id,title,seller,price,img}){
     return (
     <>
     <div className="card">
         <div>#{id}</div>
         <img src = {img}></img>
         <h2>{title}</h2>
         <p>{seller}</p>
         <p>{price}</p>
      


     </div>


     </>
    
     )
 }


ReactDOM.render(<BookList></BookList>,document.getElementById('root'));