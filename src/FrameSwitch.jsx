import Frame from "./Frame"

export default function FrameSwitch() {
    return(
        <div className="frame-switch">
            <div className="frame-switch-content">
                <Frame></Frame>
                <Frame></Frame>
                <Frame></Frame>
            </div>
            <div className="frame-switch-icon">
                <div className="frame-switch-knob"></div>
                <div className="frame-switch-knob"></div>
                <div className="frame-switch-knob"></div>
                {/* <div className="frame-switch-knob"></div> */}
            </div>
        </div>
    )
}