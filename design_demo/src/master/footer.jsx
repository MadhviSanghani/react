import image1 from '../../public/facebook.png';
import image2 from '../../public/twitter.png';
import image3 from '../../public/instagram.svg';
import image4 from '../../public/linkedin.webp';

function Footer() {
  return (
    <div>
        <div className="row">
            <div className='col-md-4'>
                <h3>Quick links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Gallary</a></li>
                    <li><a href="#">Aboutus</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div className='col-md-4'>
                <h3>Contact us</h3>
                <p>123 Main St, City, ST 12345</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Email: info@example.com</p>
            </div>
            <div className='col-md-4'>
                <h3>Follow us</h3>
                <a href="https://www.facebook.com/"><img src={image1} alt="facebook" width={60} height={40}/></a>
                <a href="https://x.com/?lang=en"><img src={image2} alt="twitter" width={40} height={34}/></a>
                <a href="https://www.instagram.com/"><img src={image3} alt="instagram" width={40} height={30}/></a>
                <a href="https://in.linkedin.com/"><img src={image4} alt="linkedin" width={40} height={40}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer