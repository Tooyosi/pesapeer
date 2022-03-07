import Header from "components/common/Header";
import BorderlessComponent from "./Components/BorderlessComponent";
import FeaturesComponent from "./Components/FeaturesComponent";
import { TopComponent } from "./Components/TopComponent";

export default function Landing() {
    return (
        <div id="landing">
            <Header />
            <TopComponent />
            <FeaturesComponent />
            <BorderlessComponent />
        </div>
    )
}
