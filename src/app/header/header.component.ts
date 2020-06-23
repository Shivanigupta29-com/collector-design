import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild} from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
  })
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('editor',{static:true}) private editor;

constructor(){}

 ngOnInit(){

 }
 ngAfterViewInit(){
   const editor =this.editor.codeMirror;
   const doc = editor.getDoc();
 }
 
  
 codeMirrorOpts: any = {
    mode: {
  name: "htmlmixed",
  tags: {
    style: [["type", /^text\/(x-)?scss$/, "text/x-scss"],
            [null, null, "css"]],
    custom: [[null, null, "customMode"]]
  }
},
    theme: "rubyblue",
    viewportMargin: 10,
    showCursorWhenSelecting: true,
    autofocus: true,
    autoCloseBrackets: true,
	extraKeys: {"Tab": "autocomplete"}
    
  };
  tmpData: any = {
    formulaInp : {},
    codeMirrorTxtField : "",
    codeMirrorTxtFieldOld : ""
  };
  
  changeMode(){
    this.codeMirrorOpts= {
      ...this.codeMirrorOpts,
    };
  }
  handleChange($events){
    console.log('ngModelChange', $events);
  }

}