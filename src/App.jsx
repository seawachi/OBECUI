import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import DashboardScreen from './components/DashboardScreen';
import LearningScreen from './components/LearningScreen';
import QuizScreen from './components/QuizScreen';
import CompetitionScreen from './components/CompetitionScreen';
import ARLauncher from './components/OrganSelector';
import ARLearning from './components/LearningScreen';
import ARQuiz from './components/QuizScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(3);
  const [selectedPart, setSelectedPart] = useState(null);
  const [mode, setMode] = useState("Learning");

  const renderContent = () => {
    switch (currentScreen) {
      case 'learning':
        return (
          <ARLauncher 
          setCurrentScreen={setCurrentScreen}
          setSidebarCollapsed = {setSidebarCollapsed}
          mode={mode}/>
        );
      case 'ARLearning':
        return (
          <ARLearning />
        );
      case 'ARQuiz':
        return (
          <ARQuiz
          quizScore={quizScore}
          setQuizScore={setQuizScore}
          currentQuizQuestion={currentQuizQuestion}
          setCurrentQuizQuestion={setCurrentQuizQuestion}
          />
        );
      case 'compete':
        return <CompetitionScreen />;
      default:
        return <DashboardScreen
        setCurrentScreen={setCurrentScreen}
        setMode={setMode}
        />;
    }
  };

  const titleMap = {
    home: 'Dashboard',
    learning: 'Learning Mode',
    quiz: 'Quiz Mode',
    compete: 'Competition',
  };

  
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      
      <div className="flex-1 flex flex-col">
        {!currentScreen.startsWith('AR') && ( <TopHeader
          title={titleMap[currentScreen]}
        />)}
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
