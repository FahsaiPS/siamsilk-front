import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YoutubeIcon from "@material-ui/icons/YouTube";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import Footerlogo from "../../assets/logo-footer.png";

function Footer() {
    return (
 <footer class="footer">
  	 <div class="container-footer">
  	 	<div class="row-footer">
  	 		<div class="footer-col">
				<img class="footer-logo" src = {Footerlogo}/>
				<div class="Email"><MailOutlineIcon  />support@siamsilk.com</div>
				<div class="social-links">
					<FacebookIcon />
  	 				<InstagramIcon />
					<TwitterIcon />
					<YoutubeIcon />
  	 			</div>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Information</h4>
  	 			<ul>
  	 				<li><a href="#">About us</a></li>
  	 				<li><a href="#">Privacy Policy</a></li>
  	 				<li><a href="#">Terms of Service</a></li>
  	 				<li><a href="#">Promotions</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Customer Service</h4>
  	 			<ul>
  	 				<li><a href="#">Ordering & Payments</a></li>
  	 				<li><a href="#">Track Your Order</a></li>
  	 				<li><a href="#">Return & Refund Policy</a></li>
  	 				<li><a href="#">Support Center</a></li>
  	 			</ul>
  	 		</div>

  	 		<div class="footer-col">
  	 			<h4>Newsletter Signup</h4>
				<div class="newsletter">Be the first to know about our new collections, exclusive promotions and more. </div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    );
}

export default Footer;