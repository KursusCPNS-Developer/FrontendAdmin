import React from "react";

export default function Blog() {

    return (
        //awal Pengumumman
        <div class="container-fluid Pengumuman" id="sectionblog">
            <div class="row justify-content-center">
                <div class="col-lg-4 text-center">
                    <h2 class="section-title-underline">
                        <span>Pengumuman</span>
                    </h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg text-center">
                    <h3 class="section-title-underline">
                        <span>News</span>
                    </h3>
                    <img src="/assets/img/p1.jpg" class="img-fluid" alt="Pengumuman" />
                    <h4>Note</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus consectetur, fugit nobis, doloribus molestias atque
                        incidunt, aut quas architecto iusto eveniet excepturi assumenda
                        impedit aperiam saepe velit? Voluptate, nemo ex?
                    </p>
                </div>
                <div class="col-lg">
                    <h3 class="section-title-underline text-center">
                        <span>Chat</span>
                    </h3>
                    <div class="media">
                        <img class="mr-3" src="/assets/img/m1.jpg" alt="Generic placeholder image" />
                        <div class="media-body">
                            <h5 class="mt-0">yuni</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                nisi vulputate fringilla. Donec lacinia congue felis in
                                faucibus.
                            </p>
                            <a href="#" class="float-right">Reply</a>
                            <div class="media mt-3">
                                <a class="pr-3" href="#">
                                    <img src="/assets/img/m2.jpg" alt="Generic placeholder image" />
                                </a>
                                <div class="media-body">
                                    <h5 class="mt-0">Aldi</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                        scelerisque ante sollicitudin. Cras purus odio, vestibulum
                                        in vulputate at, tempus viverra turpis. Fusce condimentum
                                        nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                        in faucibus.
                                    </p>
                                </div>
                            </div>
                            <a href="#" class="float-right">Reply</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //End Pengumumman
    );
}
