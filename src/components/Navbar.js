import {useEffect} from 'react';



const Navbar=() => {

    useEffect(() => {
        const menu=document.querySelector(".menu");
        const menuMain=menu.querySelector(".menu-main");
        const goBack=menu.querySelector(".go-back");
        const menuTrigger=document.querySelector(".mobile-menu-trigger");
        const closeMenu=menu.querySelector(".mobile-menu-close");
        let subMenu;
        menuMain.addEventListener("click",(e) => {
            if(!menu.classList.contains("active")) {
                return;
            }
            if(e.target.closest(".menu-item-has-children")) {
                const hasChildren=e.target.closest(".menu-item-has-children");
                showSubMenu(hasChildren);
            }
        });
        goBack.addEventListener("click",() => {
            hideSubMenu();
        })
        menuTrigger.addEventListener("click",() => {
            toggleMenu();
        })
        closeMenu.addEventListener("click",() => {
            toggleMenu();
        })
        document.querySelector(".menu-overlay").addEventListener("click",() => {
            toggleMenu();
        })
        function toggleMenu() {
            menu.classList.toggle("active");
            document.querySelector(".menu-overlay").classList.toggle("active");
        }
        function showSubMenu(hasChildren) {
            subMenu=hasChildren.querySelector(".sub-menu");
            subMenu.classList.add("active");
            subMenu.style.animation="slideLeft 0.5s ease forwards";
            const menuTitle=hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
            menu.querySelector(".current-menu-title").innerHTML=menuTitle;
            menu.querySelector(".mobile-menu-head").classList.add("active");
        }

        function hideSubMenu() {
            subMenu.style.animation="slideRight 0.5s ease forwards";
            setTimeout(() => {
                subMenu.classList.remove("active");
            },300);
            menu.querySelector(".current-menu-title").innerHTML="";
            menu.querySelector(".mobile-menu-head").classList.remove("active");
        }

        window.onresize=function() {
            if(this.innerWidth>991) {
                if(menu.classList.contains("active")) {
                    toggleMenu();
                }

            }
        }
    },[])
    return (
        //<div className="container category">
        //    <ul className="desktop-menu-category-list">

        //        <li className="menu-category">
        //            <a href="#" className="menu-title">Home</a>
        //        </li>


        //        <li className="menu-category">
        //            <a href="#" className="menu-title">Categories</a>

        //            <div className="dropdown-panel">

        //                <ul className="dropdown-panel-list">

        //                    <li className="menu-title">
        //                        <a href="#">Electronics</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">Desktop</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">Laptop</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">Camera</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">Tablet</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">Headphone</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">
        //                            <img src="./assets/images/electronics-banner-1.jpg" alt="headphone collection" width="250"
        //                                height="119" />
        //                        </a>
        //                    </li>

        //                </ul>



        //                <ul className="dropdown-panel-list">



        //                </ul>

        //                <ul className="dropdown-panel-list">


        //                    <li className="menu-title">
        //                        <a href="#">Electronics</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">Smart Watch</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">Smart TV</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">Keyboard</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">Mouse</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">Microphone</a>
        //                    </li>

        //                    <li className="panel-list-item">
        //                        <a href="#">
        //                            <img src="./assets/images/electronics-banner-2.jpg" alt="mouse collection" width="250"
        //                                height="119" />
        //                        </a>
        //                    </li>

        //                </ul>

        //            </div>
        //        </li>


        //        <li className="menu-category">
        //            <a href="#" className="menu-title">SmartPhone</a>

        //            <ul className="dropdown-list">

        //                <li className="dropdown-item">
        //                    <a href="#">Iphone 13 Pro Max</a>
        //                </li>

        //                <li className="dropdown-item">
        //                    <a href="#">Galaxy S22 Ultra</a>
        //                </li>

        //                <li className="dropdown-item">
        //                    <a href="#">Galaxy Z Flip</a>
        //                </li>

        //                <li className="dropdown-item">
        //                    <a href="#">Google Pixel</a>
        //                </li>

        //            </ul>
        //        </li>

        //        <li className="menu-category">
        //            <a href="#" className="menu-title">Phone Accessories</a>

        //            <ul className="dropdown-list">

        //                <li className="dropdown-item">
        //                    <a href="#">Airport</a>
        //                </li>

        //                <li className="dropdown-item">
        //                    <a href="#">Phone Charger</a>
        //                </li>

        //                <li className="dropdown-item">
        //                    <a href="#">Headphone</a>
        //                </li>



        //            </ul>
        //        </li>

        //        <li className="menu-category">
        //            <a href="#" className="menu-title">Blog</a>
        //        </li>

        //        <li className="menu-category">
        //            <a href="#" className="menu-title">Hot Offers</a>
        //        </li>

        //    </ul>
        //</div >
        <>
            <header className="header category">
                <div className="container">
                    <div className="row v-center">
                        <div className="header-item item-left">

                        </div>

                        <div className="header-item item-center">
                            <div className="menu-overlay">
                            </div>
                            <nav className="menu">
                                <div className="mobile-menu-head">
                                    <div className="go-back"><i className="fa fa-angle-left"></i></div>
                                    <div className="current-menu-title"></div>
                                    <div className="mobile-menu-close">&times;</div>
                                </div>
                                <ul className="menu-main">
                                    <li> <a href='#'>Demo1</a> </li>
                                    <li> <a href='#'>Demo2</a> </li>
                                    <li> <a href='#'>Demo3</a> </li>
                                    <li> <a href='#'>Demo4</a> </li>

                                    <li className="menu-item-has-children">
                                        <a href="#">New <i className="fa fa-angle-down"></i></a>
                                        <div className="sub-menu mega-menu mega-menu-column-4">
                                            <div className="list-item text-center">
                                                <a href="#">
                                                    <img src="img/p1.jpg" alt="new Product" />
                                                    <h4 className="title">Product 1</h4>
                                                </a>
                                            </div>
                                            <div className="list-item text-center">
                                                <a href="#">
                                                    <img src="img/p2.jpg" alt="new Product" />
                                                    <h4 className="title">Product 2</h4>
                                                </a>
                                            </div>
                                            <div className="list-item text-center">
                                                <a href="#">
                                                    <img src="img/p3.jpg" alt="new Product" />
                                                    <h4 className="title">Product 3</h4>
                                                </a>
                                            </div>
                                            <div className="list-item text-center">
                                                <a href="#">
                                                    <img src="img/p4.jpg" alt="new Product" />
                                                    <h4 className="title">Product 4</h4>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Shop <i className="fa fa-angle-down"></i></a>
                                        <div className="sub-menu mega-menu mega-menu-column-4">
                                            <div className="list-item">
                                                <h4 className="title">Men's Fashion</h4>
                                                <ul>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                </ul>
                                                <h4 className="title">Beauty</h4>
                                                <ul>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                </ul>
                                            </div>
                                            <div className="list-item">
                                                <h4 className="title">Women's Fashion</h4>
                                                <ul>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                </ul>
                                                <h4 className="title">Furniture</h4>
                                                <ul>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                </ul>
                                            </div>
                                            <div className="list-item">
                                                <h4 className="title">Home, Kitchen</h4>
                                                <ul>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                </ul>
                                            </div>
                                            <div className="list-item">
                                                <img src="img/shop1.jpg" alt="shop" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Blog <i className="fas fa-angle-down"></i></a>
                                        <div className="sub-menu single-column-menu">
                                            <ul>
                                                <li><a href="#">Standard Layout</a></li>
                                                <li><a href="#">Grid Layout</a></li>
                                                <li><a href="#">single Post Layout</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Pages <i className="fas fa-angle-down"></i></a>
                                        <div className="sub-menu single-column-menu">
                                            <ul>
                                                <li><a href="#">Login</a></li>
                                                <li><a href="#">Register</a></li>
                                                <li><a href="#">Faq</a></li>
                                                <li><a href="#">404 Page</a></li>
                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        <div className="header-item item-right">


                            <div className="mobile-menu-trigger">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Navbar