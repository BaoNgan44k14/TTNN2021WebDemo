import React from 'react'
import { Link } from 'react-router-dom'

// jsx
import Grid from '../components/Grid';
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import Section, {SectionBody, SectionTitle} from '../components/Section';
import PolicyCard from '../components/PolicyCard';


// Data
import heroSlideData from '../../assets/datajs/heroSlide';
import policy from '../../assets/datajs/policy';
import productData from '../../assets/datajs/products';

const Home =  props => {
    return (
        <Helmet title="Trang Chủ">
            {/* Thanh trượt */}
            <HeroSlider 
                data={heroSlideData}
                control={true}
            />
            {/* Policy Section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link to="/policy">
                                <PolicyCard
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link> )
                        }
                    </Grid>
                </SectionBody>
            </Section>

            {/* Selling Product */}
            <Section>
                <SectionTitle>
                   Top Sản Phẩm Bán Chạy Trong Tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) => ( 
                               
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
                    </Grid>
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>
                   Sản Phẩm Mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
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
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Home


