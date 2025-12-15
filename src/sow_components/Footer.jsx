function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>© {currentYear} Shadow of War page by Vladik</p>
            <p>Made with the power of the bright lord</p>
        </footer>
    );
}

export default Footer;
