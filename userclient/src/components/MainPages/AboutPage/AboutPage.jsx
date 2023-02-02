import React from 'react'
import "./AboutPage.css"
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import Img1 from "./Image/Img1.jpg";
import about from "./Image/124.png";









// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function UserGreeting(props) {
//   return (
//     <div className="BoxContent">
//       <h1>Everything you need to grow your business</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's
//       </p>
//     </div>
//   );
// }

// function GuestGreeting(props) {
//   return (
//     <div className="BoxContent">
//       // <h1>Everything you need to grow your business</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's
//       </p>
//     </div>
//   );
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Mission
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Vission
//     </button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root')); 
// React.render(<LoginControl />);

// function Mission(props) {
//   return (<button onClick={props.onClick}>
//     Mission
//   </button>);
// }

// function Vission(props) {
//   return (<button onClick={props.onClick}>
//     Vission
//   </button>);
// }

// function MissionBox(content) {
//   return (
//     <div className="BoxContent">
//       <h1>Everything you need to grow your business</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's
//       </p>
//     </div>
//   );
// }

// function VissionBox(content) {
//   return (
//     <div className="BoxContent">
//       <h1>Everything you need to grow your business</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's
//       </p>
//     </div>
//   );
// }

// function MissionVission(constant) {
//   const MissionBoxVissible = constant.MissionBoxVissible;
//   if (MissionBoxVissible) {
//     return <MissionBox />;
//   } else {
//   return <VissionBox />;
// }
// }
// React.render(<MissionVission MissionBoxVissible={false} />);

const AboutPage = () => {
  return (
    <div>
      <Header />
      {/* <div className="flipbook"> */}
      <div className="AboutPageContainer container">
        <div className="AboutHeadContent">
          <div className="HeadContent">
            <h1>Everything you need to grow your business</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            {/* <button>Get Started With Dezaina</button> */}
            <div className="button-box">
            <button type="button">Get Started With Dezaina</button></div>
            <div className="subHeadContent">
              <h6>Best Designs by Best Designers</h6>
              <h6>Best at Affordable Prices</h6>
            </div>
          </div>
          <div className="HeadContentImage">
            <img src={Img1} alt="" />
          </div>
        </div>
        <div className="aboutUsImageSec">
          <div className="abt-img">
            <img src={about} alt="" />

            <div className="about-float-window">
              <div className="about-float-icon">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6453 15.4153C18.7677 14.9317 18.7625 14.4246 18.63 13.9436C18.4976 13.4626 18.2425 13.0243 17.8898 12.6715C17.537 12.3188 17.0987 12.0637 16.6177 11.9312C16.1367 11.7988 15.6296 11.7935 15.146 11.916C14.1406 12.1641 13.318 12.9867 13.0699 13.9921C12.9475 14.4757 12.9527 14.9828 13.0852 15.4638C13.2176 15.9448 13.4727 16.3831 13.8254 16.7358C14.1782 17.0886 14.6165 17.3437 15.0975 17.4761C15.5785 17.6086 16.0856 17.6138 16.5692 17.4914C17.5877 17.2433 18.4103 16.4207 18.6453 15.4153Z"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.7114 23.0538C24.8585 21.9853 25.7729 20.6917 26.3974 19.2539C27.022 17.8161 27.3433 16.2649 27.3413 14.6973C27.3413 13.1901 27.0444 11.6976 26.4676 10.3051C25.8909 8.91266 25.0455 7.64743 23.9797 6.58167C22.914 5.51592 21.6487 4.67052 20.2562 4.09374C18.8638 3.51696 17.3713 3.22009 15.8641 3.22009C14.3569 3.22009 12.8645 3.51696 11.472 4.09374C10.0795 4.67052 8.8143 5.51592 7.74855 6.58167C6.6828 7.64743 5.83739 8.91266 5.26061 10.3051C4.68383 11.6976 4.38697 13.1901 4.38697 14.6973C4.38697 18.0137 5.79713 21.0038 8.056 23.0929"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6413 19.6067C9.44005 18.3271 8.6958 16.6036 8.6958 14.6973C8.6958 10.741 11.9078 7.52893 15.8641 7.52893C19.8204 7.52893 23.0325 10.741 23.0325 14.6973C23.0325 16.6036 22.2882 18.3141 21.087 19.6067M13.6444 22.3618L11.7642 24.699C10.2757 26.5661 11.5945 29.3212 13.9839 29.3212H17.7313C20.1207 29.3212 21.4526 26.5531 19.951 24.699L18.0708 22.3618C16.9479 20.9385 14.7804 20.9385 13.6444 22.3618Z"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="about-float-window-content">
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
          <div className="About-Content">
            <div className="about-icon"></div>
            {/* <div className="About-Content1"> */} {/* <h6>Who are we</h6> */}
            <h5>Our Duties</h5>
            <h1>
              What Do<span> We Do ?</span>
            </h1>
            <p>
              We are the perfect solution for your graphic design needs.Our team
              of experienced professionals have the knowledge and expertise to
              create stunning visuals that will help you stand out from the
              competition Yes.
              <p>
                We are the perfect solution for your graphic design needs.Our
                team of experienced professionals have the knowledge and
                expertise to create stunning visuals that will help you stand
                out from{" "}
              </p>
            </p>
            <div className="AboutPointsHead">
              <div className="AboutPoints">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_324_959)">
                    <path
                      d="M6.62496 0.764282H3.48246C2.11746 0.764282 1.30371 1.57803 1.30371 2.94303V6.08178C1.30371 7.45053 2.11746 8.26428 3.48246 8.26428H6.62121C7.98621 8.26428 8.79996 7.45053 8.79996 6.08553V2.94303C8.80371 1.57803 7.98996 0.764282 6.62496 0.764282ZM6.84621 3.65178L4.71996 5.77803C4.66723 5.8307 4.59574 5.86028 4.52121 5.86028C4.44668 5.86028 4.3752 5.8307 4.32246 5.77803L3.26121 4.71678C3.20891 4.66386 3.17957 4.59244 3.17957 4.51803C3.17957 4.44362 3.20891 4.37221 3.26121 4.31928C3.36996 4.21053 3.54996 4.21053 3.65871 4.31928L4.52121 5.18178L6.44871 3.25428C6.55746 3.14553 6.73746 3.14553 6.84621 3.25428C6.95496 3.36303 6.95496 3.53928 6.84621 3.65178Z"
                      fill="#4BACE0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_324_959">
                      <rect
                        width="9"
                        height="9"
                        fill="white"
                        transform="translate(0.553711 0.0142822)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h6>Let’s Discuss</h6>
              </div>
              <div className="AboutPoints">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_324_959)">
                    <path
                      d="M6.62496 0.764282H3.48246C2.11746 0.764282 1.30371 1.57803 1.30371 2.94303V6.08178C1.30371 7.45053 2.11746 8.26428 3.48246 8.26428H6.62121C7.98621 8.26428 8.79996 7.45053 8.79996 6.08553V2.94303C8.80371 1.57803 7.98996 0.764282 6.62496 0.764282ZM6.84621 3.65178L4.71996 5.77803C4.66723 5.8307 4.59574 5.86028 4.52121 5.86028C4.44668 5.86028 4.3752 5.8307 4.32246 5.77803L3.26121 4.71678C3.20891 4.66386 3.17957 4.59244 3.17957 4.51803C3.17957 4.44362 3.20891 4.37221 3.26121 4.31928C3.36996 4.21053 3.54996 4.21053 3.65871 4.31928L4.52121 5.18178L6.44871 3.25428C6.55746 3.14553 6.73746 3.14553 6.84621 3.25428C6.95496 3.36303 6.95496 3.53928 6.84621 3.65178Z"
                      fill="#4BACE0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_324_959">
                      <rect
                        width="9"
                        height="9"
                        fill="white"
                        transform="translate(0.553711 0.0142822)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h6>Let’s Discuss</h6>
              </div>
              <div className="AboutPoints">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_324_959)">
                    <path
                      d="M6.62496 0.764282H3.48246C2.11746 0.764282 1.30371 1.57803 1.30371 2.94303V6.08178C1.30371 7.45053 2.11746 8.26428 3.48246 8.26428H6.62121C7.98621 8.26428 8.79996 7.45053 8.79996 6.08553V2.94303C8.80371 1.57803 7.98996 0.764282 6.62496 0.764282ZM6.84621 3.65178L4.71996 5.77803C4.66723 5.8307 4.59574 5.86028 4.52121 5.86028C4.44668 5.86028 4.3752 5.8307 4.32246 5.77803L3.26121 4.71678C3.20891 4.66386 3.17957 4.59244 3.17957 4.51803C3.17957 4.44362 3.20891 4.37221 3.26121 4.31928C3.36996 4.21053 3.54996 4.21053 3.65871 4.31928L4.52121 5.18178L6.44871 3.25428C6.55746 3.14553 6.73746 3.14553 6.84621 3.25428C6.95496 3.36303 6.95496 3.53928 6.84621 3.65178Z"
                      fill="#4BACE0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_324_959">
                      <rect
                        width="9"
                        height="9"
                        fill="white"
                        transform="translate(0.553711 0.0142822)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h6>Let’s Discuss</h6>
              </div>
              <div className="AboutPoints">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_324_959)">
                    <path
                      d="M6.62496 0.764282H3.48246C2.11746 0.764282 1.30371 1.57803 1.30371 2.94303V6.08178C1.30371 7.45053 2.11746 8.26428 3.48246 8.26428H6.62121C7.98621 8.26428 8.79996 7.45053 8.79996 6.08553V2.94303C8.80371 1.57803 7.98996 0.764282 6.62496 0.764282ZM6.84621 3.65178L4.71996 5.77803C4.66723 5.8307 4.59574 5.86028 4.52121 5.86028C4.44668 5.86028 4.3752 5.8307 4.32246 5.77803L3.26121 4.71678C3.20891 4.66386 3.17957 4.59244 3.17957 4.51803C3.17957 4.44362 3.20891 4.37221 3.26121 4.31928C3.36996 4.21053 3.54996 4.21053 3.65871 4.31928L4.52121 5.18178L6.44871 3.25428C6.55746 3.14553 6.73746 3.14553 6.84621 3.25428C6.95496 3.36303 6.95496 3.53928 6.84621 3.65178Z"
                      fill="#4BACE0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_324_959">
                      <rect
                        width="9"
                        height="9"
                        fill="white"
                        transform="translate(0.553711 0.0142822)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h6>Let’s Discuss</h6>
              </div>
            </div>
            {/* <div className="aboutUs-button">
            <button class="button-40" role="button">
              Know More
            </button>
          </div> */}
          </div>
        </div>
        <div className="MissionVission">
          <div className="BoxHead">Mission</div>
          <div className="BoxContent">
            <h1>Everything you need to grow your business</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          <div className="BoxHead">Vission</div>
          <div className="BoxContent">
            <h1>Everything you need to grow your business</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div className="OurValues">
          <div className="ValuesHead">
            <h6>Why Dezaina?</h6>
            <h1>Our Values Towards Our Customers</h1>
          </div>
          <div className="ValuesBody">
            <div className="Value1">
              <div className="ValueSVG">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8758 12.5437C11.6386 12.5437 12.37 12.2407 12.9094 11.7013C13.4487 11.162 13.7517 10.4305 13.7517 9.66783C13.7517 8.90511 13.4487 8.17363 12.9094 7.6343C12.37 7.09498 11.6386 6.79199 10.8758 6.79199C10.1131 6.79199 9.38164 7.09498 8.84231 7.6343C8.30299 8.17363 8 8.90511 8 9.66783C8 10.4305 8.30299 11.162 8.84231 11.7013C9.38164 12.2407 10.1131 12.5437 10.8758 12.5437Z"
                    fill="white"
                  />
                  <path
                    d="M25.3391 9.66663H24.7712V15.237L24.6141 15.1041C23.6716 14.2945 22.1491 14.2945 21.2066 15.1041L16.1799 19.4179C15.2374 20.2275 13.7149 20.2275 12.7724 19.4179L12.3616 19.0795C11.5037 18.3304 10.1382 18.2579 9.17158 18.9104L4.65241 21.9433C4.38658 21.2666 4.22949 20.4812 4.22949 19.5629V9.43704C4.22949 6.02954 6.02991 4.22913 9.43741 4.22913H19.3337V3.66121C19.3337 3.17788 19.4182 2.76704 19.6116 2.41663H9.43741C5.03908 2.41663 2.41699 5.03871 2.41699 9.43704V19.5629C2.41699 20.88 2.64658 22.0279 3.09366 22.9945C4.13283 25.2904 6.35616 26.5833 9.43741 26.5833H19.5632C23.9616 26.5833 26.5837 23.9612 26.5837 19.5629V9.38871C26.2332 9.58204 25.8224 9.66663 25.3391 9.66663Z"
                    fill="white"
                  />
                  <path
                    d="M25.3384 1.20837H21.7859C20.7347 1.20837 19.9613 1.64337 19.6109 2.41671C19.4176 2.76712 19.333 3.17796 19.333 3.66129V7.21379C19.333 8.74837 20.2513 9.66671 21.7859 9.66671H25.3384C25.8218 9.66671 26.2326 9.58212 26.583 9.38879C27.3563 9.03837 27.7913 8.26504 27.7913 7.21379V3.66129C27.7913 2.12671 26.873 1.20837 25.3384 1.20837ZM24.5288 7.50379C24.1422 7.73337 23.7676 7.85421 23.5622 7.85421C23.0184 7.85421 21.4718 7.10504 21.0126 5.65504C20.8763 5.23603 20.8679 4.78593 20.9884 4.36212C21.1455 3.79421 21.5201 3.29879 22.1484 3.09337C22.3901 3.02087 22.6438 2.99671 22.8734 3.04504C23.1151 3.08129 23.3447 3.17796 23.5501 3.33504C23.9368 3.03296 24.4684 2.93629 24.9759 3.09337C26.0755 3.45587 26.4259 4.70046 26.1118 5.65504C26.0634 5.80004 26.003 5.94504 25.9305 6.07796C25.6043 6.73046 25.0484 7.21379 24.5288 7.50379Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="ValueContent">
                <h3>Empathy</h3>
                <p>
                  Understanding clients' goals and feelings, and being able to
                  put themselves in their clients' shoes to create designs that
                  resonate with them.
                </p>
              </div>
            </div>
            <div className="Value1">
              <div className="ValueSVG">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.5837 3.32288H2.41699C1.92158 3.32288 1.51074 2.91204 1.51074 2.41663C1.51074 1.92121 1.92158 1.51038 2.41699 1.51038H26.5837C27.0791 1.51038 27.4899 1.92121 27.4899 2.41663C27.4899 2.91204 27.0791 3.32288 26.5837 3.32288ZM20.1432 26.9941C19.9862 27.3083 19.6599 27.4895 19.3337 27.4895C19.2007 27.4895 19.0557 27.4533 18.9349 27.3929L14.5003 25.1816L10.0657 27.3929C9.94491 27.4533 9.79991 27.4895 9.66699 27.4895C9.34074 27.4895 9.01449 27.3083 8.85741 26.9941C8.80199 26.8875 8.76864 26.7707 8.75937 26.6509C8.75009 26.531 8.76508 26.4105 8.80343 26.2966C8.84178 26.1827 8.90271 26.0776 8.98257 25.9878C9.06244 25.898 9.1596 25.8251 9.26824 25.7737L13.5941 23.6108V20.5416H15.4066V23.6108L19.7324 25.7737C20.1916 25.9912 20.3728 26.535 20.1432 26.9941Z"
                    fill="white"
                  />
                  <path
                    d="M3.625 2.41663V17.0375C3.625 19.3333 4.83333 20.5416 7.12917 20.5416H21.8708C24.1667 20.5416 25.375 19.3333 25.375 17.0375V2.41663H3.625ZM20.5175 10.3675L16.7113 13.5454C16.3608 13.8354 15.9137 13.9562 15.4908 13.8837C15.0558 13.8112 14.6813 13.5454 14.4517 13.1587L13.1829 11.0441L9.6425 13.9925C9.47333 14.1375 9.26792 14.1979 9.0625 14.1979C8.87517 14.199 8.6921 14.1421 8.53847 14.0349C8.38484 13.9277 8.2682 13.7755 8.20461 13.5993C8.14102 13.4231 8.13359 13.2315 8.18335 13.0509C8.23312 12.8703 8.33763 12.7096 8.4825 12.5908L12.2888 9.41288C12.6392 9.12288 13.0863 9.00204 13.5092 9.07454C13.9442 9.14704 14.3188 9.41288 14.5483 9.79954L15.8171 11.9141L19.3575 8.96579C19.4493 8.88919 19.5554 8.83153 19.6697 8.79612C19.7839 8.76072 19.904 8.74827 20.0231 8.7595C20.1421 8.77074 20.2578 8.80543 20.3634 8.86157C20.469 8.91771 20.5624 8.9942 20.6383 9.08663C20.9525 9.47329 20.9042 10.0412 20.5175 10.3675Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="ValueContent">
                <h3>Passion</h3>
                <p>
                  Believing in the power of design to make a difference in the
                  world and being passionate about creating designs that reflect
                  positively on the company.
                </p>
              </div>
            </div>
            <div className="Value1">
              <div className="ValueSVG">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7834 14.981C17.5813 14.981 14.9834 17.5789 14.9834 20.781C14.9834 21.8685 15.2855 22.8955 15.8292 23.7655C16.34 24.6241 17.0653 25.335 17.9339 25.8286C18.8024 26.3222 19.7844 26.5815 20.7834 26.581C22.898 26.581 24.7467 25.4451 25.7376 23.7655C26.2692 22.8955 26.5834 21.8685 26.5834 20.781C26.5834 17.5789 23.9855 14.981 20.7834 14.981ZM23.6592 20.0197L20.5659 22.8714C20.3967 23.0285 20.1671 23.113 19.9496 23.113C19.7201 23.113 19.4905 23.0285 19.3092 22.8472L17.8834 21.4214C17.7149 21.2508 17.6203 21.0207 17.6203 20.781C17.6203 20.5412 17.7149 20.3111 17.8834 20.1405C18.2338 19.7901 18.8138 19.7901 19.1642 20.1405L19.9738 20.9501L22.4267 18.6785C22.7892 18.3401 23.3692 18.3643 23.7076 18.7268C24.0459 19.1014 24.0217 19.6814 23.6592 20.0197Z"
                    fill="white"
                  />
                  <path
                    d="M26.5837 10.5488C26.5837 11.9867 26.3541 13.3159 25.9553 14.5484C25.8828 14.8021 25.5807 14.8746 25.3632 14.7175C24.0374 13.739 22.4315 13.2136 20.7837 13.2192C16.5907 13.2192 13.1712 16.6388 13.1712 20.8317C13.1712 22.1367 13.5095 23.4175 14.1499 24.5534C14.3432 24.8917 14.1137 25.3267 13.7512 25.1938C10.8391 24.2029 4.95449 20.59 3.04533 14.5484C2.64658 13.3159 2.41699 11.9867 2.41699 10.5488C2.41699 6.81502 5.42574 3.79419 9.13533 3.79419C11.3224 3.79419 13.2799 4.85752 14.5003 6.48877C15.1237 5.65359 15.9331 4.9752 16.8644 4.50746C17.7957 4.03972 18.8232 3.7955 19.8653 3.79419C23.5749 3.79419 26.5837 6.81502 26.5837 10.5488Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="ValueContent">
                <h3>Dedication</h3>
                <p>
                  Being fully committed to delivering the best possible results
                  for clients and going above and beyond to ensure their
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="About-Fotu">
          <div className="abt-img">
            <img src={about} alt="" />

            <div className="about-float-window">
              <div className="about-float-icon">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6453 15.4153C18.7677 14.9317 18.7625 14.4246 18.63 13.9436C18.4976 13.4626 18.2425 13.0243 17.8898 12.6715C17.537 12.3188 17.0987 12.0637 16.6177 11.9312C16.1367 11.7988 15.6296 11.7935 15.146 11.916C14.1406 12.1641 13.318 12.9867 13.0699 13.9921C12.9475 14.4757 12.9527 14.9828 13.0852 15.4638C13.2176 15.9448 13.4727 16.3831 13.8254 16.7358C14.1782 17.0886 14.6165 17.3437 15.0975 17.4761C15.5785 17.6086 16.0856 17.6138 16.5692 17.4914C17.5877 17.2433 18.4103 16.4207 18.6453 15.4153Z"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.7114 23.0538C24.8585 21.9853 25.7729 20.6917 26.3974 19.2539C27.022 17.8161 27.3433 16.2649 27.3413 14.6973C27.3413 13.1901 27.0444 11.6976 26.4676 10.3051C25.8909 8.91266 25.0455 7.64743 23.9797 6.58167C22.914 5.51592 21.6487 4.67052 20.2562 4.09374C18.8638 3.51696 17.3713 3.22009 15.8641 3.22009C14.3569 3.22009 12.8645 3.51696 11.472 4.09374C10.0795 4.67052 8.8143 5.51592 7.74855 6.58167C6.6828 7.64743 5.83739 8.91266 5.26061 10.3051C4.68383 11.6976 4.38697 13.1901 4.38697 14.6973C4.38697 18.0137 5.79713 21.0038 8.056 23.0929"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6413 19.6067C9.44005 18.3271 8.6958 16.6036 8.6958 14.6973C8.6958 10.741 11.9078 7.52893 15.8641 7.52893C19.8204 7.52893 23.0325 10.741 23.0325 14.6973C23.0325 16.6036 22.2882 18.3141 21.087 19.6067M13.6444 22.3618L11.7642 24.699C10.2757 26.5661 11.5945 29.3212 13.9839 29.3212H17.7313C20.1207 29.3212 21.4526 26.5531 19.951 24.699L18.0708 22.3618C16.9479 20.9385 14.7804 20.9385 13.6444 22.3618Z"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="about-float-window-content">
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
            <div className="About-Float-2">
              <div className="about-float-icon2">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6453 15.4153C18.7677 14.9317 18.7625 14.4246 18.63 13.9436C18.4976 13.4626 18.2425 13.0243 17.8898 12.6715C17.537 12.3188 17.0987 12.0637 16.6177 11.9312C16.1367 11.7988 15.6296 11.7935 15.146 11.916C14.1406 12.1641 13.318 12.9867 13.0699 13.9921C12.9475 14.4757 12.9527 14.9828 13.0852 15.4638C13.2176 15.9448 13.4727 16.3831 13.8254 16.7358C14.1782 17.0886 14.6165 17.3437 15.0975 17.4761C15.5785 17.6086 16.0856 17.6138 16.5692 17.4914C17.5877 17.2433 18.4103 16.4207 18.6453 15.4153Z"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.7114 23.0538C24.8585 21.9853 25.7729 20.6917 26.3974 19.2539C27.022 17.8161 27.3433 16.2649 27.3413 14.6973C27.3413 13.1901 27.0444 11.6976 26.4676 10.3051C25.8909 8.91266 25.0455 7.64743 23.9797 6.58167C22.914 5.51592 21.6487 4.67052 20.2562 4.09374C18.8638 3.51696 17.3713 3.22009 15.8641 3.22009C14.3569 3.22009 12.8645 3.51696 11.472 4.09374C10.0795 4.67052 8.8143 5.51592 7.74855 6.58167C6.6828 7.64743 5.83739 8.91266 5.26061 10.3051C4.68383 11.6976 4.38697 13.1901 4.38697 14.6973C4.38697 18.0137 5.79713 21.0038 8.056 23.0929"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6413 19.6067C9.44005 18.3271 8.6958 16.6036 8.6958 14.6973C8.6958 10.741 11.9078 7.52893 15.8641 7.52893C19.8204 7.52893 23.0325 10.741 23.0325 14.6973C23.0325 16.6036 22.2882 18.3141 21.087 19.6067M13.6444 22.3618L11.7642 24.699C10.2757 26.5661 11.5945 29.3212 13.9839 29.3212H17.7313C20.1207 29.3212 21.4526 26.5531 19.951 24.699L18.0708 22.3618C16.9479 20.9385 14.7804 20.9385 13.6444 22.3618Z"
                    stroke="#4BACE0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="about-float-window-content2">
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <iframe   class="fp-iframe"  src="https://heyzine.com/flip-book/5c5560b9f6.html"></iframe> */}
      {/* </div> */}
      <NewFooter />
    </div>
  );
}

export default AboutPage


// style=" scrolling="no""
// allowfullscreen=""

