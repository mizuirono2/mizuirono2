body{
    font: 14px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
    margin:auto;
}
.wrap{
    width:1226px;
    margin:auto;
}
.header{
    margin:auto;
}
a:hover{
    color:#ff6700;
}
.clear{
    clear:both;
    height:0px;
    overflow:hidden;
}

.topbar{
    height:40px;
    background-color: #333;
    color:#b0b0b0;
    line-height: 40px;
    font-size:12px;
}
.topbar a{
    color:#b0b0b0;
}
.topbar a:hover{
    color:#fff;
}
.topbar-left{
    float:left;
}
.topbar-right{
    float:right;
    position: relative;
}
.topbar span{
    margin:0 .5em;
    color:#424242;
}
#topbar-cart{
    width:120px;
    display: block;
    float: right;
    text-align: center;
}
#topbar-cart:hover{
    background: #fff;
    color:#ff6700;
}
#topbar-cart:hover a{
    color:#ff6700;
}
#topbar-cart i{
    margin-right:4px;
    font-size:20px;
    line-height: 20px;
    vertical-align:-4px;
}
.loading{
    position:absolute;
    top:40px;
    right: 0;
    width:316px;
    color:#424242;
    text-align: center;
    padding:15px 0 40px 0;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15)
}
.nav-logo{
    float: left;
    margin-top:22px;
    width:55px;
    height: 55px;
    overflow: hidden;
    background-color: #ff6700;
}
.nav-logo img{
    width:55px;
    height: 55px;
}
#box img:hover {
    -moz-transform: rotate(360deg) scale(1.5);
    -webkit-transform: rotate(360deg) scale(1.5);
    -o-transform: rotate(360deg) scale(1.5);
    -ms-transform: rotate(360deg) scale(1.5);
    transform: rotate(360deg) scale(1.5);
}
#box img {
    -moz-transition: all 0.8s ease-in-out;
    -webkit-transition: all 0.8s ease-in-out;
    -o-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
}
.header-nav{
    float:left;
    width:850px;
}
.nav-list{
    float:left;
    font-size:16px;
    margin: auto;
    width:820px;
    height: 88px;
padding:12px 0 0 30px;
    list-style-type: none;
}
.nav-list .nav-category{
    display: block;
    width:127px;
    padding-right: 15px;
    text-align: right;
}
.nav-list a{
    display: block;
    margin:26px 0 38px 0;
}
.nav-list li{
    float:left;
}
.nav-item a{
    margin:auto;
    display: block;
    padding:26px 10px 38px;
}
.nav-bar-right{
    position:absolute;
    top:140px;
    z-index:21;
    width:234px;
    height: 418px;
    font-size:14px;
    border:1px solid #ff6700;
    color:#424242;
    background: #fff;
}
.nav-bar-right ul{
    height: 418px;
    margin:0;
    padding:20px 0;
}
.nav-bar-right li a{
    display: block;
    padding-left:30px;
    height: 42px;
    line-height: 42px;
    color:#424242;
}
.nav-bar-right li a:hover{
    background: #ff6700;
    color:#fff;
}
.nav-bar-down{
    position:absolute;
    top:140px;
    left:0;
    z-index:24;
    width:100%;
    height:229px;
    border-top:1px solid #D3D4D3;
    background:#fff;
}

.nav-bar-down img{
    float:left;
    height: 110px;
    width:160px;
    margin-top:40px;
    padding:10px 40px;
    border-left: 1px solid #D3D4D3;
}
.nav-bar-down .firstimg{
    border-left: none;
}
.nav-search{
    float:right;
    margin-top:25px;
    width:297px;
}
.search-text{
    width:223px;
    height: 50px;
    padding: 0 10px;
    border:1px solid #e0e0e0;
    font-size:14px;
    line-height: 48px;
    float :left;
}
.search-btn{
    width:52px;
    height: 52px;
    border:1px solid #e0e0e0;
    font-size:20px;
    line-height: 24px;
    background-color: #fff;
    color:#616161;
    float:right;
}

.layui-carousel img {
    height: 620px;
    width:2500px;
    margin-left: -500px;
}
.main{
    margin:auto;
    background: #f5f5f5;
}
.channel-title h2{
    line-height: 64px;
    margin:0;
    padding-top:4px;
    color:#333;
    font-size:24px;
    font-weight: normal;
}
.product-1{
    height: 434px;
    background: #fff;
}
.product-1 img{
    width:854px;
    height:100%;
}
.product-1 .content{
    float:right;
    margin-top:94px;
    margin-right:100px;
}
.product-1 .content-1{
    float:right;
    margin-top:94px;
    margin-right: 80px;
}
.shadow{
    transition:  all .2s linear;
}
.shadow:hover{
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    transform: translate3d(0, -5px, 0);

}

.content h1{
    font-size:28px;
}
.desc{
    line-height: 22px;
    min-height: 44px;
    margin:4px 0 0;
    color:rgba(51,51,51,0.7);
    font-size:14px;
}
.product-2 .desc,.product-3 .desc{
    min-height: 30px;
    margin:3px 0 0 48px;
}

.price{
    line-height: 45px;
    margin:17px 0 0;
    color:#ff6700;
    font-size:12px;
    font-weight: bold;
}
.product-2 .price{
    position: absolute;
    right: 40px;
    color:#ff6700;
    bottom :10px;
    font-weight: bold;
    margin:0;
    z-index:4;
}
.product-3 .price{
    margin:auto;
}
.price strong{
    font-family: "pricefont","Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
    font-weight: normal;
    font-size:32px;
    letter-spacing:-2px;
}
.price del{
    color:rgba(51,51,51,0.6);
}
.content .link{
    margin-top:120px;
}
.content-1 .link{
    margin-top:120px;
}
.product-2{
    height: 482px;
    font-size:24px;
    background: #f5f5f5;
}
.product-2 .content h1{
    font-size:24px;
    margin:380px 0 0 48px;
}
.product-2-left,.product-2-left img{
    width:606px;
    position: relative;
    background: #fff;
    float:left;
}
.product-2-right,.product-2-right img{
    width:606px;
    position: relative;
    background: #fff;
    float:right;
}
.product-3{
    height: 376px;
    background: #f5f5f5;
    text-align: center;
}
.product-3 .content h1{
    font-size:24px;
}
.product-3-left{
    width: 400px;
    background: #fff;
    float:left;
}
.product-3-left img{
    width: 400px;
    height: 266px;
}
.product-3-middle{
    width: 400px;
    float:left;
    background: #fff;
    margin-left: 14px;
}
.product-3-middle img{
    width: 400px;
    height: 266px;
}
.product-3-right{
    width: 400px;
    background: #fff;
    float:right;
}
.product-3-right img{
    width: 400px;
    height: 266px;
}
.footer{
    background: #fff;
}
.footer-service{
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
}
.footer-service ul{
    margin:0 ;
    padding:0;
    height: 25px;
}
.footer-service li:first-child{
    border-left:0;
}
.footer-service li{
    float: left;
    width:19.8%;
    height: 25px;
    border-left: 1px solid #e0e0e0;
    font-size:16px;
    line-height: 25px;
    text-align: center;
}
.footer-service i{
    font-size:24px;
    margin-right: 8px;
    vertical-align:-4px;
}
.footer-links{
    padding:40px 0;
}
.footer-links dl{
    float:left;
    width:160px;
    height: 112px;
    margin:0;
}
.footer-links dl dt{
    margin:-1px 0 26px;
    font-size:14px;
    line-height: 1.25;
    color:#424242;
}
.footer-links dl dd{
    margin:10px 0 0;
    font-size:12px;
    color:#757575;
}
.footer-contact{
    float:right;
    width:251px;
    height:112px;
    border-left: 1px solid #e0e0e0;
    text-align: center;
    color:#616161
}
.footer-contact p{
    margin:0 0 16px;
    font-size:12px;
}
.footer-contact .phone{
    margin:0 0 5px;
    font-size:22px;
    line-height: 1;
    color:#ff6700
}
.footer-btn{
    background: #fff;
    color:#ff6700;
    width: 118px;
    height: 28px;
    font-size:12px;
    line-height: 28px;
    border: 1px solid #ff6700;
    display: inline-block;
}
.site-info{
    padding:30px 0;
    font-size:12px;
    background: #fafafa;
}
.site-info .logo{
    float:left;
    width:57px;
    height: 57px;
    margin-right: 10px;
}
.site-text{
    float:left;
    color:#b0b0b0;
}
.site-text .sites{
    margin:0;
    line-height: 18px;
}
.site-text .sites a{
    color:#757575;
}
.site-text a{
    color:#b0b0b0;
}
.site-text span{
    margin:0 .25em;
}
.site-links{
    float:right;
}
.site-links img{
    margin-left:0;
    width:auto;
    height: 28px;
}
.slogan{
    clear:both;
    margin:30px auto 0;
    width:267px;
    height:19px;
    background:url("../img/小米手机/slogan2016.png") no-repeat center 0;
}