import React from "react";
import logo from './Images/what.jpg';
import home7 from './Images/Bakery32.jpg';
import home8 from './Images/Bakery33.jpg';
import home9 from './Images/tea-time1.jpg';
import home10 from './Images/Bakery35.jpg';
import home11 from './Images/Bakery36.jpg';
import home12 from './Images/Bakery23.jpg';
import home13 from './Images/Bakery37.jpg';
import home14 from './Images/Bakery38.jpg';
import home15 from './Images/AfterNine_Cake.webp';
import home16 from './Images/Carrot_Cake.webp';
import home17 from './Images/Chocolate_Nougatine_Cake.webp';
import home18 from './Images/Cappuccino_Cake.webp';
import home19 from './Images/custom-illustration.webp';
import { Outlet, Link } from "react-router-dom";



function Speciality(){
    return(
    <>
	<section>
		<div className="Order-head">
			<center>
			<h1 className="pt-5">Delight Products</h1>
			<p className="my-3">At Delight, we offer a wide range of products, both sweet & savoury. Our offerings include<br/> 
			indulgent brownies, cakes & desserts, artisanal breads, puffs & quiches, wholesome sandwiches,<br/> 
			wraps & rolls, beverages and more.</p>
			</center>
			<div className="Order-bottom"></div>
		</div>
		<div className="order-product">
			<center>
				<h1 className="pt-5">Delight Classic Colection</h1>
				<p>A specially curated range of signature Delight colection with unique flavours and original homestyle recipes. The classics are<br/>
				here to make your special moments more joyous!</p>
			</center>
			<div class="cards p-0 mt-5">
			<div class="item">
			<Link to='/cakes'>
				<div class="card_image">
					<img src={home15} alt="Cake" class="d-block" />
					<h1 class="special-one p-2">After Nine Cake</h1>
				</div>
			</Link>
			</div>
			<div class="item">
			<Link to='/cakes'>
				<div class="card_image">
					<img src={home16} alt="Pastry" class="d-block" />
					<h1 class="special-one p-2">Carrot Cake</h1>
				</div>
			</Link>
			</div>
			<div class="item">
			<Link to='/cakes'>
				<div class="card_image">
					<img src={home17} alt="BROWNIES" class="d-block" />
					<h1 class="special-one p-2">Chocolate Nougatine Cake</h1>
				</div>
			</Link>
			</div>
			<div class="item">
			<Link to='/cakes'>
				<div class="card_image">
					<img src={home18} alt="Bread" class="d-block" />
					<h1 class="special-one p-2">Cappuccino Cake</h1>
				</div>
			</Link>
			</div>
		</div>
			<div class="cards p-0 mt-4">
			<div class="item">
			<Link to='/cakes'>
				<div class="card_image">
					<img src={home7} alt="Cake" class="d-block" />
					<h1 class="special-one p-2">Fresh Cream Pineapple Cake</h1>
				</div>
			</Link>
			</div>
			<div class="item">
			<Link to='/browny'>
				<div class="card_image">
					<img src={home8} alt="Pastry" class="d-block" />
					<h1 class="special-one p-2">Overload Brownie</h1>
				</div>
			</Link>
			</div>
			<div class="item">
			<Link to='/tea'>
				<div class="card_image">
					<img src={home9} alt="BROWNIES" class="d-block" />
					<h1 class="special-one p-2">Danse Loaf</h1>
				</div>
			</Link>
			</div>
			<div class="item">
			<Link to='/sandwich'>
				<div class="card_image">
					<img src={home10} alt="Bread" class="d-block" />
					<h1 class="special-one p-2">Baked Wada Pao (1 Pc)</h1>
				</div>
			</Link>
			</div>
		</div>
		<div class="cards p-0 mt-4">
			<div class="item">
			<Link to='/cupcake'>
				<div class="card_image">
					<img src={home11} alt="Cake" class="d-block" />
					<h1 class="special-one p-2">Blueberry Cheesecake Cup</h1>
				</div>
			</Link>
			</div>
			<div class="item">
			<Link to='/pastry'>
				<div class="card_image">
					<img src={home12} alt="Pastry" class="d-block" />
					<h1 class="special-one p-2">Chocolate Pastry</h1>
				</div>
			</Link>
			</div>
			<div class="item">
			<Link to='/cooky'>
				<div class="card_image">
					<img src={home13} alt="BROWNIES" class="d-block" />
					<h1 class="special-one p-2">Chocolate Chip Cookies</h1>
				</div>
			</Link>
			</div>
			<div class="item">
			<Link to='/cooky'>
				<div class="card_image">
					<img src={home14} alt="Bread" class="d-block" />
					<h1 class="special-one p-2">Butter Palmiers</h1>
				</div>
			</Link>
			</div>
		</div>
		<center><button class="card-btn rounded-pill bttn my-5"><Link to='/product'>View more</Link></button></center>
		</div>
	</section>

	<section>
		<div className="theme">
			<h1>Customised Theme Cakes</h1>
			<div className="theme-body d-flex justify-content-center align-content-center">
				<img src={home19} alt='cake' width={240} className="mb-5 me-3"/>
				<p className="mt-5 ms-5">We handcraft and customize celebration cakes for all special occasions.<br/>
				From theme-based and personalized birthday cakes to exquisite multi-<br/>
				tiered wedding cakes, we have all your celebrations covered!<br/><br/>
				Write to us with your customized theme cake requirements at -<br/> 
				contact@theobroma.in</p>
			</div>
		</div>
	</section>

    <section class="want-order" id="Order">
		<h1>Pre Order Now!</h1>
		<p>To pre-order, call us at +91 8182881881 or write to us at contact@theobroma.in</p>
		<div>
			<button class="card-btn rounded-pill my-2 bttn me-3"><Link to="/order">Call Now</Link></button>
			<button class="card-btn rounded-pill my-2 bttn"><Link to="/order">Email Us</Link></button>
		</div>
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
			<div className='footer-icons'>
				<Link class="info-icon m-1 card-btn"><i class="fa-brands fa-facebook-f m-3" ></i></Link>
   				<Link class="info-icon m-1 card-btn"><i class="fa-brands fa-square-instagram m-3"></i></Link>
	    		<Link class="info-icon m-1 card-btn"><i class="fa-brands fa-linkedin-in m-3"></i></Link>
    			<Link class="info-icon m-1 card-btn"><i class="fa-brands fa-twitter m-3"></i></Link>
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

export default Speciality;