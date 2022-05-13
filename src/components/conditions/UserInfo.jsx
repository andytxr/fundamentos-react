import React from "react";
import If, {Else} from './if';

export default function UserInfo(props){

    let user = props.user || {}

    return(

        <div>

            <If condition={user && user.name}>
                Welcome <strong>{user.name}</strong>
                <Else>
                    Welcome <strong>Cara!</strong>
                </Else>
            </If>
            

        </div>

    )

}