import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {
  render () {
    const allSEOMarkdown = this.props.data.allMarkdown.edges

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle}/>
        <SEO postEdges={allSEOMarkdown}/>
        <main>
          <IndexHeadContainer>
            <Navigation/>
            <Hero>
              <img src={config.siteLogo} width="150px" alt=""/>
              <h1>{config.siteTitle}</h1>
              <h4>{config.siteDescription}</h4>
              <CtaButton to={'/pc-worx'}>Документация</CtaButton>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <h2>Присоединяйтесь на Github</h2>
            <p>
              Примите участие в разработке и улучшении документации.
              Ваш опыт будет полезен участникам сообщества.{' '}
            </p>
            <CtaButton to={'/github'}>
              Узнайте как
            </CtaButton>

            <div className="contributors">
              <p>
                Создано{' '}
                <a href="https://github.com/axhelp">
                  AX Help Community
                </a>{' '}
              </p>
            </div>
          </BodyContainer>
        </main>
      </div>
    )
  }
}

export default Index

const IndexHeadContainer = styled.div`
  background: ${ props => props.theme.background };
  padding: ${ props => props.theme.sitePadding };
  text-align: center;
`

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
`

const BodyContainer = styled.div`
  padding: ${ props => props.theme.sitePadding };
  max-width: ${ props => props.theme.contentWidthLaptop };
  margin: 0 auto;

  .contributors {
    max-width: 400px;
    margin: 100px auto 0;
  }
`

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdown: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
