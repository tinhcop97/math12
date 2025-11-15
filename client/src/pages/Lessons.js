import React from 'react';
import { Container, ListGroup, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Lessons = () => {
    const navigate = useNavigate();

    const chapters = {
        "Giải tích 12": [
            "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
            "Hàm số lũy thừa",
            "Hàm số mũ và hàm số logarit",
            "Phương trình mũ và phương trình logarit",
            "Bất phương trình mũ và bất phương trình logarit",
            "Nguyên hàm",
            "Tích phân",
            "Ứng dụng tích phân để tính diện tích và thể tích"
        ],
        "Hình học 12": [
            "Khối đa diện - hình chóp và hình lăng trụ",
            "Thể tích khối đa diện",
            "Mặt cầu, mặt nón, mặt trụ",
            "Phương pháp tọa độ trong không gian",
            "Phương trình mặt phẳng",
            "Phương trình đường thẳng trong không gian",
            "Khoảng cách trong không gian",
            "Góc giữa hai đường thẳng, đường thẳng và mặt phẳng"
        ],
        "Ôn tập cuối năm": [
            "Ôn tập giải tích",
            "Ôn tập hình học",
            "Các chuyên đề luyện thi THPT Quốc Gia"
        ]
    };

    const handleLessonClick = (subject, lessonIndex) => {
        navigate(`/lessons/${encodeURIComponent(subject)}/${lessonIndex}`);
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Danh mục bài giảng</h2>
            {Object.entries(chapters).map(([subject, lessons]) => (
                <Card key={subject} className="mb-4">
                    <Card.Header as="h5" className="bg-primary text-white">
                        {subject}
                    </Card.Header>
                    <ListGroup variant="flush">
                        {lessons.map((lesson, index) => (
                            <ListGroup.Item
                                key={index}
                                action
                                onClick={() => handleLessonClick(subject, index + 1)}
                            >
                                Bài {index + 1}: {lesson}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            ))}
        </Container>
    );
};

export default Lessons;