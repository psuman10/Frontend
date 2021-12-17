
import Slider from '../slider/slider'
function Home() {
    const {cars} = useSelector(state=>state.carsReducer)
    


    function setFilter(values){

              
    }

    return (
        <DefaultLayout>

            <Slider></Slider>

        </DefaultLayout>
    )
}

export default Home
