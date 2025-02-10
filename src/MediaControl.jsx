import SeekBar from "./Seekbar"
import Button from "./Button"

export default function MediaControl() {
    return(
        <div className="media-control">
            <div className="basic-3row-grid">
                <Button iconName="pause" corners="40px 8px 8px 8px"></Button>
                <Button iconName="play_arrow" className="double"></Button>
                <Button iconName="stop" corners="8px 40px 8px 8px"></Button>
            </div>
            <SeekBar/>
            <div className="basic-4row-grid">
                <Button iconName="skip_previous" corners="8px 8px 8px 40px"></Button>
                <Button iconName="fast_rewind"></Button>
                <Button iconName="fast_forward"></Button>
                <Button iconName="skip_next" corners="8px 8px 40px 8px"></Button>
            </div>
        </div>
    )
}