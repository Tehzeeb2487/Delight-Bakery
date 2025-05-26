import React from "react";
import { Link } from 'react-router-dom';
import logo from './Images/what.jpg';
import gift1 from './Images/gift1.webp';
import gift2 from './Images/gift2.webp';
import gift3 from './Images/gift3.webp';
import gift4 from './Images/gift4.webp';
import gift5 from './Images/gift5.webp';
import gift6 from './Images/gift6.webp';
import gift7 from './Images/gift7.webp';
import gift8 from './Images/gift8.webp';


function Gift(){
    return(
        <>

        <section className="gift">

            <div className="gift-head">
                <center>
                    <h1>Gifting</h1>
                    <p className="my-3">
                    Your search for the perfect gift ends here! Choose from our range of hampers, gift bags & gift boxes<br/>
                    each of them a carefully curated assortment of our bestsellers.
                    </p>
                </center>
            </div>
            <div className="gift-content">
                <h2>
                    Products&nbsp; 
                    <i class="fa-solid fa-chevron-right"></i>&nbsp;
                    Gifts&nbsp; 
                    <i class="fa-solid fa-chevron-right"></i>
                </h2>
                <article className="mb-5">
			    <div className="shadow">
				    <img src={gift1} />
    				<h3 className="my-2">Almond Rocks 250g</h3>
	    			<h6> Rs 650</h6>
		    		<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			    </div>
    			<div className="shadow"> 
	    			<img src={gift2} />
		    		<h3 className="my-2">Premium Hamper</h3>
			    	<h6> Rs 1,700</h6>
				    <button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
    			</div>
	    		<div className="shadow">
		    		<img src={gift3} />
			    	<h3 className="my-2">Eggless Indulgence Hamper</h3>
				    <h6>Rs 3,200</h6>
				    <button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
    			</div>
	    		<div className="shadow">
		    		<img src={gift4} />
			    	<h3 className="my-2">Cookies Collection Gift Set (3)</h3>
				    <h6>Rs 675</h6>
    				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
	    		</div>
		    	<div className="shadow">
			    	<img src={gift5} />
				    <h3 className="my-2">Gift Bag (Premium)</h3>
				    <h6> Rs 1,250</h6>
    				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
	    		</div>
		    	<div className="shadow"> 
			    	<img src={gift6} />
				    <h3 className="my-2">Almond Rocks 500g</h3>
    				<h6> Rs 935</h6>
	    			<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
		    	</div>
			    <div className="shadow">
				    <img src={gift7} />
    				<h3 className="my-2">Cookies Collection Gift Set (4)</h3>
	    			<h6>Rs 2,300</h6>
		    		<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
    			</div>
	    		<div className="shadow">
		    		<img src={gift8} />
			    	<h3 className="my-2">Eggless Luxury Hamper</h3>
    				<h6>Rs 800</h6>
	    			<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
		    	</div>
		    </article>
            </div>

        </section>

        <section class="want-order" id="Order">
			<h1>Like Our Products ?</h1>
			<p>Treat yourself to your favourite Delight products or surprise your loved ones with an edible gift.</p>
			<button class="card-btn rounded-pill my-2"><Link to="/order">Order Online</Link></button>
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

export default Gift;