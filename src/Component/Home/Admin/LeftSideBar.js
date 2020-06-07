import React from "react";

export default function LeftSideBar(){

  return (
    <div class="left-sidebar-pro">
        <nav id="sidebar" class="">
            <div class="sidebar-header">
                <a href={"#"}><img class="main-logo" src="img/logo/logo.png" alt="" /></a>
                <strong><img src="img/logo/logosn.png" alt="" /></strong>
            </div>
            <div class="profile">
                <div class="profile-dtl">
                    <a href="#"><img src="img/notification/p1.jpg" class="img-fluid" alt="" /></a>
                    <h2>Name <span class="min-dtn">Admin</span></h2>
                </div>
                <div class="profile-social-dtl">
                    <ul class="dtl-social">
                        <li><a href="#"><i class="icon nalika-facebook"></i></a></li>
                        <li><a href="#"><i class="icon nalika-twitter"></i></a></li>
                        <li><a href="#"><i class="icon nalika-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="left-custom-menu-adp-wrap comment-scrollbar">
                <nav class="sidebar-nav left-sidebar-menu-pro">
                    <ul class="metismenu" id="menu1">

                        <li class="active">
                            <a class="has-arrow" href="index.html">
                                <i class="icon nalika-home icon-wrap"></i>
                                <span class="mini-click-non">Home</span>
                            </a>
                            <ul class="submenu-angle" aria-expanded="true">

                                <li>
                                    <a title="Dashboard v.1" href="index.html">
                                        <span class="mini-sub-pro">Dashboard Admin</span>
                                    </a>
                                </li>

                                <li>
                                    <a title="Dashboard v.2" href="index-1.html">
                                        <span class="mini-sub-pro">Dashboard Guru</span>
                                    </a>
                                </li>

                                <li>
                                    <a title="Dashboard v.3" href="index-2.html">
                                        <span class="mini-sub-pro">Dasboard Murid</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="has-arrow" href="mailbox.html" aria-expanded="false">
                                <i class="icon nalika-forms icon-wrap"></i>
                                <span class="mini-click-non">Materi & Soal</span>
                            </a>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li>
                                    <a title="Inbox" href="mailbox.html">
                                        <span class="mini-sub-pro">Materi</span>
                                    </a>
                                </li>
                                <li>
                                    <a title="View Mail" href="mailbox-view.html">
                                        <span class="mini-sub-pro">Try Out</span>
                                    </a>
                                </li>
                                <li>
                                    <a title="Compose Mail" href="mailbox-compose.html">
                                        <span class="mini-sub-pro">Tes Ujian</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="has-arrow" href="mailbox.html" aria-expanded="false">
                                <i class="icon nalika-table icon-wrap"></i>
                                <span class="mini-click-non">Fitur Lainnya</span>
                            </a>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li><a title="Notifications" href="notifications.html">
                                        <span class="mini-sub-pro">TipsLulus CPNS</span>
                                    </a>
                                </li>
                                <li>
                                    <a title="Alerts" href="alerts.html">
                                        <span class="mini-sub-pro">Kisi-kisi</span>
                                    </a>
                                </li>
                                <li>
                                    <a title="Modals" href="modals.html">
                                        <span class="mini-sub-pro">Komplai/Saran</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li id="removable">
                            <a class="has-arrow" href="#" aria-expanded="false"><i
                                    class="icon nalika-new-file icon-wrap"></i> <span
                                    class="mini-click-non">Pages</span></a>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li><a title="Login" href="login.html"><span class="mini-sub-pro">Login</span></a></li>
                                <li><a title="Register" href="register.html"><span
                                            class="mini-sub-pro">Register</span></a></li>
                                <li><a title="Lock" href="lock.html"><span class="mini-sub-pro">Lock</span></a></li>
                                <li><a title="Password Recovery" href="password-recovery.html"><span
                                            class="mini-sub-pro">Password Recovery</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    </div>
  );
}
