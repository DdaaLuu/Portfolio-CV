import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, CheckSquare, Mail, Layers, FileText, CheckCircle2, ChevronRight, BookOpen, AlertTriangle, Eye, FileDown, LayoutGrid, Columns, Play, Pause } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [currentSection, setCurrentSection] = useState('gioi-thieu');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'dashboard' | 'gallery'>('gallery');

  // Keyboard listener for Escape key to close lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [autoScrollActive, setAutoScrollActive] = useState(false);
  const [autoScrollSpeed, setAutoScrollSpeed] = useState(1); // 1 = 1x, 2 = 1.5x, 3 = 2x

  // Auto-scroll logic for dashboard details pane, strictly limited inside the exercises container
  useEffect(() => {
    if (!autoScrollActive) return;
    
    const container = document.getElementById('dashboard-detail-pane');
    if (!container) return;
    
    let lastTime = performance.now();
    let scrollAccumulator = container.scrollTop;
    let animationFrameId: number;
    
    const scrollStep = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      
      // Speed multiplier
      const speedMultiplier = autoScrollSpeed === 1 ? 0.025 : autoScrollSpeed === 2 ? 0.05 : 0.08;
      scrollAccumulator += delta * speedMultiplier;
      
      container.scrollTop = Math.floor(scrollAccumulator);
      
      // If we reach the bottom, turn off autoscroll
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 3) {
        setAutoScrollActive(false);
        return;
      }
      
      animationFrameId = requestAnimationFrame(scrollStep);
    };
    
    const handleManualScroll = () => {
      // Sync accumulator on manual scroll so we don't jump back when scrolling resumes
      if (Math.abs(container.scrollTop - scrollAccumulator) > 10) {
        scrollAccumulator = container.scrollTop;
      }
    };
    
    container.addEventListener('scroll', handleManualScroll);
    animationFrameId = requestAnimationFrame(scrollStep);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('scroll', handleManualScroll);
    };
  }, [autoScrollActive, autoScrollSpeed]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Track scrolling to set active menu highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['gioi-thieu', 'du-an', 'tong-ket'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#gioi-thieu', label: 'Lời Mở Đầu', id: 'gioi-thieu' },
    { href: '#du-an', label: 'Bài Tập Thực Hành', id: 'du-an' },
    { href: '#tong-ket', label: 'Tổng Kết & Suy Ngẫm', id: 'tong-ket' },
  ];

  // The 6 structural digital assignments from the rubric guidelines with detailed pharmaceutical context
  const portfolioProjects = [
    {
      id: 'bt1',
      coverImage: '/images/cover_bt1.png',
      label: 'Bài 1: Quản trị Hệ điều hành & Tệp tin',
      fullName: 'Bài tập 1 - Chương 1: Quản trị Hệ điều hành & Thao tác Tệp tin',
      objective: 'Làm chủ giao diện Windows và File Explorer, thiết lập và chuẩn hóa thư mục lưu trữ số học chuẩn "ThucHanh_LuuDucAnh" và quản lý vòng đời tệp tin khoa học.',
      process: 'Mở File Explorer, thiết lập cấu trúc thư mục học thuật "ThucHanh_LuuDucAnh". Tạo tệp tin văn bản GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt, di chuyển tệp tin bằng Cut & Paste hoặc Copy & Paste vào thư mục con TaiLieu. Quản lý xóa tệp tin qua Recycle Bin và thực hiện xóa vĩnh viễn (Shift + Delete) không qua thùng rác.',
      product: 'Thư mục chuẩn học tập "ThucHanh_LuuDucAnh" & Tệp tin GhiChuQuanTrong.txt',
      fileUrl: '/files/BT1_Chuong1_LuuDucAnh.pdf',
      fileName: 'BT1_Chuong1_LuuDucAnh.pdf',
      fileType: 'pdf',
      skills: ['Windows 11', 'Quản trị tệp tin', 'Bảo mật hệ thống', 'Phân cấp dữ liệu'],
      images: ['/images/bt1_1.png', '/images/bt1_2.png'],
      imageDescriptions: [
        'Ảnh 1: Cấu trúc thư mục "ThucHanh_LuuDucAnh" được phân cấp khoa học và quản lý trực quan trên Windows File Explorer.',
        'Ảnh 2: Quá trình thao tác tạo mới, sao chép và di chuyển tệp tin GhiChuQuanTrong.txt vào thư mục con TaiLieu.'
      ],
      detailedSummary: 'Quá trình thực hành được bắt đầu bằng việc làm quen với các thao tác cốt lõi trên hệ điều hành Windows 11. Tôi đã khởi tạo thư mục chuyên môn học thuật "ThucHanh_LuuDucAnh" tại ổ đĩa làm việc để lưu trữ đồng bộ. Tiến hành tạo tệp tin ghi chú ban đầu "GhiChu.txt" nhằm ghi chép nhanh, sau đó đổi tên thành "GhiChuQuanTrong.txt" để chuẩn hóa quản lý tài liệu. Việc di chuyển tệp tin được thực hiện an toàn qua chức năng Cut/Paste vào thư mục con "TaiLieu". Cuối cùng, tôi thực hành cơ chế xóa tệp tin qua Recycle Bin và nâng cao bằng lệnh Shift + Delete để xóa vĩnh viễn, giải phóng bộ nhớ hệ thống một cách an toàn và bảo mật.'
    },
    {
      id: 'bt2',
      coverImage: '/images/cover_bt2.png',
      label: 'Bài 2: Khai thác thông tin y khoa',
      fullName: 'Bài tập 2 - Chương 2: Khai thác và Đánh giá Thông tin Học thuật Y khoa',
      objective: 'Ứng dụng các công cụ tìm kiếm học thuật nâng cao (Google Scholar, Elicit, Microsoft Academic) để tìm kiếm và đánh giá độ tin cậy của các tài liệu nghiên cứu về "Ứng dụng AI trong hỗ trợ chẩn đoán bệnh".',
      process: 'Xây dựng biểu thức Boolean truy vấn chuyên nghiệp ("Artificial Intelligence in healthcare" AND "AI in medical diagnosis" AND "Machine learning in medical imaging"). Thực hiện khảo sát, phân tích và thẩm định 11 tài liệu bao gồm sách chuyên khảo "Deep Medicine" của Eric Topol, các bài báo trên Nature Medicine, The Lancet Digital Health, JMIR và chính sách Y tế số của WHO. Đánh giá độ tin cậy dựa trên 5 tiêu chí: Uy tín tác giả, Nhà xuất bản khoa học, Phương pháp nghiên cứu thực nghiệm, Số lượng trích dẫn và Tính cập nhật (2017-2024).',
      product: 'Báo cáo thẩm định y khoa & Bảng đánh giá độ tin cậy 11 nguồn tài liệu học thuật (Excel/PDF)',
      fileUrl: '/files/BT2_Chuong2_LuuDucAnh.pdf',
      fileName: 'BT2_Chuong2_LuuDucAnh.pdf',
      fileType: 'pdf',
      skills: ['Google Scholar', 'Boolean Query', 'Elicit AI', 'Thẩm định học thuật y khoa'],
      images: ['/images/bt2_1.png', '/images/bt2_2.png'],
      imageDescriptions: [
        'Ảnh 1: Xây dựng biểu thức truy vấn chuyên môn nâng cao với các toán tử Boolean logic trên Google Scholar.',
        'Ảnh 2: Bảng thẩm định chi tiết 11 nguồn tài liệu y khoa học thuật với xếp hạng độ tin cậy khoa học và năm xuất bản.'
      ],
      detailedSummary: 'Để xây dựng báo cáo thẩm định thông tin y tế học thuật, tôi đã ứng dụng các công cụ tìm kiếm khoa học nâng cao như Google Scholar và Elicit. Bằng cách thiết lập biểu thức Boolean phức tạp kết hợp các toán tử logic "AND", "OR" và ngoặc kép, tôi đã lọc sạch và tiếp cận được các nghiên cứu chất lượng cao về "Ứng dụng AI trong chẩn đoán y khoa". Quá trình phân tích bao gồm việc đánh giá chi tiết 11 tài liệu y học hàng đầu (gồm sách chuyên khảo "Deep Medicine" của Eric Topol, các nghiên cứu trên Nature Medicine và The Lancet). Mỗi nguồn tài liệu đều được chấm điểm nghiêm ngặt qua 5 tiêu chí chuẩn hóa: uy tín tác giả, vị thế nhà xuất bản, phương pháp nghiên cứu thực nghiệm, tần suất trích dẫn khoa học và tính thời sự cập nhật.'
    },
    {
      id: 'bt3',
      coverImage: '/images/cover_bt3.png',
      label: 'Bài 3: Tối ưu tương tác AI (Prompt)',
      fullName: 'Bài tập 2 - Chương 3: Tối ưu hóa tương tác với AI qua Kỹ nghệ Prompt',
      objective: 'Xây dựng và so sánh hiệu quả hệ thống prompt 3 mức độ (Cơ bản, Cải tiến, Nâng cao) áp dụng mô hình CLEAR/CRAC để tối ưu hóa năng lực hỗ trợ của mô hình ngôn ngữ lớn (Gemini) trong các tác vụ học tập và nghiên cứu.',
      process: 'Thiết kế hệ thống prompt cho 3 tác vụ cốt lõi: (1) Tóm tắt Big Data (đặc tính 5Vs, gán vai trò chuyên gia phân tích dữ liệu, xuất bảng 2 cột cho SV năm nhất); (2) Giải thích Mạng nơ-ron nhân tạo (ANN) (gán vai trò giảng viên CNTT, dùng ẩn dụ cách bộ não nhận diện quả táo qua 3 bước CoT); (3) Tạo bộ 5 câu hỏi trắc nghiệm phân hóa độ khó về Máy tính & Thiết bị ngoại vi (định dạng Few-shot, có đáp án và giải thích sư phạm chi tiết). So sánh chất lượng đầu ra giữa các cấp độ prompt.',
      product: 'Hệ thống Prompt tối ưu y học số & Bảng so sánh hiệu quả 3 cấp độ (Gemini)',
      fileUrl: '/files/BT2_Chuong3_LuuDucAnh.pdf',
      fileName: 'BT2_Chuong3_LuuDucAnh.pdf',
      fileType: 'pdf',
      skills: ['Prompt Engineering', 'CLEAR / CRAC', 'Google Gemini', 'Chain of Thought (CoT)'],
      images: ['/images/bt3_1.png', '/images/bt3_2.png'],
      imageDescriptions: [
        'Ảnh 1: Soạn thảo và thử nghiệm cấu trúc Prompt nâng cao áp dụng tiêu chuẩn CLEAR/CRAC trên mô hình Google Gemini.',
        'Ảnh 2: Phân tích kết quả đầu ra, so sánh độ chuẩn xác và tính sư phạm của các cấp độ Prompt trong giải thích ANN.'
      ],
      detailedSummary: 'Bài tập tập trung vào việc nghiên cứu và ứng dụng Kỹ nghệ Prompt (Prompt Engineering) để khai thác hiệu quả tối đa từ mô hình ngôn ngữ lớn (Gemini). Tôi đã thiết kế hệ thống prompt 3 mức độ (Cơ bản, Cải tiến, Nâng cao) áp dụng triệt để mô hình CLEAR/CRAC. Các tác vụ bao gồm: tóm tắt dữ liệu lớn (đặc tính 5Vs), giải thích cơ chế Mạng nơ-ron nhân tạo (ANN) bằng phương pháp suy luận chuỗi tư duy (Chain-of-Thought) kết hợp hình ảnh ẩn dụ sinh động, và tạo bộ câu hỏi trắc nghiệm tin học có phân hóa độ khó bằng kỹ thuật Few-shot. Kết quả cho thấy các prompt nâng cao giúp AI phản hồi chính xác, cấu trúc rõ ràng, loại bỏ hoàn toàn các lỗi ảo giác thông tin và đáp ứng đúng tiêu chuẩn học thuật.'
    },
    {
      id: 'bt4',
      coverImage: '/images/cover_bt4.png',
      label: 'Bài 4: Giao tiếp & Hợp tác đám mây',
      fullName: 'Bài tập 3 - Chương 4: Hợp tác dự án trực tuyến trong Môi trường Số',
      objective: 'Ứng dụng các công cụ đám mây cộng tác (Trello, Zoom, Google Docs, Google Drive) để lên kế hoạch, phân công công việc và quản lý tiến độ dự án nhóm VNU1001_E252023 xây dựng video thuyết trình "Ứng dụng AI và Học máy trong quản lý rối loạn lipid máu & hội chứng chuyển hóa".',
      process: 'Thiết lập không gian làm việc số: (1) Quản lý dự án trực quan qua bảng Kanban Trello (Due dates, Checklists, Comments); (2) Thảo luận nhóm đồng bộ qua Zoom (chia sẻ Screen Sharing, vẽ Whiteboard, họp nhóm phụ qua Breakout Rooms, lên lịch bằng AI Companion); (3) Đồng soạn thảo kịch bản trên Google Docs (chế độ Suggesting, Comments, Version History, tích hợp trợ lý Gemini); (4) Đồng bộ tài nguyên phân cấp trên Google Drive theo quy tắc đặt tên nhất quán (Tên phân loại_Nội dung file), kích hoạt xác thực bảo mật 2 yếu tố (2FA).',
      product: 'Không gian làm việc Kanban Trello, Thư mục chia sẻ Google Drive & Biên bản họp nhóm số hóa',
      fileUrl: '/files/BT3_Chuong4_LuuDucAnh.pdf',
      fileName: 'BT3_Chuong4_LuuDucAnh.pdf',
      fileType: 'pdf',
      skills: ['Kanban Trello', 'Cộng tác Zoom', 'Google Cloud Workspace', 'Bảo mật 2FA & Lưu trữ'],
      images: ['/images/bt4_1.png', '/images/bt4_2.png'],
      imageDescriptions: [
        'Ảnh 1: Không gian cộng tác dự án nhóm trực quan trên bảng Kanban Trello với phân công nhiệm vụ và Due date.',
        'Ảnh 2: Biên bản thảo luận họp trực tuyến qua Zoom và quy trình phân quyền bảo mật dữ liệu lưu trữ đám mây Google Drive.'
      ],
      detailedSummary: 'Nhằm tổ chức xây dựng kịch bản và sản xuất video thuyết trình về "Ứng dụng AI trong quản lý rối loạn lipid máu" cho nhóm VNU1001_E252023, tôi đã thiết lập một không gian cộng tác số đám mây toàn diện. Tiến độ công việc được quản lý trực quan trên bảng Kanban Trello với các nhãn phân loại, due date và danh mục công việc chi tiết. Nhóm đã thực hiện các buổi họp trực tuyến hiệu quả qua Zoom, tận dụng tối đa tính năng chia sẻ màn hình và phòng thảo luận phụ (Breakout Rooms). Kịch bản được đồng soạn thảo trực tiếp trên Google Docs với chế độ gợi ý đóng góp ý kiến (Suggesting) và lưu vết lịch sử phiên bản. Toàn bộ tài nguyên số được phân loại khoa học và đồng bộ trên Google Drive, áp dụng bảo mật xác thực hai lớp (2FA) để bảo vệ dữ liệu.'
    },
    {
      id: 'bt5',
      coverImage: '/images/cover_bt5.png',
      label: 'Bài 5: Sáng tạo nội dung số y học',
      fullName: 'Bài tập 2 - Chương 5: Sáng tạo và Thiết kế Nội dung số Y học với AI',
      objective: 'Xây dựng chiến dịch truyền thông "Sống Xanh trong Kỷ nguyên Số" nhằm nâng cao nhận thức sinh viên về dấu chân carbon điện tử (digital footprint) và rác thải công nghệ (e-waste).',
      process: 'Thiết lập quy trình sáng tạo lặp (iterative workflow) phối hợp 3 công cụ AI tạo sinh: (1) Google Gemini soạn thảo bài blog 1000 từ, kiểm chứng số liệu khí thải GPU huấn luyện và tạo video AI (Sora 2 tiêu tốn 1 kWh & 4 lít nước), kết hợp dữ liệu e-waste Việt Nam (250.000 tấn năm 2025, quy định EPR); (2) Nano Banana tạo ảnh nghệ thuật chủ đề "Futuristic workspace giao thoa thiên nhiên"; (3) Canva AI gợi ý layout Infographic, chuyển đổi màu sắc chủ đạo xanh lá đậm - trắng. Bổ sung bối cảnh thực tế các điểm thu gom rác điện tử miễn phí tại Hà Nội (17 Trung Yên 3, 45 Nghĩa Tân) & TP.HCM (82 Bà Huyện Thanh Quan, Grac, Momo Heo đất, Ecosia).',
      product: 'Bài viết Blog truyền thông "Sống Xanh" & Infographic Canva hiệu đính màu sắc',
      fileUrl: '/files/BT2_Chuong5_LuuDucAnh.pdf',
      fileName: 'BT2_Chuong5_LuuDucAnh.pdf',
      fileType: 'pdf',
      skills: ['Canva AI', 'Generative Imagery AI', 'Google Gemini', 'Truyền thông môi trường số'],
      images: ['/images/bt5_1.png', '/images/bt5_2.png'],
      imageDescriptions: [
        'Ảnh 1: Ấn phẩm thiết kế Infographic "Sống Xanh" trên Canva được tối ưu hóa độ tương phản và phân bố cục trực quan.',
        'Ảnh 2: Giao diện bài đăng Blog truyền thông được tích hợp hình ảnh không gian tương lai sinh động tạo bởi AI Banana.'
      ],
      detailedSummary: 'Tôi đã lên kế hoạch và triển khai chiến dịch truyền thông y học số mang tên "Sống Xanh trong Kỷ nguyên Số". Quy trình sáng tạo nội dung áp dụng mô hình lặp kết hợp 3 công cụ AI đột phá: Google Gemini hỗ trợ biên soạn bài blog 1000 từ phân tích chuyên sâu về "dấu chân carbon điện tử" và lượng nước tiêu hao để huấn luyện AI; công cụ tạo ảnh nghệ thuật Nano Banana thiết kế hình ảnh không gian làm việc tương lai hài hòa với thiên nhiên; và Canva AI tối ưu hóa bố cục Infographic truyền thông. Bài viết được lồng ghép các địa chỉ thu gom rác thải điện tử miễn phí thực tế tại Hà Nội và TP.HCM cùng các ứng dụng môi trường bền vững như Ecosia, Grac giúp nâng cao tính thực tiễn và tác động xã hội.'
    },
    {
      id: 'bt6',
      coverImage: '/images/cover_bt6.png',
      label: 'Bài 6: An toàn số & Đạo đức AI',
      fullName: 'Bài tập 4 - Chương 6: Bảo mật dữ liệu & Liêm chính học thuật Y Dược số',
      objective: 'Nghiên cứu chính sách học thuật của VNU và quy tắc đạo đức y học thực tiễn lâm sàng để xây dựng năng lực sử dụng AI có trách nhiệm, giải quyết tình huống bệnh nhân nữ 38 tuổi chẩn đoán Viêm cột sống dính khớp (AS).',
      process: 'Sử dụng Perplexity AI truy vấn bằng kỹ thuật Chain-of-Thought tìm kiếm hướng dẫn điều trị từ EULAR 2022, ACR 2019 và đối soát hướng dẫn Bộ Y tế Việt Nam 2014 (QĐ 361/QĐ-BYT). Phân tích độ an toàn của thuốc ức chế TNF (TNF inhibitors) đối với phụ nữ mang thai/cho con bú. Phát hiện và hiệu đính lỗi ảo giác nghiêm trọng của AI (ký tự ngoại lai tiếng Trung "口服" trong dịch thuật lâm sàng, lỗi dịch thuật Infographic: sáu harvan, ảo giấc...). Thiết lập bộ nguyên tắc "7 Chữ Vàng cho Dược sĩ tương lai" (Sức khỏe bệnh nhân là trên hết, Minh bạch nguồn gốc, Kiểm chứng chéo, Bảo mật dữ liệu, Cầm lái tư duy, Cập nhật liên tục, Sử dụng chọn lọc).',
      product: 'Bản phân tích ca bệnh AS, Danh mục trích dẫn Zotero/Mendeley & Infographic Dược sĩ số',
      fileUrl: '/files/BT4_Chuong6_LuuDucAnh.pdf',
      fileName: 'BT4_Chuong6_LuuDucAnh.pdf',
      fileType: 'pdf',
      skills: ['Perplexity CoT', 'Liêm chính y đức số', 'Xử lý ảo giác AI', 'Zotero & Mendeley'],
      images: ['/images/bt6_1.png', '/images/bt6_2.png'],
      imageDescriptions: [
        'Ảnh 1: Tiến trình tra cứu và đối soát chéo phác đồ lâm sàng điều trị bệnh AS của Bộ Y tế bằng AI Perplexity.',
        'Ảnh 2: Tác phẩm Infographic quy chuẩn "7 Chữ Vàng cho Dược sĩ tương lai" và danh mục quản lý nguồn trích dẫn Zotero.'
      ],
      detailedSummary: 'Bài tập giải quyết một ca lâm sàng thực tế phức tạp: Bệnh nhân nữ 38 tuổi được chẩn đoán Viêm cột sống dính khớp (AS). Tôi đã ứng dụng mô hình Perplexity AI theo kỹ thuật Chain-of-Thought để tra cứu các hướng dẫn điều trị quốc tế chuẩn y khoa từ EULAR 2022 và ACR 2019, đối chiếu trực tiếp với hướng dẫn của Bộ Y tế Việt Nam. Qua đó phân tích độ an toàn của thuốc sinh học ức chế TNF đối với bệnh nhân nữ trong độ tuổi sinh sản. Đặc biệt, tôi đã thực hiện quy trình kiểm chứng chéo nghiêm ngặt để phát hiện và hiệu đính các lỗi ảo giác nguy hiểm của AI (như dịch sai thuật ngữ, lỗi ký tự tiếng Trung). Từ kinh nghiệm này, tôi đã đúc kết bộ nguyên tắc đạo đức "7 Chữ Vàng cho Dược sĩ tương lai" và chuẩn hóa danh mục tài liệu trích dẫn khoa học bằng phần mềm Mendeley/Zotero.'
    }
  ];

  const handleSidebarProjectClick = (index: number) => {
    setActiveTab(index);
    setViewMode('dashboard');
    setAutoScrollActive(false); // Stop autoscrolling on tab change
    
    // Scroll the details pane back to top
    const pane = document.getElementById('dashboard-detail-pane');
    if (pane) {
      pane.scrollTop = 0;
    }
    
    const el = document.getElementById('du-an');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getBadgeStyleClass = (skillIndex: number) => {
    const classes = ['badge-indigo', 'badge-teal', 'badge-violet', 'badge-amber', 'badge-rose', 'badge-emerald'];
    return `skill-badge ${classes[skillIndex % classes.length]}`;
  };

  const renderDetailedProcess = (tabIndex: number) => {
    const steps = [
      // Case 0 (Bài 1)
      [
        { text: "1. Mở File Explorer: Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ." },
        { text: "2. Truy cập ổ đĩa/thư mục: Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents." },
        { text: "3. Tạo thư mục mới: Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_LuuDucAnh. Nhấn Enter.", image: "/images/bt1_1.png" },
        { text: "4. Vào thư mục vừa tạo: Nhấp đúp vào thư mục ThucHanh_LuuDucAnh.", image: "/images/bt1_1.png" },
        { text: "5. Tạo tệp tin văn bản: Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là GhiChu.txt. Nhấn Enter.", image: "/images/bt1_2.png" },
        { text: "6. Đổi tên tệp tin: Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter.", image: "/images/bt1_2.png" },
        { text: "7. Tạo thư mục con: Trong thư mục ThucHanh_LuuDucAnh, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu.", image: "/images/bt1_1.png" },
        { text: "8. Sao chép tệp tin (Copy & Paste): Nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Copy (hoặc chọn tệp rồi nhấn Ctrl + C). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống bên trong -> chọn Paste (hoặc nhấn Ctrl + V). Bây giờ bạn có một bản sao của tệp trong thư mục TaiLieu.", image: "/images/bt1_2.png" },
        { text: "9. Di chuyển tệp tin (Cut & Paste): Quay lại thư mục ThucHanh_LuuDucAnh. Tạo một tệp mới tên là DiChuyen.txt. Nhấp chuột phải vào tệp DiChuyen.txt -> chọn Cut (hoặc chọn tệp rồi nhấn Ctrl + X). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống -> chọn Paste (hoặc nhấn Ctrl + V). Tệp gốc đã biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới.", image: "/images/bt1_2.png" },
        { text: "10. Xóa tệp tin: Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).", image: "/images/bt1_2.png" },
        { text: "11. Xóa vĩnh viễn: Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Một cảnh báo sẽ hiện ra. Nếu đồng ý, tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.", image: "/images/bt1_2.png" },
        { text: "12. Khôi phục từ Thùng rác (Tùy chọn): Tìm biểu tượng Recycle Bin trên màn hình nền, nhấp đúp để mở. Tìm tệp GhiChuQuanTrong.txt đã xóa, nhấp chuột phải vào nó và chọn Restore. Tệp sẽ quay trở lại vị trí ban đầu.", image: "/images/bt1_2.png" }
      ],
      // Case 1 (Bài 2)
      [
        { text: "1. Khởi động trình duyệt web: Nhấp đúp mở Google Chrome hoặc Microsoft Edge trên màn hình máy tính." },
        { text: "2. Truy cập Google Scholar: Nhập địa chỉ scholar.google.com vào thanh địa chỉ và nhấn Enter để vào thư viện học thuật." },
        { text: "3. Xây dựng biểu thức tìm kiếm Boolean nâng cao: Kết hợp các toán tử logic để lọc sạch kết quả: ('Artificial Intelligence' OR 'AI') AND 'medical diagnosis' AND 'machine learning' AND 'medical imaging'.", image: "/images/bt2_1.png" },
        { text: "4. Thực hiện lệnh truy vấn: Dán biểu thức Boolean vào thanh công cụ tìm kiếm và nhấn Enter.", image: "/images/bt2_1.png" },
        { text: "5. Lọc kết quả theo thời gian cập nhật: Sử dụng thanh lọc thời gian ở menu bên trái để giới hạn các tài liệu nghiên cứu y khoa xuất bản từ năm 2017 đến năm 2024.", image: "/images/bt2_1.png" },
        { text: "6. Khảo sát danh sách bài báo: Lướt qua hàng trăm kết quả, lọc ra các tạp chí y học chính thống có tầm ảnh hưởng lớn như Nature Medicine, The Lancet, JMIR và WHO.", image: "/images/bt2_1.png" },
        { text: "7. Trích xuất thông tin học thuật: Ghi lại các siêu dữ liệu cần thiết của 11 bài viết gồm: Tác giả, Nhà xuất bản khoa học, Phương pháp thực nghiệm, Số lượng trích dẫn và Năm xuất bản.", image: "/images/bt2_2.png" },
        { text: "8. Thiết lập bảng thẩm định độ tin cậy: Nhập danh sách 11 tài liệu vào bảng đánh giá. Chấm điểm độ tin cậy dựa trên 5 tiêu chí chuẩn hóa của VNU-UMP.", image: "/images/bt2_2.png" },
        { text: "9. Tải tài liệu bản đầy đủ (PDF Full-text): Nhấp vào các liên kết PDF bên phải kết quả tìm kiếm để tải 11 tài liệu nghiên cứu gốc về thư mục lưu trữ.", image: "/images/bt2_2.png" },
        { text: "10. Thiết lập bảng đối soát Excel: Xây dựng bảng tính Excel phân loại rõ ràng theo điểm số tin cậy giảm dần để đưa ra nhận xét khoa học chính xác.", image: "/images/bt2_2.png" },
        { text: "11. Xuất tệp báo cáo PDF: Lưu bảng tính và kết luận thẩm định nguồn y khoa dưới dạng tài liệu PDF học thuật để nộp minh chứng bài tập.", image: "/images/bt2_2.png" }
      ],
      // Case 2 (Bài 3)
      [
        { text: "1. Đăng nhập Google Gemini: Truy cập gemini.google.com và đăng nhập bằng tài khoản VNU hoặc cá nhân." },
        { text: "2. Khởi tạo tác vụ 1 (Tóm tắt Big Data): Nhập câu lệnh cơ bản: 'Hãy tóm tắt về Big Data cho tôi.' và phân tích phản hồi dài dòng, chung chung từ AI.", image: "/images/bt3_1.png" },
        { text: "3. Tối ưu hóa câu lệnh y tế lớn (Tác vụ 1 cải tiến): Soạn thảo prompt CLEAR/CRAC gán vai trò: 'Với vai trò là Chuyên gia phân tích dữ liệu y tế lớn, hãy tóm tắt các đặc tính cốt lõi 5Vs của Big Data dưới dạng bảng 2 cột rõ ràng, dễ hiểu cho sinh viên năm nhất ngành Y Dược.'", image: "/images/bt3_1.png" },
        { text: "4. Đối soát chất lượng phản hồi: Đánh giá bảng 5Vs từ Gemini cải tiến, ghi nhận tính cô đọng, dễ hiểu cho sinh viên y dược và loại bỏ ảo giác thông tin.", image: "/images/bt3_1.png" },
        { text: "5. Khởi tạo tác vụ 2 (Giải thích ANN): Nhập prompt chưa tối ưu: 'Mạng nơ-ron nhân tạo là gì?'" },
        { text: "6. Xây dựng Prompt chuỗi suy luận Chain-of-Thought (Tác vụ 2 cải tiến): Nhập câu lệnh hướng dẫn tư duy: 'Hãy đóng vai giảng viên Công nghệ thông tin, giải thích cơ chế hoạt động của Mạng nơ-ron nhân tạo (ANN) thông qua ví dụ ẩn dụ cách bộ não nhận diện quả táo qua 3 bước suy luận Chain-of-Thought.'", image: "/images/bt3_2.png" },
        { text: "7. Khởi tạo tác vụ 3 (Trắc nghiệm ngoại vi): Nhập prompt ban đầu: 'Tạo 5 câu hỏi trắc nghiệm tin học.'" },
        { text: "8. Áp dụng kỹ thuật Few-shot Prompting (Tác vụ 3 cải tiến): Cung cấp mẫu câu hỏi và đáp án mẫu chuẩn sư phạm để AI học và làm theo, đưa ra bộ câu hỏi phân hóa độ khó y tế kèm lời giải chi tiết.", image: "/images/bt3_2.png" },
        { text: "9. Chụp ảnh màn hình minh chứng: Chụp lại các cặp hội thoại so sánh (Cơ bản vs Cải tiến) trên giao diện trò chuyện Google Gemini.", image: "/images/bt3_1.png" },
        { text: "10. Xuất tệp tài liệu báo cáo: Tổng hợp bảng so sánh, phân tích sự khác biệt về cấu trúc phản hồi và xuất báo cáo PDF tối ưu kỹ nghệ prompt.", image: "/images/bt3_2.png" }
      ],
      // Case 3 (Bài 4)
      [
        { text: "1. Thành lập dự án nhóm: Nhóm VNU1001_E252023 xác định chủ đề nghiên cứu: 'Ứng dụng AI và Học máy trong quản lý rối loạn lipid máu & hội chứng chuyển hóa'." },
        { text: "2. Thiết lập bảng Kanban trên Trello: Tạo bảng làm việc chung, mời 5 thành viên nhóm tham gia.", image: "/images/bt4_1.png" },
        { text: "3. Phân công nhiệm vụ và Due-date trên Trello: Thiết lập các danh sách: Cần làm (To Do), Đang làm (In Progress), Đang duyệt (Review), Đã xong (Done). Gán thẻ cho từng thành viên, đặt nhãn màu và checklists.", image: "/images/bt4_1.png" },
        { text: "4. Lên lịch cuộc họp đồng bộ qua Zoom: Tạo liên kết cuộc họp Zoom học thuật định kỳ 90 phút.", image: "/images/bt4_2.png" },
        { text: "5. Thảo luận đồng bộ và chia nhóm phụ: Bật Zoom Screen Sharing để duyệt slide PowerPoint y khoa, sử dụng Zoom Breakout Rooms chia cặp viết kịch bản, và tự động ghi biên bản họp bằng AI Companion.", image: "/images/bt4_2.png" },
        { text: "6. Khởi tạo tài liệu Google Docs đồng cộng tác: Tạo tệp Docs, phân quyền chỉnh sửa cho các thành viên và tích hợp Gemini hỗ trợ ý tưởng.", image: "/images/bt4_2.png" },
        { text: "7. Biên tập chéo bằng chế độ Suggesting & Comments: Bật chế độ Gợi ý đóng góp (Suggesting) để biên soạn chéo nội dung y học lâm sàng và sử dụng Comments trao đổi các điểm chưa đồng nhất.", image: "/images/bt4_2.png" },
        { text: "8. Quản lý lịch sử phiên bản (Version History): Lưu vết các phiên bản kịch bản video y khoa lớn trong Google Docs để kiểm soát đóng góp của từng thành viên.", image: "/images/bt4_2.png" },
        { text: "9. Tạo không gian lưu trữ tài nguyên Google Drive: Khởi tạo thư mục dùng chung nhóm, phân quyền thông minh (Viewer/Editor) cho từng thành viên.", image: "/images/bt4_2.png" },
        { text: "10. Chuẩn hóa quy tắc đặt tên tệp tin số: Đặt tên tệp theo quy chuẩn nhất quán (ví dụ: KịchBản_Video_V1.pdf) để tối ưu hóa lưu trữ và truy cập nhanh.", image: "/images/bt4_2.png" },
        { text: "11. Bảo mật tài khoản điện toán đám mây: Kích hoạt bảo mật xác thực hai lớp (2FA) trên toàn bộ tài khoản Google Drive để chống rò rỉ dữ liệu y học nhóm.", image: "/images/bt4_2.png" }
      ],
      // Case 4 (Bài 5)
      [
        { text: "1. Lên ý tưởng chiến dịch truyền thông y học: Xác định chủ đề: 'Sống Xanh trong Kỷ nguyên Số - Dấu chân carbon y học của AI'." },
        { text: "2. Nghiên cứu số liệu carbon AI: Sử dụng Gemini thu thập số liệu phát thải năng lượng huấn luyện mô hình và nước tiêu hao tạo video y khoa (Sora 2 tiêu thụ 1 kWh & 4 lít nước).", image: "/images/bt5_1.png" },
        { text: "3. Đồng sáng tạo nội dung bài Blog 1000 từ: Phối hợp cùng AI Gemini soạn thảo bài viết chuyên sâu về lượng rác thải điện tử e-waste tại Việt Nam (250.000 tấn vào năm 2025) và các quy định EPR mới.", image: "/images/bt5_2.png" },
        { text: "4. Tạo hình ảnh mỹ thuật minh họa bằng AI: Nhập mô tả trên công cụ Nano Banana để thiết kế bức họa mỹ thuật 'Futuristic workspace giao thoa thiên nhiên'.", image: "/images/bt5_2.png" },
        { text: "5. Thiết kế Infographic truyền thông trên Canva: Khởi tạo tệp thiết kế Infographic có bố cục dọc tối ưu trên nền tảng Canva.", image: "/images/bt5_1.png" },
        { text: "6. Áp dụng quy tắc màu sắc (Color Scheme): Thiết lập bảng màu xanh lá đậm - trắng làm màu chủ đạo để thể hiện rõ nét ý thức bảo vệ môi trường bền vững.", image: "/images/bt5_1.png" },
        { text: "7. Tối ưu hóa độ tương phản (Contrast): Điều chỉnh màu chữ viết hoa nổi bật trên các khối nền để người đọc dễ dàng quét thông tin số liệu.", image: "/images/bt5_1.png" },
        { text: "8. Định hướng trọng lượng thị giác (Visual Weight): Phân chia bố cục Infographic 3 phần cân đối: Số liệu phát thải AI -> Thực trạng e-waste Việt Nam -> Địa chỉ điểm thu gom miễn phí.", image: "/images/bt5_1.png" },
        { text: "9. Lồng ghép địa chỉ thu gom rác điện tử miễn phí thực tế: Đưa các địa chỉ uy tín vào Infographic: 17 Trung Yên 3 (Hà Nội) hoặc 82 Bà Huyện Thanh Quan (TP.HCM).", image: "/images/bt5_1.png" },
        { text: "10. Xuất bản và phân phối sản phẩm số: Tải xuống Infographic chất lượng cao (PNG) từ Canva, kết hợp bài viết blog và hình ảnh mỹ thuật AI Banana đăng tải truyền thông.", image: "/images/bt5_2.png" }
      ],
      // Case 5 (Bài 6)
      [
        { text: "1. Phân tích ca bệnh lâm sàng phức tạp: Tiếp nhận bệnh án bệnh nhân nữ 38 tuổi chẩn đoán Viêm cột sống dính khớp (AS)." },
        { text: "2. Tra cứu phác đồ điều trị học thuật bằng AI: Sử dụng Perplexity AI theo kỹ thuật Chain-of-Thought tìm kiếm hướng dẫn điều trị chuẩn từ EULAR 2022 và ACR 2019.", image: "/images/bt6_1.png" },
        { text: "3. Đối soát Hướng dẫn Bộ Y tế: Tra cứu và đối soát chéo trực tiếp với Quyết định 361/QĐ-BYT năm 2014 của Bộ Y tế Việt Nam về điều trị bệnh cột sống để bảo đảm tính pháp lý lâm sàng.", image: "/images/bt6_1.png" },
        { text: "4. Phân tích tính an toàn của thuốc sinh học: Đánh giá độ an toàn của nhóm thuốc ức chế TNF đối với phụ nữ trong độ tuổi sinh sản muốn mang thai.", image: "/images/bt6_1.png" },
        { text: "5. Phát hiện lỗi ảo giác lâm sàng nguy hiểm của AI: Thực hiện quy trình rà soát chéo thủ công để phát hiện lỗi chèn ký tự ngoại lai tiếng Trung '口服' do AI dịch thuật sai sót trong phác đồ thuốc tiêm sinh học.", image: "/images/bt6_1.png" },
        { text: "6. Hiệu đính lỗi dịch thuật y khoa: Chỉnh sửa thuật ngữ dịch sai, loại bỏ ảo giác thông tin trên các ấn phẩm y khoa tin học.", image: "/images/bt6_1.png" },
        { text: "7. Quản lý tài liệu trích dẫn khoa học: Sử dụng phần mềm Mendeley hoặc Zotero để nhập và định dạng nguồn tài liệu tham khảo theo quy chuẩn học thuật VNU.", image: "/images/bt6_2.png" },
        { text: "8. Đúc kết Bộ nguyên tắc Đạo đức AI: Thiết lập bộ quy chuẩn '7 Chữ Vàng cho Dược sĩ Số tương lai' (Sức khỏe trên hết, Minh bạch nguồn gốc, Kiểm chứng chéo, Bảo mật dữ liệu, Cầm lái tư duy, Cập nhật liên tục, Sử dụng chọn lọc).", image: "/images/bt6_2.png" },
        { text: "9. Thiết kế ấn phẩm Infographic Dược sĩ Số: Sử dụng Canva tổng hợp phác đồ điều trị AS và bộ nguyên tắc 7 Chữ Vàng đạo đức AI thành một thiết kế trực quan.", image: "/images/bt6_2.png" },
        { text: "10. Hoàn thiện báo cáo khoa học lâm sàng: Hoàn thiện báo cáo phân tích ca bệnh kèm danh mục trích dẫn chuẩn hóa định dạng PDF.", image: "/images/bt6_2.png" }
      ]
    ];

    return (
      <div className="space-y-3 bg-slate-50/70 p-5 border border-slate-100 rounded-2xl">
        <ol className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
          {steps[tabIndex].map((step, idx) => {
            return (
              <li 
                key={idx} 
                className="p-3.5 rounded-xl transition-all border border-slate-100 hover:border-slate-200 bg-white shadow-xs space-y-2.5"
              >
                <div>{step.text}</div>
                {step.image && (
                  <div className="pt-1">
                    <img 
                      src={step.image} 
                      alt={`Minh chứng hoạt động bước ${idx + 1}`} 
                      className="aspect-video w-full max-w-[280px] rounded-lg border border-slate-200/60 shadow-xs cursor-zoom-in hover:opacity-90 hover:shadow-sm transition-all"
                      onClick={() => setSelectedImage(step.image)}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    );
  };

  const renderRubricPresentation = (tabIndex: number) => {
    switch (tabIndex) {
      case 0:
        return (
          <div className="space-y-4 bg-slate-50/70 p-5 border border-slate-100 rounded-2xl">
            <h6 className="text-xs font-black text-indigo-900 uppercase tracking-widest font-sans border-b border-indigo-100/50 pb-2 flex items-center gap-1.5">
              📁 Sơ đồ Cấu trúc Thư mục và Quy tắc Đặt tên Tệp
            </h6>
            
            {/* Tree View */}
            <div className="bg-slate-900 text-slate-100 font-mono text-[11px] sm:text-xs p-4 rounded-xl shadow-inner leading-relaxed overflow-x-auto">
              <div className="text-teal-400">📁 ThucHanh_LuuDucAnh/ &lt;-- Thư mục gốc học thuật</div>
              <div className="pl-4 border-l border-slate-700 ml-2 mt-1">
                <div className="text-yellow-400">📁 Chuong1_OS_Files/</div>
                <div className="pl-6 border-l border-slate-700 ml-2 text-slate-300">
                  📄 GhiChuQuanTrong.txt <span className="text-slate-500 font-semibold italic">(Thiết lập vòng đời tệp tin)</span>
                </div>
                
                <div className="text-yellow-400 mt-1">📁 Chuong2_AcademicSearch/</div>
                <div className="pl-6 border-l border-slate-700 ml-2 text-slate-300">
                  📄 BT2_Chuong2_LuuDucAnh.pdf <span className="text-slate-500 font-semibold italic">(Thẩm định 11 tài liệu y khoa)</span>
                </div>
                
                <div className="text-yellow-400 mt-1">📁 Chuong3_PromptAI/</div>
                <div className="pl-6 border-l border-slate-700 ml-2 text-slate-300">
                  📄 BT2_Chuong3_LuuDucAnh.pdf <span className="text-slate-500 font-semibold italic">(So sánh 3 cấp độ Prompt)</span>
                </div>
                
                <div className="text-yellow-400 mt-1">📁 Chuong4_CloudCollaboration/</div>
                <div className="pl-6 border-l border-slate-700 ml-2 text-slate-300">
                  📄 BT3_Chuong4_LuuDucAnh.pdf <span className="text-slate-500 font-semibold italic">(Không gian Kanban Trello & Drive)</span>
                </div>
                
                <div className="text-yellow-400 mt-1">📁 Chuong5_ContentCreation/</div>
                <div className="pl-6 border-l border-slate-700 ml-2 text-slate-300">
                  📄 BT2_Chuong5_LuuDucAnh.pdf <span className="text-slate-500 font-semibold italic">(Bài Blog Sống Xanh & Canva Infographic)</span>
                </div>
                
                <div className="text-yellow-400 mt-1">📁 Chuong6_AIEthics/</div>
                <div className="pl-6 border-l border-slate-700 ml-2 text-slate-300">
                  📄 BT4_Chuong6_LuuDucAnh.pdf <span className="text-slate-500 font-semibold italic">(Bản phân tích ca lâm sàng AS & Mendeley)</span>
                </div>
              </div>
            </div>

            {/* Naming Rules */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block font-sans">
                Quy tắc đặt tên tệp tin chuẩn hóa:
              </span>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 font-semibold leading-relaxed">
                <li><strong className="text-slate-800">Quy tắc 1 (Không dấu):</strong> Thư mục gốc và thư mục con viết liền hoặc dùng dấu gạch dưới, không sử dụng dấu tiếng Việt và ký tự đặc biệt để đảm bảo tính tương thích hệ thống tuyệt đối.</li>
                <li><strong className="text-slate-800">Quy tắc 2 (Nhất quán):</strong> Định dạng tên tệp tin sản phẩm luôn tuân thủ cấu trúc: <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono text-[10px]">BT[Số]_Chuong[Số]_[HọTên]</code>.</li>
                <li><strong className="text-slate-800">Quy tắc 3 (Phân cấp):</strong> Phân chia tài nguyên rõ ràng theo từng chương đào tạo của VNU-UMP để dễ dàng quản trị, tìm kiếm và truy xuất.</li>
              </ul>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4 bg-slate-50/70 p-5 border border-slate-100 rounded-2xl">
            <h6 className="text-xs font-black text-indigo-900 uppercase tracking-widest font-sans border-b border-indigo-100/50 pb-2">
              🔍 Toán tử Tìm kiếm Học thuật & Bảng Thẩm định Nguồn Y khoa
            </h6>
            
            {/* Boolean Query Box */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block font-sans">
                Biểu thức Boolean truy vấn chuyên nghiệp (Boolean Query):
              </span>
              <div className="bg-indigo-50 border border-indigo-100 text-indigo-950 font-mono text-[10px] sm:text-xs p-3 rounded-lg leading-relaxed select-all">
                ("Artificial Intelligence" OR "AI") AND "medical diagnosis" AND "machine learning" AND "medical imaging"
              </div>
            </div>

            {/* Scholarly Evaluation Table */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block font-sans">
                Bảng thẩm định học thuật (Trích xuất 5 nguồn tiêu biểu trong số 11 nguồn):
              </span>
              <div className="overflow-x-auto rounded-xl border border-slate-200/50 bg-white">
                <table className="w-full text-left border-collapse text-xs font-sans">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200/60">
                      <th className="p-3">Tài liệu / Nguồn</th>
                      <th className="p-3">Nhà xuất bản / Uy tín</th>
                      <th className="p-3 text-center">Năm</th>
                      <th className="p-3 text-center">Trích dẫn</th>
                      <th className="p-3 text-center">Điểm tin cậy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600 font-semibold">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Sách "Deep Medicine" (Eric Topol)</td>
                      <td className="p-3">Basic Books / Chuyên gia đầu ngành</td>
                      <td className="p-3 text-center">2019</td>
                      <td className="p-3 text-center text-teal-600">2,400+</td>
                      <td className="p-3 text-center text-indigo-600">9.5/10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Nature Medicine (Esteva et al.)</td>
                      <td className="p-3">Springer Nature / Tạp chí Q1 hàng đầu</td>
                      <td className="p-3 text-center">2017</td>
                      <td className="p-3 text-center text-teal-600">10,500+</td>
                      <td className="p-3 text-center text-indigo-600">10.0/10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">The Lancet Digital Health</td>
                      <td className="p-3">Elsevier / Thẩm định lâm sàng cực cao</td>
                      <td className="p-3 text-center">2020</td>
                      <td className="p-3 text-center text-teal-600">850+</td>
                      <td className="p-3 text-center text-indigo-600">9.5/10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">WHO Digital Health Strategy</td>
                      <td className="p-3">Tổ chức Y tế Thế giới / Chính thức</td>
                      <td className="p-3 text-center">2021</td>
                      <td className="p-3 text-center text-teal-600">Tài liệu gốc</td>
                      <td className="p-3 text-center text-indigo-600">9.8/10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">JMIR Medical Informatics</td>
                      <td className="p-3">JMIR Publications / Chuyên ngành Y số</td>
                      <td className="p-3 text-center">2022</td>
                      <td className="p-3 text-center text-teal-600">320+</td>
                      <td className="p-3 text-center text-indigo-600">9.0/10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <span className="text-[10px] text-slate-400 italic block leading-relaxed mt-1">
                * Toàn bộ 11 nguồn tài liệu được thẩm định nghiêm ngặt qua 5 tiêu chí: Uy tín tác giả, vị thế Nhà xuất bản khoa học, Phương pháp nghiên cứu thực nghiệm, Tần suất trích dẫn khoa học và Tính cập nhật.
              </span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 bg-slate-50/70 p-5 border border-slate-100 rounded-2xl">
            <h6 className="text-xs font-black text-indigo-900 uppercase tracking-widest font-sans border-b border-indigo-100/50 pb-2">
              💡 Bảng So sánh Kỹ nghệ Prompt & Kết quả Phản hồi từ AI
            </h6>
            
            <div className="space-y-4">
              {/* Task 1 */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-2.5 shadow-xs">
                <span className="text-xs font-black text-slate-800 uppercase tracking-wide block font-sans border-l-3 border-indigo-500 pl-2">
                  Tác vụ 1: Tóm tắt 5Vs của Big Data y khoa
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-100/30">
                    <span className="font-bold text-rose-800 block mb-1">Prompt Ban đầu (Chưa cải tiến):</span>
                    <p className="text-slate-600 italic">"Hãy tóm tắt về Big Data cho tôi."</p>
                  </div>
                  <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100/30">
                    <span className="font-bold text-emerald-800 block mb-1">Prompt Cải tiến (CLEAR/CRAC):</span>
                    <p className="text-slate-700 font-semibold italic">"Với vai trò là Chuyên gia phân tích dữ liệu y tế lớn, hãy tóm tắt các đặc tính cốt lõi 5Vs của Big Data dưới dạng bảng 2 cột rõ ràng, dễ hiểu cho sinh viên năm nhất ngành Y Dược."</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                  <span className="font-bold text-slate-800 block mb-1">Kết quả vượt trội từ AI:</span>
                  <p className="text-slate-600 text-justify leading-relaxed">AI xuất ra bảng 2 cột chi tiết định nghĩa chính xác 5 thuộc tính: Volume (Thể tích), Velocity (Tốc độ), Variety (Đa dạng), Veracity (Độ tin cậy), Value (Giá trị). Thông tin tập trung, trực quan, loại bỏ hoàn toàn các lỗi ảo giác và định hướng y học rõ ràng.</p>
                </div>
              </div>

              {/* Task 2 */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-2.5 shadow-xs">
                <span className="text-xs font-black text-slate-800 uppercase tracking-wide block font-sans border-l-3 border-indigo-500 pl-2">
                  Tác vụ 2: Giải thích Mạng nơ-ron nhân tạo (ANN)
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-100/30">
                    <span className="font-bold text-rose-800 block mb-1">Prompt Ban đầu (Chưa cải tiến):</span>
                    <p className="text-slate-600 italic">"Mạng nơ-ron nhân tạo là gì?"</p>
                  </div>
                  <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100/30">
                    <span className="font-bold text-emerald-800 block mb-1">Prompt Cải tiến (Chain-of-Thought):</span>
                    <p className="text-slate-700 font-semibold italic">"Hãy đóng vai giảng viên Công nghệ thông tin, giải thích cơ chế hoạt động của Mạng nơ-ron nhân tạo (ANN) thông qua ví dụ ẩn dụ cách bộ não nhận diện quả táo qua 3 bước suy luận Chain-of-Thought."</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                  <span className="font-bold text-slate-800 block mb-1">Kết quả vượt trội từ AI:</span>
                  <p className="text-slate-600 text-justify leading-relaxed">AI giải thích cấu trúc ANN bằng ẩn dụ quả táo (lớp đầu vào phân tích màu sắc/kích thước, lớp ẩn kết nối đặc trưng, lớp đầu ra đưa kết luận). Cách tiếp cận logic Chain-of-Thought giúp người học hiểu sâu nguyên lý cấu tạo mà không bị quá tải kiến thức kỹ thuật.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 bg-slate-50/70 p-5 border border-slate-100 rounded-2xl">
            <h6 className="text-xs font-black text-indigo-900 uppercase tracking-widest font-sans border-b border-indigo-100/50 pb-2">
              🤝 Không gian Cộng tác Đám mây & Phân công Công việc Nhóm
            </h6>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Trello */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-2 shadow-xs hover-lift">
                <span className="text-xs font-black text-indigo-950 uppercase tracking-wide block font-sans border-b border-slate-50 pb-1.5 flex items-center gap-1">
                  📋 Kanban Trello
                </span>
                <p className="text-xs text-slate-600 leading-relaxed text-justify font-semibold">
                  Thiết lập bảng làm việc cho 5 thành viên (Trưởng nhóm: Lưu Đức Anh). Sử dụng hệ thống nhãn dán phân loại màu sắc (Xanh: Đang tiến hành, Đỏ: Cần hoàn thành gấp, Xanh lá: Đã xong) kèm theo danh sách kiểm tra (checklists) và thời hạn hoàn thành (due-dates) nghiêm ngặt để kiểm soát vòng đời dự án.
                </p>
              </div>

              {/* Zoom */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-2 shadow-xs hover-lift">
                <span className="text-xs font-black text-indigo-950 uppercase tracking-wide block font-sans border-b border-slate-50 pb-1.5 flex items-center gap-1">
                  💬 Zoom Meetings
                </span>
                <p className="text-xs text-slate-600 leading-relaxed text-justify font-semibold">
                  Tổ chức các cuộc họp thảo luận dự án nhóm chất lượng cao 90 phút. Sử dụng chức năng chia sẻ màn hình trực tiếp để duyệt slide thuyết trình y khoa, kích hoạt các phòng thảo luận nhóm phụ (Breakout Rooms) để phân chia cặp viết nội dung, và lưu biên bản họp tự động thông qua AI Companion.
                </p>
              </div>

              {/* Google Docs */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-2 shadow-xs hover-lift">
                <span className="text-xs font-black text-indigo-950 uppercase tracking-wide block font-sans border-b border-slate-50 pb-1.5 flex items-center gap-1">
                  📝 Google Docs
                </span>
                <p className="text-xs text-slate-600 leading-relaxed text-justify font-semibold">
                  Đồng soạn thảo trực tiếp kịch bản video thuyết trình về Rối loạn lipid máu. Kích hoạt tính năng đóng góp ý kiến (Suggesting Mode) để chỉnh sửa chéo nội dung lâm sàng, bình luận góp ý (Comments) tại từng dòng và theo dõi chặt chẽ lịch sử phiên bản (Version History) để tránh mất mát dữ liệu nghiên cứu.
                </p>
              </div>

              {/* Google Drive */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-2 shadow-xs hover-lift">
                <span className="text-xs font-black text-indigo-950 uppercase tracking-wide block font-sans border-b border-slate-50 pb-1.5 flex items-center gap-1">
                  ☁️ Google Drive
                </span>
                <p className="text-xs text-slate-600 leading-relaxed text-justify font-semibold">
                  Khởi tạo không gian lưu trữ phân cấp khoa học cho dự án theo quy chuẩn đặt tên nhất quán. Thiết lập phân quyền truy cập thông minh cho các thành viên và kích hoạt xác thực hai yếu tố (2FA) bảo mật tuyệt đối để bảo vệ các tài liệu nghiên cứu y khoa quan trọng của nhóm.
                </p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 bg-slate-50/70 p-5 border border-slate-100 rounded-2xl">
            <h6 className="text-xs font-black text-indigo-900 uppercase tracking-widest font-sans border-b border-indigo-100/50 pb-2">
              🌱 Sản phẩm Sáng tạo Truyền thông Y học & Thiết kế Canva
            </h6>
            
            <div className="space-y-4">
              {/* Blog Preview */}
              <div className="bg-white p-5 rounded-xl border border-slate-100 space-y-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="text-[10px] uppercase font-black text-indigo-600 tracking-wider font-sans">
                    Xem trước bài viết Blog hoàn thiện
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold font-sans">Đăng tải: 2026</span>
                </div>
                <h5 className="text-slate-900 text-sm sm:text-base font-black font-sans leading-snug">
                  Sống Xanh trong Kỷ nguyên Số: Nhìn nhận Dấu chân Carbon từ Trí tuệ Nhân tạo
                </h5>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-semibold italic">
                  "Trong thời đại công nghệ số bùng nổ, chúng ta say sưa với sức mạnh của AI mà quên mất rằng việc huấn luyện một mô hình ngôn ngữ lớn có thể tiêu thụ hàng triệu lít nước và phát thải lượng carbon khổng lồ. Ước tính, mỗi hình ảnh do trí tuệ nhân tạo Sora 2 tạo ra tiêu tốn 1 kWh năng lượng điện. Tại Việt Nam, rác thải công nghệ (e-waste) dự kiến sẽ vượt quá 250.000 tấn vào năm 2025 theo chuẩn quy định EPR. Với tư cách là những Dược sĩ số tương lai, chúng tôi kêu gọi cộng đồng sinh viên thực hành sống xanh số: Tắt các thiết bị ngoại vi khi không hoạt động, cài đặt bộ máy tìm kiếm Ecosia xanh, và mang rác thải điện tử đến các điểm thu gom miễn phí tại 17 Trung Yên 3 (Hà Nội) hoặc 82 Bà Huyện Thanh Quan (TP.HCM)..."
                </p>
              </div>

              {/* Infographic Design Rules */}
              <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/30 space-y-2">
                <span className="text-xs font-black text-indigo-900 uppercase tracking-wide block font-sans">
                  📐 Tiêu chuẩn Thiết kế Canva Infographic đã ứng dụng:
                </span>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4 font-semibold leading-relaxed">
                  <li><strong className="text-slate-900">Màu sắc (Color Palette):</strong> Sử dụng màu xanh lá đậm kết hợp với trắng làm chủ đạo để truyền tải thông điệp sinh thái tự nhiên và tăng độ tương phản đọc.</li>
                  <li><strong className="text-slate-900">Trọng lượng thị giác (Visual Weight):</strong> Bố cục 3 phần rõ ràng, sử dụng các số liệu carbon kích thước lớn để thu hút ánh mắt người đọc ngay từ cái nhìn đầu tiên.</li>
                  <li><strong className="text-slate-900">Nội dung Y học:</strong> Lồng ghép kiến thức chuyển đổi trách nhiệm mở rộng của nhà sản xuất (EPR) trong ngành dược để tăng giá trị thực tiễn.</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4 bg-slate-50/70 p-5 border border-slate-100 rounded-2xl">
            <h6 className="text-xs font-black text-indigo-900 uppercase tracking-widest font-sans border-b border-indigo-100/50 pb-2">
              ⚖️ Bộ nguyên tắc Đạo đức AI "7 Chữ Vàng" cho Dược sĩ Số tương lai
            </h6>
            
            {/* 7 Gold Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { num: "1", title: "SỨC KHỎE TRÊN HẾT", en: "Patient Health First", desc: "Đạo đức lâm sàng là trên hết. AI chỉ là công cụ hỗ trợ, quyết định cuối cùng phải đặt lợi ích sức khỏe và an toàn sinh mạng bệnh nhân làm trọng tâm." },
                { num: "2", title: "MINH BẠCH NGUỒN GỐC", en: "Transparency", desc: "Luôn khai báo rõ ràng mức độ can thiệp của AI vào báo cáo chuyên môn. Trích dẫn nguồn tài liệu gốc đầy đủ bằng Zotero/Mendeley." },
                { num: "3", title: "KIỂM CHỨNG CHÉO", en: "Cross-verification", desc: "Không bao giờ tin tưởng tuyệt đối vào kết quả AI. Bắt buộc đối soát chéo lâm sàng với hướng dẫn điều trị chính thức của Bộ Y tế Việt Nam (QĐ 361)." },
                { num: "4", title: "BẢO MẬT DỮ LIỆU", en: "Data Privacy", desc: "Tuân thủ tuyệt đối quy định an toàn thông tin y khoa của bệnh nhân. Tránh đưa thông tin cá nhân hay bệnh án nhạy cảm lên các mô hình AI công cộng." },
                { num: "5", title: "CẦM LÁI TƯ DUY", en: "Human-in-the-loop", desc: "Luôn làm chủ tư duy chuyên môn. Sử dụng tri thức cá nhân để thẩm định, phát hiện và hiệu đính các lỗi ảo giác nguy hiểm (như từ ngoại lai tiếng Trung)." },
                { num: "6", title: "CẬP NHẬT LIÊN TỤC", en: "Continuous Learning", desc: "Liên tục học tập nâng cấp kỹ năng số và hướng dẫn điều trị y học mới nhất để làm chủ các công cụ hỗ trợ số hóa hiện đại." },
                { num: "7", title: "SỬ DỤNG CHỌN LỌC", en: "Selective Adoption", desc: "Lựa chọn mô hình AI tối ưu cho từng tác vụ chuyên môn (ví dụ Perplexity cho tra cứu học thuật, Gemini cho thiết kế prompt)." }
              ].map((rule) => (
                <div key={rule.num} className="bg-white p-4 rounded-xl border border-slate-100 space-y-1.5 shadow-xs hover-lift">
                  <div className="flex items-center gap-2">
                    <span className="w-5.5 h-5.5 rounded-lg bg-gradient-to-tr from-indigo-600 to-teal-500 flex items-center justify-center text-white text-[10px] font-black shrink-0">
                      {rule.num}
                    </span>
                    <span className="text-slate-900 text-xs font-black font-sans leading-tight">
                      {rule.title}
                    </span>
                  </div>
                  <span className="text-[9px] uppercase font-extrabold text-teal-600 tracking-wider block font-sans">
                    {rule.en}
                  </span>
                  <p className="text-[11px] text-slate-500 leading-relaxed text-justify font-semibold">
                    {rule.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Case Study alert */}
            <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl space-y-1 mt-2">
              <span className="text-[10px] uppercase font-black text-amber-800 tracking-wider block font-sans">
                ⚠️ Đối soát Ca lâm sàng Viêm cột sống dính khớp (AS):
              </span>
              <p className="text-xs text-amber-950 font-semibold leading-relaxed text-justify">
                Đã ứng dụng phác đồ chuẩn y khoa đối chiếu trực tiếp giữa EULAR 2022 và Hướng dẫn Bộ Y tế Việt Nam. Phát hiện và xử lý thành công lỗi ảo giác lâm sàng nghiêm trọng của AI (chèn ký tự ngoại lai tiếng Trung "口服" trong phác đồ dịch thuật thuốc ức chế TNF sinh học), bảo đảm an toàn y học tuyệt đối.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen gradient-bg-elegant text-[#1f2937] relative overflow-hidden">
      {/* Fixed Background Image - Elegant, Lightweight & High Performance */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src="/images/bg_nature.png" 
          alt="Positano Amalfi Coast Background" 
          className="w-full h-full object-cover opacity-20 filter saturate-75"
        />
        {/* Soft color overlay to harmonize with the Indigo/Teal theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-white/80 to-teal-50/40" />
      </div>

      {/* 1. Desktop Persistent Left Sidebar Navigation */}
      <aside className="hidden xl:flex flex-col w-[280px] glass-panel-indigo border-r border-indigo-100/30 h-screen sticky top-0 py-8 justify-between shrink-0 z-30 shadow-xl shadow-indigo-100/10">
        <div className="flex flex-col">
          {/* Sidebar Header Brand Logo */}
          <div className="px-6 pb-6 border-b border-indigo-100/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-teal-500 flex items-center justify-center text-white font-extrabold shadow-md shadow-indigo-200">
                DS
              </span>
              <span className="text-indigo-900 text-base font-extrabold tracking-tight block font-sans">
                PORTFOLIO SỐ
              </span>
            </div>
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block pl-0.5">
              LƯU ĐỨC ANH
            </span>
            <span className="text-[10px] text-indigo-950/60 font-semibold block mt-1 pl-0.5">
              Sinh viên Dược K47 • VNU-UMP
            </span>
          </div>

          {/* Sidebar Navigation Tree */}
          <nav className="mt-6 flex flex-col gap-1 px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  currentSection === link.id ? 'active' : ''
                }`}
              >
                {link.id === 'gioi-thieu' && <GraduationCap className="w-4.5 h-4.5 text-indigo-500" />}
                {link.id === 'du-an' && <FileText className="w-4.5 h-4.5 text-indigo-500" />}
                {link.id === 'tong-ket' && <BookOpen className="w-4.5 h-4.5 text-indigo-500" />}
                {link.label}
              </a>
            ))}

            {/* Nested Project Structure inside sidebar */}
            <div className="mt-4 pl-3 border-l border-indigo-100/50 ml-6 flex flex-col gap-1.5">
              <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-800/40 block py-1 px-2">
                Bài tập thực hành
              </span>
              {portfolioProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => handleSidebarProjectClick(idx)}
                  className={`text-left text-xs font-semibold py-2 px-2.5 rounded-lg transition-all ${
                    activeTab === idx 
                      ? 'text-indigo-700 bg-indigo-50/70 font-extrabold border-r-2 border-indigo-500 shadow-sm' 
                      : 'text-slate-500 hover:text-indigo-600 hover:bg-white/40'
                  }`}
                >
                  Bài {idx + 1}: {proj.label.split(':')[1]?.trim() || proj.label}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Sidebar Footer Details */}
        <div className="px-6 pt-4 border-t border-indigo-100/30 text-[11px] text-slate-500 space-y-2 bg-indigo-50/20 rounded-b-2xl mx-3">
          <p className="font-extrabold text-indigo-900 tracking-wide uppercase text-[9px]">Liên hệ hỗ trợ:</p>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="text-indigo-400 font-bold">SĐT:</span>
            <span>+84 832 581 837</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <Mail className="w-3 h-3 text-indigo-400 shrink-0" />
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=22100187@vnu.edu.vn" target="_blank" rel="noopener noreferrer" className="truncate font-semibold text-indigo-600 hover:underline">
              22100187@vnu.edu.vn
            </a>
          </div>
        </div>
      </aside>

      {/* Main Right Scrollable Layout */}
      <div className="flex-1 min-w-0 flex flex-col relative z-10">
        {/* 2. Top Navigation Bar (Shown on Mobile/Tablet, hides nav on desktop) */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-indigo-100/30 px-4 sm:px-6 py-4 flex items-center justify-between xl:justify-end">
          <div className="flex items-center gap-2 xl:hidden">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-teal-500 flex items-center justify-center text-white font-extrabold text-xs shadow-md">
              DS
            </span>
            <span className="text-indigo-900 font-extrabold text-sm sm:text-base tracking-tight font-sans">
              PORTFOLIO • LƯU ĐỨC ANH
            </span>
          </div>

          {/* Top menu for screens < 1280px */}
          <div className="hidden lg:flex xl:hidden items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-top-link text-xs sm:text-sm font-bold py-1 transition-all ${
                  currentSection === link.id ? 'active' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=22100187@vnu.edu.vn', '_blank')}
              className="gradient-button text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 active:scale-95 cursor-pointer shadow-md"
            >
              <Mail className="w-3.5 h-3.5" /> Gửi VNU Gmail
            </button>

            {/* Mobile Hamburger menu toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="xl:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </header>

        {/* Mobile menu drawer overlay */}
        {menuOpen && (
          <div
            className="xl:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile menu drawer */}
        <div
          className={`xl:hidden fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-xs bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-16 px-6 pb-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-teal-500 flex items-center justify-center text-white font-extrabold text-xs shadow-md">
                  DS
                </span>
                <span className="text-indigo-900 font-extrabold text-sm">PORTFOLIO</span>
              </div>
              <button 
                onClick={() => setMenuOpen(false)} 
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
            
            <nav className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-bold text-slate-700 py-3 border-b border-slate-50 flex items-center gap-2 ${
                    currentSection === link.id ? 'text-indigo-600 border-b-2 border-indigo-500/40' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-2 bg-indigo-50/10 p-4 rounded-xl">
              <p className="font-extrabold text-indigo-900 text-xs uppercase tracking-wide">Lưu Đức Anh</p>
              <p className="font-semibold text-slate-600">Trường Đại học Y Dược, ĐHQGHN</p>
              <p className="text-slate-600">SĐT: +84 832 581 837</p>
              <p className="text-indigo-600 font-bold truncate">Gmail: 22100187@vnu.edu.vn</p>
            </div>
          </div>
        </div>

        {/* 3. Header Banner (Aristotle Banner with Static Background inside) */}
        <section className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full overflow-hidden flex items-center justify-center dark-gradient-banner">
          {/* Static nature background inside header banner */}
          <img 
            src="/images/banner_bg.png" 
            alt="Misty Valley Bridge Banner Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Aristotle Google Sites dark semi-transparent banner overlay */}
          <div className="absolute inset-0 bg-[#0f172a]/65 z-10" />

          {/* Banner Contents */}
          <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl">
            <h2 className="text-white text-[13px] sm:text-[16px] md:text-[18px] font-bold tracking-widest uppercase drop-shadow-md text-glow bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent font-sans">
              Hành Trình Trải Nghiệm & Kỹ Năng Số Học Thuật
            </h2>
            
            {/* The main title */}
            <h1 className="text-white text-[32px] sm:text-[42px] md:text-[52px] font-black leading-none uppercase mt-3 drop-shadow-lg tracking-tight font-sans">
              Lưu Đức Anh
            </h1>

            <p className="text-indigo-100 text-xs sm:text-sm md:text-base mt-3 max-w-2xl mx-auto font-semibold drop-shadow-sm">
              Sinh viên Dược năm 4 • VNU University of Medicine and Pharmacy
            </p>

            {/* Highlight Accent Line below title */}
            <div className="mt-5 bg-gradient-to-r from-indigo-500 via-teal-400 to-indigo-500 h-2 w-32 mx-auto rounded-full shadow-lg shadow-indigo-500/30" />
          </div>
        </section>

        {/* 4. Page: Lời mở đầu (Giới thiệu) - Elegant colorful background */}
        <section id="gioi-thieu" className="py-16 sm:py-20 px-6 sm:px-10 md:px-16 max-w-5xl mx-auto w-full relative">
          <div className="text-center mb-12">
            <h3 className="academic-section-title uppercase">
              Lời Mở Đầu
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch relative z-10">
            {/* Left side text intro */}
            <div className="md:col-span-7 space-y-5 flex flex-col justify-between">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-100/30 shadow-md space-y-4">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify font-medium">
                  Chào mừng bạn đến với <strong>Portfolio Kỹ năng số</strong> của tôi. Đây là nơi lưu trữ, phản ánh toàn bộ hành trình học tập, trải nghiệm và tích lũy năng lực số thông qua chuỗi bài tập thực tế về công nghệ, quản trị dữ liệu và trí tuệ nhân tạo.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify font-medium">
                  Trong kỷ nguyên y tế thông minh, năng lực số không chỉ còn là công cụ hỗ trợ mà đã trở thành năng lực cốt lõi giúp các Dược sĩ tương lai kết nối hiệu quả giữa y học học thuật thực chứng với thực tiễn chăm sóc sức khỏe lâm sàng.
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-r from-indigo-50/80 to-teal-50/80 border border-indigo-100/50 rounded-2xl space-y-2 shadow-xs">
                <span className="text-xs font-black text-indigo-900 uppercase tracking-widest block font-sans">
                  Mục Tiêu Portfolio
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                  Minh chứng năng lực công nghệ đã được chuẩn hóa thông qua 6 module chuyên môn học thuật; lưu trữ các sản phẩm số cá nhân giúp dễ dàng chia sẻ, cộng tác khoa học và định hướng chuyển đổi số y tế toàn diện.
                </p>
              </div>
            </div>

            {/* Right side academic cards grid */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {/* Profile Card 1 */}
              <div className="glass-panel hover-lift rounded-2xl p-5 border border-indigo-100/20 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-3 text-indigo-900 font-extrabold text-sm mb-2 font-sans">
                  <span className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 shadow-inner">
                    <GraduationCap className="w-5 h-5 text-indigo-600" />
                  </span>
                  Bản thân & Chuyên ngành
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  <strong>LƯU ĐỨC ANH</strong>, sinh viên Dược năm cuối tại Trường Đại học Y Dược, Đại học Quốc gia Hà Nội (VNU-UMP).
                </p>
              </div>

              {/* Profile Card 2 */}
              <div className="glass-panel hover-lift rounded-2xl p-5 border border-indigo-100/20 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-3 text-indigo-900 font-extrabold text-sm mb-2 font-sans">
                  <span className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0 shadow-inner">
                    <Layers className="w-5 h-5 text-teal-600" />
                  </span>
                  Lĩnh vực quan tâm
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Y học số, trí tuệ nhân tạo (AI/Machine Learning) trong sàng lọc & thiết kế dược chất, tự động hóa lâm sàng bệnh viện.
                </p>
              </div>

              {/* Profile Card 3 */}
              <div className="glass-panel hover-lift rounded-2xl p-5 border border-indigo-100/20 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-3 text-indigo-900 font-extrabold text-sm mb-2 font-sans">
                  <span className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 shadow-inner">
                    <CheckSquare className="w-5 h-5 text-purple-600" />
                  </span>
                  Kỹ năng cốt lõi
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Lưu trữ khoa học, truy vấn dữ liệu y học nâng cao, Prompt CLEAR/CRAC, cộng tác trực tuyến trực quan, sáng tạo nội dung số AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Page: Bài tập thực hành (Dự án) - Transparent backdrop to show glowing orbs */}
        <section id="du-an" className="py-16 sm:py-20 px-4 sm:px-8 md:px-12 bg-transparent relative z-10">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-12">
              <h3 className="academic-section-title uppercase">
                Bài Tập Thực Hành
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mt-3 font-semibold font-sans">
                Hệ thống 6 bài tập lớn rèn luyện năng lực số chuẩn y khoa được thực hiện chi tiết theo quy trình nghiên cứu học thuật.
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/70 backdrop-blur-md p-1.5 rounded-2xl border border-indigo-100/30 inline-flex items-center gap-1.5 shadow-sm">
                <button
                  onClick={() => setViewMode('gallery')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    viewMode === 'gallery'
                      ? 'bg-gradient-to-r from-indigo-600 to-teal-500 text-white shadow-md'
                      : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50/50'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  Chế độ Gallery (Notion)
                </button>
                <button
                  onClick={() => setViewMode('dashboard')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    viewMode === 'dashboard'
                      ? 'bg-gradient-to-r from-indigo-600 to-teal-500 text-white shadow-md'
                      : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50/50'
                  }`}
                >
                  <Columns className="w-4 h-4" />
                  Chế độ Dashboard (Phân tích)
                </button>
              </div>
            </div>

            {viewMode === 'gallery' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioProjects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="glass-panel hover-lift rounded-2xl border border-indigo-100/30 overflow-hidden flex flex-col justify-between h-full shadow-md hover:border-indigo-300 transition-all duration-300"
                  >
                    <div>
                      {/* Cover Image */}
                      <div className="h-44 w-full overflow-hidden bg-slate-100 relative group border-b border-indigo-50/20">
                        <img
                          src={proj.coverImage}
                          alt={proj.label}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="text-[9px] uppercase font-black text-indigo-700 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg tracking-widest font-sans border border-indigo-100/30 shadow-sm">
                            Bài {idx + 1}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 space-y-3">
                        <h4 className="text-slate-900 text-base font-black font-sans leading-snug line-clamp-2">
                          {proj.fullName}
                        </h4>
                        
                        {/* Skills badges */}
                        <div className="flex flex-wrap gap-1">
                          {proj.skills.slice(0, 3).map((skill, sIdx) => (
                            <span key={sIdx} className={getBadgeStyleClass(sIdx) + " text-[9px] px-2 py-0.5"}>
                              {skill}
                            </span>
                          ))}
                          {proj.skills.length > 3 && (
                            <span className="text-[9px] uppercase font-extrabold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                              +{proj.skills.length - 3}
                            </span>
                          )}
                        </div>

                        <p className="text-slate-600 text-xs leading-relaxed text-justify line-clamp-3 font-semibold">
                          {proj.objective}
                        </p>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 bg-slate-50/50 rounded-b-2xl">
                      <button
                        onClick={() => {
                          setActiveTab(idx);
                          setViewMode('dashboard');
                          setTimeout(() => {
                            document.getElementById('du-an')?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }}
                        className="text-xs font-extrabold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" /> Xem chi tiết
                      </button>
                      
                      {proj.fileUrl && (
                        <a
                          href={proj.fileUrl}
                          download={proj.fileName}
                          className="text-[10px] uppercase font-bold text-teal-600 hover:text-teal-800 transition-colors flex items-center gap-1 font-sans"
                        >
                          <FileDown className="w-3.5 h-3.5" /> Tải báo cáo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass-panel rounded-3xl border border-indigo-100/30 shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[580px]">
                {/* Left Selector Sidebar */}
                <div className="w-full md:w-[260px] bg-slate-50/50 border-r border-indigo-100/20 flex flex-col shrink-0">
                  <div className="p-5 border-b border-indigo-100/20 bg-indigo-50/20">
                    <span className="text-xs font-black text-indigo-950 uppercase tracking-widest block font-sans">
                      Danh Sách Bài Học
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-col p-3 gap-2">
                    {portfolioProjects.map((proj, idx) => (
                      <button
                        key={proj.id}
                        onClick={() => handleSidebarProjectClick(idx)}
                        className={`text-left w-full md:shrink flex items-center gap-3 px-3 py-3 rounded-xl text-xs font-bold transition-all active:scale-[0.98] ${
                          activeTab === idx
                            ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-200'
                            : 'text-slate-600 hover:text-indigo-700 hover:bg-white bg-white/40'
                        }`}
                      >
                        <span className={`w-5.5 h-5.5 rounded-lg flex items-center justify-center text-[10px] font-extrabold shrink-0 ${
                          activeTab === idx ? 'bg-white text-indigo-700' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="truncate font-sans">{proj.label.split(':')[0]}</span>
                        <ChevronRight className={`w-4 h-4 ml-auto hidden md:block ${
                          activeTab === idx ? 'opacity-100' : 'opacity-30'
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Detail Pane - Max height and scrollable for clean dashboard styling */}
                <div 
                  id="dashboard-detail-pane"
                  className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white relative md:max-h-[720px] overflow-y-auto scroll-smooth custom-scrollbar"
                >
                  <div className="space-y-6">
                    {/* Title of exercise & Autoscroll Controller */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-4 border-b border-slate-100">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[9px] uppercase font-black text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-full tracking-widest font-sans border border-indigo-100/50">
                            Bài Tập Số {activeTab + 1}
                          </span>
                          <span className="text-[9px] uppercase font-black text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full tracking-widest font-sans border border-teal-100/50">
                            Giáo Trình VNU-UMP
                          </span>
                        </div>
                        <h4 className="text-slate-900 text-xl sm:text-2xl font-black font-sans leading-tight">
                          {portfolioProjects[activeTab].fullName}
                        </h4>
                      </div>
                      
                      {/* Autoscroll Toggle Control */}
                      <div className="shrink-0 flex items-center gap-2 bg-slate-50 border border-slate-200/60 p-1.5 rounded-xl shadow-2xs self-start sm:self-auto">
                        <button
                          onClick={() => setAutoScrollActive(!autoScrollActive)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 ${
                            autoScrollActive
                              ? 'bg-red-500 text-white shadow-xs animate-pulse'
                              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                          }`}
                          title={autoScrollActive ? "Tạm dừng cuộn tự động" : "Bật cuộn tự động bài tập"}
                        >
                          {autoScrollActive ? (
                            <>
                              <Pause className="w-3 h-3 fill-current" />
                              Dừng cuộn
                            </>
                          ) : (
                            <>
                              <Play className="w-3 h-3 fill-current" />
                              Cuộn tự động
                            </>
                          )}
                        </button>
                        
                        {autoScrollActive && (
                          <button
                            onClick={() => setAutoScrollSpeed(autoScrollSpeed === 1 ? 2 : autoScrollSpeed === 2 ? 3 : 1)}
                            className="bg-white hover:bg-slate-100 text-indigo-700 border border-slate-200/80 px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase transition-all cursor-pointer active:scale-95"
                            title="Thay đổi tốc độ cuộn"
                          >
                            Tốc độ: {autoScrollSpeed === 1 ? '1x' : autoScrollSpeed === 2 ? '1.5x' : '2x'}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Core skills badges */}
                    {portfolioProjects[activeTab].skills && (
                      <div className="flex flex-wrap gap-2 pt-1 border-b border-slate-100 pb-4">
                        {portfolioProjects[activeTab].skills.map((skill, skillIdx) => (
                          <span key={skillIdx} className={getBadgeStyleClass(skillIdx)}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Objective (Mục tiêu) */}
                    <div className="space-y-2">
                      <h5 className="text-indigo-900 text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 font-sans">
                        <span className="w-1.5 h-3 bg-gradient-to-t from-indigo-600 to-teal-500 rounded-full inline-block" />
                        Mục tiêu bài tập
                      </h5>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify font-medium">
                        {portfolioProjects[activeTab].objective}
                      </p>
                    </div>

                    {/* Detailed Summary (Tóm tắt quá trình thực hiện chuyên sâu) */}
                    {portfolioProjects[activeTab].detailedSummary && (
                      <div className="space-y-2 bg-gradient-to-r from-indigo-50/70 to-indigo-50/10 p-5 border-l-4 border-indigo-600 rounded-r-2xl shadow-xs">
                        <h5 className="text-indigo-900 text-xs sm:text-sm font-extrabold uppercase tracking-widest font-sans">
                          Tóm tắt quá trình thực hiện
                        </h5>
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify italic font-semibold">
                          "{portfolioProjects[activeTab].detailedSummary}"
                        </p>
                      </div>
                    )}

                    {/* Implementation Process (Quy trình thực hiện) */}
                    <div className="space-y-2">
                      <h5 className="text-indigo-900 text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 font-sans">
                        <span className="w-1.5 h-3 bg-gradient-to-t from-indigo-600 to-teal-500 rounded-full inline-block" />
                        Quy trình thực hiện chi tiết
                      </h5>
                      {renderDetailedProcess(activeTab)}
                    </div>

                    {/* Rubric Presentation Section */}
                    <div className="space-y-2 pt-1">
                      <h5 className="text-indigo-900 text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 font-sans">
                        <span className="w-1.5 h-3 bg-gradient-to-t from-indigo-600 to-teal-500 rounded-full inline-block" />
                        Trình bày chi tiết & Kết quả học thuật (Theo Rubric)
                      </h5>
                      {renderRubricPresentation(activeTab)}
                    </div>

                    {/* Product Output Details */}
                    <div className="space-y-2 pt-1">
                      <h5 className="text-indigo-900 text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 font-sans">
                        <span className="w-1.5 h-3 bg-gradient-to-t from-indigo-600 to-teal-500 rounded-full inline-block" />
                        Sản phẩm đầu ra khoa học
                      </h5>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-emerald-800 bg-emerald-50/80 p-4 rounded-xl border border-emerald-100/50 shadow-xs">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div className="font-semibold">
                          <span className="font-black text-emerald-950">Đã lưu trữ:</span> {portfolioProjects[activeTab].product}
                        </div>
                      </div>
                    </div>


                  </div>

                  {/* Previous & Next Assignment navigation buttons for enhanced mobile UX (starting from Bài 2) */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4 w-full flex-wrap sm:flex-nowrap">
                    {activeTab > 0 ? (
                      <button
                        onClick={() => {
                          setActiveTab(activeTab - 1);
                          document.getElementById('du-an')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs transition-all border border-indigo-100/50 shadow-xs cursor-pointer active:scale-95 text-left max-w-full sm:max-w-[48%] w-full sm:w-auto"
                      >
                        <ChevronRight className="w-4.5 h-4.5 rotate-180 shrink-0 text-indigo-500 animate-pulse" />
                        <div className="truncate">
                          <span className="text-[9px] uppercase block tracking-widest text-indigo-400 font-black">Bài trước đó</span>
                          Bài {activeTab}: {portfolioProjects[activeTab - 1].label.split(':')[1]?.trim() || portfolioProjects[activeTab - 1].label}
                        </div>
                      </button>
                    ) : (
                      <div className="hidden sm:block" /> /* Empty spacer for layout */
                    )}

                    {activeTab < 5 && (
                      <button
                        onClick={() => {
                          setActiveTab(activeTab + 1);
                          document.getElementById('du-an')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold text-xs transition-all hover:shadow-md hover:shadow-indigo-200/50 cursor-pointer active:scale-95 text-left max-w-full sm:max-w-[48%] w-full sm:w-auto ml-auto"
                      >
                        <div className="truncate flex-1">
                          <span className="text-[9px] uppercase block tracking-widest text-teal-200 font-black">Bài tiếp theo</span>
                          Bài {activeTab + 2}: {portfolioProjects[activeTab + 1].label.split(':')[1]?.trim() || portfolioProjects[activeTab + 1].label}
                        </div>
                        <ChevronRight className="w-4.5 h-4.5 shrink-0 text-white/90 animate-pulse" />
                      </button>
                    )}
                  </div>

                  {/* Call-to-action details */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-5 w-full">
                    <span className="text-[11px] text-slate-400 font-bold md:max-w-[40%] leading-relaxed">
                      * Mọi báo cáo và hình ảnh đều được trích dẫn trực tiếp từ sản phẩm gốc của sinh viên Lưu Đức Anh.
                    </span>
                    
                    <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                      {portfolioProjects[activeTab].fileUrl && (
                        <a
                          href={portfolioProjects[activeTab].fileUrl}
                          download={portfolioProjects[activeTab].fileName}
                          className="gradient-button text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 active:scale-95 cursor-pointer shadow-md"
                        >
                          <FileDown className="w-4.5 h-4.5 shrink-0" /> Tải xuống báo cáo (.{portfolioProjects[activeTab].fileType})
                        </a>
                      )}

                      <button
                        onClick={() =>
                          window.open(
                            `https://mail.google.com/mail/?view=cm&fs=1&to=22100187@vnu.edu.vn&su=Trao đổi về: ${portfolioProjects[activeTab].label}`,
                            '_blank'
                          )
                        }
                        className="outline-button text-indigo-700 text-xs sm:text-sm font-bold px-5 py-3.5 rounded-xl shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer"
                      >
                        <Mail className="w-4.5 h-4.5 text-indigo-500 shrink-0" /> Liên hệ VNU Gmail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 6. Page: Tổng kết & Suy ngẫm - Elegant white layout with neon badges */}
        <section id="tong-ket" className="py-16 sm:py-20 px-6 sm:px-10 md:px-16 max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-12">
            <h3 className="academic-section-title uppercase">
              Tổng Kết & Suy Ngẫm
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-3 font-semibold font-sans">
              Đúc kết chặng đường rèn luyện và xây dựng tư duy "Dược sĩ số" vững vàng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Column 1: Gains */}
            <div className="glass-panel hover-lift rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="flex items-center gap-3 text-indigo-900 font-extrabold text-sm border-b border-slate-100 pb-3 font-sans">
                <span className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 shadow-inner">
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                </span>
                Kỹ Năng Số Đạt Được
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify font-medium">
                Tôi đã hoàn thiện kỹ năng quản lý tệp tin hệ điều hành; khai thác và thẩm định chất lượng nguồn thông tin y khoa qua Google Scholar, Elicit; làm chủ kỹ nghệ prompt CLEAR/CRAC cho GenAI; cộng tác trực tuyến trực quan qua Trello, Google Docs và Zoom; thiết kế nội dung y học số AI thông qua Canva, Nano Banana; thẩm định các ca lâm sàng nâng cao với sự trợ giúp chọn lọc của Perplexity và Zotero/Mendeley.
              </p>
            </div>

            {/* Column 2: Self growth */}
            <div className="glass-panel hover-lift rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="flex items-center gap-3 text-indigo-900 font-extrabold text-sm border-b border-slate-100 pb-3 font-sans">
                <span className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Layers className="w-5 h-5 text-teal-600" />
                </span>
                Sự Phát Triển Bản Thân
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify font-medium">
                Hành trình này đã nâng tầm tư duy của tôi vượt lên trên một sinh viên Dược lâm sàng truyền thống. Tôi nhận thức rõ ranh giới và cách tích hợp công nghệ số vào chăm sóc sức khỏe. Việc ứng dụng công nghệ trực tuyến giúp nâng cao hiệu suất cộng tác nghiên cứu, gạt bỏ rào cản địa lý và đẩy mạnh tốc độ xử lý dữ liệu học tập đáng kể.
              </p>
            </div>

            {/* Column 3: Challenges & Resolution */}
            <div className="glass-panel hover-lift rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="flex items-center gap-3 text-indigo-900 font-extrabold text-sm border-b border-slate-100 pb-3 font-sans">
                <span className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 shadow-inner">
                  <AlertTriangle className="w-5 h-5 text-purple-600" />
                </span>
                Thách Thức & Giải Pháp
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify font-medium">
                Thách thức lớn nhất là nhận diện lỗi ảo giác y khoa (lỗi dịch thuật, ký tự ngoại lai "口服") từ AI tạo sinh. Tôi đã xây dựng và áp dụng bộ nguyên lý <strong>"7 Chữ Vàng cho Dược sĩ tương lai"</strong>: Sức khỏe trên hết - Minh bạch - Kiểm chứng chéo - Bảo mật - Cầm lái tư duy - Cập nhật liên tục - Sử dụng chọn lọc để luôn đảm bảo tính an toàn học thuật cao nhất.
              </p>
            </div>
          </div>

          {/* Action row at bottom of conclusion */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border border-indigo-950 p-8 rounded-3xl shadow-xl text-center space-y-4 relative overflow-hidden">
            {/* Background absolute glowing blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />

            <span className="text-teal-400 text-xs font-black uppercase tracking-widest block font-sans">
              Dược Sĩ Số VNU-UMP • Lộ Trình Phát Triển 2026
            </span>
            <p className="text-indigo-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
              Trang bị tư duy công nghệ bền vững, kỹ năng cộng tác thông minh, sẵn sàng hành trang bước vào giai đoạn chuyển đổi số toàn diện của ngành y tế nước nhà.
            </p>
            <div className="pt-3 flex justify-center gap-4 flex-wrap sm:flex-nowrap relative z-10">
              <a
                href="#du-an"
                className="gradient-button text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md active:scale-95"
              >
                Khám phá 6 Bài học số
              </a>
              <a
                href="#gioi-thieu"
                className="text-white hover:text-indigo-200 text-xs font-bold py-3 px-6 rounded-full transition-all border border-indigo-700/50 bg-indigo-900/40 backdrop-blur-xs"
              >
                Quay lại đầu trang
              </a>
            </div>
          </div>
        </section>

        {/* 7. Academic Footer */}
        <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6 text-center text-slate-400 relative z-10">
          <div className="max-w-5xl mx-auto space-y-4">
            <p className="text-sm font-black uppercase tracking-widest text-indigo-400 font-sans">
              Lưu Đức Anh • Dược Sĩ Số Tương Lai
            </p>
            <p className="text-xs text-slate-400 font-semibold max-w-xl mx-auto font-sans">
              Sinh viên Dược năm cuối (K47) • Trường Đại học Y Dược, Đại học Quốc gia Hà Nội
            </p>
            <p className="text-xs text-slate-500 max-w-2xl mx-auto font-medium">
              SĐT: +84 832 581 837 &nbsp;|&nbsp; VNU Gmail: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=22100187@vnu.edu.vn" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-bold hover:underline">22100187@vnu.edu.vn</a> &nbsp;|&nbsp; Địa chỉ học tập: VNU-UMP, Cầu Giấy, Hà Nội
            </p>
            <div className="pt-6 text-[10px] text-slate-600 border-t border-slate-900/60 max-w-xs mx-auto font-bold font-sans">
              © 2026 Lưu Đức Anh. Redesigned with dynamic, colorful premium aesthetics.
            </div>
          </div>
        </footer>

        {/* 8. Fullscreen Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-xl p-2.5 transition-colors focus:outline-none z-55 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div 
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Evidence Fullscreen View" 
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              {(() => {
                const currentProj = portfolioProjects[activeTab];
                const imgIndex = currentProj.images ? currentProj.images.indexOf(selectedImage) : -1;
                const desc = (imgIndex !== -1 && currentProj.imageDescriptions) ? currentProj.imageDescriptions[imgIndex] : '';
                return desc ? (
                  <div className="bg-slate-900/80 text-white/95 text-xs sm:text-sm py-2.5 px-5 rounded-xl max-w-2xl text-center backdrop-blur-md shadow-md border border-white/5 font-semibold leading-relaxed">
                    {desc}
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
