import React from 'react'

function Footer() {
  return (
    <div>
        <div className="row">
            <div className='col-md-4'>
                <h3>Quick links</h3>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">galerry</a></li>
                    <li><a href="#">aboutus</a></li>
                    <li><a href="#">login</a></li>
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
                <li><a href="#"><img src="facebook.png" alt="facebook" /></a></li>
                <li><a href="#"><img src="twitter.png" alt="twitter" /></a></li>
                <li><a href="#"><img src="instagram.png" alt="instagram" /></a></li>
                <li><a href="#"><img src="linkedin.png" alt="linkedin" /></a></li>
            </div>
        </div>
    </div>
  )
}

export default Footer