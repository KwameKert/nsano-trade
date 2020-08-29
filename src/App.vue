<template>
  <div id="app">
   <div class="row ">
     <div class="col-md-9">
       <div class="row">
      <header id="desktop-menu">
        <ul>
            <li class="links" ><a href="#about" data-toggle="modal" data-target="#exampleModal">About</a> </li>
            <li class="links"><a href="#work" data-toggle="modal" data-target="#exampleModal">Connect To Our Platform</a></li>
            <li class="links"><a href="#projects" data-toggle="modal" data-target="#exampleModal">MT Direct</a></li>
       
        </ul>
     </header>
       </div>
   
   <div class="row">
     <div class="col-md-8 text-left" style="margin-left: 90px" >
       <h2 style="font-size: 40px">Send up to <span style="
    color: #f08f21;
    font-size: 50px;
    font-weight: 900;
">$200,000 </span> <br/> a day and pay no charge for any subsequent transaction.</h2>
<button class="btn btn-warning" data-toggle="modal" data-target="#exampleModal" >Learn more </button>
     </div>
   </div>

   
     </div>
     <div class="col-md-3 ">
       <div class="cool">
         <a href="#" data-toggle="modal" data-target="#exampleModal" style="text-decoration: none"><h3 class="logo">Instant Credit</h3></a>
       </div>
     
     </div>


     
   </div>
      <div class="row " style="margin-left: 72px; margin-top: 70px">
       <div class="col-md-3">
         <div class="card">
           <div class="card-body text-align-left pb-0"> 
             <p  class="lead counter">
                <ICountUp
                :delay="1000"
                :endVal="200513466"
                :options="options"
                 @ready="startCount(1000000045)"
              />  <font-awesome-icon icon="exchange-alt"  class="ml-3" /></p>
             <span style="color:#f08f21; text-align: left ">Transaction</span>
             </div>
         </div>
       </div>

        <div class="col-md-3">
         <div class="card">
           <div class="card-body text-align-left pb-0"> 
                <p  class="lead counter">
               <ICountUp
                :delay="1000"
                :endVal="20513466"
                :options="options"
                 @ready="startCount(2513466)"
              />
              <font-awesome-icon icon="university"  class="ml-3" /></p>
             <span class="subText">Banks and Mobile Wallets</span>
             </div>
         </div>
       </div>

          <div class="col-md-3">
         <div class="card">
           <div class="card-body text-align-left pb-0"> 
              <p  class="lead counter mb-4">
               <ICountUp
                :delay="1000"
                :endVal="12"
                :options="options"
                 @ready="startCount(12)"
              /> Countries <font-awesome-icon icon="globe-africa"   />
              <br>
              </p>
            
             </div>
         </div>
       </div>
      
     </div>
   
   <div class="footer  p-2" >
     <div class="row">
       <div class="col-md-10">
<p style="color: white; margin-top:15px" class="text-bold"> <span style="margin-left: 350px;"><font-awesome-icon icon="envelope"  /> : trade@nsano.com </span>  <span style="margin-left: 50px;">  <font-awesome-icon icon="phone-alt"  /> : +233 2324234 </span> </p>
       </div>

       <div class="col-md-2 float-right">
         <img src="@/assets/bog2.png" alt="" width="70px" height="70px" class="mr-3">
         <img src="@/assets/logonew.png" alt="" width="40px" height="45px">
       </div>
     </div>
     
   </div>



   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">About Instant Credit</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="lead">
          Instant Credit is a service that enables real-time termination of remittances to mobile wallets and bank accounts in Africa in fast, secure and convenient manner.
        </p>
        <p class="lead">
 Instant Credit offers APIs directly integrated into the mobile money platforms, of MNOs and all banks via standard security protocols. This allows for direct querying and veriﬁcation of customers’ mobile money accounts (active status) and bank accounts for the speciﬁed transactions.
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    
  </div>
</template>


<script type="text/babel">
  import ICountUp from 'vue-countup-v2';
  export default {
    name: 'App',
    components: {
      ICountUp
    },
    data() {
      return {
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        }
      };
    },
    methods: {
      startCount(val){
        this.onReady(instance, CountUp, val)
      },
      onReady: function(instance, CountUp, val) {
        const that = this;
        instance.update(val );
      }
    }
  };
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  *{
    overflow-x:hidden;
    font-family: 'Montserrat', sans-serif;
  }


.card-body  {
      padding: 5px 5px 5px 5px;
}
  .counter {
   text-align: left;
    font-size: 30px; 
    font-weight: 350;
    margin-bottom: 0px;
  }

  .card {
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  }

  .footer{
     background-image: url("assets/extraFooter.png") ;

    margin-top:80px;
  }

  .iCountUp {
    font-size: 12em;
    margin: 0;
    color: #4d63bc;
  }
  header{
  
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
   
    transition: 0.3s;
}

.btn-warning {
    color: #fff;
    border-color: #f18f22;
    background-color: #f18f22;
    border-radius: 15px;

    
}

.subText {
  color:#f08f21;
   text-align: left
}
.btn-warning:hover {
    color: #fff;
    border-color: #f4ab58;
    background-color: #f4ab58;
    
}


.btn-warning:hover {
    color: #f18f22;
    background-color: #fff;
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
    font-weight: 400;
    transition: 0.6s;
    color: #f08f21;
    font-size: 20px
}

.links a:hover{
      color: #e79c45 !important;
  
}




  .links:hover:after {
    width: 55%;
  }


  #app{
      margin-top: 0px
  }

  .logo{
        margin: 220px 0px 0px 135px;
        color: #f08f21;
        font-weight: 900;
  }

  .cool{
   background-image: url("assets/nicelogo.png") ;
   height: 500px;
    margin-top: -170px;
   margin-left:-20px;
  }




</style>
