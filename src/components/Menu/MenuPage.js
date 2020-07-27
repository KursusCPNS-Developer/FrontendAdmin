import React from "react";

import {Link} from "react-router-dom";

export default function Menu() {

    return (
      <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href="#">WeLearnIndo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-item nav-link active" href="#sectionhome">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#sectionabout">about</a>
                        <a class="nav-item nav-link" href="#sectionblog">Blog</a>
                        <a class="nav-item nav-link" href="#sectionbayar">Paket Kursus</a>
                        <button class="btn btn-outline-primary my-2 my-sm-0 tombol mr-1" type="submit">
                            <Link to="/login">Masuk</Link>
                        </button>
                        <button class="btn btn-outline-primary my-2 my-sm-0 tombol" type="submit">
                            <Link to="/register">Daftar</Link>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
