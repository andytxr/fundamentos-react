import React from "react";

export default function Family(props){

    return(

        <div>
            {

                React.Children.map(props.children, (child, i) =>{

                    return React.cloneElement(child, {...props, key: i});

                })

            }
        </div>

    )

}