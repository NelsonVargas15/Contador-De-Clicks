import  { useState, useEffect } from "react";
import { Stack } from "rsuite";
import Counter from "../components/Counter";
import CustomButton from "../components/CustomButton";
import ModalNotification from "../modals/ModalNotification";
import "../assets/css/page/home.css";

const Home = () => {
  const [clicksCount, setClicksCount] = useState(0);
  const [lastGoal, setLastGoal] = useState(0);
  const [showNotification, setShowNotification] = useState(false);





  const updateLocalStorage = (value) => {
    localStorage.setItem("lastGoal", JSON.stringify(value));
  };

  console.log(lastGoal);

  const handleButtonClick = () => {
    const newClicksCount = clicksCount + 1;
    setClicksCount(newClicksCount);

    if (newClicksCount === 50 && !showNotification && lastGoal < 50) {
      setShowNotification(true);
      setLastGoal(newClicksCount);
      updateLocalStorage(newClicksCount);
    }
  };

  const handleResetClick = () => {
    const storedLastGoal = localStorage.getItem("lastGoal");
    const initialLastGoal = storedLastGoal ? JSON.parse(storedLastGoal) : 0;

    setLastGoal(initialLastGoal);
    setClicksCount(0);
    setShowNotification(false);
    updateLocalStorage(initialLastGoal);
  };

  useEffect(() => {
    const storedLastGoal = localStorage.getItem("lastGoal");
    if (storedLastGoal) {
      setLastGoal(JSON.parse(storedLastGoal));
    }
  }, []);

  console.log(lastGoal)
  return (
    <Stack className="Home" justifyContent="center" alignItems="center" direction="column">
      {showNotification && (
        <ModalNotification
          type="success"
          header="Congratulations"
          content="You've achieved the first milestone!"
        />
      )}
      <Counter clicksCount={clicksCount} />
      <Stack alignItems="stretch" justifyContent="space-between" spacing={20}>
        <CustomButton text="Click" handleClick={handleButtonClick} />
        <CustomButton text="Reset" handleClick={handleResetClick} />
      </Stack>
    </Stack>
  );
};

export default Home;
