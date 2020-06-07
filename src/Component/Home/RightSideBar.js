import React from "react";

export default function RightSideBar() {

  return (
    <div class="all-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="logo-pro">
                        <a href="index.html"><img class="main-logo" src="img/logo/logo.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-advance-area">
            <div class="header-top-area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="header-top-wraper">
                                <div class="row">
                                    <div class="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                                        <div class="menu-switcher-pro">
                                            <button type="button" id="sidebarCollapse"
                                                class="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
                                                <i class="icon nalika-menu-task"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                                        <div class="header-top-menu tabl-d-n hd-search-rp">
                                            <div class="breadcome-heading">
                                                <form role="search" class="">
                                                    <input type="text" placeholder="Search..." class="form-control" />
                                                    <a href=""><i class="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                        <div class="header-right-info">
                                            <ul class="nav navbar-nav mai-top-nav header-right-menu">
                                                <li class="nav-item"><a href="#" data-toggle="dropdown" role="button"
                                                        aria-expanded="false" class="nav-link dropdown-toggle"><i
                                                            class="icon nalika-alarm" aria-hidden="true"></i><span
                                                            class="indicator-nt"></span></a>
                                                    <div role="menu"
                                                        class="notification-author dropdown-menu animated zoomIn">
                                                        <div class="notification-single-top">
                                                            <h1>Notifications</h1>
                                                        </div>
                                                        <ul class="notification-menu">
                                                            <li>
                                                                <a href="#">
                                                                    <div class="notification-icon">
                                                                        <i class="icon nalika-tick"
                                                                            aria-hidden="true"></i>
                                                                    </div>
                                                                    <div class="notification-content">
                                                                        <span class="notification-date">16 Sept</span>
                                                                        <h2>Advanda Cro</h2>
                                                                        <p>Please done this project as soon possible.
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div class="notification-icon">
                                                                        <i class="icon nalika-cloud"
                                                                            aria-hidden="true"></i>
                                                                    </div>
                                                                    <div class="notification-content">
                                                                        <span class="notification-date">16 Sept</span>
                                                                        <h2>Sulaiman din</h2>
                                                                        <p>Please done this project as soon possible.
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div class="notification-icon">
                                                                        <i class="icon nalika-folder"
                                                                            aria-hidden="true"></i>
                                                                    </div>
                                                                    <div class="notification-content">
                                                                        <span class="notification-date">16 Sept</span>
                                                                        <h2>Victor Jara</h2>
                                                                        <p>Please done this project as soon possible.
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div class="notification-icon">
                                                                        <i class="icon nalika-bar-chart"
                                                                            aria-hidden="true"></i>
                                                                    </div>
                                                                    <div class="notification-content">
                                                                        <span class="notification-date">16 Sept</span>
                                                                        <h2>Victor Jara</h2>
                                                                        <p>Please done this project as soon possible.
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div class="notification-view">
                                                            <a href="#">View All Notification</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" data-toggle="dropdown" role="button"
                                                        aria-expanded="false" class="nav-link dropdown-toggle">
                                                        <i class="icon nalika-user"></i>
                                                        <span class="admin-name">Advanda Cro</span>
                                                        <i class="icon nalika-down-arrow nalika-angle-dw"></i>
                                                    </a>
                                                    <ul role="menu"
                                                        class="dropdown-header-top author-log dropdown-menu animated zoomIn">
                                                        <li><a href="register.html"><span
                                                                    class="icon nalika-home author-log-ic"></span>
                                                                Register</a>
                                                        </li>
                                                        <li><a href="#"><span
                                                                    class="icon nalika-user author-log-ic"></span> My
                                                                Profile</a>
                                                        </li>
                                                        <li><a href="lock.html"><span
                                                                    class="icon nalika-diamond author-log-ic"></span>
                                                                Lock</a>
                                                        </li>
                                                        <li><a href="#"><span
                                                                    class="icon nalika-settings author-log-ic"></span>
                                                                Settings</a>
                                                        </li>
                                                        <li><a href="login.html"><span
                                                                    class="icon nalika-unlocked author-log-ic"></span>
                                                                Log Out</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*
              <!-- Mobile Menu start -->
            */}
            <div class="mobile-menu-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="mobile-menu">
                                <nav id="dropdown">
                                    <ul class="mobile-menu-nav">
                                        <li>
                                            <a data-toggle="collapse" data-target="#Charts" href="#">Home
                                                <span class="admin-project-icon nalika-icon nalika-down-arrow"></span>
                                            </a>
                                            <ul class="collapse dropdown-header-top">
                                                <li><a href="index.html">Dashboardv Admin</a></li>
                                                <li><a href="index-1.html">Dashboard Guru</a></li>
                                                <li><a href="index-3.html">Dasboard Murid</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-toggle="collapse" data-target="#demo" href="#">Materi & Soal
                                                <span class="admin-project-icon nalika-icon nalika-down-arrow"></span>
                                            </a>
                                            <ul id="demo" class="collapse dropdown-header-top">
                                                <li><a href="mailbox.html">Materi</a>
                                                </li>
                                                <li><a href="mailbox-view.html">Try Out</a>
                                                </li>
                                                <li><a href="mailbox-compose.html">Tes Ujian</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-toggle="collapse" data-target="#others" href="#">Fitur Lainnya
                                                <span class="admin-project-icon nalika-icon nalika-down-arrow"></span>
                                            </a>
                                            <ul id="others" class="collapse dropdown-header-top">
                                                <li><a href="file-manager.html">TipsLulus CPNS</a></li>
                                                <li><a href="contacts.html">Kisi-kisi</a></li>
                                                <li><a href="projects.html">Komplai/Saran</a></li>
                                                <li><a href="project-details.html">Peringkat Nasional</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-toggle="collapse" data-target="#Pagemob" href="#">Pages
                                                <span class="admin-project-icon nalika-icon nalika-down-arrow"></span>
                                            </a>
                                            <ul id="Pagemob" class="collapse dropdown-header-top">
                                                <li><a href="login.html">Login</a>
                                                </li>
                                                <li><a href="register.html">Register</a>
                                                </li>
                                                <li><a href="lock.html">Lock</a>
                                                </li>
                                                <li><a href="password-recovery.html">Password Recovery</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
              <!-- Mobile Menu end -->
            */}
            <div class="breadcome-area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="breadcome-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div class="breadcomb-wp">
                                            <div class="breadcomb-icon">
                                                <i class="icon nalika-home"></i>
                                            </div>
                                            <div class="breadcomb-ctn">
                                                <h2>Selamat Datang Admin</h2>
                                                <p>Welcome to Nalika <span class="bread-ntd">Admin Template</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div class="breadcomb-report">
                                            <button data-toggle="tooltip" data-placement="left" title="Download Report"
                                                class="btn"><i class="icon nalika-download"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-admin container-fluid">
            <div class="row admin text-center">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div class="admin-content analysis-progrebar-ctn res-mg-t-15">
                                <h4 class="text-left text-uppercase">
                                    <a href="list_murid.html">
                                        <b>List Murid</b>
                                    </a>
                                </h4>
                                <div class="row vertical-center-box vertical-center-box-tablet">
                                    <div class="col-xs-3 mar-bot-15 text-left">
                                        <label class="label bg-green">Total Murid <i class="fa fa-level-up"
                                                aria-hidden="true"></i></label>
                                    </div>
                                    <div class="col-xs-9 cus-gh-hd-pro">
                                        <h2 class="text-right no-margin">10,000</h2>
                                    </div>
                                </div>
                                <div class="progress progress-mini">
                                    <div style={{"width":"78%"}} class="progress-bar bg-green"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" style={{"margin-bottom":"1px"}}>
                            <div class="admin-content analysis-progrebar-ctn res-mg-t-30">
                                <h4 class="text-left text-uppercase">
                                    <a href="list_guru.html">
                                        <b>List Guru</b>
                                    </a>
                                </h4>
                                <div class="row vertical-center-box vertical-center-box-tablet">
                                    <div class="text-left col-xs-3 mar-bot-15">
                                        <label class="label bg-red">Total Guru <i class="fa fa-level-down"
                                                aria-hidden="true"></i></label>
                                    </div>
                                    <div class="col-xs-9 cus-gh-hd-pro">
                                        <h2 class="text-right no-margin">5,000</h2>
                                    </div>
                                </div>
                                <div class="progress progress-mini">
                                    <div style={{"width":"38%"}} class="progress-bar progress-bar-danger bg-red"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div class="admin-content analysis-progrebar-ctn res-mg-t-30">
                                <h4 class="text-left text-uppercase">
                                    <a href="list_materi.html">
                                        <b>List Materi</b>
                                    </a>
                                </h4>
                                <div class="row vertical-center-box vertical-center-box-tablet">
                                    <div class="text-left col-xs-3 mar-bot-15">
                                        <label class="label bg-blue">Total materi <i class="fa fa-level-up"
                                                aria-hidden="true"></i></label>
                                    </div>
                                    <div class="col-xs-9 cus-gh-hd-pro">
                                        <h2 class="text-right no-margin">70,000</h2>
                                    </div>
                                </div>
                                <div class="progress progress-mini">
                                    <div style={{"width":"60%"}} class="progress-bar bg-blue"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div class="admin-content analysis-progrebar-ctn res-mg-t-30">
                                <h4 class="text-left text-uppercase">
                                    <a href="list_soal.html">
                                        <b>List Soal & Pembahasan</b>
                                    </a>
                                </h4>
                                <div class="row vertical-center-box vertical-center-box-tablet">
                                    <div class="text-left col-xs-3 mar-bot-15">
                                        <label class="label bg-purple">Total Soal & Ujian<i class="fa fa-level-up"
                                                aria-hidden="true"></i></label>
                                    </div>
                                    <div class="col-xs-9 cus-gh-hd-pro">
                                        <h2 class="text-right no-margin">100,000</h2>
                                    </div>
                                </div>
                                <div class="progress progress-mini">
                                    <div style={{"width":"60%"}} class="progress-bar bg-purple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-status mg-b-30" style={{"margin-top":"30px"}}>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="product-status-wrap">
                            <h4>Aktivasi akun</h4>
                            <table>
                                <tr>
                                    <th>No.</th>
                                    <th>Bukti Transaksi</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Tanggal</th>
                                    <th>Paket yang diambil</th>
                                    <th>Harga Paket</th>
                                    <th>Status akun</th>
                                    <th style={{"text-align":"center"}}>Aktivasi</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><img src="img/new-product/5-small.jpg" alt="" /></td>
                                    <td>Handrawan</td>
                                    <td>handrawan@gmail.com</td>
                                    <td>11 April 2020</td>
                                    <td>CPNS Online</td>
                                    <td>Rp.100.000</td>
                                    <td>
                                        <button class="pd-setting">Active</button>
                                    </td>
                                    <td>
                                        <button class="pd-setting">Active</button>
                                        <button class="ds-setting">Disabled</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><img src="img/new-product/5-small.jpg" alt="" /></td>
                                    <td>Hengky</td>
                                    <td>hengky@gmail.com</td>
                                    <td>11 April 2020</td>
                                    <td>CPNS Offline</td>
                                    <td>Rp.100.000</td>
                                    <td>
                                        <button class="ds-setting">Disabled</button>
                                    </td>
                                    <td>
                                        <button class="pd-setting">Active</button>
                                        <button class="ds-setting">Disabled</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><img src="img/new-product/5-small.jpg" alt="" /></td>
                                    <td>Ana</td>
                                    <td>ana@gmail.com</td>
                                    <td>11 April 2020</td>
                                    <td>CPNS Online + offline</td>
                                    <td>Rp.100.000</td>
                                    <td>
                                        <button class="ps-setting">Paused</button>
                                    </td>
                                    <td>
                                        <button class="pd-setting">Active</button>
                                        <button class="ds-setting">Disabled</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><img src="img/new-product/5-small.jpg" alt="" /></td>
                                    <td>Adi</td>
                                    <td>adi@gmail.com</td>
                                    <td>12 April 2020</td>
                                    <td>CPNS Online + offline</td>
                                    <td>Rp.100.000</td>
                                    <td>
                                        <button class="ps-setting">Paused</button>
                                    </td>
                                    <td>
                                        <button class="pd-setting">Active</button>
                                        <button class="ds-setting">Disabled</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><img src="img/new-product/5-small.jpg" alt="" /></td>
                                    <td>Ali</td>
                                    <td>ali@gmail.com</td>
                                    <td>13 April 2020</td>
                                    <td>CPNS Online + offline</td>
                                    <td>Rp.100.000</td>
                                    <td>
                                        <button class="ps-setting">Paused</button>
                                    </td>
                                    <td>
                                        <button class="pd-setting">Active</button>
                                        <button class="ds-setting">Disabled</button>
                                    </td>
                                </tr>
                            </table>
                            <div class="custom-pagination">
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="calender-area mg-tb-30">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="calender-inner">
                            <div id='calendar'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright-area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-copy-right">
                            <p>Copyright © 2018 <a href="https://colorlib.com/wp/templates/">Colorlib</a> All rights
                                reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
