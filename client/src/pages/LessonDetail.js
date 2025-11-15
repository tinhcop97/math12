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
        },
        "Ôn tập cuối năm": {
            1: {
                title: "Ôn tập giải tích",
                content: "Tổng hợp kiến thức giải tích 12: Khảo sát hàm số, hàm mũ - logarit, nguyên hàm - tích phân.",
                examples: [],
                formulas: []
            },
            2: {
                title: "Ôn tập hình học",
                content: "Tổng hợp kiến thức hình học 12: Khối đa diện, mặt cầu, mặt nón, mặt trụ, tọa độ trong không gian.",
                examples: [],
                formulas: []
            },
            3: {
                title: "Đề thi THPT Quốc Gia năm 2024",
                content: "Đề thi chính thức kỳ thi THPT Quốc Gia năm 2024 - Môn Toán",
                examples: [
                    "<strong>Câu 1:</strong> Cho hàm số \\(y = f(x)\\) có đạo hàm \\(f'(x) = x^2(x-1)(x+2)\\). Hàm số đã cho đồng biến trên khoảng nào?",
                    "<strong>Câu 2:</strong> Tính tích phân \\(I = \\int_0^1 x e^{x^2} dx\\)",
                    "<strong>Câu 3:</strong> Trong không gian \\(Oxyz\\), cho mặt phẳng \\((P): 2x - y + 3z - 5 = 0\\). Véctơ nào sau đây là véctơ pháp tuyến của \\((P)\\)?",
                    "<strong>Câu 4:</strong> Tìm giá trị lớn nhất của hàm số \\(y = x^3 - 3x^2 + 2\\) trên đoạn \\([0; 3]\\)"
                ],
                formulas: [
                    "<a href='#' class='text-primary'>📄 Download đề thi năm 2024 (PDF)</a>",
                    "<a href='#' class='text-primary'>📄 Download đáp án chi tiết năm 2024 (PDF)</a>"
                ]
            },
            4: {
                title: "Đề thi THPT Quốc Gia năm 2023",
                content: "Đề thi chính thức kỳ thi THPT Quốc Gia năm 2023 - Môn Toán",
                examples: [
                    "<strong>Câu 1:</strong> Cho hàm số \\(y = \\frac{2x-1}{x+1}\\). Tiệm cận ngang của đồ thị hàm số là?",
                    "<strong>Câu 2:</strong> Tính đạo hàm của hàm số \\(y = \\ln(x^2 + 1)\\)",
                    "<strong>Câu 3:</strong> Thể tích khối lăng trụ có diện tích đáy \\(S = 10\\) và chiều cao \\(h = 6\\) là?",
                    "<strong>Câu 4:</strong> Giải phương trình \\(2^{x+1} = 8\\)"
                ],
                formulas: [
                    "<a href='#' class='text-primary'>📄 Download đề thi năm 2023 (PDF)</a>",
                    "<a href='#' class='text-primary'>📄 Download đáp án chi tiết năm 2023 (PDF)</a>"
                ]
            },
            5: {
                title: "Đề thi THPT Quốc Gia năm 2022",
                content: "Đề thi chính thức kỳ thi THPT Quốc Gia năm 2022 - Môn Toán",
                examples: [
                    "<strong>Câu 1:</strong> Tìm tập xác định của hàm số \\(y = \\sqrt{4-x^2}\\)",
                    "<strong>Câu 2:</strong> Cho số phức \\(z = 3 + 4i\\). Tính môđun của \\(z\\)",
                    "<strong>Câu 3:</strong> Tính nguyên hàm \\(\\int \\cos(2x) dx\\)",
                    "<strong>Câu 4:</strong> Trong không gian, cho hai điểm \\(A(1;2;3)\\) và \\(B(4;5;6)\\). Tính khoảng cách \\(AB\\)"
                ],
                formulas: [
                    "<a href='#' class='text-primary'>📄 Download đề thi năm 2022 (PDF)</a>",
                    "<a href='#' class='text-primary'>📄 Download đáp án chi tiết năm 2022 (PDF)</a>"
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