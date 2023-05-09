import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productList } from "../redux/action/ProductListAction";
import { useDispatch, useSelector } from "react-redux";
import { submitBid } from "../redux/action/bidList";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const ProductList = () => {
  //SEARCHING ID FOR PLACING BID
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const id = search.get("id");

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
  const [isOpen, setIsOpen] = useState(false);
  const openModal = (id) => {
    setIsOpen(true);
    navigate(`/buy?id=${id}`);
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
          <div className="Cardinfo-Wrapper text-center">
            <span>AUCTIONS</span>
            <h4>
              Current <span>Auctions</span>
            </h4>
            <div className="Cardcontent-Wrapper">
              <Container>
                <Row>
                  {productlist &&
                    productlist.map((product) => {
                      const { _id, name, description, location, price, image,expireBid } =
                        product;
                      return (
                        <Col
                          className="col-lg-3 col-md-3 col-sm-6 col-12"
                          key={product._id}
                        >
                          <Card>
                            <Card.Img src={image} width={"550px"} />
                            <Card.Body>
                              <Card.Title> {name}</Card.Title>
                              <Card.Text>{description}</Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button
                                  className="Bidbtn"
                                  onClick={() => openModal(_id)}
                                >
                                  Submit a Bid
                                </Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;{price}</span>
                            </div>
                          </Card>
                        </Col>
                      );
                    })}

                  {/* MODAL FOR PLACING BIDS */}
                  <Modal show={isOpen}>
                    <Modal.Header style={{ justifyContent: "center" }}>
                      <form>
                        <div className="form-control">
                          <label>My Bid</label>
                          <input
                            type="text"
                            name="my_bid"
                            value={myBid.my_bid}
                            onChange={(e) => handleChange(e)}
                          />
                          <button
                            type="button"
                            className="Bidbtn mt-5"
                            style={{ alignContent: "center" }}
                            onClick={() => onSubmit(id)}
                          >
                            Place Bid
                          </button>
                        </div>
                      </form>
                      <h1>Place a bid</h1>
                    </Modal.Header>
                  </Modal>
                </Row>
              </Container>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
