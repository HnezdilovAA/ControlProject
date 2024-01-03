import './TravelBlock.css'

type Props = {}
const TravelBlock = (props: Props) => {
    return (
        <div className="TravelBlockImg">
            <img src="./images/TravelImage.svg" alt="#" />
            <div className="TravelBlockImgText">
                <p>
                    <button className="TravelBlockImgButton">
                        <p>TRAVEL</p>
                    </button>
                </p>
                Richird Norton photorealistic rendering as real photos
                <span>
                    <p>
                        Progressively incentivize cooperative systems through
                        technically sound
                        <p>
                            functionalities. The credibly productivate seamless
                            data.
                        </p>
                    </p>
                </span>
                <button className="TravelButtonStart">
                    <span>Start planning your trip</span>
                </button>
            </div>
        </div>
    )
}
export default TravelBlock
