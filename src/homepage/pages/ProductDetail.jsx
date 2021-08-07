import React from 'react';
// jsx
import Grid from '../components/Grid'
import Helmet from '../components/Helmet'
import ProductCard from '../components/ProductCard';
import Section, {SectionBody, SectionTitle} from '../components/Section';
import ProductView from '../components/ProductView'


import productData from '../../assets/datajs/products';



const ProductDetail = props => {


    const product = productData.getProductSlug(props.match.params.slug)
    
    const relatedProducts = productData.getProducts(8)

    return (
        <Helmet title="{product.title}">

           <Section>
               <SectionTitle>
                   <h3 className="product__title">
                       {product.title}
                    </h3>
               </SectionTitle>
               <SectionBody>
                   <ProductView product={product}/>
               </SectionBody>
           </Section>

           <Section>
               <SectionTitle>
                   Khám Phá Thêm
               </SectionTitle>
               <SectionBody>
                   <Grid 
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                       {
                           relatedProducts.map((item, index) => (
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

export default ProductDetail

