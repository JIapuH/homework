import logo from './logo.svg';
import './App.css';

const NavLink = ({navhref="#", navname}) =>
<li>
	<a href={navhref}>{navname}</a>
</li>

const YogaProgram = ({yogaimage, yogahead, yogatext, yogahref="#", yogalink="Ashtanga - Hatha"}) =>
<div class="yoga-program">
	<img src={yogaimage} alt="img" />
	<div class="yoga-program-text">
		<div class="yoga-program-text-block">
			<h3>{yogahead}</h3>
			<p>{yogatext}</p>
		</div>
		<a href={yogahref} class="yoga-link">{yogalink}</a>
	</div>
</div>

const GalleryBlock = ({galleryimages}) =>
<div class="gallery-block">
	<a href="#" class="gallery-link">
	<img src={galleryimages} alt="img" class="gallery-images" />
	</a>
</div>

const Advice = ({adviceimages, advicehead, advicetext}) =>
<div class="advice">
	<div class="between">
		<div class="advice-images">
			<img src={adviceimages} alt="img" />
		</div>
		<p class="advice-head">{advicehead}</p>
	</div>
<p class="advice-text">{advicetext}</p>
</div>

const Price = ({pricetop, pricetexttop="ENTRY DATE: MON – FRI", pricetextmiddle="ENTRY TIME: 8A.M – 8P.M", pricetextbottom="NUTRITION ADVICER: YES", pricehref="#", pricebtn="Buy now"}) =>
<div class="price">
	<div class="price-top">{pricetop}</div>
	<div class="price-text">
		<p>{pricetexttop}</p>
		<hr />
		<p>{pricetextmiddle}</p>
		<hr />
		<p>NUTRITION ADVICER: NO</p>
	</div>
	<a href={pricehref} class="price-btn">{pricebtn}</a>
</div>

const SocialsList = ({socialhref="#", socialclass}) =>
<li>
	<a href={socialhref}>
		<span class={socialclass}></span>
	</a>
</li>

function App() {
  return (
    <div className="App">
      <div class="page-wrapper">
		<header class="page-header">
			<div class="container">
				<div class="logo">
					<a href="#">
						<img src="images/logo.png" alt="Logo" />
					</a>
				</div>
				<div class="nav-holder">
					<nav class="nav-menu">
						<ul>
							<NavLink navname="About us" />
							<NavLink navname="Reservation" />
							<NavLink navname="Gallery" />
							<NavLink navname="Blog" />
							<NavLink navname="Elements" />
							<NavLink navname="Shop" />
						</ul>
					</nav>
					<button class="opener">
						<span></span>
					</button>
				</div>
			</div>
		</header>
		<main class="main-content">
			<div class="banner">
				<form action="#" class="inputbox" method="POST">
					<label class="inputbox-head">Trial Class</label>
					<input required type="text" placeholder="Enter your name" class="inputbox-block" />
					<input required type="tel" placeholder="Enter your phone" class="inputbox-block" />
					<select class="inputbox-block">
						<option value="Chose your class">Chose your class</option>
						<option value="Class 1">Class 1</option>
						<option value="Class 2">Class 2</option>
						<option value="Class 3">Class 3</option>
					</select>
					<button class="inputbox-btn">Try it</button>
				</form>
				<div class="under-form">
					<p class="form-container-text1">Just Balance your Mind & Body </p>
					<p class="form-container-text2">Create the healthy living for yourself</p>
				</div>
			</div>
			<div class="container">
				<div class="program-header">
					<h1>Yoga FEATURE PROGRAM</h1>
					<h2>Our Classes</h2>
				</div>
				<div class="program">
					<YogaProgram yogaimage="images/img-01.jpg" yogahead="Yoga For Health" yogatext="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt." />
					<YogaProgram yogaimage="images/img-02.jpg" yogahead="Yoga For Los Weight" yogatext="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt." />
					<YogaProgram yogaimage="images/img-03.jpg" yogahead="Yoga For Children" yogatext="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt." />
					<YogaProgram yogaimage="images/img-04.jpg" yogahead="Yoga For Elderly" yogatext="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt." />
				</div>
			</div>
			<div class="gallery">
				<GalleryBlock galleryimages="images/img-05.jpg" />
				<GalleryBlock galleryimages="images/img-06.jpg" />
				<GalleryBlock galleryimages="images/img-07.jpg" />
				<GalleryBlock galleryimages="images/img-08.jpg" />
				<GalleryBlock galleryimages="images/img-09.jpg" />
				<GalleryBlock galleryimages="images/img-10.jpg" />
				<GalleryBlock galleryimages="images/img-11.jpg" />
				<GalleryBlock galleryimages="images/img-12.jpg" />
			</div>
			<div class="container">
				<div class="about">
					<div class="about-text">
						<h1>About us</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor it in lorei voluptate velit esse cillum dolore eu fugiat nulla pariatur lorem ispum loting sokui.</p>
					</div>
					<div class="about-slide">
						<div class="about-slide-images"><img src="images/img-13.jpg" alt="img" /></div>
						<div class="about-slide-images"><img src="images/img-13.jpg" alt="img" /></div>
					</div>
				</div>
			</div>
			<div class="advices-container">
				<div class="advices">
					<Advice adviceimages="images/ico-01-v2.png" advicehead="IMPROVED OVERALL HEALTH" advicetext="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com." />
					<Advice adviceimages="images/ico-02-v2.png" advicehead="INCREASED CONCENTRATION" advicetext="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi." />
					<Advice adviceimages="images/ico-03-v2.png" advicehead="BLANCE YOUR MIND" advicetext="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com. Enim ad minim veniam." />
					<Advice adviceimages="images/ico-04-v2.png" advicehead="SLEEP BETTER" advicetext="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com." />
					<Advice adviceimages="images/ico-05-v2.png" advicehead="WEIGHT LOSS" advicetext="Enim ad minim veniam." />
					<Advice adviceimages="images/ico-06-v2.png" advicehead="STRENGTHENS YOUR BONES" advicetext="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com." />
					<Advice adviceimages="images/ico-07-v2.png" advicehead="INCREASED FLEXIBILITY" advicetext="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com." />
					<Advice adviceimages="images/ico-08-v2.png" advicehead="LOWER BLOOD PRESSURE" advicetext="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com." />
				</div>
			</div>
			<div class="price-container">
				<div class="container">
					<div class="prices">
						<Price pricetop="49" pricetextbottom="NUTRITION ADVICER: NO" />
						<Price pricetop="69" />
						<Price pricetop="99" pricetexttop="ENTRY DATE: MON – SUN"/>
					</div>
				</div>
			</div>
		</main>
		<footer class="page-footer">
			<div class="top-footer">
				<div class="container">
					<div class="top-footer-container">
						<div class="about-us">
							<h4>About</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m inim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
						<div class="contact-us">
								<h4>CONTACT US</h4>
								<div class="contact-icon">
									<span class="icon-location icon-font"><a href="https://www.google.com/maps/search/5419+Joseph+Mountains+Apt.+716/@50.0196372,36.226274,14z/data=!3m1!4b1" class="contact-link" target="_blank">5419 Joseph Mountains Apt. 716</a></span>
									<span class="icon-call icon-font"><a href="tel:123456789" class="contact-link" target="_blank">+1 234 567 89</a>, <a href="tel:123467890" class="contact-link" target="_blank">+1 234 678 90</a></span>
									<span class="icon-envelope icon-font"><a href="mailto:joga.info@example.com" class="contact-link" target="_blank">joga.info@example.com</a></span>
									<span class="icon-planet icon-font"><a href="#" class="contact-link" >www.example.com</a></span>
								</div>
							</div>
						</div>
						<div class="socials">
							<ul class="socials-list">
								<SocialsList socialclass="icon-pinterest" />
								<SocialsList socialclass="icon-twitter" />
								<SocialsList socialclass="icon-facebook" />
								<SocialsList socialclass="icon-google-plus" />
								<SocialsList socialclass="icon-instagram" />
							</ul>
						</div>
					</div>
				</div>
				<div class="bottom-footer">
					<p>Copyright  ©  2016-2017 Yoga classes</p>
				</div>
		</footer>
	</div>
    </div>
  );
}

export default App;
