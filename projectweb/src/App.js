import React from 'react';
import bertImg from './img/Bert.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bertImg} alt="A friendly picture" />
        <h1>Investigating transformer model BERT</h1>
        <h2>Project Proposal</h2>
        <p>Shijing Zhong(sz6539), Michael Li (mal4565)</p>

      </header>
      <body className="App-body">
        <h1>Statement of problem</h1>
          <p className="App-paragraph">
          There are plenty of papers noted on the existence of syntactic structure inside BERT embedding, but we don’t know whether the model is using that knowledge. Given that previous papers talked about the existence of syntax within BERT, we wanted to quantify how much of that syntax knowledge BERT uses to make its decisions.
          </p>

        <h1>Plan of Experiment</h1>
          <p className="App-paragraph">
            How much does BERT use syntax/the encoded syntax tree in its predictions? To answer the question we plan to conduct these experiments below:<br />
            1. Shuffle the words randomly (has been done in previous work)<br />
            2. We modify an approach from Stanford that derives the syntax tree from the embedding space such that we will perturb the embeddings such that the projected space with the syntax tree will be different. Then we will pass this through BERT and evaluate the performance differences<br />
            3. Use the syntax tree (perhaps from the Stanford Parser) and shuffle different Noun Phrases or verb phrases or something to perturb the sentence<br />
            4. Design a experiment that checks if BERT relies on the syntax knowledge encode in the embedding<br />

            Then we will apply these findings and see if this is preserved when BERT is compressed:<br />

            1. Studies have shown that you can reduce the total amount of heads and still maintain the same amount performance<br />
            2. Studies have shown that you can reduce the total amount of heads and still maintain the same amount performance<br /><br />
          </p>
          <h1>Data set</h1>
          <p className="App-paragraph">
            <a className= ".App-link" href="https://huggingface.co/transformers/model_doc/bert.html"> BERT model</a><br />
            <a className= ".App-link" href="https://github.com/john-hewitt/structural-probes"> Syntax Structural probe</a><br />
            <a className= ".App-link" href="https://huggingface.co/transformers/pretrained_models.html"> Pretrained BERT model</a><br />
            <a className= ".App-link" href="https://pytorchnlp.readthedocs.io/en/latest/_modules/torchnlp/datasets/penn_treebank.html"> Penn Tree Bank</a><br />
            <a className= ".App-link" href="https://nlp.stanford.edu/software/lex-parser.shtml">The Stanford Parser</a>      <br />      
          </p>
          <h1>A Rough Timeline</h1>
          <p className="App-paragraph">
            <h3>Set up the dataset and models</h3>
              <h5>i. Setup perturbations similar to structural-probes</h5>
                  1. Setup module to perturb structural probes<br />
                  2. Feed data through this module<br />
                  3. Evaluate via BERT<br />
              <h5>ii. Setup perturbations via the syntax tree</h5>
                  1. Setup Stanford Parser<br />
                  2. Setup module to perturb syntax tree (choose one easy rule to implement)<br />
                  3. Feed data through this module<br />
                  4. Evaluate via BERT<br />
              <h5>iii. Design a detailed experiment that shows the influence of syntactic knowledge over the BERT accuracy</h5>
              <h3>Acquire BERT accuracy scores</h3>
              <h3>Analyze BERT accuracy scores</h3>
          </p>
      </body>



    </div>
  );
}

export default App;
