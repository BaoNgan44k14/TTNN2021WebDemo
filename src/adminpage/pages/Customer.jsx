import React from 'react'
import { Link } from 'react-router-dom'

// 
import Table from '../components/table/Table'
import customerList from '../../assets/datajson/customerList.json'
import ButtonEdit from '../../homepage/components/ButtonEdit'
import ButtonDelete from '../../homepage/components/ButtonDelete'




const customerTableHead = [
    'ID',
    'Tên',
    'username',
    'email',
    'mật khẩu',
    'số điện thoại',
    'địa chỉ',
    '',
    ''
    
]
const renderHead = (item, index) => <th key={index}>{item}</th>
const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.ID}</td>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.phone}</td>
        <td>{item.address}</td>
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
const Customer = () => {
    return (
        <div>
            <div className="products__label">
                <h2 className="page-header">
                    Quản Lý Tài Khoản
                </h2>
                <div className="products__right-item">
                    <Link to='/newaccount'>
                        <button className="btn" type="submit">TẠO MỚI TÀI KHOẢN</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table 
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
