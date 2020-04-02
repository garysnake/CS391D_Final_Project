(this.webpackJsonpprojectweb=this.webpackJsonpprojectweb||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/Bert.659d9dff.png"},function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),s=a.n(l),o=(a(9),a(3)),c=a.n(o);a(10);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:c.a,alt:"A friendly picture"}),r.a.createElement("h1",null,"Investigating transformer model BERT"),"Small changesssssssss",r.a.createElement("h2",null,"Project Proposal"),r.a.createElement("p",null,"Shijing Zhong(sz6539), Michael Li (mal4565)")),r.a.createElement("body",{className:"App-body"},r.a.createElement("h1",null,"Statement of problem"),r.a.createElement("p",{className:"App-paragraph"},"There are plenty of papers noted on the existence of syntactic structure inside BERT embedding, but we don\u2019t know whether the model is using that knowledge. Given that previous papers talked about the existence of syntax within BERT, we wanted to quantify how much of that syntax knowledge BERT uses to make its decisions."),r.a.createElement("h1",null,"Plan of Experiment"),r.a.createElement("p",{className:"App-paragraph"},"How much does BERT use syntax/the encoded syntax tree in its predictions? To answer the question we plan to conduct these experiments below:",r.a.createElement("br",null),"1. Shuffle the words randomly (has been done in previous work)",r.a.createElement("br",null),"2. We modify an approach from Stanford that derives the syntax tree from the embedding space such that we will perturb the embeddings such that the projected space with the syntax tree will be different. Then we will pass this through BERT and evaluate the performance differences",r.a.createElement("br",null),"3. Use the syntax tree (perhaps from the Stanford Parser) and shuffle different Noun Phrases or verb phrases or something to perturb the sentence",r.a.createElement("br",null),"4. Design a experiment that checks if BERT relies on the syntax knowledge encode in the embedding",r.a.createElement("br",null),"Then we will apply these findings and see if this is preserved when BERT is compressed:",r.a.createElement("br",null),"1. Studies have shown that you can reduce the total amount of heads and still maintain the same amount performance",r.a.createElement("br",null),"2. Studies have shown that you can reduce the total amount of heads and still maintain the same amount performance",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("h1",null,"Data set"),r.a.createElement("p",{className:"App-paragraph"},r.a.createElement("a",{className:".App-link",href:"https://huggingface.co/transformers/model_doc/bert.html"}," BERT model"),r.a.createElement("br",null),r.a.createElement("a",{className:".App-link",href:"https://github.com/john-hewitt/structural-probes"}," Syntax Structural probe"),r.a.createElement("br",null),r.a.createElement("a",{className:".App-link",href:"https://huggingface.co/transformers/pretrained_models.html"}," Pretrained BERT model"),r.a.createElement("br",null),r.a.createElement("a",{className:".App-link",href:"https://pytorchnlp.readthedocs.io/en/latest/_modules/torchnlp/datasets/penn_treebank.html"}," Penn Tree Bank"),r.a.createElement("br",null),r.a.createElement("a",{className:".App-link",href:"https://nlp.stanford.edu/software/lex-parser.shtml"},"The Stanford Parser"),"      ",r.a.createElement("br",null)),r.a.createElement("h1",null,"A Rough Timeline"),r.a.createElement("p",{className:"App-paragraph"},r.a.createElement("h3",null,"Set up the dataset and models"),r.a.createElement("h5",null,"i. Setup perturbations similar to structural-probes"),"1. Setup module to perturb structural probes",r.a.createElement("br",null),"2. Feed data through this module",r.a.createElement("br",null),"3. Evaluate via BERT",r.a.createElement("br",null),r.a.createElement("h5",null,"ii. Setup perturbations via the syntax tree"),"1. Setup Stanford Parser",r.a.createElement("br",null),"2. Setup module to perturb syntax tree (choose one easy rule to implement)",r.a.createElement("br",null),"3. Feed data through this module",r.a.createElement("br",null),"4. Evaluate via BERT",r.a.createElement("br",null),r.a.createElement("h5",null,"iii. Design a detailed experiment that shows the influence of syntactic knowledge over the BERT accuracy"),r.a.createElement("h3",null,"Acquire BERT accuracy scores"),r.a.createElement("h3",null,"Analyze BERT accuracy scores"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.e12daa83.chunk.js.map