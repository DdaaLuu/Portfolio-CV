import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, CheckSquare, Mail, Layers, FileText, CheckCircle2, ChevronRight, BookOpen, AlertTriangle, Eye, FileDown, LayoutGrid, Columns } from 'lucide-react';

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
    const el = document.getElementById('du-an');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getBadgeStyleClass = (skillIndex: number) => {
    const classes = ['badge-indigo', 'badge-teal', 'badge-violet', 'badge-amber', 'badge-rose', 'badge-emerald'];
    return `skill-badge ${classes[skillIndex % classes.length]}`;
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

                {/* Right Detail Pane */}
                <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white relative">
                  <div className="space-y-6">
                    {/* Title of exercise */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
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
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify bg-slate-50/70 p-5 border border-slate-100 rounded-2xl font-medium">
                        {portfolioProjects[activeTab].process}
                      </p>
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

                    {/* Evidence Screenshots (Hình ảnh minh chứng thực tế) */}
                    {portfolioProjects[activeTab].images && (
                      <div className="space-y-3 pt-3">
                        <h5 className="text-indigo-900 text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 font-sans">
                          <span className="w-1.5 h-3 bg-gradient-to-t from-indigo-600 to-teal-500 rounded-full inline-block" />
                          Hình ảnh minh chứng thực tế (Nhấp để phóng to)
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {portfolioProjects[activeTab].images.map((img, imgIdx) => (
                            <div 
                              key={imgIdx} 
                              onClick={() => setSelectedImage(img)}
                              className="group relative cursor-zoom-in bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-indigo-400 transition-all duration-300 hover-lift"
                            >
                              <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
                                <img 
                                  src={img} 
                                  alt={portfolioProjects[activeTab].imageDescriptions?.[imgIdx]} 
                                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-[#0f172a]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                  <span className="bg-white/95 text-slate-800 text-xs font-extrabold py-2 px-4 rounded-xl flex items-center gap-1.5 shadow-md backdrop-blur-xs">
                                    <Eye className="w-4 h-4 text-indigo-600" /> Xem chi tiết
                                  </span>
                                </div>
                              </div>
                              <div className="p-4 bg-white border-t border-slate-100">
                                <p className="text-[11px] sm:text-xs text-slate-600 font-semibold leading-relaxed text-justify">
                                  {portfolioProjects[activeTab].imageDescriptions?.[imgIdx]}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
