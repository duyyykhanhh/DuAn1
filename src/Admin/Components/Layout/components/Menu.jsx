import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("/");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <header className="app-header">
        <a
          className="app-sidebar__toggle"
          href="#"
          data-toggle="sidebar"
          aria-label="Hide Sidebar"
        ></a>
        <ul className="app-nav">
          <li>
            <a className="app-nav__item" href="/">
              <i className="bx bx-log-out bx-rotate-180"></i>{" "}
            </a>
          </li>
        </ul>
      </header>
      <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside className="app-sidebar">
        <div className="app-sidebar__user">
          <div
            className="app-sidebar__user-avatar-container"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <img
              className="app-sidebar__user-avatar"
              src="https://decg5lu73tfmh.cloudfront.net/static/images/comprofiler/gallery/operator/operator_m.png"
              width="50px"
              alt="User Image"
            />
          </div>
          <div>
            <p className="app-sidebar__user-name">
              <b>Admin</b>
            </p>
            <p className="app-sidebar__user-designation">
              Chào mừng bạn trở lại
            </p>
          </div>
        </div>
        <hr />
        <ul className="app-menu">
          <li>
            <Link
              to="/admin/dashboard"
              className={`app-menu__item ${
                currentPage === "/admin/dashboard" ? "active" : ""
              }`}
              onClick={() => handlePageChange("/admin/dashboard")}
            >
              <i className="app-menu__icon bx bx-tachometer"></i>
              <span className="app-menu__label">Bảng điều khiển</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/quanlykh"
              className={`app-menu__item ${
                currentPage === "/admin/quanlykh" ? "active" : ""
              }`}
              onClick={() => handlePageChange("/admin/quanlykh")}
            >
              <i className="app-menu__icon bx bx-user-voice"></i>
              <span className="app-menu__label">Quản lý khách hàng</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/quanlysp"
              className={`app-menu__item ${
                currentPage === "/admin/quanlysp" ? "active" : ""
              }`}
              onClick={() => handlePageChange("/admin/quanlysp")}
            >
              <i className="app-menu__icon bx bx-purchase-tag-alt"></i>
              <span className="app-menu__label">Quản lý sản phẩm</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/quanlydonhang"
              className={`app-menu__item ${
                currentPage === "/admin/quanlydonhang" ? "active" : ""
              }`}
              onClick={() => handlePageChange("/admin/quanlydonhang")}
            >
              <i className="app-menu__icon bx bx-task"></i>
              <span className="app-menu__label">Quản lý đơn hàng</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/doanhthu"
              className={`app-menu__item ${
                currentPage === "/admin/doanhthu" ? "active" : ""
              }`}
              onClick={() => handlePageChange("/admin/doanhthu")}
            >
              <i className="app-menu__icon bx bx-pie-chart-alt-2"></i>
              <span className="app-menu__label">Báo cáo doanh thu</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Menu;
