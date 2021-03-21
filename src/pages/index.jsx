import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"
import AboutMe from '../components/AboutMe';
import WorkingOn from "../components/WorkingOn";



function App({data}) {
     return (
    <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <AboutMe />
        <div className={"content"}>
                <WorkingOn />
	     	{/*<LiveDemos/>*/}
            </div>
    </div>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default App;
