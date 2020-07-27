import React from "react";

export default function About() {

    return (
        //awal About
        <section class="about" id="sectionabout">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-4">
                        <h2 class="section-title-underline">
                            <span>About Us</span>
                        </h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg">
                        <h3 class="text-center">Kenapa Harus Kursus disini?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium voluptates totam ullam et cum doloribus incidunt
                            dolore dolor tenetur iusto sed, quasi, magnam temporibus maiores
                            officia minus nisi iure voluptas.
                        </p>
                    </div>
                    <div class="col-lg">
                        <img src="/assets/img/bg4.jpg" class="rounded mx-auto d-block" alt="Images" />
                    </div>
                </div>
            </div>
        </section>
        //End About
    );
}
