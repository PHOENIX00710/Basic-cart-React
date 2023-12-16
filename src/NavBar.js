import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartContainer}>
                <img style={styles.cartImage} alt="CartImage" src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg" />
                <p style={styles.cartCount}>{props.cartCount}</p>
            </div>
        </div>
    )
}

const styles = {
    cartImage: {
        height: 48,
        marginRight: 10
    },
    nav: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: 'center',
        padding: 2,
        margin: 0
    },
    cartContainer: {
        position: "relative",
    },
    cartCount: {
        background: "#050505",
        color:"white",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right: 0,
        top: -18,
    }
}

export default Navbar;