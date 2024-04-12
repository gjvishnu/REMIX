import Banner from "~/components/banner"
import Cards from "~/components/cards"
import Collection from "~/components/collections"
import Navbar from "~/components/navbar"

export default function Home (){
    return(
        <>
        <Navbar/>
        <Banner/>
        <Collection/>
        <Cards/>
        </>
    )
}