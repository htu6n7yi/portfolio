import { Component } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  imports: [],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.css'
})
export class ApresentacaoComponent {
  downloadCV(){
    const pdfUrl = '../../../assets/CV_atualizado.pdf';
    const pdfName = 'CV_CarlosCavalcanti.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;
    link.click();

  }
}
