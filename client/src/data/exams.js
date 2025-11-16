// Dữ liệu đề thi THPT Quốc Gia
export const examYears = [
  { year: 2025, title: "Đề Toán thi tốt nghiệp THPT 2025" },
  { year: 2024, title: "Đề Toán thi tốt nghiệp THPT 2024" },
  { year: 2023, title: "Đề Toán thi tốt nghiệp THPT 2023" },
  { year: 2022, title: "Đề Toán thi tốt nghiệp THPT 2022" },
];

// Mã đề của từng năm
export const examCodes = {
  2025: [
    { code: "0101-0102", id: "2025_0101" },
    { code: "0103-0104", id: "2025_0103" },
    { code: "0105-0106", id: "2025_0105" },
    { code: "0107-0108", id: "2025_0107" },
    { code: "0109-0110", id: "2025_0109" },
    { code: "0111-0112", id: "2025_0111" },
    { code: "0113-0114", id: "2025_0113" },
    { code: "0115-0116", id: "2025_0115" },
    { code: "0117-0118", id: "2025_0117" },
    { code: "0119-0120", id: "2025_0119" },
    { code: "0121-0123", id: "2025_0121" },
    { code: "0124", id: "2025_0124" },
  ],
  2024: [
    { code: "101-102", id: "2024_101" },
    { code: "103-104", id: "2024_103" },
    { code: "105-106", id: "2024_105" },
    { code: "107-108", id: "2024_107" },
  ],
  2023: [
    { code: "101-102", id: "2023_101" },
    { code: "103-104", id: "2023_103" },
  ],
  2022: [
    { code: "101-102", id: "2022_101" },
    { code: "103-104", id: "2022_103" },
  ],
};

// Chi tiết câu hỏi của từng mã đề
export const examQuestions = {
  "2025_0101": [
    {
      id: 1,
      question: "Cho hình lăng trụ \\(ABC.A'B'C'\\) (xem hình dưới). Phát biểu nào sau đây là đúng?<br/><img src='/images/exams/2025/0101/cau1.png' alt='Hình lăng trụ' style='max-width: 400px; height: auto; margin: 10px 0;'/>",
      options: [
        "A. \\(\\overrightarrow{BA} + \\overrightarrow{A'C'} = \\overrightarrow{BC'}\\)",
        "B. \\(\\overrightarrow{BA} + \\overrightarrow{A'C'} = \\overrightarrow{C'B'}\\)",
        "C. \\(\\overrightarrow{BA} + \\overrightarrow{A'C'} = \\overrightarrow{BC}\\)",
        "D. \\(\\overrightarrow{BA} + \\overrightarrow{A'C'} = \\overrightarrow{A'A}\\)"
      ],
      correctAnswer: "C",
      explanation: "Sử dụng quy tắc hình bình hành và tính chất hình lăng trụ"
    },
    {
      id: 2,
      question: "Cho hình hộp \\(ABCD.A'B'C'D'\\) (xem hình dưới). Đường thẳng \\(AB\\) song song với mặt phẳng nào sau đây?<br/><img src='/images/exams/2025/0101/cau2.png' alt='Hình hộp' style='max-width: 400px; height: auto; margin: 10px 0;'/>",
      options: [
        "A. \\((CC'A'A)\\)",
        "B. \\((BB'C'C)\\)",
        "C. \\((A'B'C'D')\\)",
        "D. \\((AA'D'D)\\)"
      ],
      correctAnswer: "C",
      explanation: "Đường thẳng AB song song với A'B' và nằm trong mặt phẳng (A'B'C'D')"
    },
    {
      id: 3,
      question: "Một người chia thời lượng (đơn vị: giây) thực hiện các cuộc gọi điện thoại của mình trong một tuần thành sáu nhóm và lập bảng tần số ghép nhóm như sau:<br/><table class='table table-bordered' style='max-width: 600px; margin: 10px 0;'><tr><th>Nhóm</th><th>[0;40)</th><th>[40;80)</th><th>[80;120)</th><th>[120;160)</th><th>[160;200)</th><th>[200;240)</th></tr><tr><td>Tần số</td><td>11</td><td>10</td><td>6</td><td>8</td><td>4</td><td>1</td></tr></table>Tứ phân vị thứ ba \\(Q_3\\) (đơn vị: giây) của mẫu số liệu ghép nhóm trên bằng",
      options: [
        "A. 145",
        "B. 140",
        "C. 135",
        "D. 130"
      ],
      correctAnswer: "C",
      explanation: "Tính tứ phân vị thứ ba Q₃ từ bảng tần số ghép nhóm. N = 40, vị trí Q₃ = 3N/4 = 30. Nhóm chứa Q₃ là [120;160)"
    },
    {
      id: 4,
      question: "Trong không gian với hệ tọa độ \\(Oxyz\\), cho đường thẳng \\((d): \\frac{x-3}{4} = \\frac{y+2}{-5} = \\frac{z}{-2}\\). Vectơ nào sau đây là một véctơ chỉ phương của đường thẳng \\((d)\\)?",
      options: [
        "A. \\(\\vec{v} = (4; 5; 2)\\)",
        "B. \\(\\vec{v} = (3; -2; 1)\\)",
        "C. \\(\\vec{v} = (3; 2; 1)\\)",
        "D. \\(\\vec{v} = (4; -5; 2)\\)"
      ],
      correctAnswer: "D",
      explanation: "Véctơ chỉ phương của đường thẳng có dạng \\(\\vec{v} = (4; -5; -2)\\), đáp án D có \\(\\vec{v} = (4; -5; 2)\\) sai dấu z"
    },
    {
      id: 5,
      question: "Họ nguyên hàm của hàm số \\(f(x) = x^2\\) là",
      options: [
        "A. \\(\\frac{1}{3}x^3 + C\\)",
        "B. \\(2x^2 + C\\)",
        "C. \\(3x^3 + C\\)",
        "D. \\(\\frac{1}{2}x^3 + C\\)"
      ],
      correctAnswer: "A",
      explanation: "Nguyên hàm của \\(x^n\\) là \\(\\frac{x^{n+1}}{n+1} + C\\). Với \\(f(x) = x^2\\) thì \\(F(x) = \\frac{x^3}{3} + C\\)"
    },
    {
      id: 6,
      question: "Cho cấp số cộng \\((u_n)\\) có \\(u_1 = 4\\) và công sai \\(d = -3\\). Giá trị của \\(u_6\\) bằng",
      options: [
        "A. 16",
        "B. 19",
        "C. -8",
        "D. -11"
      ],
      correctAnswer: "C",
      explanation: "Công thức số hạng tổng quát: \\(u_n = u_1 + (n-1)d\\). Vậy \\(u_6 = 4 + 5 \\times (-3) = 4 - 15 = -11\\)"
    },
    {
      id: 7,
      question: "Tập nghiệm của phương trình \\(\\sin x = 0\\) là",
      options: [
        "A. \\(S = \\left\\{\\frac{\\pi}{2} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\}\\)",
        "B. \\(S = \\left\\{k2\\pi \\mid k \\in \\mathbb{Z}\\right\\}\\)",
        "C. \\(S = \\left\\{\\frac{\\pi}{2} + k2\\pi \\mid k \\in \\mathbb{Z}\\right\\}\\)",
        "D. \\(S = \\left\\{k\\pi \\mid k \\in \\mathbb{Z}\\right\\}\\)"
      ],
      correctAnswer: "D",
      explanation: "Phương trình \\(\\sin x = 0\\) có nghiệm \\(x = k\\pi, k \\in \\mathbb{Z}\\)"
    },
    {
      id: 8,
      question: "Trong mặt phẳng với hệ tọa độ \\(Oxy\\), diện tích \\(S\\) của hình phẳng giới hạn bởi đồ thị của hàm số \\(y = 2x - 3\\), trục hoành và hai đường thẳng \\(x = 1, x = 2\\) được xác định bằng công thức",
      options: [
        "A. \\(S = \\pi \\int_1^2 |2x - 3| dx\\)",
        "B. \\(S = \\int_1^2 |2x - 3| dx\\)",
        "C. \\(S = \\pi \\int_1^2 (2x - 3)^2 dx\\)",
        "D. \\(S = \\int_1^2 (2x - 3) dx\\)"
      ],
      correctAnswer: "B",
      explanation: "Diện tích hình phẳng giữa đồ thị hàm số và trục hoành là tích phân của giá trị tuyệt đối hàm số"
    },
    {
      id: 9,
      question: "Trong không gian với hệ tọa độ \\(Oxyz\\), mặt phẳng đi qua điểm \\(A(2; 1; -4)\\) nhận \\(\\vec{n} = (3; 2; -1)\\) làm một véctơ pháp tuyến có phương trình là",
      options: [
        "A. \\(3(x - 2) + 2(y - 1) - 4(z + 4) = 0\\)",
        "B. \\(2(x + 3) + (y + 2) - 4(z - 1) = 0\\)",
        "C. \\(3(x - 2) + 2(y + 1) - (z - 4) = 0\\)",
        "D. \\(2(x - 3) + (y - 2) - 4(z + 1) = 0\\)"
      ],
      correctAnswer: "A",
      explanation: "Phương trình mặt phẳng qua \\(A(2;1;-4)\\) với VTPT \\(\\vec{n}=(3;2;-1)\\) là: \\(3(x-2) + 2(y-1) - 1(z+4) = 0\\)"
    },
    {
      id: 10,
      question: "Nghiệm của phương trình \\(\\log_3(2x - 1) = 2\\) là",
      options: [
        "A. \\(x = \\frac{7}{2}\\)",
        "B. \\(x = \\frac{5}{2}\\)",
        "C. \\(x = 5\\)",
        "D. \\(x = 4\\)"
      ],
      correctAnswer: "C",
      explanation: "\\(\\log_3(2x - 1) = 2 \\Leftrightarrow 2x - 1 = 3^2 = 9 \\Leftrightarrow 2x = 10 \\Leftrightarrow x = 5\\)"
    },
    {
      id: 11,
      question: "Cho hàm số \\(y = \\frac{ax + b}{cx + d}\\) \\((ac \\neq 0; ad - bc \\neq 0)\\) có đồ thị như hình vẽ. Đường tiệm cận đứng của đồ thị hàm số đã cho có phương trình là<br/><img src='/images/exams/2025/0101/cau11.png' alt='Đồ thị hàm số' style='max-width: 400px; height: auto; margin: 10px 0;'/>",
      options: [
        "A. \\(y = 2\\)",
        "B. \\(x = -1\\)",
        "C. \\(y = -1\\)",
        "D. \\(x = 2\\)"
      ],
      correctAnswer: "B",
      explanation: "Từ đồ thị, đường tiệm cận đứng là \\(x = -1\\)"
    },
    {
      id: 12,
      question: "Cho hình chóp \\(S.ABCD\\) có đáy \\(ABCD\\) là hình vuông cạnh \\(a\\), tam giác \\(SAB\\) vuông tại \\(A\\) và \\(SA = AB = a, AC = \\sqrt{2}a\\). Thể tích của khối chóp \\(S.ABCD\\) bằng",
      options: [
        "A. 30",
        "B. 20",
        "C. 60",
        "D. 10"
      ],
      correctAnswer: "D",
      explanation: "Thể tích khối chóp \\(V = \\frac{1}{3} \\times S_{đáy} \\times h\\). Cần tính chiều cao h từ S xuống đáy"
    },
    // PHẦN II - Đúng/Sai
    {
      id: 13,
      type: "true-false",
      question: "<strong>Câu 1:</strong> Cho hàm số \\(f(x) = x^3 - 12x - 8\\).",
      statements: [
        {
          id: "a",
          text: "Hàm số đã cho có đạo hàm là \\(f'(x) = 3x^2 - 12\\).",
          correct: true,
          explanation: "Đúng: \\(f'(x) = 3x^2 - 12\\)"
        },
        {
          id: "b",
          text: "Phương trình \\(f'(x) = 0\\) có tập nghiệm là \\(S = \\{2\\}\\).",
          correct: false,
          explanation: "Sai: \\(f'(x) = 0 \\Leftrightarrow x = \\pm 2\\), nên \\(S = \\{-2; 2\\}\\)"
        },
        {
          id: "c",
          text: "\\(f(2) = 24\\).",
          correct: false,
          explanation: "Sai: \\(f(2) = 8 - 24 - 8 = -24\\)"
        },
        {
          id: "d",
          text: "Giá trị lớn nhất của hàm số \\(f(x)\\) trên đoạn \\([-3; 3]\\) bằng 24.",
          correct: false,
          explanation: "Sai: Cần so sánh \\(f(-3), f(-2), f(2), f(3)\\)"
        }
      ]
    },
    {
      id: 14,
      type: "true-false",
      question: "<strong>Câu 2:</strong> Đối với ngành nuôi trồng thủy sản, việc kiểm soát lượng thuốc tồn dư trong nước là một nhiệm vụ quan trọng nhằm đảm bảo chất lượng môi trường. Khi nghiên cứu một loại thuốc trị bệnh trong nuôi trồng thủy sản, người ta sử dụng thuốc đó một lần và theo dõi nồng độ thuốc (mg/lít) tồn dư trong nước tại thời điểm \\(t\\) ngày (\\(t \\geq 0\\)) kể từ lúc sử dụng thuốc, thỏa mãn \\(y(t) > 0\\) và \\(y'(t) = ky(t)\\) (\\(t \\geq 0\\)), trong đó \\(k\\) là hằng số khác không. Kết quả thí nghiệm cho thấy tại \\(t = 6\\) và \\(t = 12\\) (ngày) nhận được kết quả lần lượt là 2 mg/lít và 1 mg/lít. Cho biết \\(y(t) = e^{g(t)}\\) (\\(t \\geq 0\\)).",
      statements: [
        {
          id: "a",
          text: "\\(g(t) = kt + C\\) (\\(t \\geq 0\\)) với \\(C\\) là một hằng số xác định.",
          correct: true,
          explanation: "Đúng: Từ \\(y'(t) = ky(t)\\), ta có \\(g(t) = kt + C\\)"
        },
        {
          id: "b",
          text: "\\(k = -\\frac{\\ln 2}{6}\\).",
          correct: false,
          explanation: "Đúng: Từ dữ liệu \\(y(6) = 2\\) và \\(y(12) = 1\\), ta tính được \\(k = -\\frac{\\ln 2}{6}\\)"
        },
        {
          id: "c",
          text: "\\(C = 2\\ln 2\\).",
          correct: true,
          explanation: "Đúng: Từ \\(y(6) = 2\\), ta tính được \\(C = 2\\ln 2\\)"
        },
        {
          id: "d",
          text: "Nồng độ thuốc tồn dư trong nước tại thời điểm \\(t = 25\\) (ngày) kể từ lúc sử dụng thuốc lớn hơn 0,25 mg/lít.",
          correct: false,
          explanation: "Sai: Tính \\(y(25) = e^{-\\frac{25\\ln 2}{6} + 2\\ln 2} < 0.25\\)"
        }
      ]
    },
    {
      id: 15,
      type: "true-false",
      question: "<strong>Câu 3:</strong> Mô hình toán học sau đây được sử dụng trong quan sát chuyển động của một vật. Trong không gian cho hệ tọa độ \\(Oxyz\\) có \\(\\vec{i}, \\vec{j}, \\vec{k}\\) là các véctơ đơn vị trên các trục \\(Ox, Oy, Oz\\). Một vật chuyển động thẳng với tốc độ phụ thuộc thời gian \\(t\\) (giây) theo công thức \\(v(t) = \\beta t + 300\\) (m/giây), trong đó \\(\\beta\\) là hằng số dương và \\(0 \\leq t \\leq 6\\). Ở thời điểm ban đầu (\\(t = 0\\)), vật đi qua \\(A(5;5;0)\\) với tốc độ 300 m/giây và hướng tới \\(B\\). Sau 2 giây kể từ thời điểm ban đầu, vật đi được quãng đường 604 m. Gọi \\(\\vec{u}\\) là véctơ chỉ phương của đường thẳng \\(AB\\). Biết rằng \\(|\\vec{u}| = 1\\) và góc giữa vectơ \\(\\vec{u}\\) lần lượt với các vectơ \\(\\vec{i}, \\vec{j}, \\vec{k}\\) có số đo tương ứng bằng \\(60^\\circ, 60^\\circ, 45^\\circ\\).",
      statements: [
        {
          id: "a",
          text: "\\(\\vec{u} = (\\cos 60^\\circ; \\cos 60^\\circ; \\cos 45^\\circ)\\).",
          correct: true,
          explanation: "Sai: Cần kiểm tra điều kiện \\(|\\vec{u}| = 1\\)"
        },
        {
          id: "b",
          text: "Phương trình đường thẳng \\(AB\\) là \\(\\frac{x-5}{1} = \\frac{y-5}{1} = \\frac{z}{\\sqrt{2}}\\).",
          correct: false,
          explanation: "Đúng: Từ véctơ \\(\\vec{u}\\) và điểm \\(A(5;5;0)\\)"
        },
        {
          id: "c",
          text: "\\(\\beta = 2\\).",
          correct: true,
          explanation: "Đúng: Từ \\(\\int_0^2 v(t)dt = 604\\), ta có \\(\\beta = 2\\)"
        },
        {
          id: "d",
          text: "Giả sử sau 5 giây kể từ thời điểm ban đầu, vật đến điểm \\(B(x_B; y_B; z_B)\\). Khi đó \\(x_B > 768\\).",
          correct: false,
          explanation: "Đúng: Tính quãng đường sau 5 giây và tọa độ điểm B"
        }
      ]
    },
    {
      id: 16,
      type: "true-false",
      question: "<strong>Câu 4:</strong> Một phần mềm phân dạng tin nhắn quảng cáo trên điện thoại bằng cách dựa theo từ khóa để đánh dấu một số tin nhắn có khả năng là tin nhắn quảng cáo. Trong số các tin nhắn gửi đến, có 15% số tin nhắn bị đánh dấu. Trong số các tin nhắn bị đánh dấu, có 10% số tin nhắn không phải là quảng cáo. Trong số các tin nhắn không bị đánh dấu, có 5% số tin nhắn là quảng cáo.<br/>Chọn ngẫu nhiên một tin nhắn được gửi đến điện thoại.",
      statements: [
        {
          id: "a",
          text: "Xác suất để tin nhắn đó không bị đánh dấu bằng 0,85.",
          correct: true,
          explanation: "Đúng: \\(P(\\text{không đánh dấu}) = 1 - 0.15 = 0.85\\)"
        },
        {
          id: "b",
          text: "Xác suất để tin nhắn đó không phải là quảng cáo, biết rằng nó không bị đánh dấu, bằng 0,95.",
          correct: true,
          explanation: "Đúng: \\(P(\\text{không QC}|\\text{không đánh dấu}) = 1 - 0.05 = 0.95\\)"
        },
        {
          id: "c",
          text: "Xác suất để tin nhắn đó không phải là quảng cáo bằng 0,85.",
          correct: false,
          explanation: "Sai: \\(P(\\text{không QC}) = 0.15 \\times 0.1 + 0.85 \\times 0.95 = 0.8225 \\neq 0.85\\)"
        },
        {
          id: "d",
          text: "Xác suất để tin nhắn đó bị đánh dấu, biết rằng nó không phải là quảng cáo, lớn hơn 0,01.",
          correct: true,
          explanation: "Đúng: Sử dụng định lý Bayes để tính xác suất có điều kiện"
        }
      ]
    },
    // PHẦN III - Tự luận
    {
      id: 17,
      type: "fill-in",
      question: "<strong>Câu 1:</strong> Bạn Nam tham gia cuộc thi giải một mật thư. Theo quy tắc của cuộc thi, người chơi cần chọn ra sáu số từ tập \\(S = \\{1;1;2;13;14;15;16;17;18;19\\}\\) và xếp mỗi số vào đúng một vị trí trong sáu vị trí \\(A, B, C, M, N, P\\) như hình bên sao cho mỗi vị trí chỉ được xếp một số. Mật thư có ba số xuất hiện ở những bộ ba vị trí \\((A,M,B); (B,N,C); (C,P,A)\\) tạo thành các cấp số cộng theo thứ tự đó. Bạn Nam chọn ngẫu nhiên sáu số trong tập \\(S\\) và xếp ngẫu nhiên vào các vị trí đó. Gọi xác suất để bạn Nam giải được mật thư ở lần chọn và xếp đó là \\(a\\). Giá trị của \\(\\frac{1}{a}\\) bằng bao nhiêu?<br/><img src='/images/exams/2025/0101/cau17.png' alt='Sơ đồ mật thư' style='max-width: 400px; height: auto; margin: 10px 0;'/>",
      correctAnswer: 1260,
      explanation: "Đây là bài toán tổ hợp phức tạp về cấp số cộng và hoán vị"
    },
    {
      id: 18,
      type: "fill-in",
      question: "<strong>Câu 2:</strong> Nếu một doanh nghiệp sản xuất \\(x\\) sản phẩm trong một tháng (\\(x \\in \\mathbb{N}^*, 1 \\leq x \\leq 4500\\)) thì doanh thu nhận được khi bán hết số sản phẩm đó là \\(F(x) = -0,01x^3 + 300x\\) (nghìn đồng), trong khi chi phí sản xuất bình quân cho mỗi sản phẩm là \\(G(x) = \\frac{30000}{x} + 200\\) (nghìn đồng). Giả sử số sản phẩm sản xuất ra luôn được bán hết. Trong một tháng, doanh nghiệp đó cần sản xuất ít nhất bao nhiêu sản phẩm để lợi nhuận thu được lớn hơn 100 triệu đồng?",
      correctAnswer: 1536,
      explanation: "Lợi nhuận = Doanh thu - Chi phí. Giải bất phương trình \\(F(x) - xG(x) > 100000\\)"
    },
    {
      id: 19,
      type: "fill-in",
      question: "<strong>Câu 3:</strong> Để gây quỹ từ thiện, câu lạc bộ thiện nguyện của một trường THPT tổ chức hoạt động bán hàng với hai thực đơn. Thực đơn 1 có giá 30 nghìn đồng, bao gồm hai cốc nước chanh và một túi khoai chiên. Thực đơn 2 có giá 50 nghìn đồng, bao gồm ba cốc nước chanh và hai túi khoai chiên. Biết rằng câu lạc bộ có 85 cốc nước chanh và 100 túi khoai chiên. Số tiền lớn nhất mà câu lạc bộ có thể nhận được sau khi bán hết hàng bao nhiêu nghìn đồng?",
      correctAnswer: 2650,
      explanation: "Bài toán quy hoạch tuyến tính. Gọi \\(x, y\\) là số lượng thực đơn 1 và 2. Tối đa hóa \\(30x + 50y\\) với điều kiện \\(2x + 3y \\leq 85\\) và \\(x + 2y \\leq 100\\)"
    },
    {
      id: 20,
      type: "fill-in",
      question: "<strong>Câu 4:</strong> Cho hình chóp \\(S.ABCD\\) có đáy \\(ABCD\\) là hình thoi với \\(\\widehat{ABC} = 60^\\circ\\) và \\(AB = 2\\). Biết rằng hình chiếu vuông góc của \\(S\\) trên mặt phẳng \\((ABCD)\\) là trọng tâm \\(H\\) của tam giác \\(ABC\\) và \\(SH = \\sqrt{3}\\). Khoảng cách giữa hai đường thẳng \\(AC\\) và \\(SD\\) bằng bao nhiêu (không làm tròn kết quả các phép tính trung gian, chỉ làm tròn kết quả cuối cùng đến hàng phần trăm)?",
      correctAnswer: 1.04,
      explanation: "Tính tọa độ các điểm, tìm \\(H\\), sau đó tính khoảng cách giữa hai đường thẳng chéo nhau"
    },
    {
      id: 21,
      type: "fill-in",
      question: "<strong>Câu 5:</strong> Có bốn ngăn (trong một giá để sách) được đánh số thứ tự 1, 2, 3, 4 và bảy quyển sách khác nhau. Bạn An xếp hết bảy quyển sách nói trên vào bốn ngăn đó sao cho mỗi ngăn có ít nhất một quyển sách. Khi đã xếp xong bảy quyển sách, hai cách xếp của bạn An được gọi là giống nhau nếu chúng thỏa mãn đồng thời hai điều kiện sau đây:<br/>- Với mỗi ngăn từ 1 đến 4, hai cách xếp có cùng số quyển sách như nhau trong cả hai cách xếp;<br/>- Với ứng với mỗi ngăn, thứ tự từ trái sang phải của các quyển sách được xếp là như nhau trong cả hai cách xếp.<br/>Gọi \\(T\\) là số cách xếp đôi một khác nhau của bạn An. Giá trị của \\(\\frac{T}{100}\\) bằng bao nhiêu?",
      correctAnswer: 1008,
      explanation: "Bài toán tổ hợp: Chia 7 quyển sách vào 4 ngăn (mỗi ngăn ít nhất 1 quyển) và xếp thứ tự"
    },
    {
      id: 22,
      type: "fill-in",
      question: "<strong>Câu 6:</strong> Để đặt được một vật trang trí trên mặt bàn, người ta thiết kế một chân đế như sau. Lấy một khối gỗ có dạng khối chóp cụt tứ giác đều với độ dài hai cạnh đáy lần lượt bằng 7,4 cm và 10,4 cm, chiều cao 1,5 cm (xem hình dưới). Sau đó khoét bỏ đi một khối gỗ sao cho phần còn lại có dạng vật thể \\(H\\), ở đó \\(H\\) nhận được bằng cách cắt khối cầu bán kính 5,8 cm bởi một mặt phẳng cắt mà mặt cắt là hình tròn bán kính 3,5 cm (xem hình dưới).<br/><img src='/images/exams/2025/0101/cau22.png' alt='Chân đế và khối cầu' style='max-width: 600px; height: auto; margin: 10px 0;'/><br/>Thể tích của khối chân đế bằng bao nhiêu centimét khối (không làm tròn kết quả các phép tính trung gian, chỉ làm tròn kết quả cuối cùng đến hàng phần mười)?",
      correctAnswer: 96.5,
      explanation: "\\(V = V_{chóp\\ cụt} - V_{phần\\ cầu\\ bị\\ cắt}\\). Tính thể tích khối chóp cụt và phần khối cầu bị cắt"
    }
  ],
  "2025_0103": [
    {
      id: 1,
      question: "Câu hỏi mẫu cho mã đề 0103-0104",
      options: [
        "A. Đáp án A",
        "B. Đáp án B",
        "C. Đáp án C",
        "D. Đáp án D"
      ],
      correctAnswer: "A",
      explanation: "Giải thích chi tiết..."
    }
  ],
  // Thêm các mã đề khác...
};
