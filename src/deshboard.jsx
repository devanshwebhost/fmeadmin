import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Register Chart.js components
Chart.register(...registerables);

const Dashboard = () => {
  // Chart Data
  const data = {
    labels: ["24", "25", "26", "27", "28", "29", "30", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
    datasets: [
      {
        label: "Sessions",
        data: [3, 5, 2, 4, 6, 5, 8, 7, 9, 6, 5, 4, 3, 6, 7, 5],
        fill: true,
        borderColor: "#42a5f5",
        tension: 0.1,
      },
    ],
  };

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>5 Users</Card.Title>
              <Card.Link href="#">Show Users</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>2 Rooms</Card.Title>
              <Card.Link href="#">Show Rooms</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>1095 Sessions</Card.Title>
              <Card.Link href="#">Show Sessions</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>408:34 Session Time</Card.Title>
              <Card.Link href="#">Show Sessions</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Sessions in Last 30 Days</Card.Title>
              <Line data={data} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
