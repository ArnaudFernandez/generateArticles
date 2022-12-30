import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Configuration, OpenAIApi, OpenAIFile, CreateAnswerRequest } from 'openai';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generateArticles';
  themeArticle = '';
  configuration: Configuration = new Configuration({
    organization: "org-DRroplRE6m58bMyHBFlweAPn",
      apiKey: "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"
    });

  openai = new OpenAIApi(this.configuration);


  submitArticleGeneration(theme: string): void {
    this.openai.listEngines().then(resp => {
      console.log(resp);
    });

    this.openai.createAnswer({
      "model": "text-davinci-002-render",
      "question": "Say this is a test",
      "temperature": 0,
      "max_tokens": 7,
      "examples_context": "testContext",
      "examples": ["testExample"]
    }).then(resp => {
      console.log(resp);
    });
  }

}
