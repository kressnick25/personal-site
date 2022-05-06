import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"
import AboutMe from '../components/AboutMe';
import WorkingOn from "../components/WorkingOn";



function App({data}) {
     return (
    <div className="App">
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
        >
          <meta charSet="utf-8" />
          <meta name="description" content={data.site.siteMetadata.description} />
          <title>{data.site.siteMetadata.title}</title>
          
          {/*  Global site tag (gtag.js) - Google Analytics */ }
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-EWKB8GPTPW"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());

              gtag('config', 'G-EWKB8GPTPW');
            `}
          </script>

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
        title,
        description
      }
    }
  }
`

export default App;
