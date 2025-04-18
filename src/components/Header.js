import { useSelector } from 'react-redux';

const Header = () => {

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header">
            Hello World
            <div className="logo-container">
                <img className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart ({cartItems.length}) items</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
