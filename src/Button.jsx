
export default function Button({className="", iconName="", corners="8px"}) {
    return (
        <button className={"blockbutton " + className} style={{borderRadius: corners}}>
            <span className="icon">
                {iconName}
            </span>
        </button>
    )
}