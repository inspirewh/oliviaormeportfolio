
import { Aboutme } from "../components/About";
import BaseLayout from "../layouts/BaseLayout";

export default function About() {

    // header - where you have mutilpe pages - if you want the header/footer on all pages - put it in the layout
    //hero - who am i
    //footer
    return (
        <BaseLayout>
        <Aboutme/>
        </BaseLayout>
    )
}