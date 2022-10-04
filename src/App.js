import './App.css';
import { BaseGrid } from './Components/BaseGrid/BaseGrid';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from './Components/Theme/appTheme'


function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <div className="App">
        <header className="App-header">
          <BaseGrid> </BaseGrid>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
