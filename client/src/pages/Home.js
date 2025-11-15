import { useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const featuredLessons = [
        { title: 'Khảo sát hàm số', description: 'Các dạng bài cơ bản về khảo sát và vẽ đồ thị hàm số' },
        { title: 'Hàm số mũ - Logarit', description: 'Phương trình, bất phương trình mũ và logarit' },
        { title: 'Nguyên hàm - Tích phân', description: 'Các phương pháp tính nguyên hàm và tích phân' }
    ];

    // Math formulas
    const mathFormulas = [
        { label: "Phương trình bậc 2:", formula: "\\(ax^2 + bx + c = 0\\)" },
        { label: "Đạo hàm:", formula: "\\[\\frac{dy}{dx} = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}\\]" },
        { label: "Tích phân:", formula: "\\[\\int_a^b f(x)dx = F(b) - F(a)\\]" },
        { label: "Số phức:", formula: "\\[z = a + bi\\]" }
    ];

    useEffect(() => {
        // Typeset math formulas when component mounts
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise().catch((err) => console.error('MathJax error:', err));
        }
    }, []);

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Chào mừng đến với Toán lớp 12</h1>

            <Row className="mb-5">
                <Col md={8} className="mx-auto">
                    <div className="p-4 bg-light rounded">
                        <h4 className="text-center mb-3">Hệ thống học tập toàn diện</h4>
                        <p className="text-center">
                            Cung cấp đầy đủ kiến thức, bài tập và đề thi môn Toán lớp 12
                        </p>
                    </div>
                </Col>
            </Row>

            <h3 className="mb-4">Bài học nổi bật</h3>
            <Row>
                {featuredLessons.map((lesson, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{lesson.title}</Card.Title>
                                <Card.Text>{lesson.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="mt-5 p-4 bg-light rounded">
                <h4>Ví dụ công thức toán</h4>
                {mathFormulas.map((item, index) => (
                    <div key={index} className="mb-3">
                        <strong>{item.label}</strong>
                        <div dangerouslySetInnerHTML={{ __html: item.formula }} />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Home;