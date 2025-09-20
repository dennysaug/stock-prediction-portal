
function Button(props) {

    const {children, ...rest} = props;

    if(rest.href) {
        return <a {...rest}>{children}</a>
    }

    return <button {...rest}>{children}</button>

}

export default Button