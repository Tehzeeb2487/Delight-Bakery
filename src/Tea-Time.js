import React from 'react';
import logo from './Images/what.jpg';
import './Bakery.css';
import Tea1 from './Images/tea-time1.jpg';
import Tea2 from './Images/tea-time2.webp';
import Tea3 from './Images/tea-time3.webp';
import Tea4 from './Images/tea-time4.webp';
import Tea5 from './Images/tea-time5.webp';
import Tea6 from './Images/tea-time6.webp';
import Tea7 from './Images/tea-time7.webp';
import Tea8 from './Images/tea-time8.webp';
import { Outlet, Link } from "react-router-dom";



function Tea(){
    return(
        <>
        <section className='tea'>
            <div className="tea-head">
				<center>
				<h1>Tea Cakes</h1>
				<p className="my-3">The perfect companions to your tea (or coffee!), our range of tea cakes include the classic Mawa<br/> 
                cake and Pound cake, the decadent Dense Loaf and the delicious Banana Cake.</p>
				</center>
			</div>
            <div className='tea-content'>
                <h2>
                    Products&nbsp; 
                    <i class="fa-solid fa-chevron-right"></i>&nbsp;
                    Gifts&nbsp; 
                    <i class="fa-solid fa-chevron-right"></i>
                </h2>
                <article className="mb-5">
			    <div className="shadow">
				    <img src={Tea1} />
    				<h3 className="my-2">Dense Loaf</h3>
	    			<h6> Rs 290</h6>
		    		<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
			    </div>
    			<div className="shadow"> 
	    			<img src={Tea2} />
		    		<h3 className="my-2">Mava Cake</h3>
			    	<h6> Rs 310</h6>
				    <button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
    			</div>
	    		<div className="shadow">
		    		<img src={Tea3} />
			    	<h3 className="my-2">Pound Cake</h3>
				    <h6>Rs 180</h6>
				    <button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
    			</div>
	    		<div className="shadow">
		    		<img src={Tea4} />
			    	<h3 className="my-2">Banana Cake</h3>
				    <h6>Rs 150</h6>
    				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
	    		</div>
		    	<div className="shadow">
			    	<img src={Tea5} />
				    <h3 className="my-2">Eggless Mava Cake</h3>
				    <h6> Rs 270</h6>
    				<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
	    		</div>
		    	<div className="shadow"> 
			    	<img src={Tea6} />
				    <h3 className="my-2">Eggless Dense Loaf</h3>
    				<h6> Rs 240</h6>
	    			<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
		    	</div>
			    <div className="shadow">
				    <img src={Tea7} />
    				<h3 className="my-2">Eggless Banana Cake</h3>
	    			<h6>Rs 150</h6>
		    		<button className="rounded-pill car-but"><Link to="/order" class="out">Order now</Link></button>
    			</div>
	    		<div className="shadow">
		    		<img src={Tea8} />
			    	<h3 className="my-2">Eggless Dense Loaf</h3>
    				<h6>Rs 240</h6>
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


export default Tea;