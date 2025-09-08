import React from "react";
import '../styles/Footer.css'; // Assuming you have a Footer.css for styling

export default function Footer() {
 const whatsappNumber = "6380086702"; // your number
  const message = "Hello, I saw your portfolio!";

  function copy(){
    const phoneNumber = "+916380086702";
    navigator.clipboard.writeText(phoneNumber);
    alert("Phone number copied to clipboard: " + phoneNumber);
  }

    return(
        <section className="footer text-center" id="contact">
            <h1 className="text-center" data-aos="fade-down-right">Contact</h1>
            <div className="upper-footer-card">
            <div className="footer-card " data-aos="slide-left">
                <h2>Lets Connect</h2>
                <p>Feel free to reach out for collaborations or just friendly hello</p>
                <div className="contact-info">
                    <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=khidashshah10@gmail.com&su=Portfolio%20Contact&body=Hi,%20I%20saw%20your%20portfolio!" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope" style={{color: "#c35a37"}}></i> <p>khidashshah10@gmail.com</p> </a>
                    <a onClick={copy}><i className="fa-solid fa-phone" style={{color: " #6746c8"}}></i> <p>+916380086702</p> </a>
                    <a ><i className="fa-solid fa-location-dot" style={{color: "#514b1f"}}></i> <p>Coimbatore,India</p> </a>
                </div>
                <div className="social-icons">
                     <a href="https://github.com/Khidash-kid" target="_blank" className="icon-link"><i class="fa-brands fa-github fa-bounce fa-xl"></i></a>
                     <a   href="https://www.linkedin.com/in/khidashshah" target="_blank" className="icon-link"><i className="fa-brands fa-linkedin fa-bounce fa-xl"></i></a>
                     <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" className="icon-link"><i className="fa-brands fa-whatsapp fa-bounce fa-xl"></i></a>
                     {/* <a href="#" className="icon-link"><i className="fa-brands fa  */}
              </div>
            </div>
            </div>
            <div className="copyrights">
                <p>© 2025 Khidash Portfolio. All rights reserved.</p>
            </div>
        </section>
    )
}































// import React from "react";
// import '../styles/Footer.css'; // Assuming you have a Footer.css for styling

// export default function Footer() {
//     return (

//         // <h1>hello</h1>
//         <div className="footer" style={{position:"absolute",bottom:"0",marginTop:"10px"}} >
//             <div className="footer-content">
//                 <p className="contact-det-footer" style={{marginTop:"9px"}}>+916380086702 | khidashshah10@gmail.com</p>
//                 <p>© 2025 Khidash Portfolio. All rights reserved.</p>
//                 <div className="social-icons">
//                     <a href="#" className="icon-link"><i class="fa-brands fa-github fa-bounce fa-xl"></i></a>
//                     <a href="#" className="icon-link"><i className="fa-brands fa-linkedin fa-bounce fa-xl"></i></a>
//                     <a href="#" className="icon-link"><i className="fa-brands fa-whatsapp fa-bounce fa-xl"></i></a>
//                     {/* <a href="#" className="icon-link"><i className="fa-brands fa  */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// import React from "react";
// import '../styles/Footer.css'; // Assuming you have a Footer.css for styling

// export default function Footer() {
//     return(
//         <h1>hello</h1>
//     )
// }