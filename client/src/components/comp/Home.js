import React from 'react'
const Home = () => {
    return (
       

        <body style={{backgroundColor:"white",height:"300vh",textAlign:"center"}}>
       <header id="main-header">
       <div class="container">
        <h1> My website </h1>
        </div>
        </header>

        <nav id="navbar"style={{display:"inline"}}>
       <div class="container" style={{backgroundColor:"black",width:"200%"}}>
           <ul>
        
           <li><a href="#">HOME</a></li>
           <li><a href="#">ABOUT</a></li>
           <li><a href="#">SERVICE</a></li>
           <li><a href="#">CONTACT</a></li>

           </ul>
           </div>
           </nav>
            
           <div class="container">
           <section id="main">
            
          <h1>welcome</h1>
          <h2>TO</h2>
          <h2>Carrer Guidance</h2>
          <h2>Choose Your Destination</h2>
          
           </section>
           </div>
    
    
     
        </body>
    )
}

export default Home
