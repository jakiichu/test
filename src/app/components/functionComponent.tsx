import React , {FC} from 'react';
import { IUserList } from '../../domain/interface/UserList';
import UserItem from './userItem';


const FunctionComponent: FC<IUserList> = ({users}) => {
    
    return (
        <div>
            {users.map(user =>
                <UserItem key={user.id} user={user}/>
                )}
        </div>
    );
};

export default FunctionComponent;