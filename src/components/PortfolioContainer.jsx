import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects"

class Portfolio extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else if (this.state.currentPage === "Projects") {
      return <Projects />;
    } else {
      return <About />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;