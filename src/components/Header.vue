<template>
     <div class="row ">
            <div class="col-md-9">
            <div class="row">
            <header id="desktop-menu">
                <ul>
                    <li class="links" ><a href="#about">About</a> </li>
                    <li class="links"><a href="#work">Experience</a></li>
                    <li class="links"><a href="#projects">Projects</a></li>
                    <li class="links"><a href="#contact">Contact</a></li>
            
                </ul>
            </header>
            </div>
        
        <div class="row">
            <div class="col-md-8 text-left" style="margin-left: 90px" >
            <h2 >Send up to <span style="
            color: #f18f22;
            font-size: 50px;
            font-weight: 900;
        ">$200,000 </span> <br/> a day and pay no charge for any subsequent transaction.</h2>
        <button class="btn btn-outline-warning">Learn more </button>
            </div>
        </div>

        
            </div>
            <div class="col-md-3 ">
            <div class="cool">
                <p class="logo">Instant Credit</p>
            </div>
     
     </div>


     
   </div>
</template>


<style >
  header{
  
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
   
    transition: 0.3s;
}

.btn-outline-warning {
    color: #f18f22;
    border-color: #f18f22;
    
}

.btn-outline-warning:hover {
    color: #fff;
    background-color: #f18f22;
    border-color: #f18f22;
}


header ul {
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 20px;
}

.links {
    position: relative;
    list-style: none;
    margin: 10px;
     transition: 0.6s;
}

.links:hover{
    box-shadow:   1px 1px 1px 1px #ccc; 
  border-radius: 9px;
}


.links a{
    position: relative;
    margin: 0 15px;
    text-decoration: none !important;
    letter-spacing: 2px;
    font-weight: 600;
    transition: 0.6s;
    color: #f18f22;
}

.links a:hover{
      color: #e79c45 !important;
  
}




  .links:hover:after {
    width: 55%;
  }



  .logo{
    margin: 170px 0px 0px 100px;
    color: #f18f22;
    font-weight: 1000;
  }

  .cool{
   background-image: url("../assets/circle3.png") ;
   height: 460px;
   margin-top: -220px;
   
  }

</style>

<script>
export default {
    name: 'Header'
}
</script>