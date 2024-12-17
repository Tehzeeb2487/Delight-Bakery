import React from 'react';
import './Bakery.css';
import home from './Images/home-first.png';
import home1 from './Images/home-second.png';
import home2 from './Images/Aboutus.png';
import home3 from './Images/Bakery16.jpg';
import home4 from './Images/Bakery15.jpg';
import home5 from './Images/Bakery30.jpg';
import home6 from './Images/Bakery24.jpg';
import home7 from './Images/Bakery32.jpg';
import home8 from './Images/Bakery33.jpg';
import home9 from './Images/tea-time1.jpg';
import home10 from './Images/Bakery35.jpg';
import home11 from './Images/Bakery36.jpg';
import home12 from './Images/Bakery23.jpg';
import home13 from './Images/Bakery37.jpg';
import home14 from './Images/Bakery38.jpg';
import logo from './Images/what.jpg';
import Gift from './Images/gift.jpg';
import Tea from './Images/Tea-Cakes.gif';
import Testinomial from './Images/quote.png';




const Bakery = () =>{

    return(
        <>
		<div class="carousel slide" id="demo1" data-bs-ride="carousel">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#demo1" data-bs-slide-to="0" class="active"></button>
				<button type="button" data-bs-target="#demo1" data-bs-slide-to="1"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src={home} alt='Cake' class='w-100 d-block'/>
				</div>
				<div class="carousel-item">
					<img src={home1} alt='Pastry'  class='w-100 d-block'/>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
				<span class="carousel-control-prev-icon"></span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="prev">
				<span class="carousel-control-next-icon"></span>
			</button>
		</div>

		<section class="Aboutus mt-5 pt-5">
		<h1 class="third">The secret Ingredient in Baking is <br/>always Love</h1>
		<div class="text-center pt-4 pb-4 ">
			Since 2004, we've been serving our guests the best quality treats,<br/> traditionally made and presented with care. 
		</div>
		<div class="about-content">
			<div>
				<h3 class="pt-5">AUTHENTIC RECIPES</h3>		
				<p>Our products are based on <br/>ontraditional home-style recipes<br/>using fresh ingredients.</p>
				<h3 class="pt-5">BAKED WITH LOVE</h3>		
				<p>Our passion for baking is poured into <br/>every recipe, serving smiles on a <br/>plate everyday.</p>
			</div>	
		  	<div class="mt-2" >		
				<img src={home2} class="mx-auto d-block col me-5"/>
			</div>
			<div>
				<h3 class="pt-5">COMMITTED TO QUALITY</h3>		
				<p>
					From our ingredients to our<br/>kitchen operations & guest<br/> services,we always prioritize qualit
				</p>
				<h3 class="pt-5">HONESTLY PRICED</h3>		
				<p>We constantly strive to offer the best <br/>products at the right prices.</p>
			</div>
		</div>
		<div class="about-btn">
			<center><button class="card-btn rounded-pill bttn"><a href='/about'>View More</a></button></center>
		</div>
	
						
	</section>

	<div class="pro" id="Product">
		<h1>Our Product</h1>
		<p>Fresh Bakery with the Finest Ingredients</p>
		<div class="cards">
			<div class="item">
				<a href='/cakes'>
				<div class="card_image">
					<img src={home3} alt="Cake" class="d-block" />
					<h1>Cakes</h1>
				</div>
				</a>
			</div>
			<div class="item">
				<a href='/pastry'>
				<div class="card_image">
					<img src={home4} alt="Pastry" class="d-block" />
					<h1>Pastries</h1>
				</div>
				</a>
			</div>
			<div class="item">
			<a href='/browny'>
				<div class="card_image">
					<img src={home5} alt="BROWNIES" class="d-block" />
					<h1>Brownies</h1>
				</div>
				</a>
			</div>
			<div class="item">
			<a href='/bread'>
				<div class="card_image">
					<img src={home6} alt="Bread" class="d-block" />
					<h1>Breads</h1>
				</div>
				</a>
			</div>
		</div>
		<button class="card-btn rounded-pill"><a href='/product'>View more</a></button>
	</div>

	<section>
    <div class="container">
        <div class="text">
           <h1>Packed with love &
           <br /> all your favourites!</h1>
            <p  class="pt-3">Now gift your loved ones our special hampers curated with<br/>our signature products.</p>
            <button class="card-btn rounded-pill bttn my-2"><a href="/gift">Know More</a></button>
           
        </div>
        <a href='/gift'>
			<img src={Gift} width="600px" height="500px" />
		</a>
    </div>        
   </section>

   <section >
    
    <div class="container1" >   
		<a href='/tea'>
			<img src={Tea} width="600px" height="500px" />  
		</a>  
    <div class="text">
      <h1>Tea-Time Delights</h1>
      <p class="mt-3"> Pick the perfect companion for your tea (or coffee!) from a <br/>range of tea cakes & more. </p>
      <button class="card-btn rounded-pill bttn my-2"><a href="/tea">Know More</a></button>
    </div>  
    </div>
   </section>

   <section>
    <div >
        <div class="testimonial">
		<h1>Testinomial</h1>
		<img src={Testinomial} alt='testinomial' width={60} />
		<div class="para-caro">
			<center>
		<div class="carousel slide" id="demo2" data-bs-ride="carousel">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#demo2" data-bs-slide-to="0" class="active"></button>
				<button type="button" data-bs-target="#demo2" data-bs-slide-to="1"></button>
				<button type="button" data-bs-target="#demo2" data-bs-slide-to="2"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class='my-5 text-center'>
						<p>Always a delight coming here for pastries. This Theobrama outlet may not be very spacious but their pastries are lip<br/>
						smacking good. Loved hazelnut pastry among the ones i tried. Value for money and a must visit place!</p>
						<h4>Saurabh Mehra, Mumbai</h4>	
					</div>
				</div>
				<div class="carousel-item">
					<div class='my-5 text-center'>
						<p>Theobroma is an outlet which will always top our priority list. Scrumptious warm brownies that melt in your mouth<br/> 
						leaving you a heavenly sensation - exactly what visiting theobroma feels like.</p>
						<h4>Anmol Gaba, Gurgaon</h4>
					</div>
				</div>
				<div class="carousel-item">
					<div class='my-5 text-center'>
						<p>I love all Theobroma products but the chocolate overload brownie has been my all-time favourite and truly justifies its<br/> 
						name with its rich chocolate gooeyness. Theobroma is truly one of our favourite places!</p>
						<h4>Meenakshi Verma, Pune</h4>
					</div>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev">
				<span class="carousel-control-prev-icon rounded"></span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next">
				<span class="carousel-control-next-icon rounded"></span>
			</button>
		</div>
		</center>
		</div>
        </div>	

    </div>
   </section>

	<section class="special" id="Specialities">
		<div class="special-head">
			<h1>Our Specialities</h1>
		</div>
		<div class="cards">
			<div class="item">
			<a href='/cakes'>
				<div class="card_image">
					<img src={home7} alt="Cake" class="d-block" />
					<h1 class="special-one">Fresh Cream Pineapple Cake</h1>
				</div>
				</a>
			</div>
			<div class="item">
			<a href='/browny'>
				<div class="card_image">
					<img src={home8} alt="Pastry" class="d-block" />
					<h1 class="special-one">Overload Brownie</h1>
				</div>
				</a>
			</div>
			<div class="item">
			<a href='/tea'>
				<div class="card_image">
					<img src={home9} alt="BROWNIES" class="d-block" />
					<h1 class="special-one">Danse Loaf</h1>
				</div>
				</a>
			</div>
			<div class="item">
			<a href='/sandwich'>
				<div class="card_image">
					<img src={home10} alt="Bread" class="d-block" />
					<h1 class="special-one">Baked Wada Pao (1 Pc)</h1>
				</div>
				</a>
			</div>
		</div>
		<div class="cards mt-4">
			<div class="item">
			<a href='/cupcake'>
				<div class="card_image">
					<img src={home11} alt="Cake" class="d-block" />
					<h1 class="special-one">Blueberry Cheesecake Cup</h1>
				</div>
				</a>
			</div>
			<div class="item">
			<a href='/pastry'>
				<div class="card_image">
					<img src={home12} alt="Pastry" class="d-block" />
					<h1 class="special-one">Chocolate Pastry</h1>
				</div>
				</a>
			</div>
			<div class="item">
			<a href='/cooky'>
				<div class="card_image">
					<img src={home13} alt="BROWNIES" class="d-block" />
					<h1 class="special-one">Chocolate Chip Cookies</h1>
				</div>
				</a>
			</div>
			<div class="item">
			<a href='/cooky'>
				<div class="card_image">
					<img src={home14} alt="Bread" class="d-block" />
					<h1 class="special-one">Butter Palmiers</h1>
				</div>
				</a>
			</div>
		</div>
		<center><button class="card-btn rounded-pill bttn my-5"><a href='/speciality'>View more</a></button></center>
	</section>

	<section class="want-order" id="Order">
		<h1>Like Our Products ?</h1>
		<p>Treat yourself to your favourite Delight products or surprise your loved ones with an edible gift.</p>
		<button class="card-btn rounded-pill my-2"><a href='/order'>Order Online</a></button>
	</section>


	<footer id="footer">
		<div class="footer">
		<div>
			<img src={logo} height="150px" />
		</div>	
		<div>
			<p>OUR STORY</p>
			<p>OUR PRODUCTS</p>
			<p>SPECIALITY CAKES</p>
			<p>BLOGS</p>
			<p>CSR</p>
			<p>HTML SITEMAP</p>
		</div>
		<div>
			<p>PRIVACY POLICY</p>
			<p>COOKIE POLICY</p>
			<p>REFUND POLICY</p>
			<p>FAQs</p>
			<p>NUTRITIONAL INFORMATION</p>
			<p>OUR PRODUCTS</p>
		</div>
		<div>
			<p><i class="fa fa-phone px-2" ></i> +91 8182-881881</p>
			<p><i class="fa fa-envelope px-2"></i> contact@bakerydelight.in</p>
			<div>
				<a class="info-icon m-1 card-btn"><i class="fa-brands fa-facebook-f m-3" ></i></a>
   				<a class="info-icon m-1 card-btn"><i class="fa-brands fa-square-instagram m-3"></i></a>
	    		<a class="info-icon m-1 card-btn"><i class="fa-brands fa-linkedin-in m-3"></i></a>
    			<a class="info-icon m-1 card-btn"><i class="fa-brands fa-twitter m-3"></i></a>
			</div>
		</div>
		<div>
			<p>Sign up for updates</p>
			<p>
				<input class="card-btn rounded-pill" type="text" placeholder="Enter your email" />
				<button class="card-btn rounded-pill ms-1">Sign up</button>
			</p>
			<p>OUR STORES - Mumbai | Navi Mumbai | Thane | Delhi |<br/>
				 Noida |Ghaziabad | Gurgaon | Faridabad | Anand |<br/>
				Bengaluru | Hyderabad | Pune | Chandigarh-Mohali |<br/> 
				 Nashik | Surat | Mysore | Nagpur | Jaipur | Ambala|<br/>
				 Agra | Lucknow | Vadodara | Dehradun | Meerut | Ahmedabad |<br/> 
				 Indore | Ludhiana | Jalandhar | Patiala | Rajkot | Rohtak |<br/>
				 Karnal | Kanpur | Prayagraj | Raipur | Vijaywada |Chennai | <br/>

			</p>
		</div>
		</div>
	</footer>
        </>
    );
}

export default Bakery;