import React from 'react'
import ShoppingNavbar from './ShoppingNavbar'

const Skincare = () => {
    return (
        <div>
            <ShoppingNavbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">


                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="https://www.westside.com/cdn/shop/files/Sunscreenumbrella.jpg?v=1708601064&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Gel Sunscreen, SPF 50 PA++++, 50g</h5>
                                        <p class="card-text">Rs 295</p>
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="https://www.westside.com/cdn/shop/products/2050027141444_1.jpg?v=1647537340&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Hydrate Face Wash, 50g</h5>
                                        <p class="card-text">Rs 190</p>
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="https://www.westside.com/cdn/shop/files/9_76ca461c-272c-4950-9dff-b4e584a7b1fc.jpg?v=1707214859&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Salted Caramel Body Wash, 200 ml</h5>
                                        <p class="card-text">Rs 495</p>
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="https://www.westside.com/cdn/shop/files/2050028716313_1.jpg?v=1691833344&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Oceanic Amber Body Scrub - 200g</h5>
                                        <p class="card-text">Rs 299</p>
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skincare