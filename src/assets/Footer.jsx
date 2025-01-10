import "./footer.css";


export const Footer = () => {
         return <footer className="footer">
             <div className="footer-content">
               <p>© 2025 Md. Abdullah Al Hasan</p>
               <div className="social-links">
                 <a href="https://www.facebook.com/m.hassan3444" target="_blank" rel="noopener noreferrer" className="social-icon">
                   <i className="fab fa-facebook-f" />
                   <span>Facebook</span>
                 </a>
                 <a href="https://github.com/abdullah-hasan467/" target="_blank" rel="noopener noreferrer" className="social-icon">
                   <i className="fab fa-github" />
                   <span>GitHub</span>
                 </a>
                 <a href="https://md-abdullah-al-hasan.netlify.app/" target="_blank" rel="noopener noreferrer" className="social-icon">
                   <i className="fas fa-briefcase" />
                   <span>Portfolio</span>
                 </a>
               </div>
             </div>
           </footer>;
       };
