import type {NextPage} from 'next'
import Head from 'next/head'
import {JobFormFeature} from "../src/features/job-form";

const Home: NextPage = () => {
  return (
    <div className="index-wrapper">
      <Head>
        <title>Job Application Form</title>
        <meta name="description" content="Nomad Challenge Job Application Form"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="index-content">
        <JobFormFeature/>
      </div>
    </div>
  )
}

export default Home
