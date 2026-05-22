import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, CheckSquare, Mail, Layers, FileText, CheckCircle2, ChevronRight, BookOpen, AlertTriangle, Eye, FileDown } from 'lucide-react';
import BoomerangVideoBg from './BoomerangVideoBg';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [currentSection, setCurrentSection] = useState('gioi-thieu');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      label: 'Bài 1: Quản trị Hệ điều hành & Tệp tin',
      fullName: 'Bài tập 1 - Chương 1: Quản trị Hệ điều hành & Thao tác Tệp tin',
      objective: 'Làm chủ giao diện Windows và File Explorer, thiết lập và chuẩn hóa thư mục lưu trữ số học chuẩn "ThucHanh_LuuDucAnh" và quản lý vòng đời tệp tin khoa học.',
      process: 'Mở File Explorer, thiết lập cấu trúc thư mục học thuật "ThucHanh_LuuDucAnh". Tạo tệp tin văn bản GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt, di chuyển tệp tin bằng Cut & Paste hoặc Copy & Paste vào thư mục con TaiLieu. Quản lý xóa tệp tin qua Recycle Bin và thực hiện xóa vĩnh viễn (Shift + Delete) không qua thùng rác.',
      product: 'Thư mục chuẩn học tập "ThucHanh_LuuDucAnh" & Tệp tin GhiChuQuanTrong.txt',
      fileUrl: '/files/BT1_Chuong1_LuuDucAnh.docx',
      fileName: 'BT1_Chuong1_LuuDucAnh.docx',
      fileType: 'docx',
      images: ['/images/bt1_1.png', '/images/bt1_2.png'],
      imageDescriptions: [
        'Ảnh 1: Cấu trúc thư mục "ThucHanh_LuuDucAnh" được phân cấp khoa học và quản lý trực quan trên Windows File Explorer.',
        'Ảnh 2: Quá trình thao tác tạo mới, sao chép và di chuyển tệp tin GhiChuQuanTrong.txt vào thư mục con TaiLieu.'
      ],
      detailedSummary: 'Quá trình thực hành được bắt đầu bằng việc làm quen với các thao tác cốt lõi trên hệ điều hành Windows 11. Tác giả đã khởi tạo thư mục chuyên môn học thuật "ThucHanh_LuuDucAnh" tại ổ đĩa làm việc để lưu trữ đồng bộ. Tiến hành tạo tệp tin ghi chú ban đầu "GhiChu.txt" nhằm ghi chép nhanh, sau đó đổi tên thành "GhiChuQuanTrong.txt" để chuẩn hóa quản lý tài liệu. Việc di chuyển tệp tin được thực hiện an toàn qua chức năng Cut/Paste vào thư mục con "TaiLieu". Cuối cùng, tác giả thực hành cơ chế xóa tệp tin qua Recycle Bin và nâng cao bằng lệnh Shift + Delete để xóa vĩnh viễn, giải phóng bộ nhớ hệ thống một cách an toàn và bảo mật.'
    },
    {
      id: 'bt2',
      label: 'Bài 2: Khai thác thông tin y khoa',
      fullName: 'Bài tập 2 - Chương 2: Khai thác và Đánh giá Thông tin Học thuật Y khoa',
      objective: 'Ứng dụng các công cụ tìm kiếm học thuật nâng cao (Google Scholar, Elicit, Microsoft Academic) để tìm kiếm và đánh giá độ tin cậy của các tài liệu nghiên cứu về "Ứng dụng AI trong hỗ trợ chẩn đoán bệnh".',
      process: 'Xây dựng biểu thức Boolean truy vấn chuyên nghiệp ("Artificial Intelligence in healthcare" AND "AI in medical diagnosis" AND "Machine learning in medical imaging"). Thực hiện khảo sát, phân tích và thẩm định 11 tài liệu bao gồm sách chuyên khảo "Deep Medicine" của Eric Topol, các bài báo trên Nature Medicine, The Lancet Digital Health, JMIR và chính sách Y tế số của WHO. Đánh giá độ tin cậy dựa trên 5 tiêu chí: Uy tín tác giả, Nhà xuất bản khoa học, Phương pháp nghiên cứu thực nghiệm, Số lượng trích dẫn và Tính cập nhật (2017-2024).',
      product: 'Báo cáo thẩm định y khoa & Bảng đánh giá độ tin cậy 11 nguồn tài liệu học thuật (Excel/PDF)',
      fileUrl: '/files/BT2_Chuong2_LuuDucAnh.docx',
      fileName: 'BT2_Chuong2_LuuDucAnh.docx',
      fileType: 'docx',
      images: ['/images/bt2_1.png', '/images/bt2_2.png'],
      imageDescriptions: [
        'Ảnh 1: Xây dựng biểu thức truy vấn chuyên môn nâng cao với các toán tử Boolean logic trên Google Scholar.',
        'Ảnh 2: Bảng thẩm định chi tiết 11 nguồn tài liệu y khoa học thuật với xếp hạng độ tin cậy khoa học và năm xuất bản.'
      ],
      detailedSummary: 'Để xây dựng báo cáo thẩm định thông tin y tế học thuật, tác giả đã ứng dụng các công cụ tìm kiếm khoa học nâng cao như Google Scholar và Elicit. Bằng cách thiết lập biểu thức Boolean phức tạp kết hợp các toán tử logic "AND", "OR" và ngoặc kép, tác giả đã lọc sạch và tiếp cận được các nghiên cứu chất lượng cao về "Ứng dụng AI trong chẩn đoán y khoa". Quá trình phân tích bao gồm việc đánh giá chi tiết 11 tài liệu y học hàng đầu (gồm sách chuyên khảo "Deep Medicine" của Eric Topol, các nghiên cứu trên Nature Medicine và The Lancet). Mỗi nguồn tài liệu đều được chấm điểm nghiêm ngặt qua 5 tiêu chí chuẩn hóa: uy tín tác giả, vị thế nhà xuất bản, phương pháp nghiên cứu thực nghiệm, tần suất trích dẫn khoa học và tính thời sự cập nhật.'
    },
    {
      id: 'bt3',
      label: 'Bài 3: Tối ưu tương tác AI (Prompt)',
      fullName: 'Bài tập 2 - Chương 3: Tối ưu hóa tương tác với AI qua Kỹ nghệ Prompt',
      objective: 'Xây dựng và so sánh hiệu quả hệ thống prompt 3 mức độ (Cơ bản, Cải tiến, Nâng cao) áp dụng mô hình CLEAR/CRAC để tối ưu hóa năng lực hỗ trợ của mô hình ngôn ngữ lớn (Gemini) trong các tác vụ học tập và nghiên cứu.',
      process: 'Thiết kế hệ thống prompt cho 3 tác vụ cốt lõi: (1) Tóm tắt Big Data (đặc tính 5Vs, gán vai trò chuyên gia phân tích dữ liệu, xuất bảng 2 cột cho SV năm nhất); (2) Giải thích Mạng nơ-ron nhân tạo (ANN) (gán vai trò giảng viên CNTT, dùng ẩn dụ cách bộ não nhận diện quả táo qua 3 bước CoT); (3) Tạo bộ 5 câu hỏi trắc nghiệm phân hóa độ khó về Máy tính & Thiết bị ngoại vi (định dạng Few-shot, có đáp án và giải thích sư phạm chi tiết). So sánh chất lượng đầu ra giữa các cấp độ prompt.',
      product: 'Hệ thống Prompt tối ưu y học số & Bảng so sánh hiệu quả 3 cấp độ (Gemini)',
      fileUrl: '/files/BT2_Chuong3_LuuDucAnh.docx',
      fileName: 'BT2_Chuong3_LuuDucAnh.docx',
      fileType: 'docx',
      images: ['/images/bt3_1.png', '/images/bt3_2.png'],
      imageDescriptions: [
        'Ảnh 1: Soạn thảo và thử nghiệm cấu trúc Prompt nâng cao áp dụng tiêu chuẩn CLEAR/CRAC trên mô hình Google Gemini.',
        'Ảnh 2: Phân tích kết quả đầu ra, so sánh độ chuẩn xác và tính sư phạm của các cấp độ Prompt trong giải thích ANN.'
      ],
      detailedSummary: 'Bài tập tập trung vào việc nghiên cứu và ứng dụng Kỹ nghệ Prompt (Prompt Engineering) để khai thác hiệu quả tối đa từ mô hình ngôn ngữ lớn (Gemini). Tác giả đã thiết kế hệ thống prompt 3 mức độ (Cơ bản, Cải tiến, Nâng cao) áp dụng triệt để mô hình CLEAR/CRAC. Các tác vụ bao gồm: tóm tắt dữ liệu lớn (đặc tính 5Vs), giải thích cơ chế Mạng nơ-ron nhân tạo (ANN) bằng phương pháp suy luận chuỗi tư duy (Chain-of-Thought) kết hợp hình ảnh ẩn dụ sinh động, và tạo bộ câu hỏi trắc nghiệm tin học có phân hóa độ khó bằng kỹ thuật Few-shot. Kết quả cho thấy các prompt nâng cao giúp AI phản hồi chính xác, cấu trúc rõ ràng, loại bỏ hoàn toàn các lỗi ảo giác thông tin và đáp ứng đúng tiêu chuẩn học thuật.'
    },
    {
      id: 'bt4',
      label: 'Bài 4: Giao tiếp & Hợp tác đám mây',
      fullName: 'Bài tập 3 - Chương 4: Hợp tác dự án trực tuyến trong Môi trường Số',
      objective: 'Ứng dụng các công cụ đám mây cộng tác (Trello, Zoom, Google Docs, Google Drive) để lên kế hoạch, phân công công việc và quản lý tiến độ dự án nhóm VNU1001_E252023 xây dựng video thuyết trình "Ứng dụng AI và Học máy trong quản lý rối loạn lipid máu & hội chứng chuyển hóa".',
      process: 'Thiết lập không gian làm việc số: (1) Quản lý dự án trực quan qua bảng Kanban Trello (Due dates, Checklists, Comments); (2) Thảo luận nhóm đồng bộ qua Zoom (chia sẻ Screen Sharing, vẽ Whiteboard, họp nhóm phụ qua Breakout Rooms, lên lịch bằng AI Companion); (3) Đồng soạn thảo kịch bản trên Google Docs (chế độ Suggesting, Comments, Version History, tích hợp trợ lý Gemini); (4) Đồng bộ tài nguyên phân cấp trên Google Drive theo quy tắc đặt tên nhất quán (Tên phân loại_Nội dung file), kích hoạt xác thực bảo mật 2 yếu tố (2FA).',
      product: 'Không gian làm việc Kanban Trello, Thư mục chia sẻ Google Drive & Biên bản họp nhóm số hóa',
      fileUrl: '/files/BT3_Chuong4_LuuDucAnh.pdf',
      fileName: 'BT3_Chuong4_LuuDucAnh.pdf',
      fileType: 'pdf',
      images: ['/images/bt4_1.png', '/images/bt4_2.png'],
      imageDescriptions: [
        'Ảnh 1: Không gian cộng tác dự án nhóm trực quan trên bảng Kanban Trello với phân công nhiệm vụ và Due date.',
        'Ảnh 2: Biên bản thảo luận họp trực tuyến qua Zoom và quy trình phân quyền bảo mật dữ liệu lưu trữ đám mây Google Drive.'
      ],
      detailedSummary: 'Nhằm tổ chức xây dựng kịch bản và sản xuất video thuyết trình về "Ứng dụng AI trong quản lý rối loạn lipid máu" cho nhóm VNU1001_E252023, tác giả đã thiết lập một không gian cộng tác số đám mây toàn diện. Tiến độ công việc được quản lý trực quan trên bảng Kanban Trello với các nhãn phân loại, due date và danh mục công việc chi tiết. Nhóm đã thực hiện các buổi họp trực tuyến hiệu quả qua Zoom, tận dụng tối đa tính năng chia sẻ màn hình và phòng thảo luận phụ (Breakout Rooms). Kịch bản được đồng soạn thảo trực tiếp trên Google Docs với chế độ gợi ý đóng góp ý kiến (Suggesting) và lưu vết lịch sử phiên bản. Toàn bộ tài nguyên số được phân loại khoa học và đồng bộ trên Google Drive, áp dụng bảo mật xác thực hai lớp (2FA) để bảo vệ dữ liệu.'
    },
    {
      id: 'bt5',
      label: 'Bài 5: Sáng tạo nội dung số y học',
      fullName: 'Bài tập 2 - Chương 5: Sáng tạo và Thiết kế Nội dung số Y học với AI',
      objective: 'Xây dựng chiến dịch truyền thông "Sống Xanh trong Kỷ nguyên Số" nhằm nâng cao nhận thức sinh viên về dấu chân carbon điện tử (digital footprint) và rác thải công nghệ (e-waste).',
      process: 'Thiết lập quy trình sáng tạo lặp (iterative workflow) phối hợp 3 công cụ AI tạo sinh: (1) Google Gemini soạn thảo bài blog 1000 từ, kiểm chứng số liệu khí thải GPU huấn luyện và tạo video AI (Sora 2 tiêu tốn 1 kWh & 4 lít nước), kết hợp dữ liệu e-waste Việt Nam (250.000 tấn năm 2025, quy định EPR); (2) Nano Banana tạo ảnh nghệ thuật chủ đề "Futuristic workspace giao thoa thiên nhiên"; (3) Canva AI gợi ý layout Infographic, chuyển đổi màu sắc chủ đạo xanh lá đậm - trắng. Bổ sung bối cảnh thực tế các điểm thu gom rác điện tử miễn phí tại Hà Nội (17 Trung Yên 3, 45 Nghĩa Tân) & TP.HCM (82 Bà Huyện Thanh Quan, Grac, Momo Heo đất, Ecosia).',
      product: 'Bài viết Blog truyền thông "Sống Xanh" & Infographic Canva hiệu đính màu sắc',
      fileUrl: '/files/BT2_Chuong5_LuuDucAnh.docx',
      fileName: 'BT2_Chuong5_LuuDucAnh.docx',
      fileType: 'docx',
      images: ['/images/bt5_1.png', '/images/bt5_2.png'],
      imageDescriptions: [
        'Ảnh 1: Ấn phẩm thiết kế Infographic "Sống Xanh" trên Canva được tối ưu hóa độ tương phản và phân bố cục trực quan.',
        'Ảnh 2: Giao diện bài đăng Blog truyền thông được tích hợp hình ảnh không gian tương lai sinh động tạo bởi AI Banana.'
      ],
      detailedSummary: 'Tác giả đã lên kế hoạch và triển khai chiến dịch truyền thông y học số mang tên "Sống Xanh trong Kỷ nguyên Số". Quy trình sáng tạo nội dung áp dụng mô hình lặp kết hợp 3 công cụ AI đột phá: Google Gemini hỗ trợ biên soạn bài blog 1000 từ phân tích chuyên sâu về "dấu chân carbon điện tử" và lượng nước tiêu hao để huấn luyện AI; công cụ tạo ảnh nghệ thuật Nano Banana thiết kế hình ảnh không gian làm việc tương lai hài hòa với thiên nhiên; và Canva AI tối ưu hóa bố cục Infographic truyền thông. Bài viết được lồng ghép các địa chỉ thu gom rác thải điện tử miễn phí thực tế tại Hà Nội và TP.HCM cùng các ứng dụng môi trường bền vững như Ecosia, Grac giúp nâng cao tính thực tiễn và tác động xã hội.'
    },
    {
      id: 'bt6',
      label: 'Bài 6: An toàn số & Đạo đức AI',
      fullName: 'Bài tập 4 - Chương 6: Bảo mật dữ liệu & Liêm chính học thuật Y Dược số',
      objective: 'Nghiên cứu chính sách học thuật của VNU và quy tắc đạo đức y học thực tiễn lâm sàng để xây dựng năng lực sử dụng AI có trách nhiệm, giải quyết tình huống bệnh nhân nữ 38 tuổi chẩn đoán Viêm cột sống dính khớp (AS).',
      process: 'Sử dụng Perplexity AI truy vấn bằng kỹ thuật Chain-of-Thought tìm kiếm hướng dẫn điều trị từ EULAR 2022, ACR 2019 và đối soát hướng dẫn Bộ Y tế Việt Nam 2014 (QĐ 361/QĐ-BYT). Phân tích độ an toàn của thuốc ức chế TNF (TNF inhibitors) đối với phụ nữ mang thai/cho con bú. Phát hiện và hiệu đính lỗi ảo giác nghiêm trọng của AI (ký tự ngoại lai tiếng Trung "口服" trong dịch thuật lâm sàng, lỗi dịch thuật Infographic: sáu harvan, ảo giấc...). Thiết lập bộ nguyên tắc "7 Chữ Vàng cho Dược sĩ tương lai" (Sức khỏe bệnh nhân là trên hết, Minh bạch nguồn gốc, Kiểm chứng chéo, Bảo mật dữ liệu, Cầm lái tư duy, Cập nhật liên tục, Sử dụng chọn lọc).',
      product: 'Bản phân tích ca bệnh AS, Danh mục trích dẫn Zotero/Mendeley & Infographic Dược sĩ số',
      fileUrl: '/files/BT4_Chuong6_LuuDucAnh.docx',
      fileName: 'BT4_Chuong6_LuuDucAnh.docx',
      fileType: 'docx',
      images: ['/images/bt6_1.png', '/images/bt6_2.png'],
      imageDescriptions: [
        'Ảnh 1: Tiến trình tra cứu và đối soát chéo phác đồ lâm sàng điều trị bệnh AS của Bộ Y tế bằng AI Perplexity.',
        'Ảnh 2: Tác phẩm Infographic quy chuẩn "7 Chữ Vàng cho Dược sĩ tương lai" và danh mục quản lý nguồn trích dẫn Zotero.'
      ],
      detailedSummary: 'Bài tập giải quyết một ca lâm sàng thực tế phức tạp: Bệnh nhân nữ 38 tuổi được chẩn đoán Viêm cột sống dính khớp (AS). Tác giả đã ứng dụng mô hình Perplexity AI theo kỹ thuật Chain-of-Thought để tra cứu các hướng dẫn điều trị quốc tế chuẩn y khoa từ EULAR 2022 và ACR 2019, đối chiếu trực tiếp với hướng dẫn của Bộ Y tế Việt Nam. Qua đó phân tích độ an toàn của thuốc sinh học ức chế TNF đối với bệnh nhân nữ trong độ tuổi sinh sản. Đặc biệt, tác giả đã thực hiện quy trình kiểm chứng chéo nghiêm ngặt để phát hiện và hiệu đính các lỗi ảo giác nguy hiểm của AI (như dịch sai thuật ngữ, lỗi ký tự tiếng Trung). Từ kinh nghiệm này, tác giả đã đúc kết bộ nguyên tắc đạo đức "7 Chữ Vàng cho Dược sĩ tương lai" và chuẩn hóa danh mục tài liệu trích dẫn khoa học bằng phần mềm Mendeley/Zotero.'
    }
  ];

  const handleSidebarProjectClick = (index: number) => {
    setActiveTab(index);
    const el = document.getElementById('du-an');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen bg-white text-[#212121]">
      {/* 1. Desktop Persistent Left Sidebar Navigation */}
      <aside className="hidden xl:flex flex-col w-[260px] bg-white border-r border-[#00000015] h-screen sticky top-0 py-8 justify-between shrink-0 z-30">
        <div className="flex flex-col">
          {/* Sidebar Header Brand Logo */}
          <div className="px-6 pb-6 border-b border-[#00000008]">
            <span className="text-[#6f7498] text-base font-bold tracking-tight block">
              PORTFOLIO KỸ NĂNG SỐ
            </span>
            <span className="text-xs font-semibold text-[#555555] uppercase tracking-wider block mt-1">
              LƯU ĐỨC ANH
            </span>
            <span className="text-[10px] text-gray-400 block">Sinh viên Dược K47 • VNU-UMP</span>
          </div>

          {/* Sidebar Navigation Tree */}
          <nav className="mt-6 flex flex-col gap-1 px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`sidebar-link flex items-center gap-2.5 px-4 py-2.5 rounded-r-full text-xs sm:text-sm font-medium ${
                  currentSection === link.id ? 'active' : ''
                }`}
              >
                {link.id === 'gioi-thieu' && <GraduationCap className="w-4 h-4" />}
                {link.id === 'du-an' && <FileText className="w-4 h-4" />}
                {link.id === 'tong-ket' && <BookOpen className="w-4 h-4" />}
                {link.label}
              </a>
            ))}

            {/* Nested Project Structure inside sidebar */}
            <div className="mt-3 pl-4 border-l border-[#00000008] ml-5 flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block py-1.5 px-2">
                Danh sách bài tập
              </span>
              {portfolioProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => handleSidebarProjectClick(idx)}
                  className={`text-left text-xs font-medium py-1.5 px-2 rounded-r-md transition-colors ${
                    activeTab === idx 
                      ? 'text-[#6f7498] bg-[#6f7498]/5 font-semibold' 
                      : 'text-gray-500 hover:text-[#6f7498] hover:bg-gray-50'
                  }`}
                >
                  Bài {idx + 1}: {proj.label.split(':')[1]?.trim() || proj.label}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Sidebar Footer Details */}
        <div className="px-6 pt-4 border-t border-[#00000008] text-[11px] text-gray-500 space-y-1">
          <p className="font-semibold text-gray-700">Liên hệ hỗ trợ:</p>
          <p>SĐT: +84 832 581 837</p>
          <p className="truncate">luuducanhhl@gmail.com</p>
        </div>
      </aside>

      {/* Main Right Scrollable Layout */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* 2. Top Navigation Bar (Shown on Mobile/Tablet, hides nav on desktop) */}
        <header className="sticky top-0 z-40 bg-white border-b border-[#00000010] px-4 sm:px-6 py-4 flex items-center justify-between xl:justify-end xl:bg-white/95 xl:backdrop-blur-sm">
          <div className="flex items-center gap-2 xl:hidden">
            <span className="text-[#6f7498] font-bold text-sm sm:text-base tracking-tight">
              PORTFOLIO • LƯU ĐỨC ANH
            </span>
          </div>

          {/* Top menu for screens < 1280px */}
          <div className="hidden lg:flex xl:hidden items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-top-link text-xs sm:text-sm font-medium py-1 transition-colors ${
                  currentSection === link.id ? 'active' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.open('mailto:luuducanhhl@gmail.com')}
              className="bg-[#6f7498] hover:bg-[#5b6082] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" /> Liên hệ
            </button>

            {/* Mobile Hamburger menu toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="xl:hidden flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Mobile menu drawer overlay */}
        {menuOpen && (
          <div
            className="xl:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
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
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="text-[#6f7498] font-bold text-sm">PORTFOLIO</span>
              <button 
                onClick={() => setMenuOpen(false)} 
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <nav className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-semibold text-gray-700 py-3 border-b border-gray-50 flex items-center gap-2 ${
                    currentSection === link.id ? 'text-[#6f7498] border-b-2 border-[#6f7498]/40' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-100 text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-700">Lưu Đức Anh</p>
              <p>Trường Đại học Y Dược, ĐHQGHN</p>
              <p>SĐT: +84 832 581 837</p>
              <p>Email: luuducanhhl@gmail.com</p>
            </div>
          </div>
        </div>

        {/* 3. Header Banner (Aristotle Banner with Boomerang Background inside) */}
        <section className="relative h-[250px] sm:h-[310px] md:h-[350px] w-full overflow-hidden flex items-center justify-center bg-[#212121]">
          {/* Boomerang loop background inside header banner */}
          <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />
          {/* Aristotle Google Sites dark semi-transparent banner overlay */}
          <div className="absolute inset-0 bg-[#212121]/55 banner-overlay z-10" />

          {/* Banner Contents */}
          <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl">
            <h2 className="text-white text-[15px] sm:text-[18px] md:text-[22px] font-medium tracking-wider uppercase drop-shadow-md">
              Hành Trình Tri Trải Nghiệm & Kỹ Năng Số Học Thuật
            </h2>
            
            {/* The main title */}
            <h1 className="text-white text-[28px] sm:text-[38px] md:text-[45px] font-bold leading-tight uppercase mt-2 drop-shadow-lg tracking-tight">
              Lưu Đức Anh
            </h1>

            <p className="text-white/90 text-xs sm:text-sm md:text-base mt-2 max-w-2xl mx-auto font-medium drop-shadow-sm">
              Sinh viên Dược năm 4 • VNU University of Medicine and Pharmacy
            </p>

            {/* Highlight Accent Line below title */}
            <div className="mt-4 border-b-8 border-[#858cb8] w-24 mx-auto rounded-full drop-shadow-md" />
          </div>
        </section>

        {/* 4. Page: Lời mở đầu (Giới thiệu) - White Background */}
        <section id="gioi-thieu" className="py-12 sm:py-16 px-6 sm:px-10 md:px-16 max-w-5xl mx-auto w-full">
          <div className="text-center mb-10">
            <h3 className="academic-section-title uppercase">
              Lời Mở Đầu
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left side text intro */}
            <div className="md:col-span-7 space-y-4">
              <p className="text-[#212121] text-sm sm:text-base leading-relaxed text-justify">
                Chào mừng bạn đến với <strong>Portfolio Kỹ năng số</strong> của tôi. Đây là nơi lưu trữ, phản ánh toàn bộ hành trình học tập, trải nghiệm và tích lũy năng lực số thông qua chuỗi bài tập thực tế về công nghệ, quản trị dữ liệu và trí tuệ nhân tạo.
              </p>
              <p className="text-[#212121] text-sm sm:text-base leading-relaxed text-justify">
                Trong kỷ nguyên y tế thông minh, năng lực số không chỉ còn là công cụ hỗ trợ mà đã trở thành năng lực cốt lõi giúp các Dược sĩ tương lai kết nối hiệu quả giữa y học học thuật thực chứng với thực tiễn chăm sóc sức khỏe lâm sàng.
              </p>
              
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-2 mt-4">
                <span className="text-xs font-bold text-[#6f7498] uppercase tracking-wider block">
                  Mục Tiêu Portfolio
                </span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Minh chứng năng lực công nghệ đã được chuẩn hóa thông qua 6 module chuyên môn học thuật; lưu trữ các sản phẩm số cá nhân giúp dễ dàng chia sẻ, cộng tác khoa học và định hướng chuyển đổi số y tế toàn diện.
                </p>
              </div>
            </div>

            {/* Right side academic cards grid */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {/* Profile Card 1 */}
              <div className="bg-white border border-[#00000008] rounded-xl p-5 shadow-xs hover:border-[#6f7498]/30 transition-all">
                <div className="flex items-center gap-3 text-[#6f7498] font-bold text-sm mb-2">
                  <span className="w-8 h-8 rounded-full bg-[#6f7498]/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4.5 h-4.5" />
                  </span>
                  Bản thân & Chuyên ngành
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <strong>LƯU ĐỨC ANH</strong>, sinh viên Dược năm cuối tại Trường Đại học Y Dược, Đại học Quốc gia Hà Nội (VNU-UMP).
                </p>
              </div>

              {/* Profile Card 2 */}
              <div className="bg-white border border-[#00000008] rounded-xl p-5 shadow-xs hover:border-[#6f7498]/30 transition-all">
                <div className="flex items-center gap-3 text-[#6f7498] font-bold text-sm mb-2">
                  <span className="w-8 h-8 rounded-full bg-[#6f7498]/10 flex items-center justify-center shrink-0">
                    <Layers className="w-4.5 h-4.5" />
                  </span>
                  Lĩnh vực quan tâm
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Y học số, trí tuệ nhân tạo (AI/Machine Learning) trong sàng lọc & thiết kế dược chất, tự động hóa lâm sàng bệnh viện.
                </p>
              </div>

              {/* Profile Card 3 */}
              <div className="bg-white border border-[#00000008] rounded-xl p-5 shadow-xs hover:border-[#6f7498]/30 transition-all">
                <div className="flex items-center gap-3 text-[#6f7498] font-bold text-sm mb-2">
                  <span className="w-8 h-8 rounded-full bg-[#6f7498]/10 flex items-center justify-center shrink-0">
                    <CheckSquare className="w-4.5 h-4.5" />
                  </span>
                  Kỹ năng cốt lõi
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Lưu trữ khoa học, truy vấn dữ liệu y học nâng cao, Prompt CLEAR/CRAC, cộng tác trực tuyến trực quan, sáng tạo nội dung số AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Page: Bài tập thực hành (Dự án) - Alternating Light Gray-Blue Background */}
        <section id="du-an" className="py-12 sm:py-16 px-4 sm:px-8 md:px-12 bg-[#e8f0f0]">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-10">
              <h3 className="academic-section-title uppercase">
                Bài Tập Thực Hành
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mt-2">
                Hệ thống 6 bài tập lớn rèn luyện năng lực số chuẩn y khoa được thực hiện chi tiết theo quy trình nghiên cứu học thuật
              </p>
            </div>

            {/* Dashboard Container */}
            <div className="bg-white rounded-2xl border border-black/10 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[500px]">
              {/* Left Selector Sidebar */}
              <div className="w-full md:w-[240px] bg-gray-50 border-r border-gray-100 flex flex-col shrink-0">
                <div className="p-4 border-b border-gray-100 bg-[#6f7498]/5">
                  <span className="text-xs font-bold text-[#6f7498] uppercase tracking-wider block">
                    Danh Sách Bài Học
                  </span>
                </div>
                
                <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible p-2 md:p-3 gap-1">
                  {portfolioProjects.map((proj, idx) => (
                    <button
                      key={proj.id}
                      onClick={() => setActiveTab(idx)}
                      className={`text-left w-full shrink-0 md:shrink flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === idx
                          ? 'bg-[#6f7498] text-white shadow-sm'
                          : 'text-[#555555] hover:text-[#6f7498] hover:bg-white'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                        activeTab === idx ? 'bg-white text-[#6f7498]' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="truncate">{proj.label.split(':')[0]}</span>
                      <ChevronRight className={`w-3.5 h-3.5 ml-auto hidden md:block ${
                        activeTab === idx ? 'opacity-100' : 'opacity-30'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Detail Pane */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div className="space-y-6">
                  {/* Title of exercise */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#858cb8] tracking-widest block mb-1">
                      Bài Tập Số {activeTab + 1} • Giáo Trình Chuẩn VNU-UMP
                    </span>
                    <h4 className="text-gray-900 text-lg sm:text-xl md:text-2xl font-bold font-sans leading-tight">
                      {portfolioProjects[activeTab].fullName}
                    </h4>
                  </div>

                  {/* Objective (Mục tiêu) */}
                  <div className="space-y-2">
                    <h5 className="text-[#6f7498] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-3 bg-[#858cb8] rounded-full inline-block" />
                      Mục tiêu bài tập
                    </h5>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-justify">
                      {portfolioProjects[activeTab].objective}
                    </p>
                  </div>

                  {/* Detailed Summary (Tóm tắt quá trình thực hiện chuyên sâu) */}
                  {portfolioProjects[activeTab].detailedSummary && (
                    <div className="space-y-2 bg-[#6f7498]/5 p-4 sm:p-5 border-l-4 border-[#6f7498] rounded-r-xl">
                      <h5 className="text-[#6f7498] text-xs sm:text-sm font-bold uppercase tracking-wider">
                        Tóm tắt quá trình thực hiện
                      </h5>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-justify italic font-medium">
                        "{portfolioProjects[activeTab].detailedSummary}"
                      </p>
                    </div>
                  )}

                  {/* Implementation Process (Quy trình thực hiện) */}
                  <div className="space-y-2">
                    <h5 className="text-[#6f7498] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-3 bg-[#858cb8] rounded-full inline-block" />
                      Quy trình thực hiện chi tiết
                    </h5>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-justify bg-gray-50/50 p-4 border border-gray-100 rounded-xl">
                      {portfolioProjects[activeTab].process}
                    </p>
                  </div>

                  {/* Product Output Details */}
                  <div className="space-y-2 pt-1">
                    <h5 className="text-[#6f7498] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-3 bg-[#858cb8] rounded-full inline-block" />
                      Sản phẩm đầu ra khoa học
                    </h5>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-green-700 bg-green-50/80 p-3 rounded-lg border border-green-100">
                      <CheckCircle2 className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Đã lưu trữ:</span> {portfolioProjects[activeTab].product}
                      </div>
                    </div>
                  </div>

                  {/* Evidence Screenshots (Hình ảnh minh chứng thực tế) */}
                  {portfolioProjects[activeTab].images && (
                    <div className="space-y-3 pt-2">
                      <h5 className="text-[#6f7498] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-3 bg-[#858cb8] rounded-full inline-block" />
                        Hình ảnh minh chứng thực tế (Nhấp để phóng to)
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {portfolioProjects[activeTab].images.map((img, imgIdx) => (
                          <div 
                            key={imgIdx} 
                            onClick={() => setSelectedImage(img)}
                            className="group relative cursor-zoom-in bg-gray-50 border border-gray-200/60 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#6f7498]/40 transition-all duration-300"
                          >
                            <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
                              <img 
                                src={img} 
                                alt={portfolioProjects[activeTab].imageDescriptions?.[imgIdx]} 
                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-[#212121]/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                <span className="bg-white/95 text-gray-800 text-xs font-bold py-1.5 px-3 rounded-full flex items-center gap-1 shadow-sm backdrop-blur-xs">
                                  <Eye className="w-3.5 h-3.5" /> Xem chi tiết
                                </span>
                              </div>
                            </div>
                            <div className="p-3 bg-white border-t border-gray-100">
                              <p className="text-[11px] sm:text-xs text-gray-600 font-medium leading-relaxed">
                                {portfolioProjects[activeTab].imageDescriptions?.[imgIdx]}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Call-to-action details */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4 w-full">
                  <span className="text-[11px] text-gray-400 font-medium md:max-w-[40%]">
                    * Mọi báo cáo và hình ảnh đều được trích dẫn trực tiếp từ sản phẩm gốc của sinh viên Lưu Đức Anh.
                  </span>
                  
                  <div className="flex items-center gap-3">
                    {portfolioProjects[activeTab].fileUrl && (
                      <a
                        href={portfolioProjects[activeTab].fileUrl}
                        download={portfolioProjects[activeTab].fileName}
                        className="bg-[#6f7498] hover:bg-[#5b6082] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-xs transition-all inline-flex items-center gap-2 border border-transparent active:scale-95 cursor-pointer"
                      >
                        <FileDown className="w-4 h-4" /> Tải xuống báo cáo gốc (.{portfolioProjects[activeTab].fileType})
                      </a>
                    )}

                    <button
                      onClick={() =>
                        window.open(
                          `mailto:luuducanhhl@gmail.com?subject=Trao đổi về: ${portfolioProjects[activeTab].label}`
                        )
                      }
                      className="text-gray-500 hover:text-[#6f7498] border border-gray-200 bg-white hover:bg-gray-50 text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl shadow-2xs transition-all inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" /> Liên hệ phản biện
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Page: Tổng kết & Suy ngẫm - White Background */}
        <section id="tong-ket" className="py-12 sm:py-16 px-6 sm:px-10 md:px-16 max-w-5xl mx-auto w-full">
          <div className="text-center mb-10">
            <h3 className="academic-section-title uppercase">
              Tổng Kết & Suy Ngẫm
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-2">
              Đúc kết chặng đường rèn luyện và xây dựng tư duy "Dược sĩ số" vững vàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Gains */}
            <div className="bg-white border border-[#00000010] rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-[#6f7498] font-bold text-sm border-b border-gray-100 pb-3">
                <span className="w-7 h-7 rounded-full bg-[#6f7498]/10 flex items-center justify-center shrink-0">
                  <CheckSquare className="w-4 h-4" />
                </span>
                Kỹ Năng Số Đạt Được
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                Tôi đã hoàn thiện kỹ năng quản lý tệp tin hệ điều hành; khai thác và thẩm định chất lượng nguồn thông tin y khoa qua Google Scholar, Elicit; làm chủ kỹ nghệ prompt CLEAR/CRAC cho GenAI; cộng tác trực tuyến trực quan qua Trello, Google Docs và Zoom; thiết kế nội dung y học số AI thông qua Canva, Nano Banana; thẩm định các ca lâm sàng nâng cao với sự trợ giúp chọn lọc của Perplexity và Zotero/Mendeley.
              </p>
            </div>

            {/* Column 2: Self growth */}
            <div className="bg-white border border-[#00000010] rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-[#6f7498] font-bold text-sm border-b border-gray-100 pb-3">
                <span className="w-7 h-7 rounded-full bg-[#6f7498]/10 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </span>
                Sự Phát Triển Bản Thân
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                Hành trình này đã nâng tầm tư duy của tôi vượt lên trên một sinh viên Dược lâm sàng truyền thống. Tôi nhận thức rõ ranh giới và cách tích hợp công nghệ số vào chăm sóc sức khỏe. Việc ứng dụng công nghệ trực tuyến giúp nâng cao hiệu suất cộng tác nghiên cứu, gạt bỏ rào cản địa lý và đẩy mạnh tốc độ xử lý dữ liệu học tập đáng kể.
              </p>
            </div>

            {/* Column 3: Challenges & Resolution */}
            <div className="bg-white border border-[#00000010] rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-[#6f7498] font-bold text-sm border-b border-gray-100 pb-3">
                <span className="w-7 h-7 rounded-full bg-[#6f7498]/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </span>
                Thách Thức & Giải Pháp
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                Thách thức lớn nhất là nhận diện lỗi ảo giác y khoa (lỗi dịch thuật, ký tự ngoại lai "口服") từ AI tạo sinh. Tôi đã xây dựng và áp dụng bộ nguyên lý <strong>"7 Chữ Vàng cho Dược sĩ tương lai"</strong>: Sức khỏe trên hết - Minh bạch - Kiểm chứng chéo - Bảo mật - Cầm lái tư duy - Cập nhật liên tục - Sử dụng chọn lọc để luôn đảm bảo tính an toàn học thuật cao nhất.
              </p>
            </div>
          </div>

          {/* Action row at bottom of conclusion */}
          <div className="mt-12 bg-gray-50 border border-gray-100 p-6 rounded-2xl text-center space-y-4">
            <span className="text-[#6f7498] text-xs font-bold uppercase tracking-wider block">
              Dược Sĩ Số VNU-UMP • Lộ Trình Phát Triển 2026
            </span>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              Trang bị tư duy công nghệ bền vững, kỹ năng cộng tác thông minh, sẵn sàng hành trang bước vào giai đoạn chuyển đổi số toàn diện của ngành y tế nước nhà.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <a
                href="#du-an"
                className="bg-[#6f7498] hover:bg-[#5b6082] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all shadow-xs"
              >
                Khám phá 6 Bài học số
              </a>
              <a
                href="#gioi-thieu"
                className="text-gray-500 hover:text-[#6f7498] text-xs font-bold py-2.5 px-4 rounded-full transition-all border border-gray-200 bg-white"
              >
                Quay lại đầu trang
              </a>
            </div>
          </div>
        </section>

        {/* 7. Academic Footer */}
        <footer className="bg-gray-100 border-t border-gray-200 py-8 px-6 text-center text-[#555555]">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#6f7498]">
              Lưu Đức Anh • Dược Sĩ Số Tương Lai
            </p>
            <p className="text-xs text-gray-500">
              Sinh viên Dược năm cuối (K47) • Trường Đại học Y Dược, Đại học Quốc gia Hà Nội
            </p>
            <p className="text-[11px] text-gray-400">
              SĐT: +84 832 581 837 | Email: luuducanhhl@gmail.com | Địa chỉ học tập: VNU-UMP, Cầu Giấy, Hà Nội
            </p>
            <div className="pt-2 text-[10px] text-gray-400 border-t border-gray-200/50 max-w-xs mx-auto">
              © 2026 Lưu Đức Anh. Redesigned to replicate clean, light academic layout.
            </div>
          </div>
        </footer>

        {/* 8. Fullscreen Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors focus:outline-none z-55 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div 
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Evidence Fullscreen View" 
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              {(() => {
                const currentProj = portfolioProjects[activeTab];
                const imgIndex = currentProj.images ? currentProj.images.indexOf(selectedImage) : -1;
                const desc = (imgIndex !== -1 && currentProj.imageDescriptions) ? currentProj.imageDescriptions[imgIndex] : '';
                return desc ? (
                  <div className="bg-black/60 text-white/95 text-xs sm:text-sm py-2 px-4 rounded-full max-w-2xl text-center backdrop-blur-sm shadow-md">
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
