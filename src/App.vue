<template>
  <div id="app">
   <div class="row ">
     <div class="col-md-9">
       <div class="row">
      <header id="desktop-menu">
        <ul>
            <li class="links" ><a href="#about" data-toggle="modal" data-target="#exampleModal">About</a> </li>
            <li class="links"><a href="#work" data-toggle="modal" data-target="#exampleModal">Experience</a></li>
            <li class="links"><a href="#projects" data-toggle="modal" data-target="#exampleModal">Projects</a></li>
            <li class="links"><a href="#contact" data-toggle="modal" data-target="#exampleModal">Contact</a></li>
       
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
         <a href="#" data-toggle="modal" data-target="#exampleModal" style="text-decoration: none"><h3 class="logo">Instant Credit</h3></a>
       </div>
     
     </div>


     
   </div>
      <div class="row " style="margin-left: 72px; margin-top: 70px">
       <div class="col-md-3">
         <div class="card">
           <div class="card-body text-align-left pb-0"> 
             <h3 style="text-align: left; font-size: 40px">
                <ICountUp
                :delay="1000"
                :endVal="2513466"
                :options="options"
                 @ready="startCount(1000000045)"
              />  <font-awesome-icon icon="exchange-alt"  class="ml-3" /></h3>
             <p style="color:#f18f22; text-align: left ">Transaction</p>
             </div>
         </div>
       </div>

        <div class="col-md-3">
         <div class="card">
           <div class="card-body text-align-left pb-0"> 
             <h3 style="text-align: left; font-size: 40px">
               <ICountUp
                :delay="1000"
                :endVal="2513466"
                :options="options"
                 @ready="startCount(2513466)"
              />
              <font-awesome-icon icon="university"  class="ml-3" /></h3>
             <p style="color:#f18f22; text-align: left ">Banks and Mobile Wallets</p>
             </div>
         </div>
       </div>

          <div class="col-md-3">
         <div class="card">
           <div class="card-body text-align-left pb-0"> 
             <h3 style="text-align: left; font-size: 40px"> <ICountUp
                :delay="1000"
                :endVal="12"
                :options="options"
                 @ready="startCount(12)"
              />  <font-awesome-icon icon="globe-africa"  class="float-right" /></h3>
             <p style="color:#f18f22; text-align: left ">Countries</p>
             </div>
         </div>
       </div>
      
     </div>
   
   <div class="footer mt-5 p-3">
     <div class="row">
       <div class="col-md-10">
<p style="color: white" class="text-bold"> <span style="margin-left: 250px;"><font-awesome-icon icon="envelope"  /> : trade@nsano.com </span>  <span style="margin-left: 50px;">  <font-awesome-icon icon="phone-alt"  /> : +233 2324234 </span> </p>
       </div>

       <div class="col-md-2 float-right">
         <img src="@/assets/bog.png" alt="" width="50px" height="50px" class="mr-3">
         <img src="@/assets/iso.png" alt="" width="50px" height="50px">
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
  *{
    overflow-x:hidden;
  
  }

  .footer{
     background-image: url("assets/footer4.png") ;
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


  #app{
      margin-top: 0px
  }

  .logo{
        margin: 170px 0px 0px 100px;
        color: #f18f22;
        font-weight: 1000;
  }

  .cool{
   background-image: url("assets/circle3.png") ;
   height: 460px;
    margin-top: -120px;
   
  }


</style>
