<template>
  <div id="app">
   <div class="row ">
     <header id="desktop-menu">
        <div class="col-md-9">
            <div class="row ">
              
                  <ul>
                      <li class="links" ><a href="#about" data-toggle="modal" data-target="#exampleModal">About</a> </li>
                      <li class="links"><a href="#work" data-toggle="modal" data-target="#connectModal">Connect To Our Platform</a></li>
                      <li class="links"><a href="#projects" data-toggle="modal" data-target="#mtDirect">MT Direct</a></li>
                
                  </ul>
          </div>
      
      
        </div>
        <div class="col-md-3 ">
          <div class="cool">
            <a href="#" data-toggle="modal" data-target="#exampleModal" style="text-decoration: none"><h3 class="logo">Instant Credit</h3></a>
          </div>
        
        </div>
     </header>

      <header id="mobile-menu">
        <div id="menu-bar">
            <div class="row">
                <div class="col-3" style="    margin-top: -12px;">
                <div id="menu" @click="changeMenu()" v-bind:class="{change: isActive}" ref="myBtn">
				<div id="bar1" class="bar"></div>
				<div id="bar2" class="bar"></div>
				<div id="bar3" class="bar"></div>
			</div>
                </div>
                <div class="col-9">
                        <a href="#" data-toggle="modal" data-target="#exampleModal" style="text-decoration: none"><h3 class="logo">Instant Credit</h3></a>
                </div>
            </div>


            <div class="row">
                <div class="col-12 ">
        <ul class="nav" id="nav" v-bind:class="{change: isActive}">
          <li class="links" ><a href="#about" data-toggle="modal" data-target="#exampleModal" @click="closeMenu">About</a> </li>
           <li class="links"><a href="#work" data-toggle="modal" data-target="#exampleModal" @click="closeMenu">Connect To Our Platform</a></li>
           <li class="links"><a href="#projects" data-toggle="modal" data-target="#exampleModal" @click="closeMenu">MT Direct</a></li>
          
        </ul>
                </div>
            </div>
			
		</div>

      </header>
   </div>

   <div class="row" style="margin-top:-280px">
        <div class="col-md-8  col-sm-12 jumbotron"  >
          <h2 style="font-size: 40px">Send up to <span style="
        color: #f08f21;
        font-size: 50px;
        font-weight: 900;
        ">$100,000 </span> <br/> a day and pay no charge for any subsequent transaction.</h2>
        <button class="btn btn-warning" data-toggle="modal" data-target="#learnMore" >Learn more </button>
        </div>
   </div>

      <div class="row statistics" >
       <div class="col-md-3 col-sm-8 stat">
         <div class="card">
           <div class="card-body text-align-left pb-0" @mouseover="transactionHover = true"
              @mouseleave="transactionHover = false" > 

             <div  v-if="!transactionHover" >
                <p  class="lead counter">
                <!-- <ICountUp
                :delay="1"
                :endVal="123213466"
                :options="options"
                 @ready="startCount(1000000045)"
              />   -->
              14,363,086
             <img src="@/assets/icons/transaction.png"  alt="" class=" img-transaction-stat " width="45px" height="45px"></p>
             <span style="color:#f08f21; text-align: left ">Transactions</span>
             </div>


          <div  v-if="transactionHover" >
            
               <p  class="lead counter" style="color:#f08f21;">
                <!-- <ICountUp
                :delay="1"
                :endVal="50023466"
                :options="options"
                 @ready="startCount(1234430045)"
              />   -->
              14,363,086
              <img src="@/assets/icons/transactionnew.png" alt="" class="img-transaction-stat  " width="45px" height="45px"></p>
            
               
             <span style=" text-align: left ">Transactions</span>
             </div>

           
             </div>
         </div>
       </div>

        <div class="col-md-3 col-sm-8 stat">
         <div class="card">
           <div class="card-body text-align-left pb-0" @mouseover="bankHover = true"
              @mouseleave="bankHover = false"> 
              <div  v-if="!bankHover" >
             <p  class="lead counter">
              <span >120</span> <span style="font-size:22px; margin-right:30px">million</span>
              <img src="@/assets/icons/bank.png" alt="" class="img-bank-stat" width="45px" height="45px"></p>
             <span class="subText" style="color:#f08f21">Bank accounts & </span> <span>Mobile Wallets</span>

              </div>

            <div  v-if="bankHover" >
             <p  class="lead counter" style="color:#f08f21">
              <span>199</span> <span style="font-size:22px;margin-right:30px">million</span>
              <img src="@/assets/icons/sim.png" alt="" class="img-bank-stat" width="45px" height="45px"></p>
             <span >Bank accounts & </span> <span style="color:#f08f21">Mobile Wallets</span>
              </div>


               
             </div>
         </div>
       </div>

          <div class="col-md-3 col-sm-8 stat holder">

         <div class="card" @mouseover="countryHover = true"
              @mouseleave="countryHover = false">
           <div class="card-body text-align-left pb-0" 
              > 
              <p  class="lead counter mb-4">
              <span v-if="!countryHover">12  Countries</span>
              <span v-if="countryHover" style="color:#f08f21">12  Countries</span>
              
               <img src="@/assets/icons/world.png" alt="" class="img-world-stat" width="45px" height="45px" v-if="!countryHover"> 
              <img src="@/assets/icons/world2.png" alt="" class="img-world-stat" width="45px" height="45px" v-if="countryHover">
              <br>
              </p>

      </div>
         </div>

             <div class="countries" > 
       
                  <div class="row">

                    <img src="@/assets/flags/cote.jpg" class="flag" data-toggle="tooltip" data-placement="top" title="Ivory Coast">
                    <img src="@/assets/flags/kenya.jpg" class="flag" alt="" data-toggle="tooltip" data-placement="top" title="Kenya">
                    <img src="@/assets/flags/nigeria.jpg" class="flag" alt="" data-toggle="tooltip" data-placement="top" title="Nigeria">
                    <img src="@/assets/flags/tan.jpg" class="flag" alt="" data-toggle="tooltip" data-placement="top" title="Tanzania">
                      <img src="@/assets/flags/ghana.png" class="flag"   alt="" data-toggle="tooltip" data-placement="top" title="Ghana">
                    <img src="@/assets/flags/raw.jpg" class="flag" alt="" data-toggle="tooltip" data-placement="top" title="Rwanda">
                  </div>

                  <div class="row mt-2 ">
                    <img src="@/assets/flags/sierra.jpg" class="flag"   alt="" data-toggle="tooltip" data-placement="top" title="Sierra Leone">
                    <img src="@/assets/flags/mali.png" class="flag" alt="" data-toggle="tooltip" data-placement="top" title="Mali">
                    <img src="@/assets/flags/uganda.jpg" class="flag" alt="" data-toggle="tooltip" data-placement="top" title="Uganda">
                    <img src="@/assets/flags/zambia.png" class="flag" alt="" data-toggle="tooltip" data-placement="top" title="Zambia">
                    <img src="@/assets/flags/cameroon.jpg" class="flag" alt="" data-toggle="tooltip" data-placement="top" title="Cameroon"> 
                    <img src="@/assets/flags/mozam.jpg" class="flag" alt="" data-toggle="tooltip" data-placement="top" title="Mozambique">
                  </div>
           
        </div>
       </div>
      
      
     </div>

   
   <footer>
 <div class="footer "  >
     <div class="row">
       <div class="col-md-10 col-sm-7">
         <div class="row infos">
           <div class="col-md-6 col-sm-12">
              <p style="color: white; margin-top:15px" class="text-bold"> <span class="envelope">
                <font-awesome-icon icon="envelope"  /> : trade@nsano.com </span> </p>
           </div>
           <div class="col-md-6 col-sm-12">

              <p style="color: white; margin-top:15px" class="text-bold"> <span ><font-awesome-icon icon="phone-alt"  /> : +233559689915  | 
+233559689978 </span> </p>
           </div>
         </div>
        
       </div>

       <div class="col-md-2 float-right logos">
         <img src="@/assets/bog2.png" alt="" width="50px" height="50px" class="mr-3">
         <img src="@/assets/logonew.png" alt="" width="30px" height="32px">
       </div>
     </div>
     
   </div>

   </footer>
  


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
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



<div class="modal fade" id="connectModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Connect With Us</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>

    <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name">
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    
  </div>

    <div class="form-group">
    <label for="exampleInputEmail1">Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address">
    
  </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Message</label>
   <textarea  class="form-control" name="" id="" cols="30" rows="2"></textarea>
    
  </div>

</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

  <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="mtDirect" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">About Instant Credit</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="lead">
          With MT Direct, remittance senders are presented with a savings option every time they remit funds.
        </p>
     
     <p class="lead">
      Senders who choose the savings option will have a reduced ultimate cost whereas no-savings remittances bear the usual costs.
     </p>

      <p class="lead">
      To send a remittance with the savings option, the sender will elect a percentage of the remittance amount to be saved on behalf of the recipient as well as a savings period. Funds are kept in an interest-bearing account with returns paid to the recipient at the end of the savings period.
      </p>

      <p class="lead">
      To provide even more value, the product also includes an insurance policy (embedded life Insurance benefit in event of illness or death) and credit components; where repeat remittances accrue points to recipients, providing a pathway to microcredit facilities through alternate credit scoring.
      </p>


        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="learnMore" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">About Instant Credit</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <p >
           In a bid to help ease the financial burden of our clients due to the COVID-19 pandemic, we have provided an avenue to reduce the high cost of remittance for our esteemed clients.
        </p>
     
     <p >
      We value our clients and that is why we are rewarding our existing and potential clients with this promo. Pay no fees when you transfer up to $100,000 to anywhere in Ghana.
     </p>

      <p >
      To send a remittance with the savings option, the sender will elect a percentage of the remittance amount to be saved on behalf of the recipient as well as a savings period. Funds are kept in an interest-bearing account with returns paid to the recipient at the end of the savings period.
      </p>

  <h3>Terms and Conditions</h3>
      <p >
        1.  This promo only applies to wallet termination
      </p>
      <p >
        2.  Promo valid for only terminations to Ghana
      </p>
      <p >
        3.  MTO will need to prefund all transactions
      </p>
      <p >
        4.  Charge per transaction for first $100,000 is $1
      </p>
      <p >
        4.   Any emergency prefund by Nsano will attract a charge of 1$ despite value of transactions already disbursed.
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
        transactionHover: false,
         isActive : false,
        bankHover: false,
        countryHover: false,

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
      },
      changeMenu: function(){
                this.isActive = !this.isActive;
                //console.log("closed");
            },
            handleScroll: function(){
               var header = document.querySelector("header");
               header.classList.toggle("sticky",window.scrollY > 0);
            },
            closeMenu() {
               const elem = this.$refs.myBtn
            elem.click()
            }
    }
  };
</script>


<style scoped>

@font-face {
    font-family: Proxima;
    src: url("assets/font/proxima/ProximaNova-Regular.otf") format("opentype");
}
#mobile-menu{
    display: none;
}

  .holder
    { position:relative; 
    height:200px}
        
  .holder .countries { position:absolute; display:none; z-index:99; }
  .holder:hover .countries { display:block; }



  *{
    overflow-x:hidden;
    font-family: 'Proxima';
  }



  
  .countries{
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
   
  }


.jumbotron{
  margin-left: 90px;
  text-align: left;
  background-color: #fff;
}
  .img-rotate{
    /* -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg); */
    transform: rotate(270deg);
  }


.statistics {
  margin-left: 72px;
  margin-top: -30px
}



.flag{
  width:42px; 
  height:40px;
  margin-right: 4px;
}


.envelope{
  margin-left: 350px;
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
    margin-top: -6px;
     background-image: url("assets/extraFooter.png") ;
    
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
    padding: 0px 0px 0px 50px;
   
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


 .img-world-stat{
      margin-left: 40px;
    }
  #app{
      margin-top: 0px
  }

  .logo{
        margin: 180px 0px 0px 155px;
        color: #f08f21;
        font-weight: 900;
  }

  .cool{
   background-image: url("assets/nicelogo.png") ;
  height: 500px;
    margin-top: -150px;
    margin-left: -50px;
  }



@media only screen and (max-width: 600px) {
    
    .logo{
        padding-left: 20px;
    }

    .logos{
      text-align: center;
    }
    .stat{
      margin-bottom: 15px;
    }

    .img-transaction-stat{
      margin-left: 75px;
    }

    .img-bank-stat{
      margin-left: 125px;
    }

    .img-world-stat{
      margin-left: 100px;
    }

  

    .statistics {
 margin-left: -13px;
  margin-top: -30px
}

.jumbotron{
  margin-left: 10px;
  text-align: center
}

    #desktop-menu{
        display: none;
    }


    #mobile-menu{
        display: block;
        padding-top: 300px;
    }

    #menu{
        width: 35px;
        height: 30px;
        margin: 30px 0 20px 20px;
        cursor: pointer;
        padding-top: 10px;
    }
    .bar{
        height: 5px;
        width: 100%;
        background-color: #f08f21 !important;
        display: block;
        border-radius: 5px;
        transition: 0.3s ease;
    }
    #bar1{
        transform: translateY(-4px);
    }
    #bar3{
        transform: translateY(4px);
    }
    .nav li a{
        color: #f08f21;
        text-decoration: none;
    }
    .nav li a:hover{
        font-weight: bold;
    }
    .nav li{
        list-style: none;
        
        text-align: center;
        padding: 16px 0;
    }
    .nav{
        padding: 0;
        margin: 0 20px;
        transition: 0.3s ease;
        display: none;
    }
    .menu-bg, #menu-bar{
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        background-color: #fff;
    }
    .menu-bg{
        z-index: 1;
        width: 0;
        height: 0;
        margin: 30px 0 20px 20px;
        background:  #fff !important;
        border-radius: 50%;
        transition: 0.3s ease;
    }
    #menu-bar{
        z-index: 2;	
    }

  .footer{
     background-color: #f08f21; 
     background-image: none;
   
  }

.infos{
  text-align: center;
}

      .logo{
        margin: 20px;
        color: #f08f21;
        font-weight: 900;
  }

  .envelope{
  margin-left: 0px;
}
    .change-bg{
        width: 550px;
        height: 540px;
        transform: translate(-60%,-30%);
    }
    .change .bar{
        background-color: white;
    }
    .change #bar1{
        transform: translateY(4px) rotateZ(-45deg);
    }
    .change #bar3{
        transform: translateY(-6px) rotate(45deg);
    }
    .change #bar2{
        opacity: 0;
    }
    .change{
        display: block;
    }
 
}



</style>
