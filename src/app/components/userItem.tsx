import React, { FC } from 'react';
import { IUserItem } from '../../domain/interface/UserItem';

const UserItem: FC<IUserItem> = ({user}) => {
    return (
        <div>
                    {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
                </div>
    );
};

export default UserItem;