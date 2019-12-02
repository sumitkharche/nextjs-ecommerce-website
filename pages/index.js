import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import config from '../config';
import ProductList from '../components/productList'
import Footer from '../components/footer'
import Cosmic from 'cosmicjs'

const Home = (props) => (
  <div>
    <Head>
      <title>E-commerce App</title>
      <link rel="icon" href="https://web-assets.cosmicjs.com/images/favicons/favicon-32x32.png" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script hidden src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key={config.bucket.snipcart_api_key} id="snipcart"></script>
      <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
    </Head>
    <div className="container">
      <Header />
      <ProductList />
      <Footer />
    </div>

  </div>
)

export default Home
