import React, { useEffect, useState } from 'react';
import './App.css';
import RepositoryList from './components/RepositoryList';
import Axios from 'axios';
import { errorResponse, RepositoryResponse } from './data-objects/Repository';
import { AppBar, createMuiTheme, ThemeProvider } from '@material-ui/core';
import SkillsList from './components/SkillsList';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1f072c'
    },
    secondary: {
      main: '#64b5f6'
    },
  }

})


const App: React.FC = props => {
  const [repos, setRepos] = useState<RepositoryResponse[]>([])

  const getRepos = async () => {
    Axios.get("https://api.github.com/users/CPlusPlusCompiler/repos")
      .then(response => response.data)
      .then(data => setRepos(data))
      .catch(error => {
        console.error(error)
        setRepos([errorResponse("It looks like usage limit for my GitHub API has been reached. Come back later to see my projects here or visit my GitHub")])
      })
  }

  useEffect(() => {
    console.log("fetching repositories")
    getRepos()
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar position="sticky">
          <p>Andrius' portfolio</p>
        </AppBar>

        <div className="Section-skills">
          <h1>Skills</h1>
          {SkillsList()}
        </div>

        <h1 className="Section-projects">Projects from GitHub</h1>
        {RepositoryList(repos)}
      </ThemeProvider>

      <footer className="Section-about">
        <h1>About me</h1>
        <div className="Section-about-text">
          I am Android and desktop software
          developer looking for new
          challenges and interesting projects.
          There are some public repositories
          in my GitHub containing very small
          Android and other projects made in
          spare time.
          I like to constantly develop my skills
          and keep up to date with latest best
          practices, changes in programming
          languages, frameworks and new
          technologies.
      </div>
      </footer>

    </div>
  );
}



export default App;
