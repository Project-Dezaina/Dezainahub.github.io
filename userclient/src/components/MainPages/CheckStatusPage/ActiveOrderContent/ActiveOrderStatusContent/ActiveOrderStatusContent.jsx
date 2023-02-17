// ActiveOrderStatusContent
import React from 'react';
import "./ActiveOrderStatusContent.css"
const ActiveOrderStatusContent = () => {
    
  
    const StatusCards = [
        {
          // Image: Fotu,
          title: "Want a Poster",
          text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          // Image: Fotu,
          title: "Need to change some layouts",
          text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          // Image: Fotu,
          title: "Layouts Done. Text changes",
          text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          // Image: Fotu,
          title: "Project Completed",
          text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            // Image: Fotu,
            title: "Project Completed",
            text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
      ];
  return (
                <div className='OrderDetails'>
                <div className="PosterHead">
                  <h4  onClick={()=>{
                    console.log("clicked");
                  }}>Restaurant Poster</h4>
                </div>
                <div className="OrderContent-Details">
                  {StatusCards.map((card, i) => (
                    <div key={i} className="PCard1">
                      <div className="PosterIcon">
                        <div class="vl"></div>
                      </div>
                        <svg
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="17" cy="17" r="17" fill="#4BACE0" />
                          <path
                            d="M22.8434 19.0041H21.382C21.2253 19.0042 21.0721 19.0507 20.9418 19.1379L19.1543 20.3341C18.8693 20.5241 18.5368 20.6112 18.2122 20.6112C17.9351 20.6112 17.658 20.5479 17.4047 20.4054C17.0231 20.2035 16.7428 19.833 16.6051 19.4182C16.495 19.0857 16.2758 18.7769 15.9591 18.6273C15.5996 18.4593 15.2718 18.2306 14.9901 17.9512C14.3093 17.2704 13.9372 16.3125 13.9372 15.2437V11.9583C13.9372 11.7483 13.8538 11.547 13.7053 11.3985C13.5568 11.25 13.3555 11.1666 13.1455 11.1666C11.008 11.1666 9.58301 12.2354 9.58301 14.7291V19.0041C9.58301 21.4979 11.008 22.5666 13.1455 22.5666H16.1143V24.8229H13.858C13.5334 24.8229 13.2643 25.092 13.2643 25.4166C13.2643 25.7412 13.5334 26.0104 13.858 26.0104H19.558C19.8826 26.0104 20.1518 25.7412 20.1518 25.4166C20.1518 25.092 19.8826 24.8229 19.558 24.8229H17.3018V22.5666H20.2705C22.1665 22.5666 23.5021 21.7251 23.78 19.7942C23.8417 19.3612 23.4791 19.0041 23.0413 19.0041H22.8434Z"
                            fill="white"
                          />
                          <path
                            d="M22.8438 9.58337H17.6979C16.5183 9.58337 15.6317 10.185 15.2833 11.1667C15.1804 11.4675 15.125 11.8 15.125 12.1563V15.2438C15.125 16.0117 15.3783 16.6609 15.8296 17.1121C16.2808 17.5634 16.93 17.8167 17.6979 17.8167V18.9171C17.6979 19.3209 18.1571 19.5663 18.4975 19.3446L20.7854 17.8167H22.8438C23.2 17.8167 23.5325 17.7613 23.8333 17.6584C24.815 17.31 25.4167 16.4234 25.4167 15.2438V12.1563C25.4167 10.6125 24.3875 9.58337 22.8438 9.58337ZM17.9908 14.3334C17.8334 14.3334 17.6823 14.2708 17.571 14.1595C17.4596 14.0481 17.3971 13.8971 17.3971 13.7396C17.3971 13.5822 17.4596 13.4311 17.571 13.3198C17.6823 13.2084 17.8334 13.1459 17.9908 13.1459C18.1483 13.1459 18.2993 13.2084 18.4107 13.3198C18.522 13.4311 18.5846 13.5822 18.5846 13.7396C18.5846 13.8971 18.522 14.0481 18.4107 14.1595C18.2993 14.2708 18.1483 14.3334 17.9908 14.3334ZM20.2233 14.3334C20.1455 14.3335 20.0683 14.3182 19.9964 14.2885C19.9244 14.2588 19.859 14.2152 19.8038 14.1603C19.7487 14.1053 19.7049 14.04 19.675 13.9681C19.6451 13.8962 19.6297 13.8191 19.6296 13.7412C19.6295 13.6633 19.6447 13.5862 19.6744 13.5142C19.7041 13.4423 19.7477 13.3768 19.8027 13.3217C19.8577 13.2666 19.923 13.2228 19.9949 13.1929C20.0668 13.163 20.1439 13.1476 20.2217 13.1475C20.379 13.1472 20.5299 13.2095 20.6413 13.3206C20.7526 13.4316 20.8153 13.5824 20.8155 13.7396C20.8157 13.8969 20.7534 14.0478 20.6424 14.1591C20.5313 14.2705 20.3806 14.3332 20.2233 14.3334ZM22.4479 14.3334C22.37 14.3335 22.2929 14.3182 22.2209 14.2885C22.149 14.2588 22.0835 14.2152 22.0284 14.1603C21.9733 14.1053 21.9295 14.04 21.8996 13.9681C21.8697 13.8962 21.8543 13.8191 21.8542 13.7412C21.8541 13.6633 21.8693 13.5862 21.899 13.5142C21.9287 13.4423 21.9723 13.3768 22.0273 13.3217C22.0823 13.2666 22.1476 13.2228 22.2195 13.1929C22.2914 13.163 22.3685 13.1476 22.4463 13.1475C22.6036 13.1472 22.7545 13.2095 22.8659 13.3206C22.9772 13.4316 23.0399 13.5824 23.0401 13.7396C23.0403 13.8969 22.978 14.0478 22.867 14.1591C22.7559 14.2705 22.6052 14.3332 22.4479 14.3334Z"
                            fill="white"
                          />
                          <path
                            d="M25.4167 12.1563V15.2438C25.4167 16.4234 24.815 17.31 23.8333 17.6584C23.5325 17.7613 23.2 17.8167 22.8438 17.8167H20.7854L18.4975 19.3446C18.1571 19.5663 17.6979 19.3209 17.6979 18.9171V17.8167C16.93 17.8167 16.2808 17.5634 15.8296 17.1121C15.3783 16.6609 15.125 16.0117 15.125 15.2438V12.1563C15.125 11.8 15.1804 11.4675 15.2833 11.1667C15.6317 10.185 16.5183 9.58337 17.6979 9.58337H22.8438C24.3875 9.58337 25.4167 10.6125 25.4167 12.1563Z"
                            fill="white"
                          />
                        </svg>
                      <div className="ActiveOrderStatusContent-Content">
                        <h4 onClick={()=>{
                    console.log("clicked");
                  }}> {card.title}</h4>

                        <p>{card.text}</p>
                      </div>
                      </div>
                      
                  ))}    
                  
                  

                </div>  
               </div> 
  )
}

export default ActiveOrderStatusContent;
