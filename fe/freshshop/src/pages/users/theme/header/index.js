import { memo, useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoGooglePlus } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Sản phẩm 1",
                    path: ROUTERS.USER.PRODUCTS
                },
                {
                    name: "Sản phẩm 2",
                    path: ROUTERS.USER.PRODUCTS
                },
                {
                    name: "Sản phẩm 3",
                    path: ROUTERS.USER.PRODUCTS
                }
            ],
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.HOME,
        },
    ]);
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top__left">
                            <ul>
                                <li><BiLogoGmail /> abc@gmail.com</li>
                                <li>Miễn phí ship đơn từ {formatter(500000)}</li>
                            </ul>
                        </div>
                        <div className="col-6 header__top__right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <BiLogoFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <BiLogoInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <BiLogoLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <BiLogoGithub />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <BiLogoGooglePlus />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <BiUser />
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header__logo">
                            <h1>T-Fresh</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header__menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className="header__menu__dropdown">
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={`${menuKey}-${childKey}`}>
                                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                                </li>
                                                            ))
                                                        }

                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formatter(1050000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"#"}>
                                        <BiCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);