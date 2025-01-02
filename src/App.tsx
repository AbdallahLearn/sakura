import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import OfferCard from "./components/OfferCard";
import CardSub from "./components/CardSub";
import Footer from "./components/Footer";
function App() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardSelect = (title: string) => {
    setSelectedCard(title);
  };
  return (
    <>
      <div
    className="image-bg bg-cover bg-center h-screen"
    style={{
      backgroundImage: "url(/assets/hero.png)",
     
    }}
    
  >
     
        <Header />
       
        <div className="container m-auto max-sm:w-[80%] ">
          <div className="mt-40 gap-10 p-6 sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 text-black rounded-lg flex flex-col items-start space-y-6 max-md:mt-20 ">
            <h1 className="text-9xl font-bold text-end max-md:text-7xl">ساكورا</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl w-full sm:w-3/4 md:w-full">
              وجهتك الأولى للإبداع والتواصل مع مجتمع المصورين المحترفين والهواة
              على حد سواء. نحن هنا نقدم لك كل ماتحتاجه لتنمية مهارتك, وتحسين
              أعمالك, وتسويق إبداعاتك
            </p>
            <div>
              <button className="btn btn-active bg-black font-normal text-white rounded-full px-20 py-2 text-base sm:text-lg">
                أشترك معنا
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-[75%] m-auto h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl text-right w-full ps-3 max-sm:text-center max-sm:text-6xl">
          من <span className="font-bold">نحن</span>؟
        </h1>
        <p className="space-y-4 pt-10 w-[94%] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-right">
          بعد أشهر من العمل الجاد والتخطيط، أُطلقت{" "}
          <span className="font-bold">ساكورا</span> في البداية كموقع بسيط يتيح
          للمصورين عرض أعمالهم ومشاركة تجاربهم. سرعان ما لاقت المنصة إقبالاً
          واسعاً من المصورين الذين وجدوا فيها المكان المثالي للتواصل والنمو. مع
          مرور الوقت، تطورت <span className="font-bold">ساكورا</span> لتشمل
          خدمات متنوعة، مثل أدوات التحرير المتقدمة، الدروس التعليمية، والمسابقات
          الدورية. أصبحت المنصة وجهة رئيسية للمصورين الذين يبحثون عن بيئة محفزة
          تدعم طموحاتهم الفنية. اليوم، تفتخر{" "}
          <span className="font-bold">ساكورا</span> بأنها موطن لآلاف المصورين من
          مختلف أنحاء العالم، وتواصل السعي لتقديم الأفضل لمجتمعها من خلال
          الابتكار والتطور المستمر. ما بدأ كحلم صغير في ذهن مجموعة من الأصدقاء،
          تحول إلى منصة رائدة تجمع بين الشغف، الإبداع، والتعاون.
        </p>
      </div>

      <div
        className="image-bg bg-cover bg-center h-screen"
        style={{ backgroundImage: "url(https://s3-alpha-sig.figma.com/img/37cc/a05e/82fcddd75355e1c3366841b8b7af8df8?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DkBSS73Cq8QWylhRUtQqBu57FTPmiJSwVZQ6TCo984HG8DKbGiOMlJKxU6r7ll~mc8qQCrEhWT98XnULwqZB1olWckJiaFFwJ4M78GTca5lOMoGjBMd5fqDybUwqoyBSqiSiYymYZ2PsIiTNOOz84JL5JEvANt73gWlDwrgRSTSl9AlBfENle44iBHNtQ47IpnpTXU6srb9-qEZOnahbmH2RlhZb7Xvz~95kI87uPRwPmannM0KAX-Pb9ON3rvYtfMysMTYdo1~~B08lz2F62bxR2QLLivPXgqDtlfzbiV3BaXn5vzdOy2iKyK2joypbBTy6-0jJmZInoyxFmZnFDw__)", opacity: "80%" }}
      >
        <div className="container m-auto z-20   h-screen flex flex-col justify-center items-start max-sm:w-[80%] ">
          <h1 className="text-8xl max-md:text-5xl text-right w-full max-md:w-60 text-white ">
            ما الذي <span className="font-bold">نقدمة</span>؟
          </h1>
          <div className="card grid w-full justify-center grid-cols-3 gap-1 max-md:flex max-md:flex-col-reverse ">
            <OfferCard
              title="أدوات تحرير متقدمة"
              description="مجموعة من الأدوات الرقمية لتحرير الصور وتحسين جودتها."
              SvgIcon={
                <svg
                  viewBox="0 0 1024 1024"
                  fill="#Ad9a4d"
                  className="icon w-12 h-12 max-sm:w-8 max-sm:h-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M521.58 516.763v-472.816c250.725 22.642 450.175 222.092 472.817 472.817h-472.816zM918.229 593.091h-435.436c-21.963 0-39.769-17.805-39.769-39.769 0 0 0 0 0 0v-435.463c-222.914 20.121-397.682 207.273-397.682 435.436 0 241.605 195.898 437.452 437.451 437.451 228.163 0 415.339-174.715 435.436-397.657z"></path>
                </svg>
              }
            />
            <OfferCard
              title="دروس ومقالات تعليمية"
              description="موارد تعليمية تغطي كل جوانب التصوير الفوتوغرافي، من الأساسيات إلى التقنيات المتقدمة"
              SvgIcon={
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ad9a4d"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M13 11V1H9L9 11H13Z" fill="#ad9a4d"></path>{" "}
                    <path d="M15 15V13L1 13V15L15 15Z" fill="#ad9a4d"></path>{" "}
                    <path d="M7 5L7 11H3L3 5H7Z" fill="#ad9a4d"></path>{" "}
                  </g>
                </svg>
              }
            />
            <OfferCard
              title="شبكة تواصل اجتماعي"
              description="تواصل مع مصورين آخرين، تبادل الأفكار والخبرات، وابنِ علاقات مهنية جديدة."
              SvgIcon={
                <svg
                  fill="#ad9a4d"
                  viewBox="0 0 56 56"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M 34.4219 26.0664 L 49.5860 26.0664 C 52.5625 26.0664 54.0625 24.5664 54.0625 21.4727 L 54.0625 10.9961 C 54.0625 7.9023 52.5625 6.4258 49.5860 6.4258 L 34.4219 6.4258 C 31.4453 6.4258 29.9453 7.9023 29.9453 10.9961 L 29.9453 21.4727 C 29.9453 24.5664 31.4453 26.0664 34.4219 26.0664 Z M 6.4140 26.0664 L 21.5781 26.0664 C 24.5547 26.0664 26.0547 24.5664 26.0547 21.4727 L 26.0547 10.9961 C 26.0547 7.9023 24.5547 6.4258 21.5781 6.4258 L 6.4140 6.4258 C 3.4375 6.4258 1.9375 7.9023 1.9375 10.9961 L 1.9375 21.4727 C 1.9375 24.5664 3.4375 26.0664 6.4140 26.0664 Z M 6.4140 49.5742 L 21.5781 49.5742 C 24.5547 49.5742 26.0547 48.0977 26.0547 45.0039 L 26.0547 34.5039 C 26.0547 31.4336 24.5547 29.9336 21.5781 29.9336 L 6.4140 29.9336 C 3.4375 29.9336 1.9375 31.4336 1.9375 34.5039 L 1.9375 45.0039 C 1.9375 48.0977 3.4375 49.5742 6.4140 49.5742 Z M 34.4219 49.5742 L 49.5860 49.5742 C 52.5625 49.5742 54.0625 48.0977 54.0625 45.0039 L 54.0625 34.5039 C 54.0625 31.4336 52.5625 29.9336 49.5860 29.9336 L 34.4219 29.9336 C 31.4453 29.9336 29.9453 31.4336 29.9453 34.5039 L 29.9453 45.0039 C 29.9453 48.0977 31.4453 49.5742 34.4219 49.5742 Z"></path>
                  </g>
                </svg>
              }
            />
          </div>
        </div>
      </div>

      <div className="container m-auto h-screen max-md:h-[230vh]">
        <div className="container-sub text-center flex justify-center items-center flex-col  h-96">
          <h1 className="text-6xl font-bold">الأسعار وخطط الأشتراك</h1>
          <p className=" opacity-70 text-[#212121] pt-4">
            باقات مختلفة تساعدك في الوصول لهدفك
          </p>
        </div>
        <div className="container-card w-[80%] m-auto grid grid-cols-3 justify-center items-center gap-10 max-md:flex flex-col-reverse">
          <CardSub
            title="PREMIUM"
            price={299}
            description="محتوى رئيسي 10 مكتبات لايت روم استشارة لمدة 3 ساعات مرة في الشهر"
            buttonText="اشترك الآن"
            isSelected={selectedCard === "PREMIUM"}
            onSelect={() => handleCardSelect("PREMIUM")}
          />

          <CardSub
            title="STANDARD"
            price={199}
            description="محتوى رئيسي 5 مكتبات لايت روم استشارة لمدة ساعتين مرة في الشهر"
            buttonText="اشترك الآن"
            isSelected={selectedCard === "STANDARD"}
            onSelect={() => handleCardSelect("STANDARD")}
          />

          <CardSub
            title="BASIC"
            price={99}
            description="محتوى رئيسي 3 مكتبات لايت روم استشارة لمدة ساعة مرة في الشهر"
            buttonText="اشتراك"
            isSelected={selectedCard === "BASIC"}
            onSelect={() => handleCardSelect("BASIC")}
          />
        </div>
      </div>
      <div className="h-screen bg-[#212121] overflow-hidden">
        <div className="container w-auto flex justify-between items-center h-full max-md:flex-col">
          <div className="relative left-[25%]  flex justify-start max-md:bottom-[10%] max-md:left-[50%]">
            <img
              className="rounded-full object-cover "
              src="https://s3-alpha-sig.figma.com/img/6383/b647/03c7b4a54189ebf3d001a03c7bd3ae4e?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CUQzIqluwcK4yLjP1qZ8oxAKQ-RH6khhutIZxGEgLKlas72oE6ib07o1nwSYeIfqDGGMmzdk7BMsAFn1UMaE0TJSXFRUITg27jun3WUZA-MnxrYknA3p1ZobN-Fs5dV5~uWF86scZ6QvMU9j0ry1Y8cBSA-cf-CarAHdPDzc~8pIXZheuI~nJwKBLWLaSDGel8bIukIG357phZadzJHrpl88eEs4TnS0NBhW10492ZXMgizPYDZ0CnOC0cxolGOe0dAqVnZIGwN0LdSjnunqhq~11QQgHElHnlxDpwkWg3nStDEinWZbWRuWL4222DHfETNokvn1LPJyYqmt1lf6vA__"
              alt=""
              width="100%"
            />
          </div>

          <div className="content w-full flex flex-col justify-start h-96 text-white max-md:w-[80%] m-auto">
            <div className="title-container   ">
              <h1 className="text-6xl mb-6">
                لماذا تختار <span className="font-bold">ساكورا</span>؟
              </h1>
            </div>
            <ul className="space-y-10 w-96 text-xl text-end max-md:text-start">
              <li className="relative before:content-[''] before:absolute before:right-64 before:top-0 before:h-full before:w-1 before:bg-[#ad9a4d] max-md:before:right-0 p-2">
                فرص لا تُفوَّت
              </li>
              <li className="relative before:content-[''] before:absolute before:right-64 before:top-0 before:h-full before:w-1 before:bg-[#ad9a4d] max-md:before:right-0 p-2">
                أدوات متقدمة
              </li>
              <li className="relative before:content-[''] before:absolute before:right-64 before:top-0 before:h-full before:w-1 before:bg-[#ad9a4d] max-md:before:right-0 p-2">
                مجتمع داعم
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="all bg-[#212121]">
      <div className="line w-[80%] m-auto border-white opacity-20" style={{border:"1px solid #f2f2f2"}}>
       
       </div>
       <div className="footer bg-[#212121] h-40 text-white">
       <Footer />
       </div>
      </div>
      
    </>
  );
}

export default App;
