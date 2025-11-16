import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { examCodes, examYears } from '../data/exams';

const ExamCodes = () => {
  const { year } = useParams();
  const navigate = useNavigate();

  const examInfo = examYears.find(e => e.year === parseInt(year));
  const codes = examCodes[year] || [];

  return (
    <Container className="mt-4">
      <Button variant="outline-primary" onClick={() => navigate('/exams')} className="mb-3">
        ← Quay lại danh sách năm
      </Button>

      <h2 className="text-center mb-4">{examInfo?.title}</h2>
      <p className="text-center text-muted mb-4">
        Chọn mã đề để xem chi tiết câu hỏi
      </p>

      <Row>
        {codes.map((item) => (
          <Col xs={6} md={4} lg={3} key={item.id} className="mb-3">
            <Card
              className="text-center shadow-sm"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/exams/${year}/${item.id}`)}
            >
              <Card.Body>
                <h5 className="text-primary mb-0">Mã {item.code}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExamCodes;
