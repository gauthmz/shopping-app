import React from 'react'
import ShoppingNavbar from './ShoppingNavbar'

const Men = () => {
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
                                    <img src="https://www.westside.com/cdn/shop/files/300970013DARKBLUE_1.jpg?v=1709284684&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Blue Straight-Leg Mid Rised Jeans</h5>
                                        <p class="card-text">Rs 1699</p>
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="https://www.westside.com/cdn/shop/files/300967948OFFWHITE_1.jpg?v=1708000748&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Solid White Crochet Relaxed Fit Shirt</h5>
                                        <p class="card-text">Rs 1499</p>
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="https://www.westside.com/cdn/shop/files/300964010CHARCOAL_1.jpg?v=1709284630&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Casuals Black Relaxed Fit Mid Rised Jeans</h5>
                                        <p class="card-text">Rs 1999</p>
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="https://www.westside.com/cdn/shop/files/300968458SKY_1.jpg?v=1709284621&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Blue Relaxed-Fit T-Shirt</h5>
                                        <p class="card-text">Rs 899</p>
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

export default Men