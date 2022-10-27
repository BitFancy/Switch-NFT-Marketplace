import React from "react";
import Nft3 from "./img/Switch/n3.jpg";
import Nft6 from "./img/Switch/n6.jpg";
import Nft7 from "./img/Switch/n7.jpg";
import Nft8 from "./img/Switch/n8.jpg";
import SideBar from "./SideBar";
import SwitchLg from "./img/Switch/switch.jpg";

function FavoritesBody() {
  return (
    <div>
      <div className="container mb-5 pb-3">
        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
          <div className="row">
            {/* <!-- Sidebar--> */}
            <SideBar />
            {/* <!-- Content--> */}
            <section className="col-lg-9 pt-lg-4 pb-4 mb-3">
              <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <h1 className="h3 mb-4 pb-2 text-sm-start text-center">
                  Favorites
                </h1>
                {/* <!-- Items grid--> */}
                <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3 gx-3 mb-4">
                  {/* <!-- Product--> */}
                  <div className="col mb-2">
                    <article className="card h-100 border-0 shadow">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a
                          className="d-block"
                          href="nft-single-auction-live.html"
                        >
                          <img src={Nft3} alt="Product image" />
                        </a>
                        {/* <!-- Countdown timer--> */}
                        <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                          <i className="ci-time me-1"></i>
                          <div
                            className="countdown d-inline"
                            data-countdown="12/31/2022 12:00:00 PM"
                          >
                            <span className="countdown-hours mb-0 me-0">
                              <span className="countdown-value">0</span>
                              <span className="countdown-label fs-lg">:</span>
                            </span>
                            <span className="countdown-minutes mb-0 me-0">
                              <span className="countdown-value">0</span>
                              <span className="countdown-label fs-lg">:</span>
                            </span>
                            <span className="countdown-seconds mb-0 me-0">
                              <span className="countdown-value">0</span>
                            </span>
                          </div>
                        </div>
                        {/* <!-- Wishlist button--> */}
                        <button
                          className="btn-wishlist btn-sm position-absolute top-0 end-0"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Add to Favorites"
                          style={{ margin: "12px" }}
                        >
                          <i className="ci-heart"></i>
                        </button>
                      </div>
                      <div className="card-body">
                        <h3 className="product-title mb-2 fs-base">
                          <a
                            className="d-block text-truncate"
                            href="nft-single-auction-live.html"
                          >
                            Switch Project 3
                          </a>
                        </h3>
                        <span className="fs-sm text-muted">Current bid:</span>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.156 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 595.76)
                          </span>
                        </div>
                      </div>
                      <div className="card-footer mt-n1 py-0 border-0">
                        <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                          <img
                            className="me-2 rounded-circle"
                            src={SwitchLg}
                            width="32"
                            alt="Avatar"
                          />
                          <a
                            className="nav-link-style fs-sm stretched-link"
                            href="projectDeveloper.html"
                          >
                            @Switch Electric
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* <!-- Product--> */}
                  <div className="col mb-2">
                    <article className="card h-100 border-0 shadow">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a className="d-block" href="nft-single-buy.html">
                          <img src={Nft6} alt="Product image" />
                        </a>
                        {/* <!-- Wishlist button--> */}
                        <button
                          className="btn-wishlist btn-sm position-absolute top-0 end-0"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Add to Favorites"
                          style={{ margin: "12px" }}
                        >
                          <i className="ci-heart"></i>
                        </button>
                      </div>
                      <div className="card-body">
                        <h3 className="product-title mb-2 fs-base">
                          <a
                            className="d-block text-truncate"
                            href="nft-single-auction-live.html"
                          >
                            Switch Project 6
                          </a>
                        </h3>
                        <span className="fs-sm text-muted">Reserve price:</span>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.6 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 2,400.65)
                          </span>
                        </div>
                      </div>
                      <div className="card-footer mt-n1 py-0 border-0">
                        <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                          <img
                            className="me-2 rounded-circle"
                            src={SwitchLg}
                            width="32"
                            alt="Avatar"
                          />
                          <a
                            className="nav-link-style fs-sm stretched-link"
                            href="projectDeveloper.html"
                          >
                            @Switch Electric
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* <!-- Product--> */}
                  <div className="col mb-2">
                    <article className="card h-100 border-0 shadow">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a className="d-block" href="nft-single-buy.html">
                          <img src={Nft7} alt="Product image" />
                        </a>
                        {/* <!-- Wishlist button--> */}
                        <button
                          className="btn-wishlist btn-sm position-absolute top-0 end-0"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Add to Favorites"
                          style={{ margin: "12px" }}
                        >
                          <i className="ci-heart"></i>
                        </button>
                      </div>
                      <div className="card-body">
                        <h3 className="product-title mb-2 fs-base">
                          <a
                            className="d-block text-truncate"
                            href="nft-single-auction-live.html"
                          >
                            Switch Project 7
                          </a>
                        </h3>
                        <span className="fs-sm text-muted">Reserve price:</span>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.1 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 400.19)
                          </span>
                        </div>
                      </div>
                      <div className="card-footer mt-n1 py-0 border-0">
                        <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                          <img
                            className="me-2 rounded-circle"
                            src={SwitchLg}
                            width="32"
                            alt="Avatar"
                          />
                          <a
                            className="nav-link-style fs-sm stretched-link"
                            href="projectDeveloper.html"
                          >
                            @Switch Electric
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* <!-- Product--> */}
                  <div className="col mb-2">
                    <article className="card h-100 border-0 shadow">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a
                          className="d-block"
                          href="nft-single-auction-live.html"
                        >
                          <img src={Nft8} alt="Product image" />
                        </a>
                        {/* <!-- Wishlist button--> */}
                        <button
                          className="btn-wishlist btn-sm position-absolute top-0 end-0"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Add to Favorites"
                          style={{ margin: "12px" }}
                        >
                          <i className="ci-heart"></i>
                        </button>
                      </div>
                      <div className="card-body">
                        <h3 className="product-title mb-2 fs-base">
                          <a
                            className="d-block text-truncate"
                            href="nft-single-auction-live.html"
                          >
                            Switch Project 8
                          </a>
                        </h3>
                        <span className="fs-sm text-muted">Current bid:</span>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.156 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 595.76)
                          </span>
                        </div>
                      </div>
                      <div className="card-footer mt-n1 py-0 border-0">
                        <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                          <img
                            className="me-2 rounded-circle"
                            src={SwitchLg}
                            width="32"
                            alt="Avatar"
                          />
                          <a
                            className="nav-link-style fs-sm stretched-link"
                            href="projectDeveloper.html"
                          >
                            @Switch Electric
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <button className="btn btn-outline-danger">
                  <i className="ci-trash me-2"></i>Delete all
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesBody;