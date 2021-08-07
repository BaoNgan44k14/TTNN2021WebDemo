import React from 'react'
import { Link } from 'react-router-dom'
// 
import Table from '../components/table/Table'
import addProducts from '../../assets/datajs/AddProducts'
import ButtonEdit from '../../homepage/components/ButtonEdit'
import ButtonDelete from '../../homepage/components/ButtonDelete'



const productsTableHead = [
    'ID',
    'hình ảnh',
    'thể loại',
    'mô tả',
    'màu',
    'số lượng',
    'size',
    'đơn giá',
    '',
    ''
]
const renderHead = (item, index) => <th key={index}>{item}</th>
const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td><img className="productslist__img" src={item.image} alt="" /></td>
        <td>{item.type}</td>
        <td>{item.name}</td>
        <td>{item.color}</td>
        <td>{item.number}</td>
        <td>{item.size}</td>
        <td>{item.price}</td>
        <td > 
                <ButtonEdit>
                    <i class='bx bxs-edit-alt'></i>
                </ButtonEdit>
           
        </td>
        <td > 
                <ButtonDelete>
                <i class='bx bx-trash'></i>
                </ButtonDelete>
                
           
        </td>
        
    </tr>
)
const ProductManagement = () => {
    return (
        <div>
            <div className="products__label">
                <h2 className="page-header">
                    Products
                </h2>
                <div className="products__right-item">
                    <Link to="/newproduct">
                        <button className="btn" type="submit">THÊM SẢN PHẨM</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table 
                                limit='3'
                                headData={productsTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={addProducts}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
       
        </div>
    )
}

export default ProductManagement
