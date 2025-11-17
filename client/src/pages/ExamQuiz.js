import { useState, useEffect } from 'react';
import { Container, Card, Button, Form, Alert, ProgressBar } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { examQuestions } from '../data/exams';

const ExamQuiz = () => {
  const { year, examId } = useParams();
  const navigate = useNavigate();

  const questions = examQuestions[examId] || [];
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Retypeset MathJax khi component mount
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise().catch(err => console.error('MathJax error:', err));
    }
  }, [questions, showResults]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const handleSubmit = () => {
    let totalScore = 0;

    questions.forEach((q) => {
      if (q.type === 'true-false') {
        // Phần II: Chấm theo số ý đúng
        let correctStatementsCount = 0;
        q.statements.forEach(statement => {
          const statementId = `${q.id}-${statement.id}`;
          const userAnswer = answers[statementId];
          if (userAnswer === statement.correct) {
            correctStatementsCount++;
          }
        });

        // Tính điểm theo số ý đúng: 1 ý = 0.1đ, 2 ý = 0.25đ, 3 ý = 0.5đ, 4 ý = 1đ
        if (correctStatementsCount === 1) totalScore += 0.1;
        else if (correctStatementsCount === 2) totalScore += 0.25;
        else if (correctStatementsCount === 3) totalScore += 0.5;
        else if (correctStatementsCount === 4) totalScore += 1;

      } else if (q.type === 'fill-in') {
        // Phần III: Mỗi câu đúng = 0.5 điểm
        if (parseFloat(answers[q.id]) == q.correctAnswer) {
          totalScore += 0.5;
        }
      } else {
        // Phần I: Mỗi câu đúng = 0.25 điểm
        if (answers[q.id] === q.correctAnswer) {
          totalScore += 0.25;
        }
      }
    });

    setScore(totalScore);
    setShowResults(true);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Retypeset MathJax after showing results
    setTimeout(() => {
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      }
    }, 100);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  // Tính số câu đã trả lời
  const answeredCount = questions.filter(q => {
    if (q.type === 'true-false') {
      // Kiểm tra xem đã trả lời hết 4 ý chưa
      return q.statements.every(statement => {
        const statementId = `${q.id}-${statement.id}`;
        return answers[statementId] !== undefined;
      });
    } else {
      // Câu trắc nghiệm thông thường
      return answers[q.id] !== undefined;
    }
  }).length;
  const progress = (answeredCount / questions.length) * 100;

  return (
    <Container className="mt-4 mb-5">
      <Button variant="outline-primary" onClick={() => navigate(`/exams/${year}`)} className="mb-3">
        ← Quay lại danh sách mã đề
      </Button>

      <h3 className="text-center mb-4">Mã đề: {examId.replace('_', ' - ')}</h3>

      {showResults && (
        <Alert variant={score >= 5 ? 'success' : 'warning'} className="text-center">
          <h4>Điểm: {score.toFixed(2)}/10</h4>
          <p className="mb-0">Tổng điểm tối đa: 10 điểm</p>
          <small className="text-muted">
            (Phần I: 12 câu × 0.25đ = 3đ | Phần II: 4 câu × 1đ = 4đ | Phần III: 6 câu × 0.5đ = 3đ)
          </small>
          <div className="mt-3">
            <Button variant="primary" onClick={resetQuiz}>Làm lại</Button>
          </div>
        </Alert>
      )}

      {!showResults && (
        <div className="mb-4">
          <p className="text-muted">Đã trả lời: {answeredCount}/{questions.length} câu</p>
          <ProgressBar now={progress} label={`${Math.round(progress)}%`} />
        </div>
      )}

      {questions.length === 0 ? (
        <Alert variant="info">
          Nội dung đề thi đang được cập nhật...
        </Alert>
      ) : (
        questions.map((q, index) => (
          <div key={q.id}>
            {index === 0 && (
              <Alert variant="primary" className="mb-4">
                <strong>PHẦN I.</strong> Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu hỏi thí sinh chỉ chọn 1 phương án.
              </Alert>
            )}
            {index === 12 && (
              <Alert variant="primary" className="mb-4 mt-4">
                <strong>PHẦN II.</strong> Thí sinh trả lời từ câu 1 đến 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.
              </Alert>
            )}
            {index === 16 && (
              <Alert variant="primary" className="mb-4 mt-4">
                <strong>PHẦN III.</strong> Thí sinh trả lời từ câu 1 đến câu 6.
              </Alert>
            )}
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <h5 className="mb-3">
                  Câu {index + 1}:
                </h5>
                <div
                  className="mb-3"
                  dangerouslySetInnerHTML={{ __html: q.question }}
                />

              {q.type === 'true-false' ? (
                // Hiển thị dạng Đúng/Sai
                <div>
                  {q.statements.map((statement, idx) => {
                    const statementId = `${q.id}-${statement.id}`;
                    const userAnswer = answers[statementId];
                    const isCorrectAnswer = statement.correct;

                    let variant = '';
                    if (showResults) {
                      if ((userAnswer === true && isCorrectAnswer) || (userAnswer === false && !isCorrectAnswer)) {
                        variant = 'success';
                      } else if (userAnswer !== undefined) {
                        variant = 'danger';
                      }
                    }

                    return (
                      <div key={idx} className={`mb-3 p-3 border rounded ${variant ? `bg-${variant} bg-opacity-10` : ''}`}>
                        <div className="mb-2">
                          <strong>{statement.id})</strong> <span dangerouslySetInnerHTML={{ __html: statement.text }} />
                        </div>
                        <div className="d-flex gap-3">
                          <Form.Check
                            type="radio"
                            id={`${statementId}-true`}
                            name={`statement-${statementId}`}
                            label="Đúng"
                            checked={userAnswer === true}
                            onChange={() => handleAnswerChange(statementId, true)}
                            disabled={showResults}
                          />
                          <Form.Check
                            type="radio"
                            id={`${statementId}-false`}
                            name={`statement-${statementId}`}
                            label="Sai"
                            checked={userAnswer === false}
                            onChange={() => handleAnswerChange(statementId, false)}
                            disabled={showResults}
                          />
                        </div>
                        {showResults && (
                          <div className="mt-2 text-muted small">
                            <div dangerouslySetInnerHTML={{ __html: statement.explanation }} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : q.type === 'fill-in' ? (
                // Hiển thị dạng Tự luận - nhập số
                <div>
                  <Form.Group className="mb-3">
                    <Form.Label>Nhập đáp án của bạn:</Form.Label>
                    <Form.Control
                      type="number"
                      step="any"
                      placeholder="Ví dụ: 1234 hoặc 12.34"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      disabled={showResults}
                      style={{ maxWidth: '300px' }}
                    />
                    <Form.Text className="text-muted">
                      Dùng dấu chấm (.) cho số thập phân
                    </Form.Text>
                  </Form.Group>
                  {showResults && (
                    <Alert variant={answers[q.id] == q.correctAnswer ? 'success' : 'danger'}>
                      <strong>Đáp án đúng:</strong> {q.correctAnswer}
                      {answers[q.id] != q.correctAnswer && (
                        <div className="mt-2">
                          <strong>Đáp án của bạn:</strong> {answers[q.id] || '(Chưa trả lời)'}
                        </div>
                      )}
                    </Alert>
                  )}
                </div>
              ) : (
                // Hiển thị dạng trắc nghiệm thông thường
                <Form>
                  {q.options.map((option, idx) => {
                    const optionLetter = option.charAt(0);
                    const isCorrect = optionLetter === q.correctAnswer;
                    const isSelected = answers[q.id] === optionLetter;

                    let variant = '';
                    if (showResults) {
                      if (isCorrect) {
                        variant = 'success';
                      } else if (isSelected && !isCorrect) {
                        variant = 'danger';
                      }
                    }

                    return (
                      <div
                        key={idx}
                        className={`p-2 mb-2 rounded ${variant ? `bg-${variant} bg-opacity-10` : ''}`}
                      >
                        <Form.Check
                          type="radio"
                          id={`q${q.id}-${idx}`}
                          name={`question-${q.id}`}
                          label={<span dangerouslySetInnerHTML={{ __html: option }} />}
                          checked={isSelected}
                          onChange={() => handleAnswerChange(q.id, optionLetter)}
                          disabled={showResults}
                        />
                      </div>
                    );
                  })}
                </Form>
              )}

              {showResults && q.explanation && (
                <Alert variant="info" className="mt-3">
                  <strong>Giải thích:</strong>
                  <div dangerouslySetInnerHTML={{ __html: q.explanation }} />
                </Alert>
              )}
            </Card.Body>
          </Card>
          </div>
        ))
      )}

      {questions.length > 0 && !showResults && (
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={answeredCount < questions.length}
          >
            {answeredCount < questions.length
              ? `Còn ${questions.length - answeredCount} câu chưa trả lời`
              : 'Nộp bài'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ExamQuiz;
