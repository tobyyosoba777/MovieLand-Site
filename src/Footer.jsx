function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="text-center p-4 text-white mt-10">
        <p style={{
            color: "white",
            marginTop: "40px"
        }}>&copy; {currentYear} MovieLand. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  