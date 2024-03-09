import type { Component } from "solid-js";
import { Router, Route } from '@solidjs/router';
import CourseSearchForm from "./components/SearchForm";
import "./styles/styles.scss";
import UploadForm from "./components/UploadForm";

const App: Component = () => {
  return (
    <div class="hero-screen">
      <div class="title">
        <h1>IQPS - Intelligent Question Paper Search</h1>
        <p><i>Search for question papers when the library can't save you.</i></p>
        <p>Made with ❤️ and {"</>"} by <a href="https://github.com/metakgp/iqps-go" target="_blank">MetaKGP</a></p>
      </div>
      <Router>
        <Route path="/" component={CourseSearchForm} />
        <Route path="/upload" component={UploadForm} />
      </Router>
    </div>
  );
};

export default App;
