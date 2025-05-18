import { Leaf } from 'lucide-react';
import React from 'react';

interface Props {
    category: any[]
}

const CardCategory: React.FC<Props> = ({ category }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {
                category.map(item => (
                    <div key={item.id} className="card bg-white border-t shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title">
                                <Leaf className="w-5 h-5 text-green-500" />
                                {item.name}
                            </h3>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CardCategory;