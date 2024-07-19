// src/pages/Payment.jsx
import React from "react";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import newImage from '../assets/new-image.jpg';

const Payment = () => {
  return (
    <Container className="py-5">
      <div className="text-center">
        {/* <img
          className="d-block mx-auto mb-4"
          src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        /> */}
        {/* <img src={newImage} alt="Description de l'image" width="72" height="72" /> */}
        <h2>Page de paiement</h2>
        <p className="lead">
        Vous êtes presque prêt à finaliser votre commande ! Veuillez compléter les informations nécessaires et confirmer votre paiement pour finaliser votre achat. 
        Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter.
        </p>
      </div>

      <Row>
        <Col md={4} className="order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ListGroup className="mb-3">
            <ListGroup.Item className="d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$12</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </ListGroup.Item>
          </ListGroup>
          <Form className="card p-2">
            <div className="input-group">
              <Form.Control type="text" placeholder="Promo code" />
              <div className="input-group-append">
                <Button type="submit" variant="secondary">
                  Redeem
                </Button>
              </div>
            </div>
          </Form>
        </Col>
        <Col md={8} className="order-md-1">
          <h4 className="mb-3">Adresse de paiement</h4>
          <Form className="needs-validation" noValidate>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label htmlFor="firstName">First name</Form.Label>
                <Form.Control type="text" id="firstName" placeholder="" required />
                <div className="invalid-feedback">Valid first name is required.</div>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label htmlFor="lastName">Last name</Form.Label>
                <Form.Control type="text" id="lastName" placeholder="" required />
                <div className="invalid-feedback">Valid last name is required.</div>
              </Col>
            </Row>

            <div className="mb-3">
              <Form.Label htmlFor="username">Username</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <Form.Control type="text" id="username" placeholder="Username" required />
                <div className="invalid-feedback" style={{ width: "100%" }}>
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <Form.Label htmlFor="email">
                Email <span className="text-muted">(Optional)</span>
              </Form.Label>
              <Form.Control type="email" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
            </div>

            <div className="mb-3">
              <Form.Label htmlFor="address">Address</Form.Label>
              <Form.Control type="text" id="address" placeholder="1234 Main St" required />
              <div className="invalid-feedback">Please enter your shipping address.</div>
            </div>

            <div className="mb-3">
              <Form.Label htmlFor="address2">
                Address 2 <span className="text-muted">(Optional)</span>
              </Form.Label>
              <Form.Control type="text" id="address2" placeholder="Apartment or suite" />
            </div>

            <Row>
              <Col md={5} className="mb-3">
                <Form.Label htmlFor="country">Country</Form.Label>
                <Form.Control as="select" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </Form.Control>
                <div className="invalid-feedback">Please select a valid country.</div>
              </Col>
              <Col md={4} className="mb-3">
                <Form.Label htmlFor="state">State</Form.Label>
                <Form.Control as="select" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </Form.Control>
                <div className="invalid-feedback">Please provide a valid state.</div>
              </Col>
              <Col md={3} className="mb-3">
                <Form.Label htmlFor="zip">Zip</Form.Label>
                <Form.Control type="text" id="zip" placeholder="" required />
                <div className="invalid-feedback">Zip code required.</div>
              </Col>
            </Row>
            <hr className="mb-4" />
            <div className="custom-control custom-checkbox">
              <Form.Check
                type="checkbox"
                className="custom-control-input"
                id="same-address"
                label="Shipping address is the same as my billing address"
              />
            </div>
            <div className="custom-control custom-checkbox">
              <Form.Check
                type="checkbox"
                className="custom-control-input"
                id="save-info"
                label="Save this information for next time"
              />
            </div>
            <hr className="mb-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
              <Form.Check
                type="radio"
                className="custom-control-input"
                id="credit"
                name="paymentMethod"
                checked
                required
                label="Credit card"
              />
              <Form.Check
                type="radio"
                className="custom-control-input"
                id="debit"
                name="paymentMethod"
                required
                label="Debit card"
              />
              <Form.Check
                type="radio"
                className="custom-control-input"
                id="paypal"
                name="paymentMethod"
                required
                label="Paypal"
              />
            </div>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label htmlFor="cc-name">Name on card</Form.Label>
                <Form.Control type="text" id="cc-name" placeholder="" required />
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">Name on card is required</div>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label htmlFor="cc-number">Credit card number</Form.Label>
                <Form.Control type="text" id="cc-number" placeholder="" required />
                <div className="invalid-feedback">Credit card number is required</div>
              </Col>
            </Row>
            <Row>
              <Col md={3} className="mb-3">
                <Form.Label htmlFor="cc-expiration">Expiration</Form.Label>
                <Form.Control type="text" id="cc-expiration" placeholder="" required />
                <div className="invalid-feedback">Expiration date required</div>
              </Col>
              <Col md={3} className="mb-3">
                <Form.Label htmlFor="cc-cvv">CVV</Form.Label>
                <Form.Control type="text" id="cc-cvv" placeholder="" required />
                <div className="invalid-feedback">Security code required</div>
              </Col>
            </Row>
            <hr className="mb-4" />
            <Button className="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </Button>
          </Form>
        </Col>
      </Row>

    </Container>
  );
};

export default Payment;
