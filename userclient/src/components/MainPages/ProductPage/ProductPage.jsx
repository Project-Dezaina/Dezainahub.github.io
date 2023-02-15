import React from "react";
import "./ProductPage.css";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import ProductCards from "./ProductCards/ProductCards";
import ProductNavigation from "./ProductNavigation/ProductNavigation";
import ProductCard2 from "./ProductCard2/ProductCard2";
import ProductCard3 from "./ProductCards3/ProductCard3";




const ProductPage = () => {
  // const cards = [
  //   {
  //       SVG: PassingSVG(),
  //       Heads: "Poster",
  //       Pricing: "300/-",
  //       Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
  //       },
  //       {
  //         SVG: PassingSVG(),
  //         Heads: "Poster",
  //         Pricing: "300/-",
  //         Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
  //         },
  //         {
  //           SVG: PassingSVG(),
  //           Heads: "Poster",
  //           Pricing: "300/-",
  //           Body: "Understanding clients' goals and feelings, and being able to put themselves in their clients' shoes to create designs that resonate with..... Read More",
  //           },          
    

  // ];
    return (
      <div>
        <Header />
        <div className="ProductPageMainV ">
          <div className="ProductPageMain ">
            <div className="ProductPageHead container">
              <div className="PageHeadContent">
                <h1>Everything you need to grow your business visually</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
              <div className="PageHeadCards">
                <div className="PageCards" id="PageCard1">
                  <div className="CardBackShadow"></div>
                  <div className="PageSubCard1">
                    <h3>Click on Learn More</h3>
                    <p>
                      Read how some proficient designs can help your business
                      become more efficient
                    </p>
                    <div className="ProgressBar">
                      <div className="ProgressBarContent">
                        <div className="BarProgress">
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.80046 1.12354H3.13379C1.80046 1.12354 1.13379 1.7902 1.13379 3.12354V4.7902C1.13379 6.45687 1.80046 6.7902 3.13379 6.7902H3.30046C3.39379 6.7902 3.51379 6.8502 3.56712 6.92354L4.06712 7.5902C4.28712 7.88354 4.64712 7.88354 4.86712 7.5902L5.36712 6.92354C5.43046 6.8402 5.53046 6.7902 5.63379 6.7902H5.80046C7.13379 6.7902 7.80046 6.12354 7.80046 4.7902V3.12354C7.80046 1.7902 7.13379 1.12354 5.80046 1.12354ZM3.31046 4.52354C3.40712 4.6202 3.40712 4.7802 3.31046 4.87687C3.26046 4.92687 3.19712 4.9502 3.13379 4.9502C3.07046 4.9502 3.00712 4.92687 2.95712 4.87687L2.29046 4.2102C2.24396 4.16316 2.21789 4.09968 2.21789 4.03354C2.21789 3.96739 2.24396 3.90391 2.29046 3.85687L2.95712 3.1902C3.05379 3.09354 3.21379 3.09354 3.31046 3.1902C3.40712 3.28687 3.40712 3.44687 3.31046 3.54354L2.82046 4.03354L3.31046 4.52354ZM5.03046 3.35354L4.36379 4.9102C4.32379 5.00354 4.23046 5.0602 4.13379 5.0602C4.09205 5.06078 4.05084 5.05083 4.01396 5.03126C3.97709 5.0117 3.94574 4.98316 3.92281 4.94827C3.89989 4.91339 3.88613 4.87329 3.8828 4.83167C3.87948 4.79006 3.8867 4.74829 3.90379 4.7102L4.57046 3.15354C4.62379 3.02687 4.77046 2.96687 4.90046 3.02354C5.02712 3.0802 5.08379 3.22687 5.03046 3.35354ZM6.64379 4.2102L5.97712 4.87687C5.92712 4.92687 5.86379 4.9502 5.80046 4.9502C5.73712 4.9502 5.67379 4.92687 5.62379 4.87687C5.5773 4.82982 5.55122 4.76635 5.55122 4.7002C5.55122 4.63406 5.5773 4.57058 5.62379 4.52354L6.11379 4.03354L5.62379 3.54354C5.5773 3.49649 5.55122 3.43301 5.55122 3.36687C5.55122 3.30073 5.5773 3.23725 5.62379 3.1902C5.72046 3.09354 5.88046 3.09354 5.97712 3.1902L6.64379 3.85687C6.74046 3.95354 6.74046 4.11354 6.64379 4.2102Z"
                              fill="#2F455C"
                            />
                          </svg>

                          <h4>Progress</h4>
                        </div>
                        <h6>01/04</h6>
                      </div>
                      <div className="BarBar"></div>
                    </div>
                  </div>
                </div>
                <div className="PageCards" id="PageCard2">
                  <div className="CardBackShadow"></div>
                  <div className="PageSubCard1" id="Subcard2">
                    <h3>Click on Learn More</h3>
                    <p>
                      Read how some proficient designs can help your business
                      become more efficient
                    </p>
                    <div className="ProgressBar">
                      <div className="ProgressBarContent">
                        <div className="BarProgress">
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.80046 1.12354H3.13379C1.80046 1.12354 1.13379 1.7902 1.13379 3.12354V4.7902C1.13379 6.45687 1.80046 6.7902 3.13379 6.7902H3.30046C3.39379 6.7902 3.51379 6.8502 3.56712 6.92354L4.06712 7.5902C4.28712 7.88354 4.64712 7.88354 4.86712 7.5902L5.36712 6.92354C5.43046 6.8402 5.53046 6.7902 5.63379 6.7902H5.80046C7.13379 6.7902 7.80046 6.12354 7.80046 4.7902V3.12354C7.80046 1.7902 7.13379 1.12354 5.80046 1.12354ZM3.31046 4.52354C3.40712 4.6202 3.40712 4.7802 3.31046 4.87687C3.26046 4.92687 3.19712 4.9502 3.13379 4.9502C3.07046 4.9502 3.00712 4.92687 2.95712 4.87687L2.29046 4.2102C2.24396 4.16316 2.21789 4.09968 2.21789 4.03354C2.21789 3.96739 2.24396 3.90391 2.29046 3.85687L2.95712 3.1902C3.05379 3.09354 3.21379 3.09354 3.31046 3.1902C3.40712 3.28687 3.40712 3.44687 3.31046 3.54354L2.82046 4.03354L3.31046 4.52354ZM5.03046 3.35354L4.36379 4.9102C4.32379 5.00354 4.23046 5.0602 4.13379 5.0602C4.09205 5.06078 4.05084 5.05083 4.01396 5.03126C3.97709 5.0117 3.94574 4.98316 3.92281 4.94827C3.89989 4.91339 3.88613 4.87329 3.8828 4.83167C3.87948 4.79006 3.8867 4.74829 3.90379 4.7102L4.57046 3.15354C4.62379 3.02687 4.77046 2.96687 4.90046 3.02354C5.02712 3.0802 5.08379 3.22687 5.03046 3.35354ZM6.64379 4.2102L5.97712 4.87687C5.92712 4.92687 5.86379 4.9502 5.80046 4.9502C5.73712 4.9502 5.67379 4.92687 5.62379 4.87687C5.5773 4.82982 5.55122 4.76635 5.55122 4.7002C5.55122 4.63406 5.5773 4.57058 5.62379 4.52354L6.11379 4.03354L5.62379 3.54354C5.5773 3.49649 5.55122 3.43301 5.55122 3.36687C5.55122 3.30073 5.5773 3.23725 5.62379 3.1902C5.72046 3.09354 5.88046 3.09354 5.97712 3.1902L6.64379 3.85687C6.74046 3.95354 6.74046 4.11354 6.64379 4.2102Z"
                              fill="#2F455C"
                            />
                          </svg>

                          <h4>Progress</h4>
                        </div>
                        <h6>01/04</h6>
                      </div>
                      <div className="BarBar"></div>
                    </div>
                  </div>
                </div>
                <div className="PageCards" id="PageCard3">
                  <div className="CardBackShadow"></div>
                  <div className="PageSubCard1" id="Subcard3">
                    <h3>Click on Learn More</h3>
                    <p>
                      Read how some proficient designs can help your business
                      become more efficient
                    </p>
                    <div className="ProgressBar">
                      <div className="ProgressBarContent">
                        <div className="BarProgress">
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.80046 1.12354H3.13379C1.80046 1.12354 1.13379 1.7902 1.13379 3.12354V4.7902C1.13379 6.45687 1.80046 6.7902 3.13379 6.7902H3.30046C3.39379 6.7902 3.51379 6.8502 3.56712 6.92354L4.06712 7.5902C4.28712 7.88354 4.64712 7.88354 4.86712 7.5902L5.36712 6.92354C5.43046 6.8402 5.53046 6.7902 5.63379 6.7902H5.80046C7.13379 6.7902 7.80046 6.12354 7.80046 4.7902V3.12354C7.80046 1.7902 7.13379 1.12354 5.80046 1.12354ZM3.31046 4.52354C3.40712 4.6202 3.40712 4.7802 3.31046 4.87687C3.26046 4.92687 3.19712 4.9502 3.13379 4.9502C3.07046 4.9502 3.00712 4.92687 2.95712 4.87687L2.29046 4.2102C2.24396 4.16316 2.21789 4.09968 2.21789 4.03354C2.21789 3.96739 2.24396 3.90391 2.29046 3.85687L2.95712 3.1902C3.05379 3.09354 3.21379 3.09354 3.31046 3.1902C3.40712 3.28687 3.40712 3.44687 3.31046 3.54354L2.82046 4.03354L3.31046 4.52354ZM5.03046 3.35354L4.36379 4.9102C4.32379 5.00354 4.23046 5.0602 4.13379 5.0602C4.09205 5.06078 4.05084 5.05083 4.01396 5.03126C3.97709 5.0117 3.94574 4.98316 3.92281 4.94827C3.89989 4.91339 3.88613 4.87329 3.8828 4.83167C3.87948 4.79006 3.8867 4.74829 3.90379 4.7102L4.57046 3.15354C4.62379 3.02687 4.77046 2.96687 4.90046 3.02354C5.02712 3.0802 5.08379 3.22687 5.03046 3.35354ZM6.64379 4.2102L5.97712 4.87687C5.92712 4.92687 5.86379 4.9502 5.80046 4.9502C5.73712 4.9502 5.67379 4.92687 5.62379 4.87687C5.5773 4.82982 5.55122 4.76635 5.55122 4.7002C5.55122 4.63406 5.5773 4.57058 5.62379 4.52354L6.11379 4.03354L5.62379 3.54354C5.5773 3.49649 5.55122 3.43301 5.55122 3.36687C5.55122 3.30073 5.5773 3.23725 5.62379 3.1902C5.72046 3.09354 5.88046 3.09354 5.97712 3.1902L6.64379 3.85687C6.74046 3.95354 6.74046 4.11354 6.64379 4.2102Z"
                              fill="#2F455C"
                            />
                          </svg>

                          <h4>Progress</h4>
                        </div>
                        <h6>01/04</h6>
                      </div>
                      <div className="BarBar"></div>
                    </div>
                  </div>
                </div>
                <div className="PageCards" id="PageCard4">
                  <div className="CardBackShadow"></div>
                  <div className="PageSubCard1" id="Subcard4">
                    <h3>Click on Learn More</h3>
                    <p>
                      Read how some proficient designs can help your business
                      become more efficient
                    </p>
                    <div className="ProgressBar">
                      <div className="ProgressBarContent">
                        <div className="BarProgress">
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.80046 1.12354H3.13379C1.80046 1.12354 1.13379 1.7902 1.13379 3.12354V4.7902C1.13379 6.45687 1.80046 6.7902 3.13379 6.7902H3.30046C3.39379 6.7902 3.51379 6.8502 3.56712 6.92354L4.06712 7.5902C4.28712 7.88354 4.64712 7.88354 4.86712 7.5902L5.36712 6.92354C5.43046 6.8402 5.53046 6.7902 5.63379 6.7902H5.80046C7.13379 6.7902 7.80046 6.12354 7.80046 4.7902V3.12354C7.80046 1.7902 7.13379 1.12354 5.80046 1.12354ZM3.31046 4.52354C3.40712 4.6202 3.40712 4.7802 3.31046 4.87687C3.26046 4.92687 3.19712 4.9502 3.13379 4.9502C3.07046 4.9502 3.00712 4.92687 2.95712 4.87687L2.29046 4.2102C2.24396 4.16316 2.21789 4.09968 2.21789 4.03354C2.21789 3.96739 2.24396 3.90391 2.29046 3.85687L2.95712 3.1902C3.05379 3.09354 3.21379 3.09354 3.31046 3.1902C3.40712 3.28687 3.40712 3.44687 3.31046 3.54354L2.82046 4.03354L3.31046 4.52354ZM5.03046 3.35354L4.36379 4.9102C4.32379 5.00354 4.23046 5.0602 4.13379 5.0602C4.09205 5.06078 4.05084 5.05083 4.01396 5.03126C3.97709 5.0117 3.94574 4.98316 3.92281 4.94827C3.89989 4.91339 3.88613 4.87329 3.8828 4.83167C3.87948 4.79006 3.8867 4.74829 3.90379 4.7102L4.57046 3.15354C4.62379 3.02687 4.77046 2.96687 4.90046 3.02354C5.02712 3.0802 5.08379 3.22687 5.03046 3.35354ZM6.64379 4.2102L5.97712 4.87687C5.92712 4.92687 5.86379 4.9502 5.80046 4.9502C5.73712 4.9502 5.67379 4.92687 5.62379 4.87687C5.5773 4.82982 5.55122 4.76635 5.55122 4.7002C5.55122 4.63406 5.5773 4.57058 5.62379 4.52354L6.11379 4.03354L5.62379 3.54354C5.5773 3.49649 5.55122 3.43301 5.55122 3.36687C5.55122 3.30073 5.5773 3.23725 5.62379 3.1902C5.72046 3.09354 5.88046 3.09354 5.97712 3.1902L6.64379 3.85687C6.74046 3.95354 6.74046 4.11354 6.64379 4.2102Z"
                              fill="#2F455C"
                            />
                          </svg>

                          <h4>Progress</h4>
                        </div>
                        <h6>01/04</h6>
                      </div>
                      <div className="BarBar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <ProductNavigation/>
            
                <ProductCards />
                <ProductCard2 />
                <ProductCard3 />

            <ProductNavigation/>
          </div>
        </div>
        <NewFooter />
      </div>
    );
    
}

export default ProductPage
