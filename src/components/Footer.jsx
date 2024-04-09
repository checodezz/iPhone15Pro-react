const Footer = () => {
  return (
    <footer className="bg-black text-secondary py-5 text-center">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Apple Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
