import React from "react";
import { Breadcrumb, Button, Card } from "react-bootstrap";
import ProfileNavbar from "../Navbar/ProfileNavbar";

function WinningList() {
  return (
    <div className="MyAccount">
      <div className="container">
        <div className="WinningBidsTab">
          <div className="Breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>&#8594;
              <Breadcrumb.Item href="#">My Account</Breadcrumb.Item>&#8594;
              <Breadcrumb.Item active>Winning Bids</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <ProfileNavbar/>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
              <div className="rightMenu">
                <div className="mybidSection winbidSection">
                  <h4>Winning Bids</h4>
                  <form>
                    <div class="input-group">
                      <div class="form-outline">
                        <input
                          type="search"
                          id="form1"
                          placeholder="Search"
                          class="form-control"
                        />
                      </div>
                      <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mybidSection-content">
                  <div className="tab-content">
                    <div id="home" className="container tab-pane active">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_one.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 1</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_two.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 2</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_three.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 3</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_four.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 4</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_five.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 1</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_six.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 2</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </div>
                    <div id="menu1" className="container tab-pane fade">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_seven.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 3</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_eight.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 4</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_six.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 2</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_six.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 2</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_six.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 2</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_six.jpg" />
                            <Card.Body>
                              <Card.Title>Heading 2</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Card.Text>
                              <div className="Cardbidbtn">
                                <span>250 Bids</span>
                                <Button className="Bidbtn">Submit a Bid</Button>
                              </div>
                            </Card.Body>
                            <div className="cardRate">
                              <span>&#8377;200</span>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinningList;
