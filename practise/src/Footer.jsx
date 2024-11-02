import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">Your Logo</h2>
            <p className="text-gray-400">
              Delivering the best digital solutions to connect you to the world.
            </p>
            <p className="text-gray-400 mt-2">
              Stay connected with us for more updates.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Support</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">Connect with us on social media.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="https://x.com/home" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/feed/?legoTrackingToken=c34ZpnFFkTBxr71PqmgCc2UMfmlOrSdjtOoZsC5gr6litOoZp6Zdr6litOoVejAVejRApnhPpnlNpl9JtmUCjAZ9l4BjjR0Zuk9OpmhOjThBpShFtOpQrClQrCBvsClHpmlPnS9LqBYOtChxs6xzrDlxr3RAinhBpShFtOoMfmVLqnhFsSZgt6lDp6BT9z0Kc3RBsCZzkT9D9zROol1Ipl9OpOoZp6Zdr6lisCsCc3RKrSBQqndLk71RrT9D9zAVejAVfmhBt7dBtn5BkCRRjD1RrT9D9DhItm5CpmgZp4BMtmZOpOpejQBkildfk3RVgD9Bp79L9DhItm5CpmgZp4BQrClJpSlP9DhKpnhKqjRAinhLr7cCt6NRompBp3RAinhRrTBxr2oOtChxs6xzrDlxr3RBrm5epmtxs2pEt7tLsCsZp4BMs64Cc3sPdj4Nfmh9rCZFsT9BtyoSejgVe3cMc30Nfmh9tipBd68UejpzoPdCcj4JdzBzeiQOp30Qbj8Ue3cJpzkTpzgMcS4Zp4BQu6lQrCZz" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/feed/?legoTrackingToken=c34ZpnFFkTBxr71PqmgCc2UMfmlOrSdjtOoZsC5gr6litOoZp6Zdr6litOoVejAVejRApnhPpnlNpl9JtmUCjAZ9l4BjjR0Zuk9OpmhOjThBpShFtOpQrClQrCBvsClHpmlPnS9LqBYOtChxs6xzrDlxr3RAinhBpShFtOoMfmVLqnhFsSZgt6lDp6BT9z0Kc3RBsCZzkT9D9zROol1Ipl9OpOoZp6Zdr6lisCsCc3RKrSBQqndLk71RrT9D9zAVejAVfmhBt7dBtn5BkCRRjD1RrT9D9DhItm5CpmgZp4BMtmZOpOpejQBkildfk3RVgD9Bp79L9DhItm5CpmgZp4BQrClJpSlP9DhKpnhKqjRAinhLr7cCt6NRompBp3RAinhRrTBxr2oOtChxs6xzrDlxr3RBrm5epmtxs2pEt7tLsCsZp4BMs64Cc3sPdj4Nfmh9rCZFsT9BtyoSejgVe3cMc30Nfmh9tipBd68UejpzoPdCcj4JdzBzeiQOp30Qbj8Ue3cJpzkTpzgMcS4Zp4BQu6lQrCZz" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Raihan Rimon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
