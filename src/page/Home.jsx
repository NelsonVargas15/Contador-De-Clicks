import { useState, useEffect } from "react";
import { Stack } from "rsuite";
import Counter from "../components/Counter";
import CustomButton from "../components/CustomButton";
import ModalNotification from "../modals/ModalNotification";
import "../assets/css/page/home.css";

const Home = () => {
  const [clicksCount, setClicksCount] = useState(0);
  const [lastGoal, setLastGoal] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    const newClicksCount = clicksCount + 1;
    setClicksCount(newClicksCount);

    if (newClicksCount === 10 && !showNotification && lastGoal < 10) {
      setShowNotification(true);
      setLastGoal(newClicksCount);
    }
  };

  const handleResetClick = () => {
    setLastGoal(clicksCount); 
    setClicksCount(0);
    setShowNotification(false);
  };

  useEffect(() => {
    if (lastGoal >= 10) {
      setShowNotification(false);
    }
  }, [lastGoal]);

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