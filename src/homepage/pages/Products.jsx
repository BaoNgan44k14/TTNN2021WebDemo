import { React, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
// jsx
import Helmet from '../components/Helmet';
import ProductCard from '../components/ProductCard';
import productData from '../../assets/datajs/products';
import CheckBox from '../components/CheckBox';


const paginationNumber = [
    {
        display: "1",
        path: "/products"
    },
    {
        display: "2",
        path: "/products"
    },
    {
        display: "3",
        path: "/products"
    },
    {
        display: "4",
        path: "/products"
    },
    {
        display: "5",
        path: "/products"
    },
    {
        display: "6",
        path: "/products"
    },
    {
        display: "7",
        path: "/products"
    },
    {
        display: "...",
        path: ""
    },
    {
        display: "14",
        path: "/products"
    }
]

const itemList = [
    {
        display: 'Áo Thun',
        path: "/products"
    },
    {
        display: 'Áo Sơ Mi',
        path: "/products"
    },
    {
        display: 'Áo polo',
        path: "/products"
    },
    {
        display: 'Quần short',
        path: "/products"
    },
    {
        display: 'Chân váy',
        path: "/products"
    },
    {
        display: 'Yếm',
        path: "/products"
    }
]

const sizeItem = [

    {
        display: "S",
        path: "/products"
    },
    {
        display: "M",
        path: "/products"
    },
    {
        display: "L",
        path: "/products"
    },
    {
        display: "XS",
        path: "/products"
    },
    {
        display: "XL",
        path: "/products"
    }
]

const Products = props => {
    return (
       <Helmet title="Sản Phẩm">
                <div className="grid2 wide products__margin">
                    <div className="row2 app_content sm-gutter">


        {/* DANH MỤC */}
                        <div className="col2 l-2 m-0 c-0">
                            <nav className="catelogy">
                                <h3 className="catelogy__heading">
                                    Danh Mục Sản Phẩm
                                </h3>
                                <ul className="catelogy-list">
                                    {
                                        itemList.map((item, index) => (
                                            <div className="catelogy-item catelogy-item__link">
                                                <li className={`pagination-item ${props.active ? 'active' : ''}`}>
                                                    <CheckBox
                                                    label= {item.display}/>
                                                </li>
                                            </div>
                                         ))
                                    }
                                </ul>
                            </nav>

                            <nav className="catelogy">
                                <h3 className="catelogy__heading">
                                    Size
                                </h3>
                                <ul className="catelogy-list">
                                    {
                                        sizeItem.map((item, index) => (
                                            <div className="catelogy-item catelogy-item__link">
                                                <li className={`pagination-item ${props.active ? 'active' : ''}`}>
                                                    <CheckBox
                                                    label= {item.display}/>
                                                </li>
                                            </div>
                                         ))
                                    }
                                </ul>
                            </nav>


                        </div>
        {/* SẢN PHẨM */}
                        <div className="col2 l-10 m-12 c-12">
                            <div className="home-product">
                                <div className="row2 sm-gutter">
                                    <div className="col2 l-2-4 m-4 c-6  ">
                                        {
                                            productData.getProducts(1).map((item, index) => (
                                                <ProductCard 
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    name={item.title}
                                                    price={item.price}
                                                    slug={item.slug}
                                                />
                                            ))
                                            
                                        }
                                        
                                    </div>
                                    <div className="col2 l-2-4 m-4 c-6  ">
                                        {
                                            productData.getProducts(1).map((item, index) => (
                                                <ProductCard 
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    name={item.title}
                                                    price={item.price}
                                                    slug={item.slug}
                                                />
                                            ))
                                            
                                        }
                                        
                                    </div>
                                    <div className="col2 l-2-4 m-4 c-6  ">
                                        {
                                            productData.getProducts(1).map((item, index) => (
                                                <ProductCard 
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    name={item.title}
                                                    price={item.price}
                                                    slug={item.slug}
                                                />
                                            ))
                                            
                                        }
                                        
                                    </div>
                                    <div className="col2 l-2-4 m-4 c-6  ">
                                        {
                                            productData.getProducts(1).map((item, index) => (
                                                <ProductCard 
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    name={item.title}
                                                    price={item.price}
                                                    slug={item.slug}
                                                />
                                            ))
                                            
                                        }
                                        
                                    </div>
                                    <div className="col2 l-2-4 m-4 c-6  ">
                                        {
                                            productData.getProducts(1).map((item, index) => (
                                                <ProductCard 
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    name={item.title}
                                                    price={item.price}
                                                    slug={item.slug}
                                                />
                                            ))
                                            
                                        }
                                        
                                    </div>
                                    <div className="col2 l-2-4 m-4 c-6  ">
                                        {
                                            productData.getProducts(1).map((item, index) => (
                                                <ProductCard 
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    name={item.title}
                                                    price={item.price}
                                                    slug={item.slug}
                                                />
                                            ))
                                            
                                        }
                                        
                                    </div>
                                    <div className="col2 l-2-4 m-4 c-6  ">
                                        {
                                            productData.getProducts(1).map((item, index) => (
                                                <ProductCard 
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    name={item.title}
                                                    price={item.price}
                                                    slug={item.slug}
                                                />
                                            ))
                                            
                                        }
                                        
                                    </div>
                                    <div className="col2 l-2-4 m-4 c-6  ">
                                        {
                                            productData.getProducts(1).map((item, index) => (
                                                <ProductCard 
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    name={item.title}
                                                    price={item.price}
                                                    slug={item.slug}
                                                />
                                            ))
                                            
                                        }
                                        
                                    </div>
                                    <div className="col2 l-2-4 m-4 c-6  ">
                                        {
                                            productData.getProducts(1).map((item, index) => (
                                                <ProductCard 
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    name={item.title}
                                                    price={item.price}
                                                    slug={item.slug}
                                                />
                                            ))
                                            
                                        }
                                        
                                    </div>
                                    <div className="col2 l-2-4 m-4 c-6  ">
                                        {
                                            productData.getProducts(1).map((item, index) => (
                                                <ProductCard 
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    name={item.title}
                                                    price={item.price}
                                                    slug={item.slug}
                                                />
                                            ))
                                            
                                        }
                                        
                                    </div>
                                </div>
                        {/* Số Trang  */}

                        <ul className="pagination home-product__pagination">
                            <li className="pagination-item">
                              <a className="pagination-item__link" href="#">
                                <i class='pagination-item__icon bx bxs-chevron-left-circle'></i>
                              </a>
                            </li>


                           <div className="pagination-item">
                                {
                                    paginationNumber.map((item, index) => (
                                        <p key={index}>
                                                <div className={`pagination-item ${props.active ? 'active' : ''}`}>
                                                <Link to={item.path}>
                                                    {item.display}
                                                </Link>
                                                </div>
                                        </p>
                                    ))
                                }
                              
                           </div>
                            <li className="pagination-item">
                                <a className="pagination-item__link" href="#">
                                  <i className="pagination-item__icon bx bxs-chevron-right-circle"></i>
                                </a>
                            </li>
                            
                        </ul>             
                            </div>    
                         </div>
                                        
                    </div>
                </div>
           
       </Helmet>
    )
}

export default Products

