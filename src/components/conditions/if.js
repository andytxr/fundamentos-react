export default props =>{

    let elseChild = props.children.filter(child =>{

        return child.type && child.type.name === 'Else'

    })[0]

    let ifChildren = props.children.filter(child =>{

        return child !== elseChild

    })

    if(props.condition){

        return ifChildren;
        
    }else if (elseChild){

        return elseChild;

    }else{

        return false;

    }

}

export const Else = props => props.children