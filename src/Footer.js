import React from 'react';
import './Bakery.css';
import home15 from './Images/upload.png';
import logo from './Images/what.jpg';

function Footer(){
    return(
        <>
        <section class="want-order" id="Order">
		<h1>LIKE OUR PRODUCT ?</h1>
		<p>Treat yourself to your favourite Delight products or surprise your loved ones with an edible gift.</p>
		<button class="card_btn rounded-pill">ORDER ONLINE</button>
	</section>

	<a href="#Bakeryhome" class="go-to-top">
		<img src={home15} width="15px" />
	</a>

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
				<a class="info-icon m-1 card_btn"><i class="fa-brands fa-facebook-f m-3" ></i></a>
   				<a class="info-icon m-1 card_btn"><i class="fa-brands fa-square-instagram m-3"></i></a>
	    		<a class="info-icon m-1 card_btn"><i class="fa-brands fa-linkedin-in m-3"></i></a>
    			<a class="info-icon m-1 card_btn"><i class="fa-brands fa-twitter m-3"></i></a>
			</div>
		</div>
		<div>
			<p>Sign up for updates</p>
			<p>
				<input class="card_btn rounded-pill" type="text" placeholder="Enter your email" />
				<button class="card_btn rounded-pill ms-1">Sign up</button>
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

export default Footer;