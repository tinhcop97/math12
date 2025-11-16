import { Container, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { examYears } from '../data/exams';

const ExamList = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Đề thi THPT Quốc Gia</h2>
      <Row>
        {examYears.map((exam) => (
          <Col md={6} lg={4} key={exam.year} className="mb-4">
            <Card
              className="h-100 shadow-sm"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/exams/${exam.year}`)}
            >
              <Card.Body className="text-center">
                <h3 className="text-primary">{exam.year}</h3>
                <Card.Text>{exam.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExamList;
