import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productList } from "../redux/action/ProductListAction";
import { useDispatch, useSelector } from "react-redux";
import { submitBid } from "../redux/action/bidList";
import {  useNavigate } from "react-router-dom";

const ProductList = () => {
  //REDUX STATE FOR PRODUCT LIST
  const productlist = useSelector(
    (state) => state.productList?.product?.products
  );
  //LOADER STATE
  const loading = useSelector((state) => state.apiIsLoading.loading);

  //LOCAL STATE FOR BID
  const bidDetails = {
    my_bid: "",
  };
  const [myBid, setMyBid] = useState(bidDetails);
  const dispatch = useDispatch();

  //FUNCTION FOR FETCHING PRODUCT LIST
  useEffect(() => {
    dispatch(productList());
    // .then((resp=>console.log("reso",resp)))
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyBid({ ...myBid, [name]: value });
  };
  const navigate = useNavigate();

  //MODAL FOR PLACING BIDS
  const openModal = (id) => {
    navigate(`/buy/product?id=${id}`);
  };

  //FUNCTION FOR PLACING BIDS
  const onSubmit = (id) => {
    dispatch(submitBid(id, myBid));
  };
  return (
    <>
      <div className="CardSection mt-5">
        {loading ? (
          <div className="loader">
            <img src="/images/loading.png" alt="loading" width={"100px"} />
          </div>
        ) : (
          <>
            <div className="Cardinfo-Wrapper text-center">
              <span>AUCTIONS</span>
              <h4>
                Current <span>Auctions</span>
              </h4>
            </div>
            <div className="Cardcontent-Wrapper">
              <Container>
                <Row>
                  {productlist &&
                    productlist.map((product) => {
                      const {
                        _id,
                        name,
                        description,
                        location,
                        price,
                        image,
                        expireBid,
                      } = product;
                      // const times = expireBid.toTimeString()
                      // const hours = expireBid.getHours()
                      // const minutes = expireBid.getMinutes()
                      // const seconds = expireBid.getSeconds()
                      return (
                        <Col
                          className="col-lg-3 col-md-6 col-sm-6 col-12"
                          key={product._id}
                        >
                          <Card>
                            <Card.Img src={image} width={"550px"} />
                            <Card.Body>
                              <h4 className="card-title">{name}</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i className="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  {/* {times} */}
                                  {/* {hours}hrs:{minutes}min:{seconds}sec */}
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>{description.slice(0,110)}...</span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;{price}</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button
                                    className="Bidbtn"
                                    onClick={() => openModal(_id)}
                                  >
                                    Submit a Bid
                                  </Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </Container>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductList;
