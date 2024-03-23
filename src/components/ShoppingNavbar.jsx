import React from 'react'

const ShoppingNavbar = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">

            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Clothes_hanger_icon_3.svg/2560px-Clothes_hanger_icon_3.svg.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                  Fashion Store
                </a>
              </div>
            </nav>

          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-9 col-xl-9 col-xxl-9">

            <nav class="navbar navbar-expand-lg bg-body-tertiary" >
              <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="/">Men</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/women">Women</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/skincare">Skincare</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/search">Search</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ShoppingNavbar