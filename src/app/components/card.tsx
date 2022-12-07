
import React, {FC, useState}  from 'react';
import { ICard } from '../../domain/interface/card';
import { cardVariant } from '../../domain/variant/cartVariant';




const Card: FC <ICard> = ({width, height, children, variant, onClick}) => {
    const [state] = useState(0);
    return (
        <div
	style={{width, height,
	border:
									variant===cardVariant.outlined
									? '1px solid black':'none',
   
									background: variant===cardVariant.primary
									? "blue" : ""
    }} 
    onClick={()=>onClick(state)}
    >
            {children}
        </div>
    );
};

export default Card;