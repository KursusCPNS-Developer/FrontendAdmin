import React from "react";

export default function Guru() {

    return (
        //awal Guru
        <div class="container-fluid teacher">
            <div class="row justify-content-center text-center">
                <div class="col-lg-4">
                    <h2 class="section-title-underline">
                        <span>Pengajar</span>
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg">
                    <div class="card">
                        <img src="./img/profile1.jpg" class="img-fluid" alt="Images" />
                        <div class="card-text">
                            <h3>2#</h3>
                            <h3>Jhon Doe</h3>
                            <h5>React Devoloper</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg">
                    <div class="card">
                        <img src="./img/profile2.jpg" class="img-fluid" alt="Images" />
                        <div class="card-text">
                            <h3>1#</h3>
                            <h3>Jane</h3>
                            <h5>Designer</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg">
                    <div class="card">
                        <img src="./img/profile3.jpg" class="img-fluid" alt="Images" />
                        <div class="card-text">
                            <h3>3#</h3>
                            <h3>Alex</h3>
                            <h5>Web Devoloper</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //End Guru
    );
}
