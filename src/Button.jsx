function Button(props){
    const classes = `btn ${props.tipo || "default"}`;

    return <button className={classes}>{props.children}</button>
}

export default Button;