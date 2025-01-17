import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Form } from "./containers/Form";
import { DataProvider } from "./services/data/context";
import { AppContainer } from "./styled";
import { theme } from "./theme";
import { Colinha } from "./containers/Colinha";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const GlobalStyle = createGlobalStyle`
  html, body, #root, #root>div {
    min-height: 100%;
    height: 100%;
  }

  #root {
    background-color: ${(props) => props.theme.white};  
  }

  @media print {
    * {
      color: #000 !important;
      font-size: 12px !important;
    }
    .no_print {
      display: none;
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <Router>
            <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/:uf/:candidatosNum" element={<Colinha />} />
            </Routes>
          </Router>
          <Footer />
        </AppContainer>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
