import "./footer.css";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Copyright Sandeep © {currentYear}</p>
    </footer>
  );
};

export default Footer;
