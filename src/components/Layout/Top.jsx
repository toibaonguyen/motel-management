import Script from "next/script";

export default function Top() {

    const myFunction = (x) => {
        x.classList.toggle("change");
    };

    return (
        <div className="header">
            <div className="left-header">
                <img className="logo-image" src="/images/Layout/Header/motel-manager.png" alt="" />
                <div className="nav-menu" id="navMenu" onClick={() => myFunction(document.getElementById('navMenu'))}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
            </div>
            <div className="center-header">
                <div className="nav-header">
                    <div className="nav-item">Home</div>
                    <div className="nav-item">Rooms</div>
                    <div className="nav-item">Contact</div>

                    
                </div>
            </div>
            <div className="right-header">
                <div>Hotline:</div>
                <div>+32-80000-80000</div>
            </div>
            <Script id="myScript">
                {`
                    function myFunction(x) {
                        x.classList.toggle("change");
                    }
                `}
            </Script>
        </div>
    );
}
