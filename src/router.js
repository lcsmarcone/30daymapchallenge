import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Day01PointsMap from './maps/Day01PointsMap';
import Day02LinesMap from './maps/Day02LinesMap';
import Day03PolygonMap from './maps/Day03PolygonMap';

function AppRouter() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/day01" element={<Day01PointsMap />} />
        <Route path="/day02" element={<Day02LinesMap />} /> 
        <Route path="/day03" element={<Day03PolygonMap />} /> 
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
