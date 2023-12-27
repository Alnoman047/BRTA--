import Cards from "../../Cards/Cards";
import Notice from "../../Notice/Notice";
import Rules from "../../Rules/Rules";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
         
          <Cards></Cards>
          <Notice></Notice>
          <Rules></Rules>

        </div>
    );
};

export default Home;