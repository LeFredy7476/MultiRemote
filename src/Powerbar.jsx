import Button from "./Button"

export default function PowerBar() {
    return(
        <div className="powerbar basic-3row-grid">
            <Button iconName="menu" corners="40px"></Button>
            <Button iconName="power_settings_new" className="double" corners="40px"></Button>
            <Button iconName="fullscreen" corners="40px"></Button>
        </div>
    )
}
