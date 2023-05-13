import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <footer className="bg-purple-600 text-white mt-6">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
    <div className="text-center lg:text-left mb-4 lg:mb-0">
      <h4 className="text-xl font-bold">Contact Us</h4>
      <p className="mt-2">Email: joycengigi86@gmail,com</p>
      <p>Phone: +254742444369</p>
    </div>
    <div className="text-center mb-4 lg:mb-0">
      <h4 className="text-xl font-bold">Follow Us</h4>
      <div className="flex justify-center lg:justify-start mt-2">
        <Link to="https://www.facebook.com/profile.php?id=100069819055712" class="text-white hover:text-purple-800 mx-2">
        <FacebookIcon/>
        </Link>
        <Link to="https://twitter.com/W_A_NJIRU?t=NaTK2I3e3L2GNsz-SWMwKQ&s=09" class="text-white hover:text-purple-800 mx-2">
        <TwitterIcon/>
        </Link>
        <Link to="https://instagram.com/j._wanjiru?igshid=ZGUzMzM3NWJiOQ==" class="text-white hover:text-purple-800 mx-2">
       <InstagramIcon/>
        </Link>
      </div>
    </div>
    <div className="text-center lg:text-left">
      <h4 className="text-xl font-bold">About Us</h4>
      <p className="mt-2">Oral Literature is a website dedicated to showcasing <br/>
      the rich traditions of oral storytelling from around Kenya.</p>
    </div>
  </div>
  <div className='bg-gray-600 text-center flex flex-col md:flex-row md:justify-between px-8'>
    <p>Designed by <Link>Joyce Wanjiru Ngigi</Link></p>
    <p>© 2023 Joyce Wanjiru Ngigi</p> 
    <p>Developed by <Link>Ian Mwendwa</Link></p>
  </div>
</footer>
  )
}

export default Footer