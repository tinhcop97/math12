import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';

const LessonDetail = () => {
    const { subjectId, lessonId } = useParams();

    // Dữ liệu mẫu - có thể thay thế bằng API thực tế sau
    const lessonData = {
        "Giải tích 12": {
            1: {
                title: "Ứng dụng đạo hàm",
                content: "Khảo sát sự biến thiên và vẽ đồ thị hàm số. Một hàm số \\(f(x)\\) được gọi là đồng biến trên khoảng \\((a,b)\\) khi \\(f'(x) > 0\\) với mọi \\(x \\in (a,b)\\).",
                examples: [
                    "Xét tính đơn điệu hàm số \\(y = x³ - 3x² + 2\\)",
                    "Tìm cực trị hàm số \\(y = x⁴ - 2x² + 1\\)"
                ],
                formulas: [
                    "Đạo hàm của hàm số \\(f(x) = x^n\\) là \\(f'(x) = nx^{n-1}\\)",
                    "Điều kiện để \\(f(x)\\) đạt cực trị tại \\(x = x_0\\) là \\(f'(x_0) = 0\\) và \\(f''(x_0) \\neq 0\\)"
                ]
            }
        },
        "Hình học 12": {
            1: {
                title: "Khối đa diện",
                content: "Các khái niệm về hình chóp, hình lăng trụ. Thể tích của hình chóp được tính bằng công thức \\(V = \\frac{1}{3}Sh\\), trong đó \\(S\\) là diện tích đáy và \\(h\\) là chiều cao.",
                examples: [
                    "Tính thể tích hình chóp tứ giác đều có cạnh đáy \\(a\\) và chiều cao \\(h\\): \\(V = \\frac{1}{3}a^2h\\)",
                    "Nhận dạng các loại lăng trụ"
                ],
                formulas: [
                    "Thể tích hình lăng trụ: \\(V = Sh\\), trong đó \\(S\\) là diện tích đáy và \\(h\\) là chiều cao",
                    "Diện tích toàn phần của hình chóp: \\(S_{tp} = S_{đáy} + S_{xq}\\)"
                ]
            }
        }
    };

    const lesson = lessonData[decodeURIComponent(subjectId)]?.[lessonId] || {
        title: `Bài ${lessonId}`,
        content: "Nội dung đang được cập nhật",
        examples: [],
        formulas: []
    };

    // Helper function to safely render math content
    const renderMathContent = (content) => {
        if (!content) return null;
        return <div className="math-content" dangerouslySetInnerHTML={{ __html: content }} />;
    };

    return (
        <Container className="mt-4">
            <Button variant="outline-primary" onClick={() => window.history.back()} className="mb-3">
                ← Quay lại danh sách bài học
            </Button>

            <Card className="shadow-sm">
                <Card.Header className="bg-primary text-white">
                    <h4>{decodeURIComponent(subjectId)} - {lesson.title}</h4>
                </Card.Header>
                <Card.Body>
                    <div className="lesson-content mb-4">
                        {renderMathContent(lesson.content)}
                    </div>

                    {lesson.examples.length > 0 && (
                        <div className="examples-section mb-4">
                            <h5 className="mb-3">Ví dụ minh họa</h5>
                            <ListGroup variant="flush">
                                {lesson.examples.map((example, idx) => (
                                    <ListGroup.Item key={idx}>
                                        {renderMathContent(example)}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    )}
                    
                    {lesson.formulas && lesson.formulas.length > 0 && (
                        <div className="formulas-section">
                            <h5 className="mb-3">Công thức quan trọng</h5>
                            <ListGroup variant="flush">
                                {lesson.formulas.map((formula, idx) => (
                                    <ListGroup.Item key={idx}>
                                        {renderMathContent(formula)}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default LessonDetail;