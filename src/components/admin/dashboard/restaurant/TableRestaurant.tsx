import React from 'react';
import ExtractValue from '../../../common/utils/ExtractValue';

interface Props {
    restaurant: any[];
    openModalFicha: (item: any) => void;
}

const TableRestaurant: React.FC<Props> = ({ restaurant,openModalFicha }) => {

    return (
        <div className="bg-base-100">
            <table className='table table-sm'>
                <thead>
                    <tr>
                        <th className='text-black'>Code</th>
                        <th className='text-black'>Nombre</th>
                        <th className='text-black'>F. Creación</th>
                        <th className='text-black'>U. actualización</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurant.map(item => <tr className='group' onClick={() => openModalFicha(item)}>
                            <td className='group-hover:bg-gray-200 duration-200 text-gray-500 font-semibold'>{item.access}</td>
                            <td className='group-hover:bg-gray-200 duration-200 text-gray-500 font-semibold'>{item.name}</td>
                            <td className='group-hover:bg-gray-200 duration-200 text-gray-500 font-semibold'>{ExtractValue({ extractBy: { type: `date`, stractBy: `updateAt` }, item })}</td>
                            <td className='group-hover:bg-gray-200 duration-200 text-gray-500 font-semibold'>{ExtractValue({ extractBy: { type: `date`, stractBy: `createAt` }, item })}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TableRestaurant;