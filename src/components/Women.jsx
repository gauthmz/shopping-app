import React from 'react'
import ShoppingNavbar from './ShoppingNavbar'

const Women = () => {
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
                                    <img src="https://www.westside.com/cdn/shop/files/300967344EGGSHELL_1.jpg?v=1708000475&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">White Cargo Joggers</h5>
                                        <p class="card-text">Rs 999</p>
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="https://www.westside.com/cdn/shop/files/300967420EGGSHELL_1.jpg?v=1708687801&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Off-White Shirt</h5>
                                        <p class="card-text">Rs 1499</p>
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="https://www.westside.com/cdn/shop/files/300973510BLACK_1.jpg?v=1708609418&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Black printed shirt</h5>
                                        <p class="card-text">Rs 1299</p>
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src="https://www.westside.com/cdn/shop/files/300973564OFFWHITE_1.jpg?v=1709285157&width=493"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Floral Printed Shirt</h5>
                                        <p class="card-text">Rs 999</p>
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

export default Women