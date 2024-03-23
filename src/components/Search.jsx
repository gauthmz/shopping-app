import React from 'react'
import ShoppingNavbar from './ShoppingNavbar'

const Search = () => {
    return (
        <div>
            <ShoppingNavbar />
            <br />
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 sol-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Search for product</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 sol-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-secondary">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search