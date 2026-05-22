import { useState, useEffect } from 'react';
import { Play, Sparkles, Menu, X, GraduationCap, CheckSquare, Mail, Layers } from 'lucide-react';
import BoomerangVideoBg from './BoomerangVideoBg';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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

  const navLinks = [
    { href: '#gioi-thieu', label: 'Trang Giới Thiệu' },
    { href: '#du-an', label: 'Trang Dự Án (6 Bài tập)' },
    { href: '#tong-ket', label: 'Trang Tổng Kết' },
  ];

  // The 6 structural digital assignments from the rubric guidelines with detailed pharmaceutical context
  const portfolioProjects = [
    {
      id: 'bt1',
      label: 'Bài 1: Hệ điều hành & File',
      fullName: 'Bài tập 1 - Chương 1: Quản trị Hệ điều hành & Thao tác Tệp tin',
      objective: 'Làm chủ giao diện Windows và File Explorer, thiết lập và chuẩn hóa thư mục lưu trữ số học chuẩn "ThucHanh_LuuDucAnh" và quản lý vòng đời tệp tin khoa học.',
      process: 'Mở File Explorer, thiết lập cấu trúc thư mục học thuật "ThucHanh_LuuDucAnh". Tạo tệp tin văn bản GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt, di chuyển tệp tin bằng Cut & Paste hoặc Copy & Paste vào thư mục con TaiLieu. Quản lý xóa tệp tin qua Recycle Bin và thực hiện xóa vĩnh viễn (Shift + Delete) không qua thùng rác.',
      product: 'Thư mục chuẩn học tập "ThucHanh_LuuDucAnh" & Tệp tin GhiChuQuanTrong.txt'
    },
    {
      id: 'bt2',
      label: 'Bài 2: Khai thác thông tin',
      fullName: 'Bài tập 2 - Chương 2: Khai thác và Đánh giá Thông tin Học thuật Y khoa',
      objective: 'Ứng dụng các công cụ tìm kiếm học thuật nâng cao (Google Scholar, Elicit, Microsoft Academic) để tìm kiếm và đánh giá độ tin cậy của các tài liệu nghiên cứu về "Ứng dụng AI trong hỗ trợ chẩn đoán bệnh".',
      process: 'Xây dựng biểu thức Boolean truy vấn chuyên nghiệp ("Artificial Intelligence in healthcare" AND "AI in medical diagnosis" AND "Machine learning in medical imaging"). Thực hiện khảo sát, phân tích và thẩm định 11 tài liệu bao gồm sách chuyên khảo "Deep Medicine" của Eric Topol, các bài báo trên Nature Medicine, The Lancet Digital Health, JMIR và chính sách Y tế số của WHO. Đánh giá độ tin cậy dựa trên 5 tiêu chí: Uy tín tác giả, Nhà xuất bản khoa học, Phương pháp nghiên cứu thực nghiệm, Số lượng trích dẫn và Tính cập nhật (2017-2024).',
      product: 'Báo cáo thẩm định y khoa & Bảng đánh giá độ tin cậy 11 nguồn tài liệu học thuật (Excel/PDF)'
    },
    {
      id: 'bt3',
      label: 'Bài 3: Kỹ nghệ Prompt',
      fullName: 'Bài tập 2 - Chương 3: Tối ưu hóa tương tác với AI qua Kỹ nghệ Prompt',
      objective: 'Xây dựng và so sánh hiệu quả hệ thống prompt 3 mức độ (Cơ bản, Cải tiến, Nâng cao) áp dụng mô hình CLEAR/CRAC để tối ưu hóa năng lực hỗ trợ của mô hình ngôn ngữ lớn (Gemini) trong các tác vụ học tập và nghiên cứu.',
      process: 'Thiết kế hệ thống prompt cho 3 tác vụ cốt lõi: (1) Tóm tắt Big Data (đặc tính 5Vs, gán vai trò chuyên gia phân tích dữ liệu, xuất bảng 2 cột cho SV năm nhất); (2) Giải thích Mạng nơ-ron nhân tạo (ANN) (gán vai trò giảng viên CNTT, dùng ẩn dụ cách bộ não nhận diện quả táo qua 3 bước CoT); (3) Tạo bộ 5 câu hỏi trắc nghiệm phân hóa độ khó về Máy tính & Thiết bị ngoại vi (định dạng Few-shot, có đáp án và giải thích sư phạm chi tiết). So sánh chất lượng đầu ra giữa các cấp độ prompt.',
      product: 'Hệ thống Prompt tối ưu y học số & Bảng so sánh hiệu quả 3 cấp độ (Gemini)'
    },
    {
      id: 'bt4',
      label: 'Bài 4: Giao tiếp & Hợp tác',
      fullName: 'Bài tập 3 - Chương 4: Hợp tác dự án trực tuyến trong Môi trường Số',
      objective: 'Ứng dụng các công cụ đám mây cộng tác (Trello, Zoom, Google Docs, Google Drive) để lên kế hoạch, phân công công việc và quản lý tiến độ dự án nhóm VNU1001_E252023 xây dựng video thuyết trình "Ứng dụng AI và Học máy trong quản lý rối loạn lipid máu & hội chứng chuyển hóa".',
      process: 'Thiết lập không gian làm việc số: (1) Quản lý dự án trực quan qua bảng Kanban Trello (Due dates, Checklists, Comments); (2) Thảo luận nhóm đồng bộ qua Zoom (chia sẻ Screen Sharing, vẽ Whiteboard, họp nhóm phụ qua Breakout Rooms, lên lịch bằng AI Companion); (3) Đồng soạn thảo kịch bản trên Google Docs (chế độ Suggesting, Comments, Version History, tích hợp trợ lý Gemini); (4) Đồng bộ tài nguyên phân cấp trên Google Drive theo quy tắc đặt tên nhất quán (Tên phân loại_Nội dung file), kích hoạt xác thực bảo mật 2 yếu tố (2FA).',
      product: 'Không gian làm việc Kanban Trello, Thư mục chia sẻ Google Drive & Biên bản họp nhóm số hóa'
    },
    {
      id: 'bt5',
      label: 'Bài 5: Sáng tạo nội dung',
      fullName: 'Bài tập 2 - Chương 5: Sáng tạo và Thiết kế Nội dung số Y học với AI',
      objective: 'Xây dựng chiến dịch truyền thông "Sống Xanh trong Kỷ nguyên Số" nhằm nâng cao nhận thức sinh viên về dấu chân carbon điện tử (digital footprint) và rác thải công nghệ (e-waste).',
      process: 'Thiết lập quy trình sáng tạo lặp (iterative workflow) phối hợp 3 công cụ AI tạo sinh: (1) Google Gemini soạn thảo bài blog 1000 từ, kiểm chứng số liệu khí thải GPU huấn luyện và tạo video AI (Sora 2 tiêu tốn 1 kWh & 4 lít nước), kết hợp dữ liệu e-waste Việt Nam (250.000 tấn năm 2025, quy định EPR); (2) Nano Banana tạo ảnh nghệ thuật chủ đề "Futuristic workspace giao thoa thiên nhiên"; (3) Canva AI gợi ý layout Infographic, chuyển đổi màu sắc chủ đạo xanh lá đậm - trắng. Bổ sung bối cảnh thực tế các điểm thu gom rác điện tử miễn phí tại Hà Nội (17 Trung Yên 3, 45 Nghĩa Tân) & TP.HCM (82 Bà Huyện Thanh Quan, Grac, Momo Heo đất, Ecosia).',
      product: 'Bài viết Blog truyền thông "Sống Xanh" & Infographic Canva hiệu đính màu sắc'
    },
    {
      id: 'bt6',
      label: 'Bài 6: An toàn & Liêm chính',
      fullName: 'Bài tập 4 - Chương 6: Bảo mật dữ liệu & Liêm chính học thuật Y Dược số',
      objective: 'Nghiên cứu chính sách học thuật của VNU và quy tắc đạo đức y học thực tiễn lâm sàng để xây dựng năng lực sử dụng AI có trách nhiệm, giải quyết tình huống bệnh nhân nữ 38 tuổi chẩn đoán Viêm cột sống dính khớp (AS).',
      process: 'Sử dụng Perplexity AI truy vấn bằng kỹ thuật Chain-of-Thought tìm kiếm hướng dẫn điều trị từ EULAR 2022, ACR 2019 và đối soát hướng dẫn Bộ Y tế Việt Nam 2014 (QĐ 361/QĐ-BYT). Phân tích độ an toàn của thuốc ức chế TNF (TNF inhibitors) đối với phụ nữ mang thai/cho con bú. Phát hiện và hiệu đính lỗi ảo giác nghiêm trọng của AI (ký tự ngoại lai tiếng Trung "口服" trong dịch thuật lâm sàng, lỗi dịch thuật Infographic: sáu harvan, ảo giấc...). Thiết lập bộ nguyên tắc "7 Chữ Vàng cho Dược sĩ tương lai" (Sức khỏe bệnh nhân là trên hết, Minh bạch nguồn gốc, Kiểm chứng chéo, Bảo mật dữ liệu, Cầm lái tư duy, Cập nhật liên tục, Sử dụng chọn lọc).',
      product: 'Bản phân tích ca bệnh AS, Danh mục trích dẫn Zotero/Mendeley & Infographic Dược sĩ số'
    }
  ];

  return (
    <section className="relative w-full min-h-screen sm:h-screen overflow-hidden">
      <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />
      
      {/* Glassmorphic Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6">
        <div className="flex items-center gap-2 text-[#2d3a2a]">
          <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
            LUU DUC ANH<sup className="text-[10px] sm:text-xs font-medium">Portfolio</sup>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2 transition-colors ${
                i === 0 ? 'font-semibold text-[#1f2a1d]' : 'font-medium text-[#4b5b47] hover:text-[#1f2a1d]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => window.open('mailto:luuducanhhl@gmail.com')}
            className="ml-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> Liên hệ
          </button>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-[#2d3a2a]">
          <span className="hidden sm:inline text-xs font-semibold text-[#1f2a1d] bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/50">
            Dược K47 • VNU-UMP
          </span>
          <span className="hidden xl:inline text-xs font-semibold text-[#1f2a1d] bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/50">
            SĐT: +84 832 581 837
          </span>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#1f2a1d] transition-all duration-300 hover:bg-white/90"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Menu
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#1f2a1d]/40 backdrop-blur-sm" />
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-semibold text-[#1f2a1d] py-4 border-b border-[#1f2a1d]/10 transition-all duration-500 ${
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className={`mt-8 flex flex-col gap-4 transition-all duration-500 ${
              menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <div className="text-sm font-medium text-[#2d3a2a] space-y-1">
              <p>Sinh viên Dược năm 4 • Đại học Y Dược, ĐHQGHN</p>
              <p className="text-xs font-semibold">SĐT: +84 832 581 837</p>
              <p className="text-xs font-semibold">Email: luuducanhhl@gmail.com</p>
            </div>
            <button 
              onClick={() => { setMenuOpen(false); window.open('mailto:luuducanhhl@gmail.com'); }}
              className="mt-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
            >
              Gửi Mail Bản Thân
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic Typography - Intro Page Main Header */}
      <div id="gioi-thieu" className="relative z-10 flex flex-col items-center text-center pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6">
        <h1
          className="font-normal leading-[0.95] text-[#336443] text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] max-w-5xl"
          style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif', letterSpacing: '-0.035em' }}
        >
          Số hóa Y Dược{' '}
          <span className="text-[#85AB8B]">
            kết nối kỹ năng
            <br className="hidden sm:block" /> và thực tiễn lâm sàng
          </span>
        </h1>
        
        <p className="mt-4 sm:mt-5 text-[#4b5b47] text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl px-2 font-medium">
          Mục tiêu Portfolio: Thể hiện các kỹ năng số đã học trong lộ trình phát triển năng lực, đồng thời lưu trữ các sản phẩm học thuật cá nhân giúp dễ dàng truy cập, chia sẻ, và định hướng chuyển đổi số y tế toàn diện.
        </p>

        <p className="mt-2 text-xs text-[#336443] font-semibold bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/50">
          Liên hệ: +84 832 581 837 | Email: luuducanhhl@gmail.com
        </p>

        {/* Intro page detail cards */}
        <div className="mt-5 flex flex-wrap justify-center gap-3 max-w-4xl">
          <div className="bg-white/45 backdrop-blur-md border border-white/50 rounded-2xl p-4 text-left max-w-xs shadow-sm">
            <div className="flex items-center gap-2 text-[#336443] font-bold text-xs sm:text-sm mb-1">
              <GraduationCap className="w-4 h-4" /> Bản thân & Chuyên ngành
            </div>
            <div className="text-[11px] sm:text-xs text-[#4b5b47] leading-relaxed">
              <strong>LUU DUC ANH</strong>, Sinh viên Dược năm 4 tại Trường Đại học Y Dược, ĐHQGHN (VNU-UMP).
            </div>
          </div>

          <div className="bg-white/45 backdrop-blur-md border border-white/50 rounded-2xl p-4 text-left max-w-xs shadow-sm">
            <div className="flex items-center gap-2 text-[#336443] font-bold text-xs sm:text-sm mb-1">
              <Layers className="w-4 h-4" /> Lĩnh vực quan tâm
            </div>
            <div className="text-[11px] sm:text-xs text-[#4b5b47] leading-relaxed">
              Số hóa y tế, ứng dụng AI học máy trong thiết kế thuốc, phát triển năng lực số lâm sàng và quản trị dược phẩm.
            </div>
          </div>

          <div className="bg-white/45 backdrop-blur-md border border-white/50 rounded-2xl p-4 text-left max-w-xs shadow-sm">
            <div className="flex items-center gap-2 text-[#336443] font-bold text-xs sm:text-sm mb-1">
              <CheckSquare className="w-4 h-4" /> Mục tiêu học tập
            </div>
            <div className="text-[11px] sm:text-xs text-[#4b5b47] leading-relaxed">
              Nâng cao năng lực ứng dụng công nghệ trong nghiên cứu y dược học và cộng tác đám mây hiệu quả trong môi trường y tế số.
            </div>
          </div>
        </div>
      </div>

      {/* Main interactive app layout containing Projects and Conclusion */}
      <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-4 sm:bottom-6 md:bottom-8 z-10 max-w-2xl">
        <div className="flex items-center gap-2 text-[#3d5638] sm:text-white/95 mb-2.5">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-semibold sm:font-medium uppercase tracking-wider">
            Trang Dự Án & Kho sản phẩm số hóa
          </span>
        </div>
        
        {/* Project display dashboard */}
        <div id="du-an" className="bg-white/70 sm:bg-black/35 backdrop-blur-md border border-white/50 sm:border-white/10 rounded-2xl p-4 mb-3 text-[#1f2a1d] sm:text-white space-y-3 text-[11px] sm:text-xs shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {portfolioProjects.map((proj, idx) => (
              <div 
                key={proj.id} 
                onClick={() => setActiveTab(idx)}
                className={`p-2 rounded-lg border cursor-pointer transition-all ${
                  activeTab === idx 
                    ? 'bg-[#3d5638] text-white border-transparent shadow-sm scale-[1.01]' 
                    : 'bg-white/30 sm:bg-white/5 border-white/30 sm:border-white/10 hover:bg-white/50'
                }`}
              >
                <div className="font-semibold opacity-70">Bài tập {idx + 1}</div>
                <div className="truncate font-medium">{proj.label}</div>
              </div>
            ))}
          </div>
          
          <div className="pt-2 border-t border-[#3d5638]/10 sm:border-white/10 opacity-95 leading-relaxed text-[#2d3a2a] sm:text-white/90 space-y-1.5">
            <div className="font-bold text-[12px] sm:text-sm text-[#1f2a1d] sm:text-white">{portfolioProjects[activeTab].fullName}</div>
            <div>
              <span className="font-bold text-black/70 sm:text-white/80">Mục tiêu:</span> {portfolioProjects[activeTab].objective}
            </div>
            <div>
              <span className="font-bold text-black/70 sm:text-white/80">Quy trình:</span> {portfolioProjects[activeTab].process}
            </div>
            <div className="pt-1 flex items-center justify-between flex-wrap gap-2">
              <span className="font-bold text-[#336443] sm:text-green-300">
                Sản phẩm: {portfolioProjects[activeTab].product}
              </span>
              <button 
                onClick={() => window.open('mailto:luuducanhhl@gmail.com?subject=Yêu cầu xem sản phẩm ' + portfolioProjects[activeTab].label)}
                className="bg-[#3d5638] text-white sm:bg-white/20 sm:hover:bg-white/35 text-[10px] px-3 py-1 rounded-full transition-all font-semibold border border-transparent sm:border-white/10"
              >
                Yêu cầu xem sản phẩm
              </button>
            </div>
          </div>
        </div>

        {/* Conclusion Page Summary */}
        <div id="tong-ket" className="bg-white/70 sm:bg-black/35 backdrop-blur-md border border-white/50 sm:border-white/10 rounded-2xl p-4 text-[#2d3a2a] sm:text-white/95 space-y-2 text-[11px] sm:text-xs shadow-lg mb-3">
          <span className="font-bold block text-xs sm:text-sm text-[#1f2a1d] sm:text-white">Trang Tổng Kết & Suy ngẫm học tập</span>
          <div className="leading-relaxed opacity-95 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <span className="font-bold text-black/70 sm:text-white/80 block mb-0.5">Kỹ năng số đạt được:</span> 
              Chuẩn hóa lưu trữ OS; Khai thác dữ liệu y khoa (Scholar, Elicit); Prompt engineering nâng cao (CLEAR/CRAC, CoT); Hợp tác đám mây (Trello, Zoom, Google Docs); Sáng tạo nội dung bền vững (Gemini, Nano Banana, Canva); Thẩm định lâm sàng có trách nhiệm, kiểm duyệt ảo giác AI (Perplexity, Mendeley/Zotero).
            </div>
            <div>
              <span className="font-bold text-black/70 sm:text-white/80 block mb-0.5">Sự phát triển bản thân:</span> 
              Từ một sinh viên Dược lâm sàng truyền thống vươn mình thành một "Dược sĩ số" năng động, biết tích hợp hài hòa giữa y học thực chứng và công nghệ trí tuệ nhân tạo để tối ưu hóa năng suất và nghiên cứu.
            </div>
            <div>
              <span className="font-bold text-black/70 sm:text-white/80 block mb-0.5">Thách thức & Giải pháp:</span> 
              Vượt qua thách thức về lỗi ảo giác dữ liệu AI (lỗi từ ngoại lai "口服", lỗi dịch máy của GenAI) bằng cách tuân thủ chặt chẽ nguyên tắc "7 Chữ Vàng cho Dược sĩ tương lai" và quy trình đối soát chéo (Search - Check - Cite).
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#du-an"
            className="bg-[#3d5638] sm:bg-white hover:bg-[#2d4228] sm:hover:bg-white/90 text-white sm:text-[#1f2a1d] text-xs font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm text-center"
          >
            Khám phá 6 Bài tập Số
          </a>
          <a href="#gioi-thieu" className="text-[#3d5638] sm:text-white text-xs font-semibold sm:font-medium hover:opacity-80 transition-opacity decoration-dotted underline underline-offset-4">
            Quay lại đầu trang
          </a>
        </div>
      </div>

      {/* Bottom-right interactive action block */}
      <div className="hidden sm:flex absolute right-6 md:right-10 bottom-4 md:bottom-6 z-10 items-center gap-2 text-white/90 text-sm">
        <button 
          onClick={() => alert('Đang phát lộ trình đào tạo năng lực số VNU-UMP 2026')}
          className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          <Play className="w-3 h-3 fill-white text-white ml-0.5" />
        </button>
        <span className="font-medium text-xs tracking-wide">Số Hóa Y Tế VNU-UMP</span>
        <span className="text-white/60 text-xs">2026</span>
      </div>
    </section>
  );
}

export default App;
