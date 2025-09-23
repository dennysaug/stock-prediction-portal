import { Link } from "react-router-dom"

function Button(props) {

    const {children, ...rest} = props;

    if(rest.to) {
        return <Link {...rest}>{children}</Link>
    }

    return <button {...rest}>{children}</button>

}

export default Button