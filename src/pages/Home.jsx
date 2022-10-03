
import { Banner } from "../components/Banner";
import BaseLayout from "../layouts/BaseLayout";

export default function Home() {

    // header - where you have mutilpe pages - if you want the header/footer on all pages - put it in the layout
    //hero - who am i
    //footer
    return (
        <BaseLayout>
        <Banner/>
        </BaseLayout>
    )
}